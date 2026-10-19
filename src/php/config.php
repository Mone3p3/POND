<?php

    class DBH {
        //servernane -> host 
        private $host = 'localhost';
        private $username = 'root';
        private $db_name = 'pondv1';
        private $password = 'MySQLFlowerManStreetCatEyes3';
        private $table;

        protected function connect(){
            /*$this ->$host = "localhost";
            $this ->$username = "root";
            $this ->$db_name = "pondv1";
            $this ->$password = "";*/   
            
            $conn = new mysqli($this->host, $this->username, $this->password, $this->db_name);
                return $conn;       
        }

    }
    

    class userClass extends DBH {
       
        //this method here should ONLY connect to the database and return the data
        protected function getAllUsers(){
            $sql = "SELECT * FROM users"; 
            $result = $this->connect()->query($sql);
            $numRows = $result->num_rows;
            if($numRows > 0){
                while ($row = $result->fetch_assoc()){
                    $data[] = $row;
                }

                return $data; //array that we can pass on the next class
                
            }else{
                return false;
            }
        }
        //next class is actually going to use the data
    }

    class ViewUser extends userClass {
        public function showAllUsers()
        {
            $users = $this->getAllUsers();

            if (!$users) {
                echo '<tr><td colspan="3">No users found.</td></tr>';
                return;
            }

            foreach ($users as $user) {
                echo '<tr>';
                echo '<td>' . htmlspecialchars((string) $user['UserID']) . '</td>';
                echo '<td>' . htmlspecialchars((string) $user['username']) . '</td>';
                echo '<td>' . htmlspecialchars((string) $user['email']) . '</td>';
                echo '</tr>';
            }
        }
    }
?>
