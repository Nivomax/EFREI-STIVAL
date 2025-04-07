<?php
$host = 'localhost';
$db   = 'efreistival';
$user = 'root';
$pass = '';
$charset = 'utf8mb4';

$dsn = "mysql:host=$host;dbname=$db;charset=$charset";
$options = [
    PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
];

try {
    $pdo = new PDO($dsn, $user, $pass, $options);

    // Lire le JSON envoyé
    $json = file_get_contents('php://input');
    $data = json_decode($json, true);

    if (!isset($data['type']) || !isset($data['quantity'])) {
        throw new Exception("Missing data");
    }

    $ticketType = $data['type'];
    $quantity = intval($data['quantity']);

    $validTypes = ['friday', 'saturday', 'sunday', '3da'];

    if ($quantity > 0 && in_array($ticketType, $validTypes)) {
        $tableName = 'ticket_' . $ticketType;

        $stmt = $pdo->prepare("INSERT INTO `$tableName` (user_name, quantity) VALUES (?, ?)");
        $stmt->execute(['anonymous', $quantity]);

        echo json_encode(["status" => "success", "message" => "Ticket inserted!"]);
    } else {
        echo json_encode(["status" => "error", "message" => "Invalid data."]);
    }

} catch (Exception $e) {
    echo json_encode(["status" => "error", "message" => $e->getMessage()]);
}
?>
