// ========= Cerca. Validació del formulari
const searchForm = document.getElementById('mySearchFormId');

function validateSearch() {
	var searchErrors = 0;

	searchForm.classList.remove('is-invalid');

	var inSearch = document.getElementById('inSearch');
	const inSearchID = "searchError";

	searchErrors = checkSearch(inSearch, searchErrors, inSearchID);

	if (searchErrors > 0) {
		return false;
	} else {
		return true;
	}
}

searchForm.addEventListener('blur', (event) => {
	console.log(event);
	if (event.target.value != '') event.target.classList.remove('is-invalid');
	//validateRegister();
}, true);


// ========= Login. Validació del formulari
const loginForm = document.getElementById('myLoginFormId');

function validateLogin() {
	var loginErrors = 0;

	loginForm.classList.remove('is-invalid');

	//var inLoginEmail = document.forms["myLoginForm"]["inLoginEmail"];

	var inLoginEmail = document.getElementById('inLoginEmail');
	var inLoginPassword = document.forms["myLoginForm"]["inLoginPassword"];
	var loginGridCheck = document.forms["myLoginForm"]["loginGridCheck"];

	const loginEmailErrorID = "loginEmailError";
	const loginPasswordErrorID = "loginPasswordError";
	const loginGridCheckErrorID = "loginGridCheckError";

	// loginErrors = checkLoginEmail(inLoginEmail, loginErrors);
	loginErrors = checkEmail(inLoginEmail, loginErrors, loginEmailErrorID);
	loginErrors = checkPassword(inLoginPassword, loginErrors, loginPasswordErrorID);
	loginErrors = checkGridCheck(loginGridCheck, loginErrors, loginGridCheckErrorID);

	if (loginErrors > 0) {
		return false;
	} else {
		return true;
	}
}

loginForm.addEventListener('blur', (event) => {
	console.log(event);
	if (event.target.value != '') event.target.classList.remove('is-invalid');
	//validateRegister();
}, true);


// ========= Registre. Validació del formulari
const registerForm = document.getElementById('myRegisterFormId');

function validateRegister() {
	var registerErrors = 0;

	registerForm.classList.remove('is-invalid');

	//var inRegisterEmail = document.forms["myRegisterForm"]["inRegisterEmail"];

	var inRegisterEmail = document.getElementById('inRegisterEmail');
	var inRegisterPassword1 = document.forms["myRegisterForm"]["inRegisterPassword1"];
	var inRegisterPassword2 = document.forms["myRegisterForm"]["inRegisterPassword2"];
	var inAddress = document.forms["myRegisterForm"]["inAddress"];
	var inProvince = document.forms["myRegisterForm"]["inProvince"];
	var inCity = document.forms["myRegisterForm"]["inCity"];
	var inZip = document.forms["myRegisterForm"]["inZip"];
	var registerGridCheck = document.forms["myRegisterForm"]["registerGridCheck"];

	const registerEmailErrorID = "registerEmailError";
	const registerPasswordErrorID1 = "registerPasswordError1";
	const registerPasswordErrorID2 = "registerPasswordError2";
	const registerGridCheckErrorID = "registerGridCheckError";

	registerErrors = checkEmail(inRegisterEmail, registerErrors, registerEmailErrorID);
	registerErrors = checkPassword2(inRegisterPassword1, registerErrors, registerPasswordErrorID1);
	registerErrors = checkPassword2(inRegisterPassword2, registerErrors, registerPasswordErrorID2);
	registerErrors = checkAddress(inAddress, registerErrors);
	registerErrors = checkProvince(inProvince, registerErrors);
	registerErrors = checkCity(inCity, registerErrors);
	registerErrors = checkZip(inZip, registerErrors);
	registerErrors = checkGridCheck(registerGridCheck, registerErrors, registerGridCheckErrorID);

	if (registerErrors > 0) {
		return false;
	} else {
		return true;
	}
}

registerForm.addEventListener('blur', (event) => {
	console.log(event);
	if (event.target.value != '') event.target.classList.remove('is-invalid');
	//validateRegister();
}, true);