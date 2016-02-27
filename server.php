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
			$id = mysql_result($query_run, 0, "UserID");
			$query2 = "SELECT * FROM Notes WHERE UserID = '$id'";
			if($query_run2 = mysql_query($query2)){
				$query_num_rows = mysql_num_rows($query_run2);
				
				$reply = "";
				for($count = 0; $count<$query_num_rows; $count++){
					$title = mysql_result($query_run2, $count, "Title");
					$date = mysql_result($query_run2, $count, "Date");
					$content = mysql_result($query_run2, $count, "Content");
					$reply .= $title."/".$date."/".$content."/";
				}
				if($reply == ""){
					$reply = "noNotes";
				}
				echo $reply;
			}else{
				echo mysql_error();
			}
		}
	}else{
		echo mysql_error();
	}
}else if(isset($_POST["signupName"])){
	$username = $_POST["signupName"];
	$password = $_POST["signupPassword"];
	$firstName = $_POST["firstName"];
	$lastName = $_POST["lastName"];
	$email = $_POST["email"];
	$passwordmd5 = md5($password);

	$query = "SELECT * FROM Users WHERE UserID = '' AND Username = '$username' AND Password = '$passwordmd5' AND First Name = '$firstName' AND Last Name='$lastName' AND Email = '$email' ";

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
}
?>
