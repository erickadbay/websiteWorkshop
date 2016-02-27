function switchToHome(){
	document.getElementById("homePage").style.display = "Block";
	document.getElementById("signUpForm").style.display = "None";
	document.getElementById("logInForm").style.display = "None";
	document.getElementById("notes").style.display = "None";
}

function switchToSignUp(){
	document.getElementById("homePage").style.display = "None";
	document.getElementById("signUpForm").style.display = "Block";
	document.getElementById("logInForm").style.display = "None";
	document.getElementById("notes").style.display = "None";
}

function switchToLogin(){
	document.getElementById("homePage").style.display = "None";
	document.getElementById("signUpForm").style.display = "None";
	document.getElementById("logInForm").style.display = "Block";
	document.getElementById("notes").style.display = "None";
}

function switchToNotes(){
	document.getElementById("homePage").style.display = "None";
	document.getElementById("signUpForm").style.display = "None";
	document.getElementById("logInForm").style.display = "None";
	document.getElementById("notes").style.display = "Block";
}

function logIn(){
	if (!validateField("username")){
		alert("Please enter a username");
	}else if(!validateField("pwd")){
		alert("Please enter a password");
	}
}

function signUp(){
	if (!validateField("username")){
		alert("Please enter a username");
	}else if(!validateField("pwd")){
		alert("Please enter a password");
	}else if(!validateField("confirmPwd")){
		alert("Please confirm your password");
	}else if(!validateField("firstName")){
		alert("Please enter your first name");
	}else if(!validateField("lastName")){
		alert("Please enter your last name");
	}else if(!validateField("email")){
		alert("Please enter an email address");
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

	document.getElementById("notesPanel").innerHTML += "<div class='col-md-4'>" +
							"<h3>"+title+"</h3>" +
							"<h2>"+date+"</h2>" +
							"<p>"+ contents+"</p>" +
						"</div>";
}
