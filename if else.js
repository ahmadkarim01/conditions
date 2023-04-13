
    if (condition ){
        value1;
    } else {
        value2;
    }

    let result = (condition) ? value1 : value2;



if (2 == 2){                   //this is if statment 
    console.log("True");              
} else {
    console.log("False");
}

let result = (2 == 2) ? "True" : "False";     //this called ternary or conditional operator, So we can use
                                              //instead of if else statment to minimize the code.
console.log(result);

/*
let answer = prompt("whats the official name of JavaScript? ")

if (answer == "ecmascript"){
    console.log("you are right");
} else {
    console.log("you are wrong");
}

(answer == "ecmascript") ? console.log("you are very right"): console.log("you are very wrong bro");
*/

let number_two = prompt("write your number: ");

if(number_two > 0 ){
    alert("1");
} else if (number_two < 0 ){
    alert("-1");
} else {
    alert("0");
}

(number_two > 0 ) ? alert("1"): (number_two < 0) ? alert('-1'): alert('0');

result = (a + b < 4) ? "Below" : "Over";

//  let message = (login=="Employe") ? "hello" : 
//             (login == "Director") ? "Greetings" :
//              (login == " ") ? "No login" :
//               "";
