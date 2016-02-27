function switchToLogin(){
	document.getElementById("homePage").style.display = "None";
	document.getElementById("logInForm").style.display = "Block";
	document.getElementById("signUpForm").style.display = "None";
}

function switchToSignUp(){
	document.getElementById("homePage").style.display = "None";
	document.getElementById("signUpForm").style.display = "Block";
	document.getElementById("logInForm").style.display = "None";
}

function switchToHome(){
	document.getElementById("homePage").style.display = "Block";
	document.getElementById("signUpForm").style.display = "None";
	document.getElementById("logInForm").style.display = "None";
}

function logIn(){
	alert("logIn");
}

function signUp(){
	alert("signUp");
}