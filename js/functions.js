function switchToHome(){
	document.getElementById("homePage").style.display = "Block";
	document.getElementById("signUpForm").style.display = "None";
	document.getElementById("logInForm").style.display = "None";
	document.getElementById("notes").style.display = "None";
	document.getElementById("newNote").style.display = "None";
}

function switchToSignUp(){
	document.getElementById("homePage").style.display = "None";
	document.getElementById("signUpForm").style.display = "Block";
	document.getElementById("logInForm").style.display = "None";
	document.getElementById("notes").style.display = "None";
	document.getElementById("newNote").style.display = "None";
}

function switchToLogin(){
	document.getElementById("homePage").style.display = "None";
	document.getElementById("signUpForm").style.display = "None";
	document.getElementById("logInForm").style.display = "Block";
	document.getElementById("notes").style.display = "None";
	document.getElementById("newNote").style.display = "None";
}

function switchToNotes(){
	document.getElementById("homePage").style.display = "None";
	document.getElementById("signUpForm").style.display = "None";
	document.getElementById("logInForm").style.display = "None";
	document.getElementById("notes").style.display = "Block";
	document.getElementById("newNote").style.display = "None";
	document.getElementById("icon").innerHTML = "<a class='navbar-brand' href='#'  onClick='switchToAddNote()' style='padding-top:5px'>"+
                        "<img alt='Brand' src='assets/homeIcon.png' style='width:200px'>"+
                    "</a>";
	document.getElementById("cornerButtonBox").innerHTML = "<li><a  onclick='switchToAddNote()'>Add Note</a></li>";
}

function switchToAddNote(){
	document.getElementById("homePage").style.display = "None";
	document.getElementById("signUpForm").style.display = "None";
	document.getElementById("logInForm").style.display = "None";
	document.getElementById("notes").style.display = "None";
	document.getElementById("newNote").style.display = "Block";
}

function logIn(){
	if (!validateField("loginName")){
		alert("Please enter a username");
	}else if(!validateField("loginPassword")){
		alert("Please enter a password");
	}else{
		var loginName = document.getElementById("loginName").value;
		var password = document.getElementById("loginPassword").value;
		alert();
		//Ajax communicates to the php files and databse
		var ajax = new XMLHttpRequest();
		ajax.open("POST","server.php",true);
		ajax.setRequestHeader("Content-type","application/x-www-form-urlencoded");
		ajax.onreadystatechange = function(){
			if(ajax.readyState == 4 && ajax.status == 200){
				alert(ajax.responseText);
			}
		}
		ajax.send("loginName="+ loginName +" & password="+ password);
	}
}

function signUp(){
	if (!validateField("signUpName")){
		alert("Please enter a username");
	}else if(!validateField("signUpPassword")){
		alert("Please enter a password");
	}else if(!validateField("confirmPassword")){
		alert("Please confirm your password");
	}else if(!passwordMatch("signUpPassword","confirmPassword")){
		alert("Passwords don't match!");
	}else if(!validateField("firstName")){
		alert("Please enter your first name");
	}else if(!validateField("lastName")){
		alert("Please enter your last name");
	}else if(!validateField("email")){
		alert("Please enter an email address");
	}else{

	}
}

function passwordMatch(id1, id2){
	var pwd1=document.getElementById(""+id1);
	var pwd2=document.getElementById(""+id2);

	if(pwd1.value==pwd2.value){
		return true;
	}else{
		return false;
	}
}

function validateField(id){
	var field = document.getElementById(""+id);
	if(field.value== ""){
		return false;
	}else{
		return true;
	}
}

function displayNote(title, date, content){
	var possiblyEmpty = document.getElementById("notesPanel").innerHTML;
	if(possiblyEmpty=="<h2> No Notes to Show </h2>"){
		possiblyEmpty = "";
	}
	document.getElementById("notesPanel").innerHTML += "<div class='col-md-4'>" +
							"<h3>"+title+"</h3>" +
							"<h2>"+date+"</h2>" +
							"<p>"+ contents+"</p>" +
						"</div>";
}
