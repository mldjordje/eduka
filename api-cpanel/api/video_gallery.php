<?php
$allowed_origins = [
  'https://eduka-eight.vercel.app',
  'https://eduka.co.rs',
  'https://www.eduka.co.rs',
  'https://eduka.rs',
  'https://www.eduka.rs',
  'http://localhost:3000',
];

$origin = $_SERVER['HTTP_ORIGIN'] ?? '';
if ($origin && in_array($origin, $allowed_origins, true)) {
  header("Access-Control-Allow-Origin: $origin");
  header('Vary: Origin');
} else {
  header('Access-Control-Allow-Origin: *');
}

header('Access-Control-Allow-Methods: GET, POST, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With');
header('Access-Control-Max-Age: 86400');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
  http_response_code(204);
  exit;
}

header('Content-Type: application/json; charset=utf-8');

require __DIR__ . '/db.php';

function ensure_schema(PDO $pdo): void {
  $pdo->exec("
    CREATE TABLE IF NOT EXISTS video_gallery (
      id INT UNSIGNED NOT NULL AUTO_INCREMENT,
      youtubeUrl VARCHAR(1024) NOT NULL,
      videoId VARCHAR(32) NOT NULL,
      isShort TINYINT(1) NOT NULL DEFAULT 0,
      title VARCHAR(255) NULL,
      description TEXT NULL,
      createdAt DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
      PRIMARY KEY (id),
      UNIQUE KEY video_gallery_video_id_unique (videoId)
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
  ");

  try {
    $stmt = $pdo->query("SHOW COLUMNS FROM video_gallery LIKE 'isShort'");
    $exists = $stmt ? $stmt->fetch(PDO::FETCH_ASSOC) : false;
    if (!$exists) {
      $pdo->exec("ALTER TABLE video_gallery ADD COLUMN isShort TINYINT(1) NOT NULL DEFAULT 0 AFTER videoId");
    }
  } catch (Throwable $e) {
    // ignore
  }
}

function json_input() {
  $raw = file_get_contents('php://input');
  if (!$raw) return null;
  $data = json_decode($raw, true);
  return is_array($data) ? $data : null;
}

function normalize_video_row(array $row): array {
  return [
    'id' => isset($row['id']) ? (string)$row['id'] : '',
    'youtubeUrl' => isset($row['youtubeUrl']) ? (string)$row['youtubeUrl'] : '',
    'videoId' => isset($row['videoId']) ? (string)$row['videoId'] : '',
    'isShort' => !empty($row['isShort']),
    'title' => isset($row['title']) && $row['title'] !== null ? (string)$row['title'] : null,
    'description' => isset($row['description']) && $row['description'] !== null ? (string)$row['description'] : null,
    'createdAt' => isset($row['createdAt']) ? (string)$row['createdAt'] : '',
  ];
}

try {
  ensure_schema($pdo);
  $method = $_SERVER['REQUEST_METHOD'];

  if ($method === 'GET') {
    $stmt = $pdo->query('SELECT id, youtubeUrl, videoId, isShort, title, description, createdAt FROM video_gallery ORDER BY createdAt DESC, id DESC');
    $rows = $stmt->fetchAll(PDO::FETCH_ASSOC);
    $items = array_map('normalize_video_row', $rows);
    echo json_encode($items, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
    exit;
  }

  if ($method === 'POST') {
    $input = json_input();
    if (!$input) {
      $input = [
        'youtubeUrl' => $_POST['youtubeUrl'] ?? '',
        'videoId' => $_POST['videoId'] ?? '',
        'isShort' => $_POST['isShort'] ?? 0,
        'title' => $_POST['title'] ?? '',
        'description' => $_POST['description'] ?? '',
      ];
    }

    $youtubeUrl = trim((string)($input['youtubeUrl'] ?? ''));
    $videoId = trim((string)($input['videoId'] ?? ''));
    $isShort = !empty($input['isShort']) ? 1 : 0;
    $title = isset($input['title']) ? trim((string)$input['title']) : '';
    $description = isset($input['description']) ? trim((string)$input['description']) : '';

    if ($youtubeUrl === '' || $videoId === '') {
      http_response_code(400);
      echo json_encode(['message' => 'Nedostaje YouTube URL ili video ID.'], JSON_UNESCAPED_UNICODE);
      exit;
    }

    if (!preg_match('/^[A-Za-z0-9_-]{11}$/', $videoId)) {
      http_response_code(400);
      echo json_encode(['message' => 'Video ID nije validan.'], JSON_UNESCAPED_UNICODE);
      exit;
    }

    $check = $pdo->prepare('SELECT id FROM video_gallery WHERE videoId = ? LIMIT 1');
    $check->execute([$videoId]);
    if ($check->fetch(PDO::FETCH_ASSOC)) {
      http_response_code(409);
      echo json_encode(['message' => 'Ovaj YouTube video je vec dodat u galeriju.'], JSON_UNESCAPED_UNICODE);
      exit;
    }

    $insert = $pdo->prepare('INSERT INTO video_gallery (youtubeUrl, videoId, isShort, title, description, createdAt) VALUES (?, ?, ?, ?, ?, NOW())');
    $insert->execute([
      $youtubeUrl,
      $videoId,
      $isShort,
      $title !== '' ? $title : null,
      $description !== '' ? $description : null,
    ]);

    $id = $pdo->lastInsertId();
    $stmt = $pdo->prepare('SELECT id, youtubeUrl, videoId, isShort, title, description, createdAt FROM video_gallery WHERE id = ?');
    $stmt->execute([$id]);
    $row = $stmt->fetch(PDO::FETCH_ASSOC);

    echo json_encode(normalize_video_row($row ?: []), JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
    exit;
  }

  if ($method === 'DELETE') {
    parse_str($_SERVER['QUERY_STRING'] ?? '', $qs);
    $id = $qs['id'] ?? null;

    if (!$id) {
      http_response_code(400);
      echo json_encode(['message' => 'Nedostaje ID video klipa.'], JSON_UNESCAPED_UNICODE);
      exit;
    }

    $stmt = $pdo->prepare('SELECT id FROM video_gallery WHERE id = ?');
    $stmt->execute([$id]);
    if (!$stmt->fetch(PDO::FETCH_ASSOC)) {
      http_response_code(404);
      echo json_encode(['message' => 'Video nije pronadjen.'], JSON_UNESCAPED_UNICODE);
      exit;
    }

    $delete = $pdo->prepare('DELETE FROM video_gallery WHERE id = ?');
    $delete->execute([$id]);

    echo json_encode(['ok' => true], JSON_UNESCAPED_UNICODE);
    exit;
  }

  http_response_code(405);
  echo json_encode(['message' => 'Metoda nije dozvoljena'], JSON_UNESCAPED_UNICODE);
} catch (Throwable $e) {
  http_response_code(500);
  echo json_encode([
    'message' => 'Greska u video gallery API-ju',
    'error' => $e->getMessage(),
  ], JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
}
