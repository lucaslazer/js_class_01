alert("You are now at my Portfolio")
console.log("Bonjour depuis le js fichier"); // comment
console.log("Hello from the js file");

// declare a variable
let car = "Volvo";
console.log(car);

// CamelCase
let MyFavoriteThing;

//snake
let my_favorit_car;

// const upper case
const PI = 3.14;

// Initialize a variable
// The Assignment operator (=)
// Consistancy 

console.log("My favorite car: " + car);
car = "Toyota"
console.log(`My new favorite car: ${car}`);
/* checking notes */
// Datatypes

// Strings
let day = "Wednesday";

//Numbers
let numberOfWeekDays = 7;
let shoeSize = 10.5;

//Boolians
let y = true;
let x = false;

console.log( y == 1 );
console.log ( x == 0 );

// Objects

const weekDays = { firstDay: "Sunday", secondDay: "Monday "};

// Array Objects
const allWeekDays = [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thurday", "Friday", "Saturday" ];
const dayNumber = [ 0, 1, 2, 3, 4, 5, 6, ]


const myName = "Luke";




//Document Object Model (DOM)
/* HTML elements now are objects
    we can connect properties, methods, events */

    let text = "Hola again from my js file";

    document.getElementById("newColor").innerHTML = "HOLA";
    document.getElementById("secondText").innerHTML = text;

    document.getElementById("secondText").style.color = "green";
