//Q: 1
var char;
var char =(prompt("Enter a character or string"));
if(char>=65 && char<=90) {
 alert("It is an Uppercase Letter");
}
else if(char>=97 && char<=122){
 alert("It is a Lowercase Letter")
}
else{
 alert("It Is A Number");
}
//Q: 2
var first_num = +prompt("Enter First Integer..");
var second_num = +prompt("Enter Second Integer..");
if(firs_tnum>second_num) {
 alert("First Integer Is Larger" + " " + first_num);
}
else if(second_num>first_num) {
 alert("First Integer Is Larger" + " " + second_num);
}
else if(first_num===second_num) {
 alert("Both Are Equal");
}
else {
 alert("You Entered wrong Input..");
}
//Q: 3
var num = (prompt("Please entre a Input Number.."));
if(num <=0){
 alert("Negative Number");
 }
 else
 {
 alert("Positive Number");
 }
//Q: 4
var c;
var c= prompt("Enter Character");
if(c=='a' || c=='e' || c=='i' || c=='o' || c=='u') {
 alert("It is a vowel");
}
else {
 alert("false");
}
//Q: 5
var correctPass="ali123", userPass;
var userPass= (prompt("Enter Password"));
if (userPass==""){
 alert("Plese Enter Password");
}
else if (correctPass==userPass){
 alert("Correct! The password you entered matches");
}
else if (correctPass!=userPass){
 alert("Incorrect password");
}
//Q: 6
var hour;
var hour = (prompt("enter hour"));
if (hour < 18) {
 alert("Good day");
}
else {
alert("Good evening");
}
//Q: 7
var time = 1900;
var time = (prompt("Input Time"));
if (time >=0000 && time < 1200)
{
 alert("Good Morning");
}
else if (time >= 1200 && time < 1700) {
 alert("Good Afternoon");
}
else if (time >= 1700 && time < 2100) {
 alert("Good Evening");
}
else if (time >= 2100 && time < 2359) {
 alert("Good Afternoon");
}