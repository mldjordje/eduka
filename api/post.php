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

header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
  http_response_code(204);
  exit;
}

header('Content-Type: application/json; charset=utf-8');
require __DIR__ . '/db.php';

function getPostSchema(PDO $pdo): array {
  static $state = null;
  if ($state !== null) return $state;

  $columns = [];
  try {
    $schemaRows = $pdo->query('SHOW COLUMNS FROM posts')->fetchAll(PDO::FETCH_ASSOC);
    $columns = array_values(array_filter(array_map(function ($row) {
      return isset($row['Field']) ? $row['Field'] : null;
    }, $schemaRows), function ($name) {
      return is_string($name) && $name !== '';
    }));
  } catch (Throwable $e) {
    $columns = [];
  }

  $fields = ['slug','title','author','date','image','excerpt','content','tags'];
  $hasImages = in_array('images', $columns, true);
  $hasDoc = in_array('document', $columns, true);
  $hasDocName = in_array('document_name', $columns, true);

  if ($hasImages) $fields[] = 'images';
  if ($hasDoc) $fields[] = 'document';
  if ($hasDocName) $fields[] = 'document_name';

  return $state = [
    'fields' => $fields,
    'has_images' => $hasImages,
    'has_document' => $hasDoc,
    'has_document_name' => $hasDocName,
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
    return array_values(array_filter(array_map('trim', explode(',', $value)), function ($item) {
      return $item !== '';
    }));
  }

  return [];
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

$slug = $_GET['slug'] ?? '';
if (!$slug) {
  http_response_code(400);
  echo json_encode(['message'=>'Nedostaje slug'], JSON_UNESCAPED_UNICODE);
  exit;
}

try {
  $schema = getPostSchema($pdo);
  $stmt = $pdo->prepare(
    'SELECT '.implode(', ', $schema['fields']).' FROM posts WHERE slug = ? LIMIT 1'
  );
  $stmt->execute([$slug]);
  $post = $stmt->fetch(PDO::FETCH_ASSOC);

  if (!$post) {
    http_response_code(404);
    echo json_encode(['message'=>'Post nije pronađen'], JSON_UNESCAPED_UNICODE);
    exit;
  }

  echo json_encode(formatPostRow($post, $schema), JSON_UNESCAPED_UNICODE);

} catch (Throwable $e) {
  http_response_code(500);
  echo json_encode([
    'message'=>'Greška u čitanju posta',
    'error'=>$e->getMessage()
  ], JSON_UNESCAPED_UNICODE);
}
