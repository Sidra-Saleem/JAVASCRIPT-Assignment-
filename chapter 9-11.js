//Q: 1
var city = "karachi"; var cityName;
cityName = (prompt("Enter Your City name"));
if (cityName == city) {
 alert("Welcome to city of lights");
}
else {
 alert(cityName);
}
//Q: 2
var maLe = "male", feMale = "female";
var inputUser = (prompt("Enter Your Gender"));
if (inputUser == maLe) {
 alert("Good Morning Sir.");
}
else if (inputUser == feMale) {
 alert("Good Morning Ma'am.");
}
//Q: 3
yellow = "yellow", green = "green", red = "red";
var colorRoad = (prompt("Input Color Of Road Traffic Signal"));
if (red = colorRoad) {
 document.write("<table align='center'><tr><td>" + colorRoad + "</td><td>Must Stop</td></tr></table>");
}
else if (yellow = colorRoad) {
 document.write("<table align='center'><tr><td>" + colorRoad + "</td><td>Ready To Move</td></tr></table>");
}
else if (colorRoad = green) {
 document.write("<table align='center'><tr><td>" + colorRoad + "</td><td>Move Now</td></tr></table>");
}
//Q: 4
var fuelLess = 0.25;
var remainingFuel = (prompt("Input Remaining Fuel In car (InLitres)"));
if (remainingFuel < fuelLess) {
 alert("Please refill the fuel in your car");
}
//Q: 5
var a = 4;
if (++a === 5) {
 alert("given condition for variable a is true");
}
var b = 82;
if (b++ === 83) {
 alert("given condition for variable b is true");
}
var c = 12;
if (c++ === 13) {
 alert("condition 1 is true");
}
if (c === 13) {
 alert("condition 2 is true");
}
if (++c < 14) {
 alert("condition 3 is true");
}
if (c === 14) {
 alert("condition 4 is true");
}
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost) {
 alert("The cost equals");
}
if (true) {
 alert("True");
}
if (false) {
 alert("False");
}
if ("car" < "cat") {
 alert("car is smaller than cat");
}
//Q: 6 --->>>> Index File --------> //
//Q: 7
var secretNumber = 3, guessSecret, guessNumber = +3;
var guessSecret = (prompt("Guess The Secret Number 1 to 10:" + " "));


if(guessSecret == guessNumber) {
 alert("Close enough to the correct answer");
}
else if (guessSecret == secretNumber) {
    alert("Bingo! Correct Answer.");
}
else  {
 alert("Sorry Rong Answer");
}
//Q: 8
var a = prompt("Enter Any Number");
if (a % 3 === 0) {
 document.write("Number Is Divisible By 3");
}
else { document.write("Number Is Not Divisible By 3"); }
//Q: 9 
 
 var a;
 a = prompt("Entre a number to show even or odd..");
 var x=+a;
 if (x % 2 == 0) {
 alert("This Is Even Number:");
 }
 else {
 alert("This Is Odd Number:")
 }

//Q: 10
var e;
var e = (prompt("Input Temperature."));
if (e >= 40) {
 alert("It is too hot outside.");
}
else if (e >= 30) {
 alert("The Weather today is Normal.");
}
else if (e >= 20) {
 alert("Today’s Weather is cool.");
}
else if (e >= 10) {
 alert("OMG! Today’s weather is so Cool.");
}
//Q: 11 ----->>>>>> ----------- Go index Files---Calculator---->>>