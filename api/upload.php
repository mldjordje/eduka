<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

$allowed_origins = [
  'https://eduka-eight.vercel.app',
  'https://eduka.co.rs',
  'https://www.eduka.co.rs',
  'https://eduka.rs',
  'https://www.eduka.rs',
  'http://localhost:3000'
];

$origin = $_SERVER['HTTP_ORIGIN'] ?? '';
if ($origin && in_array($origin, $allowed_origins, true)) {
  header("Access-Control-Allow-Origin: $origin");
  header('Vary: Origin');
} else {
  header('Access-Control-Allow-Origin: *');
}

header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With');
header('Access-Control-Max-Age: 86400');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
  http_response_code(204);
  exit;
}

header('Content-Type: application/json; charset=utf-8');

if (!isset($_FILES['file'])) {
  http_response_code(400);
  echo json_encode(['message'=>'Fajl nije prosleđen.']);
  exit;
}

$uploadDir = dirname(__FILE__) . '/uploads/';
if (!is_dir($uploadDir)) {
  mkdir($uploadDir, 0755, true);
}

$file = $_FILES['file'];
$tmpPath = $file['tmp_name'];
$origName = $file['name'];
$size = $file['size'];

$finfo = finfo_open(FILEINFO_MIME_TYPE);
$mime = finfo_file($finfo, $tmpPath);
finfo_close($finfo);

$allowed = [
  'image/jpeg',
  'image/png',
  'image/gif',
  'image/webp',
  'application/pdf',
  'application/msword',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
];

if (!in_array($mime, $allowed, true)) {
  http_response_code(400);
  echo json_encode(['message'=>'Nedozvoljen tip fajla.']);
  exit;
}

if ($size > 5 * 1024 * 1024) {
  http_response_code(400);
  echo json_encode(['message'=>'Fajl je prevelik (maks 5MB).']);
  exit;
}

$ext = strtolower(pathinfo($origName, PATHINFO_EXTENSION));
$name = bin2hex(random_bytes(8)) . '.' . $ext;
$dest = $uploadDir . $name;

if (!move_uploaded_file($tmpPath, $dest)) {
  http_response_code(500);
  echo json_encode(['message'=>'Greška pri uploadu fajla.']);
  exit;
}

echo json_encode([
  'success' => true,
  'url' => 'https://api.eduka.co.rs/uploads/'.$name,
  'name' => $origName,
  'mime' => $mime
], JSON_UNESCAPED_UNICODE);
