// Missatges de errors
const misObligatori = "Aquest camp es obligatori";
const misEmail = "Aquest email no cumpleix el format";
const misProvincia = "La provincia es obligatoria";
const misCiutat = "Manca la ciutat";
const misZip = "El codi postal no compleix els requisitis";
const misBases = "Acepta las bases";
const misSearch = "El camp no pot estar buit i ha de tenir 3 caràcters mínim";
const misMinim8Chars = "El camp ha de tenir 8 caracters minim"
const misHasCaps = "El camp ha de tenir minim 1 majuscula"
const misHasNumbers = "El camp ha de tenir minim 1 nombre"
const misSamePassword = "Les contrasenyes no son iguals"

// Funcions comuns
// ========= Validació del format d' una adreça de correu
function emailValidate(email) {
    var regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email) ? true : false;
}

// ========= Comprovacio existeix 1 nombre (Nivell 2)
function hasNumbers(string) {
    var regex = /\d/g;
    return regex.test(string) ? true : false;
}

// ========= Comprovacio existeix 1 majuscula (Nivell 2)
function hasCaps(string) {
    var regex = /[A-Z]/g;
    return regex.test(string) ? true : false;
}

// ========= Correu. Validació del camp: No buit i adreça Ok
function checkEmail(inEmail, countErrors, errorID) {
    if (inEmail.value == "") {
        inEmail.classList.add("is-invalid");
        document.getElementById(errorID).textContent = misObligatori;
        countErrors++;
    } else if (!emailValidate(inEmail.value)) {
        inEmail.classList.add("is-invalid");
        document.getElementById(errorID).textContent = misEmail;
        countErrors++;
    }
    return countErrors;
}
// ========= Password. Validació del camp: No buit
function checkPassword(inPassword, countErrors, errorID) {
    if (inPassword.value == "" || inPassword.value.length != 8) {
        inPassword.classList.add("is-invalid");
        document.getElementById(errorID).textContent = misObligatori;
        countErrors++;
    }
    return countErrors;
}

// Exercici Nivell 2: Minim 1 majuscula, 1 nombre i 8 caracters
// check no buit i minim 8 chars
function checkPassword2(inPassword, countErrors, errorID) {
    if (inPassword.value == "") {               //buit
        inPassword.classList.add("is-invalid");
        document.getElementById(errorID).textContent = misObligatori;
        countErrors++;
    } else if (inPassword.value.length < 8) {   //minim 8
        inPassword.classList.add("is-invalid");
        document.getElementById(errorID).textContent = misMinim8Chars;
        countErrors++;
        return countErrors;
    } else if (!hasCaps(inPassword.value)) {    //minim 1 majuscula
        inPassword.classList.add("is-invalid");
        document.getElementById(errorID).textContent = misHasCaps;
        countErrors++;
    } else if (!hasNumbers(inPassword.value)) { //minim 1 nombre
        inPassword.classList.add("is-invalid");
        document.getElementById(errorID).textContent = misHasNumbers;
        countErrors++;
    }
    return countErrors;
}

function checkSamePasswords(inPassword1, inPassword2, countErrors, errorID) {
    if (inPassword1.value != inPassword2.value) {
        inPassword2.classList.add("is-invalid");
        document.getElementById(errorID).textContent = misSamePassword;
        countErrors++;
    }
    return countErrors;
}

// ========= Adreça. Validació del camp: No buit
function checkAddress(inAddress, countErrors) {
    if (inAddress.value == "") {
        inAddress.classList.add("is-invalid");
        document.getElementById("addressError").textContent = misObligatori;
        countErrors++;
    }
    return countErrors;
}
// ========= Provincia. Validació del camp: No buit
function checkProvince(inProvince, countErrors) {
    if (inProvince.value == "") {
        inProvince.classList.add("is-invalid");
        document.getElementById("provinceError").textContent = misProvincia;
        countErrors++;
    }
    return countErrors;
}
// ========= Ciutat. Validació del camp: No buit
function checkCity(inCity, countErrors) {
    if (inCity.value == "") {
        inCity.classList.add("is-invalid");
        document.getElementById("cityError").textContent = misCiutat;
        countErrors++;
    }
    return countErrors;
}
// ========= Codi Postal. Validació del camp: No buit i mínim 5 caracters
function checkZip(inZip, countErrors) {
    if (inZip.value == "" || inZip.value.length != 5) {
        inZip.classList.add("is-invalid");
        document.getElementById("zipError").textContent = misZip;
        countErrors++;
    }
    return countErrors;
}
// ========= Check. Validació del camp: Ok
function checkGridCheck(gridCheck, countErrors, errorID) {
    if (!gridCheck.checked) {
        gridCheck.classList.add("is-invalid");
        document.getElementById(errorID).textContent = misBases;
        countErrors++;
    }
    return countErrors;
}
// ========= Cerca. Validació del camp: No buit i mínim 3 caracters
function checkSearch(inSearch, countErrors, inSearchID) {
    if (inSearch.value == "" || inSearch.value.length != 3) {
        inSearch.classList.add("is-invalid");
        document.getElementById(inSearchID).textContent = misSearch;
        countErrors++;
    }
    return countErrors;
}