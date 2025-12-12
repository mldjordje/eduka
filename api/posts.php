<?php
$allowed_origins = [
  'https://eduka.co.rs',
  'https://www.eduka.co.rs',
  'https://eduka.rs',
  'https://www.eduka.rs',
  'https://eduka-eight.vercel.app',
  'http://localhost:3000'
];

$origin = $_SERVER['HTTP_ORIGIN'] ?? '';
if ($origin && in_array($origin, $allowed_origins, true)) {
  header("Access-Control-Allow-Origin: $origin");
  header('Vary: Origin');
} else {
  header('Access-Control-Allow-Origin: *');
}

header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
  http_response_code(204);
  exit;
}

header('Content-Type: application/json; charset=utf-8');
require __DIR__ . '/db.php';

/* ================= helpers ================= */

function readInput(): array {
  $raw = file_get_contents('php://input');
  $json = json_decode($raw, true);
  return is_array($json) ? $json : $_POST;
}

function getPostSchema(PDO $pdo): array {
  static $state = null;
  if ($state !== null) return $state;

  $cols = [];
  try {
    $schemaRows = $pdo->query('SHOW COLUMNS FROM posts')->fetchAll(PDO::FETCH_ASSOC);
    $cols = array_values(array_filter(array_map(function ($row) {
      return isset($row['Field']) ? $row['Field'] : null;
    }, $schemaRows), function ($name) {
      return is_string($name) && $name !== '';
    }));
  } catch (Throwable $e) {
    $cols = [];
  }

  $fields = ['slug','title','author','date','image','excerpt','content','tags'];
  $hasImages = in_array('images', $cols, true);
  $hasDoc = in_array('document', $cols, true);
  $hasDocName = in_array('document_name', $cols, true);
  $hasCreated = in_array('created_at', $cols, true);
  $hasUpdated = in_array('updated_at', $cols, true);

  if ($hasImages) $fields[] = 'images';
  if ($hasDoc) $fields[] = 'document';
  if ($hasDocName) $fields[] = 'document_name';
  if ($hasCreated) $fields[] = 'created_at';
  if ($hasUpdated) $fields[] = 'updated_at';

  return $state = [
    'fields' => $fields,
    'has_images' => $hasImages,
    'has_document' => $hasDoc,
    'has_document_name' => $hasDocName,
    'has_created_at' => $hasCreated,
    'has_updated_at' => $hasUpdated,
  ];
}

function normalizeTags($value): array {
  if (is_array($value)) {
    return array_values(array_filter(array_map(function ($item) {
      return is_string($item) ? trim($item) : '';
    }, $value), function ($item) {
      return $item !== '';
    }));
  }
  if (is_string($value) && $value !== '') {
    return array_values(array_filter(array_map('trim', explode(',', $value)), function ($item) {
      return $item !== '';
    }));
  }
  return [];
}

function normalizeImages($value): array {
  if (is_array($value)) {
    return array_values(array_filter(array_map(function ($item) {
      return is_string($item) ? trim($item) : '';
    }, $value), function ($item) {
      return $item !== '';
    }));
  }

  if (is_string($value) && $value !== '') {
    $decoded = json_decode($value, true);
    if (is_array($decoded)) {
      return normalizeImages($decoded);
    }
    $parts = array_values(array_filter(array_map('trim', explode(',', $value)), function ($item) {
      return $item !== '';
    }));
    return $parts;
  }

  return [];
}

function serializeImages(array $images): string {
  return json_encode(array_values($images), JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
}

function formatPostRow(array $row, array $schema): array {
  $row['tags'] = normalizeTags($row['tags'] ?? []);
  $row['document'] = $row['document'] ?? '';
  $row['document_name'] = $row['document_name'] ?? '';

  $images = [];
  if ($schema['has_images']) {
    $images = normalizeImages($row['images'] ?? '');
  }
  if (!$images && !empty($row['image'])) {
    $images = normalizeImages($row['image']);
  }

  $row['images'] = $images;
  $row['image'] = $row['image'] ?? ($images[0] ?? '');

  return $row;
}

function fetchPostBySlug(PDO $pdo, array $schema, string $slug): ?array {
  $stmt = $pdo->prepare(
    'SELECT '.implode(', ', $schema['fields']).' FROM posts WHERE slug = ? LIMIT 1'
  );
  $stmt->execute([$slug]);
  $post = $stmt->fetch(PDO::FETCH_ASSOC);
  return $post ? formatPostRow($post, $schema) : null;
}

$schema = getPostSchema($pdo);
$method = $_SERVER['REQUEST_METHOD'];

if ($method === 'POST' && isset($_POST['_method'])) {
  $method = strtoupper($_POST['_method']);
}

/* ================= GET ================= */

if ($method === 'GET') {
  if (isset($_GET['slug'])) {
    $post = fetchPostBySlug($pdo, $schema, $_GET['slug']);

    if (!$post) {
      http_response_code(404);
      echo json_encode(['message'=>'Post nije pronađen'], JSON_UNESCAPED_UNICODE);
      exit;
    }

    echo json_encode($post, JSON_UNESCAPED_UNICODE);
    exit;
  }

  $stmt = $pdo->query(
    'SELECT '.implode(', ', $schema['fields']).' FROM posts ORDER BY date DESC, id DESC'
  );
  $rows = $stmt->fetchAll(PDO::FETCH_ASSOC);

  foreach ($rows as &$row) {
    $row = formatPostRow($row, $schema);
  }

  echo json_encode($rows, JSON_UNESCAPED_UNICODE);
  exit;
}

/* ================= POST ================= */

if ($method === 'POST') {
  $input = readInput();

  if (!$input || empty($input['title']) || empty($input['author']) || empty($input['content'])) {
    http_response_code(400);
    echo json_encode(['message'=>'Naslov, autor i sadržaj su obavezni.'], JSON_UNESCAPED_UNICODE);
    exit;
  }

  $document = '';
  if (isset($input['document']) && $input['document'] !== '') {
    $document = $input['document'];
  } elseif (isset($input['document_url']) && $input['document_url'] !== '') {
    $document = $input['document_url'];
  } elseif (isset($input['documentUrl']) && $input['documentUrl'] !== '') {
    $document = $input['documentUrl'];
  }

  $documentName = '';
  if (isset($input['document_name']) && $input['document_name'] !== '') {
    $documentName = $input['document_name'];
  } elseif (isset($input['documentName']) && $input['documentName'] !== '') {
    $documentName = $input['documentName'];
  }

  $slug = !empty($input['slug'])
    ? $input['slug']
    : preg_replace(
        '/[^a-z0-9-]/',
        '',
        strtolower(preg_replace('/\s+/', '-', trim($input['title'])))
      );

  $now = date('Y-m-d H:i:s');
  $dateRaw = isset($input['date']) ? trim((string)$input['date']) : '';
  $date = $dateRaw !== '' ? $dateRaw : $now;

  $tagsCsv = '';
  if (isset($input['tags'])) {
    $tagsCsv = is_array($input['tags'])
      ? implode(',', normalizeTags($input['tags']))
      : trim((string)$input['tags']);
  }

  $images = normalizeImages($input['images'] ?? ($input['image'] ?? []));
  $coverImage = $images[0] ?? (isset($input['image']) ? trim((string)$input['image']) : '');

  $fields = ['slug','title','author','date','image','excerpt','content','tags'];
  $values = [
    $slug,
    $input['title'],
    $input['author'],
    $date,
    $coverImage,
    $input['excerpt'] ?? mb_substr($input['content'], 0, 140).'...',
    $input['content'],
    $tagsCsv,
  ];

  if ($schema['has_images']) {
    $fields[] = 'images';
    $values[] = serializeImages($images);
  }

  if ($schema['has_document']) {
    $fields[] = 'document';
    $values[] = $document;
  }

  if ($schema['has_document_name']) {
    $fields[] = 'document_name';
    $values[] = $documentName;
  }

  if ($schema['has_created_at']) {
    $fields[] = 'created_at';
    $values[] = $now;
  }

  if ($schema['has_updated_at']) {
    $fields[] = 'updated_at';
    $values[] = $now;
  }

  $stmt = $pdo->prepare(
    'INSERT INTO posts ('.implode(',', $fields).') VALUES ('.implode(',', array_fill(0, count($fields), '?')).')'
  );
  $stmt->execute($values);

  $post = fetchPostBySlug($pdo, $schema, $slug);

  echo json_encode($post ?? ['slug'=>$slug], JSON_UNESCAPED_UNICODE);
  exit;
}

/* ================= PUT ================= */

if ($method === 'PUT') {
  $input = readInput();

  if (empty($input['slug'])) {
    http_response_code(400);
    echo json_encode(['message'=>'Slug je obavezan'], JSON_UNESCAPED_UNICODE);
    exit;
  }

  if (isset($input['documentName']) && !isset($input['document_name'])) {
    $input['document_name'] = $input['documentName'];
  }

  $existing = fetchPostBySlug($pdo, $schema, $input['slug']);
  if (!$existing) {
    http_response_code(404);
    echo json_encode(['message'=>'Post nije pronađen'], JSON_UNESCAPED_UNICODE);
    exit;
  }

  $update = [];
  $map = ['title','author','content','excerpt','date'];
  foreach ($map as $k) {
    if (array_key_exists($k, $input)) {
      $update[$k] = $input[$k];
    }
  }

  if (array_key_exists('tags', $input)) {
    $update['tags'] = is_array($input['tags'])
      ? implode(',', normalizeTags($input['tags']))
      : trim((string)$input['tags']);
  }

  // images and cover
  $images = $existing['images'] ?? [];
  $coverImage = $existing['image'] ?? '';

  if (array_key_exists('images', $input)) {
    $images = normalizeImages($input['images']);
  }

  if (array_key_exists('image', $input)) {
    $imageField = trim((string)$input['image']);
    if ($imageField !== '') {
      $coverImage = $imageField;
      if (!$images) {
        $images = [$imageField];
      }
    }
  }

  if ($images) {
    $coverImage = $images[0];
  }

  if (array_key_exists('image', $input) || array_key_exists('images', $input)) {
    $update['image'] = $coverImage;
    if ($schema['has_images']) {
      $update['images'] = serializeImages($images);
    }
  }

  if ($schema['has_document'] && array_key_exists('document', $input)) {
    $update['document'] = $input['document'] ?? '';
  }

  if ($schema['has_document_name'] && array_key_exists('document_name', $input)) {
    $update['document_name'] = $input['document_name'] ?? '';
  }

  if ($schema['has_updated_at']) {
    $update['updated_at'] = date('Y-m-d H:i:s');
  }

  if (!$update) {
    http_response_code(400);
    echo json_encode(['message'=>'Nema podataka za izmenu.'], JSON_UNESCAPED_UNICODE);
    exit;
  }

  $set = implode(', ', array_map(function ($k) {
    return "$k = :$k";
  }, array_keys($update)));

  $update['slug'] = $input['slug'];
  $stmt = $pdo->prepare("UPDATE posts SET $set WHERE slug = :slug");
  $stmt->execute($update);

  $post = fetchPostBySlug($pdo, $schema, $input['slug']);

  echo json_encode($post ?? ['slug'=>$input['slug']], JSON_UNESCAPED_UNICODE);
  exit;
}

/* ================= DELETE ================= */

if ($method === 'DELETE') {
  parse_str(file_get_contents('php://input'), $data);
  $slug = $data['slug'] ?? ($_GET['slug'] ?? '');

  if (!$slug) {
    http_response_code(400);
    echo json_encode(['message'=>'Slug je obavezan'], JSON_UNESCAPED_UNICODE);
    exit;
  }

  $stmt = $pdo->prepare('DELETE FROM posts WHERE slug = ?');
  $stmt->execute([$slug]);

  echo json_encode(['message'=>'Post obrisan'], JSON_UNESCAPED_UNICODE);
  exit;
}

http_response_code(405);
echo json_encode(['message'=>'Metoda nije dozvoljena'], JSON_UNESCAPED_UNICODE);
