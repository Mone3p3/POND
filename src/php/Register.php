<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Content-Type: application/json");

if ($_SERVER["REQUEST_METHOD"] === "OPTIONS") {
    http_response_code(204);
    exit;
}

$jsonInput = json_decode(file_get_contents("php://input"), true);
if (is_array($jsonInput)) {
    $_POST = $jsonInput;
}

// Include config file
require_once "./php/src/config.php";

// Use the shared DBH class for the database connection.
if (!class_exists('DBH')) {
    die("Database connection class is not configured.");
}

$dbh = new class extends DBH {
    public function connect() {
        return parent::connect();
    }
};
$mysqli = $dbh->connect();

if (!($mysqli instanceof mysqli)) {
    die("Database connection is not configured.");
}
 
// Define variables and initialize with empty values
$username = $password = $confirm_password = $email = "";
$username_err = $password_err = $confirm_password_err = $email_err = "";

// Processing form data when form is submitted
if($_SERVER["REQUEST_METHOD"] == "POST"){
 
    // Validate username
    $username = trim($_POST["username"] ?? "");
    // Prepare a select statement
        // Check for an existing username without relying on an `id` column.
        $sql = "SELECT username FROM users WHERE username = ?";
        
        if($stmt = $mysqli->prepare($sql)){
            // Bind variables to the prepared statement as parameters
            $stmt->bind_param("s", $param_username);
            
            // Set parameters
            $param_username = trim($_POST["username"]);
            
            // Attempt to execute the prepared statement
            if($stmt->execute()){
                // store result
                $stmt->store_result();
                
                if($stmt->num_rows == 1){
                    $username_err = "This username is already taken.";
                } else{
                    $username = trim($_POST["username"]);
                }
            } else{
                $username_err = "Unable to validate the username. Please try again later.";
            }

            // Close statement
            $stmt->close();
        }
    
    
    // Validate email
    $email = trim($_POST["email"] ?? "");
    if($email === ""){
        $email_err = "Please enter an email address.";
    } elseif(!filter_var($email, FILTER_VALIDATE_EMAIL)){
        $email_err = "Please enter a valid email address.";
    } else{
        // Check for an existing email before attempting the insert.
        $sql = "SELECT email FROM users WHERE email = ?";

        if($stmt = $mysqli->prepare($sql)){
            $stmt->bind_param("s", $email);

            if($stmt->execute()){
                $stmt->store_result();

                if($stmt->num_rows > 0){
                    $email_err = "This email address is already registered.";
                }
            } else{
                $email_err = "Unable to validate the email address. Please try again later.";
            }

            $stmt->close();
        } else{
            $email_err = "Unable to validate the email address. Please try again later.";
        }
    }

    // Validate password
    if(empty(trim($_POST["password"]))){
        $password_err = "Please enter a password.";     
    } elseif(strlen(trim($_POST["password"])) < 6){
        $password_err = "Password must have atleast 6 characters.";
    } else{
        $password = trim($_POST["password"]);
    }
    
    // Validate confirm password
    if(empty(trim($_POST["confirm_password"]))){
        $confirm_password_err = "Please confirm password.";     
    } else{
        $confirm_password = trim($_POST["confirm_password"]);
        if(empty($password_err) && ($password != $confirm_password)){
            $confirm_password_err = "Password did not match.";
        }
    }
    
    // Check input errors before inserting in database
    if(empty($username_err) && empty($email_err) && empty($password_err) && empty($confirm_password_err)){
        
        // Prepare an insert statement
        //$sql = "INSERT INTO users (username, email, password) VALUES (?, ?, ?)";
        $sql = "CALL add_user (username, profile_name, email, password) VALUES (?, NULL, ?, ?)";
        s
         
        if($stmt = $mysqli->prepare($sql)){
            // Bind variables to the prepared statement as parameters
            $stmt->bind_param("sss", $param_username, $param_email, $param_password);
            
            // Set parameters
            $param_username = $username;
            $param_email = $email;
            $param_password = password_hash($password, PASSWORD_DEFAULT); // Creates a password hash
            
            // Attempt to execute the prepared statement
            if($stmt->execute()){
                echo json_encode([
                    "success" => true,
                    "message" => "Registration successful."
                ]);
            } else{
                http_response_code(500);
                echo json_encode([
                    "success" => false,
                    "message" => "Unable to create the account. Please try again later."
                ]);
            }

            // Close statement
            $stmt->close();
        }
    } else {
        http_response_code(422);
        echo json_encode([
            "success" => false,
            "message" => implode("\n", array_filter([
                $username_err,
                $email_err,
                $password_err,
                $confirm_password_err
            ]))
        ]);
    }
    
    // Close connection
    $mysqli->close();
}
?>