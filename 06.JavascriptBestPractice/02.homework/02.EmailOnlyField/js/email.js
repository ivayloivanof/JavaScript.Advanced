function checkEmail() {
	var field = document.getElementById("email").value;

	if (validateEmail(field)) {
		document.getElementById("email").style.backgroundColor = "green";
	} else {
		document.getElementById("email").style.backgroundColor = "red";
	}
}

function validateEmail(email) {
	var regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return regex.test(email);
}