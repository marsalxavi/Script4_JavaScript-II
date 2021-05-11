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

// ===>> Exercici 3 <<===
// Donat el següent array de strings, mostrar per consola la frase completa usant .reduce()
var epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];
// Resultat per consola: 'a long time ago in a galaxy far far away'
// Nota: no fa falta fer un "join".

function Exercici3() {

    function concatArray(total, num) {
        return total + ' ' + num;
    }

    const fraseSencera = epic.reduce(concatArray);
    console.log(epic);
    console.log(fraseSencera);
}

// ===>> Exercici 4 <<===
// Crear una funció que accepti un string i retornada aquest string revertit. Nota: Usar funció fletxa (arrow functions), l'operador de prograpación (spread operator) y el mètode .reverse()
function Exercici4() {
    var cotxes = ['Bentley', 'Aston Martin', 'Ferrari', 'Lamborghini', 'Pagani']

    // Opció 1 sense Funció Arrow
    function reverseString1(inString) {
        let reverseString = [...inString];
        reverseString.reverse();
        return reverseString;
    }

    // Opció 2 Funció Arrow #1
    var reverseString2 = (inString) => {
        let reverseString = [...inString];
        reverseString.reverse();
        return reverseString;
    }

    // Opció 3 Funció Arrow #2
    var reverseString3 = (inString) => [...inString].reverse();

    // Crida a la funció
    var opcio = 3;
    var fnName = 'reverseString' + opcio;
    var cotxesReverse = eval(fnName)(cotxes);

    // Print
    console.log(cotxes);
    console.log(cotxesReverse);
    document.write('Opcio: ' + opcio + '<br>');
    document.write('Normal: <br>');
    document.write(cotxes + '<br>');
    document.write('Reverse: <br>');
    document.write(cotxesReverse + '<br>');
}

// ===>> Exercici 5 <<===
// Modifica la funció 'a()' per a reemplaçar la promesa per aync/await:
// function b() {
//    // tasques asíncrones , que triguen una estona..
// }
// funtion a() {
//    // Ens esperem que la funció b acabi
//    b().then() = > {
//          doMoreWork();
//    }
// }

function b() {
    // tasques asíncrones , que triguen una estona..
}
function Exercici5() {
    async function a() {
        // Ens esperem que la funció b acabi
        b().then = () => {
            doMoreWork();
        }
    }
}

// ===>> Exercici 6 <<===
// Tenim un array de tasques i volem aconseguir un array que contingui únicament els noms de les tasques. 
// - Usar.forEach() per obtenir aquest array.
// - Usar.map() per obtenir aquest array.

function Exercici6() {
    var tasks = [
        {
            'name': 'Start React web',
            'duration': 120
        },
        {
            'name': 'Work out',
            'duration': 60
        },
        {
            'name': 'Procrastinate on facebook',
            'duration': 240
        }
    ];
    // Opcio .forEach();
    var tasksNames1 = [];
    tasks.forEach(fTasksNames1);
    console.log(tasksNames1);
    document.write('Opcio .forEach() <br>');
    document.write(tasksNames1 + '<br>');

    function fTasksNames1(item, index) {
        tasksNames1.push(item.name);
    }

    //Opcio .map()
    // var tasksNames2 = [];
    var tasksNames2 = tasks.map(fTasksNames2);
    console.log(tasksNames2);
    document.write('Opcio .map() <br>');
    document.write(tasksNames2 + '<br>');

    function fTasksNames2(item, index) {
        return item.name;
    }
}