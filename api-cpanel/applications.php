<?php
/**
 * Pristupnice (članstva) — skladište u JSON fajlu pored skripte.
 * GET    — lista prijava
 * POST   — nova prijava (isto telo kao Next /api/applications)
 * PATCH  — ažuriranje statusa / napomene po id
 */

$allowed_origins = [
  'https://api.eduka.co.rs',
  'https://eduka.co.rs',
  'https://www.eduka.co.rs',
  'https://eduka.rs',
  'https://www.eduka.rs',
  'https://eduka-eight.vercel.app',
  'http://localhost:3000',
];

$origin = $_SERVER['HTTP_ORIGIN'] ?? '';
if ($origin && in_array($origin, $allowed_origins, true)) {
  header("Access-Control-Allow-Origin: $origin");
  header('Vary: Origin');
} else {
  header('Access-Control-Allow-Origin: *');
}

header('Access-Control-Allow-Methods: GET, POST, PATCH, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With');
header('Access-Control-Max-Age: 86400');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
  http_response_code(204);
  exit;
}

header('Content-Type: application/json; charset=utf-8');

$storePath = __DIR__ . '/applications_store.json';

function read_json_body(): array
{
  $raw = file_get_contents('php://input');
  $json = json_decode($raw, true);
  return is_array($json) ? $json : [];
}

function load_applications(string $path): array
{
  if (!is_file($path)) {
    return [];
  }
  $raw = @file_get_contents($path);
  if ($raw === false || $raw === '') {
    return [];
  }
  $data = json_decode($raw, true);
  return is_array($data) ? $data : [];
}

function save_applications(string $path, array $list): void
{
  $dir = dirname($path);
  if (!is_dir($dir)) {
    mkdir($dir, 0755, true);
  }
  $tmp = $path . '.tmp';
  $json = json_encode($list, JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT);
  if ($json === false) {
    throw new RuntimeException('JSON encode failed');
  }
  $fp = fopen($tmp, 'cb');
  if (!$fp) {
    throw new RuntimeException('Cannot open temp file');
  }
  if (!flock($fp, LOCK_EX)) {
    fclose($fp);
    throw new RuntimeException('Cannot lock temp file');
  }
  ftruncate($fp, 0);
  fwrite($fp, $json);
  fflush($fp);
  flock($fp, LOCK_UN);
  fclose($fp);
  if (!rename($tmp, $path)) {
    @unlink($tmp);
    throw new RuntimeException('Cannot rename temp file');
  }
}

function new_id(): string
{
  return bin2hex(random_bytes(16));
}

$method = $_SERVER['REQUEST_METHOD'] ?? 'GET';

try {
  if ($method === 'GET') {
    echo json_encode(load_applications($storePath), JSON_UNESCAPED_UNICODE);
    exit;
  }

  if ($method === 'POST') {
    $body = read_json_body();
    $name = isset($body['name']) ? trim((string) $body['name']) : '';
    $email = isset($body['email']) ? trim((string) $body['email']) : '';
    $phone = isset($body['phone']) ? trim((string) $body['phone']) : '';

    if ($name === '' || $email === '' || $phone === '') {
      http_response_code(400);
      echo json_encode(['message' => 'Molimo popunite ime, email i telefon.'], JSON_UNESCAPED_UNICODE);
      exit;
    }

    $list = load_applications($storePath);
    $row = [
      'id' => new_id(),
      'name' => $name,
      'address' => isset($body['address']) ? (string) $body['address'] : '',
      'email' => $email,
      'phone' => $phone,
      'jmbg' => isset($body['jmbg']) ? (string) $body['jmbg'] : '',
      'licenseNumber' => isset($body['licenseNumber']) ? (string) $body['licenseNumber'] : '',
      'idNumber' => isset($body['idNumber']) ? (string) $body['idNumber'] : '',
      'profession' => isset($body['profession']) ? (string) $body['profession'] : '',
      'institution' => isset($body['institution']) ? (string) $body['institution'] : '',
      'yearsOfService' => isset($body['yearsOfService']) ? (string) $body['yearsOfService'] : '',
      'educationLevel' => isset($body['educationLevel']) ? (string) $body['educationLevel'] : '',
      'chamber' => isset($body['chamber']) ? (string) $body['chamber'] : '',
      'message' => isset($body['message']) ? (string) $body['message'] : '',
      'preferredDate' => isset($body['preferredDate']) ? (string) $body['preferredDate'] : '',
      'membershipFeeOption' => isset($body['membershipFeeOption']) ? (string) $body['membershipFeeOption'] : '',
      'agreementAccepted' => !empty($body['agreementAccepted']),
      'status' => 'new',
      'note' => isset($body['note']) ? (string) $body['note'] : '',
      'createdAt' => gmdate('c'),
    ];
    array_unshift($list, $row);
    save_applications($storePath, $list);
    http_response_code(201);
    echo json_encode($row, JSON_UNESCAPED_UNICODE);
    exit;
  }

  if ($method === 'PATCH') {
    $body = read_json_body();
    $id = isset($body['id']) ? trim((string) $body['id']) : '';
    if ($id === '') {
      http_response_code(400);
      echo json_encode(['message' => 'Nedostaje ID prijave.'], JSON_UNESCAPED_UNICODE);
      exit;
    }

    $list = load_applications($storePath);
    $idx = -1;
    foreach ($list as $i => $item) {
      if (is_array($item) && isset($item['id']) && (string) $item['id'] === $id) {
        $idx = $i;
        break;
      }
    }
    if ($idx === -1) {
      http_response_code(404);
      echo json_encode(['message' => 'Prijava nije pronađena.'], JSON_UNESCAPED_UNICODE);
      exit;
    }

    $current = $list[$idx];
    if (isset($body['status']) && in_array($body['status'], ['new', 'reviewed'], true)) {
      $current['status'] = $body['status'];
    }
    if (array_key_exists('note', $body) && is_string($body['note'])) {
      $current['note'] = $body['note'];
    }
    $list[$idx] = $current;
    save_applications($storePath, $list);
    echo json_encode($current, JSON_UNESCAPED_UNICODE);
    exit;
  }

  http_response_code(405);
  echo json_encode(['message' => 'Metoda nije dozvoljena.'], JSON_UNESCAPED_UNICODE);
} catch (Throwable $e) {
  http_response_code(500);
  echo json_encode(['message' => 'Greška na serveru.', 'error' => $e->getMessage()], JSON_UNESCAPED_UNICODE);
}
