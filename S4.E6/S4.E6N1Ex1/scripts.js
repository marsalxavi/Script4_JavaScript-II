// ===>> Exercici 1 <<===
function Exercici1() {
    // === Funcions amb 3 versions: normal, i 2 Arrow's 
    // === Multiplicacio
    var num1 = 7, num2 = 8;
    for (i = 1; i < 4; i++) {
        var result = 0;
        switch (i) {
            case 1:
                result = 'noArrow=' + multiply(num1, num2) + "<br>";
            case 2:
                result = 'Arrow1=' + multiplyArrow1(num1, num2) + ' <br> ';
            case 3:
                result = "Arrow2=" + multiplyArrow2(num1, num2) + ' <br> ';
            default:
        }
        console.log(result);
        document.write(result);
    }
    // === Farenheit to Celsius
    var num1 = 32;
    for (i = 1; i < 4; i++) {
        var result = 0;
        switch (i) {
            case 1:
                result = 'noArrow=' + toCelsius(num1) + "<br>";
            case 2:
                result = 'Arrow1=' + toCelsiusArrow1(num1) + ' <br> ';
            case 3:
                result = "Arrow2=" + toCelsiusArrow2(num1) + ' <br> ';
            default:
        }
        console.log(result);
        document.write(result);
    }


    // === Salutacio
    var who = "Luis";
    for (i = 1; i < 4; i++) {
        var result = "";
        switch (i) {
            case 1:
                result = 'noArrow=' + greet(who) + "<br>";
            case 2:
                result = 'Arrow1=' + greetArrow1(who) + ' <br> ';
            case 3:
                result = "Arrow2=" + greetArrow2(who) + ' <br> ';
            default:
        }
        // console.log(result);
        // document.write(result);
    }
}


// ===>> Exercici 2 <<===
/* Arregla l'error del següent bloc de codi:

users.map(function (user) {
   user.firstName;
});

var users = 
[{ firstName: 'Homer', lastName: 'Simpson' },
{ firstName: 'Marge', lastName: 'Simpson' },
{ firstName: 'Bart', lastName: 'Simpson' },
{ firstName: 'Lisa', lastName: 'Simpson' },
{ firstName: 'Maggie', lastName: 'Simpson' }];
 */

function Exercici2() {
  
    // opcio 1
    var nomUser = [];
    nomUser = users.map(function (user) {
        return user.firstName;
    });

    /* -
        // opcio 2
        var nomUser = [];
        function fNomUser(user) {
            return user.firstName;
        }
        nomUser = users.map(fNomUser);
    - */

    console.log(nomUser);
    document.write(nomUser);
    return nomUser;
}