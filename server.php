<?php
require "connect.php";

if(isset($_POST["loginName"])){
	$username = $_POST["loginName"];
	$password = $_POST["password"];
	
	$passwordmd5 = md5($password);

	$query = "SELECT * FROM Users WHERE Username = '$username' AND Password = '$passwordmd5'";
	if($query_run = mysql_query($query)){
		
		$query_num_rows = mysql_num_rows($query_run);
		if($query_num_rows == 0){
			 echo "noUser";
		}else if ($query_num_rows == 1){
			echo "Worked";
		}
	}else{
		echo mysql_error();
	}
}else if(isset($_POST["signupName"])){
	echo "signup";
}
?>
