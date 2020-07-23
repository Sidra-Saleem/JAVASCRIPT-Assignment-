//Chapter:6-9
//Q:1
// var input=prompt();
// var a=+input;
// document.write("Result: <br> The result of a is "+a);
// a=++a;
// document.write("<br>The value of ++a is "+a);
// document.write("<br>Now,The value of a is "+a);
// a=a++;
// document.write("<br>The value of a++ is "+a);
// document.write("<br>Now,The value of a is "+(++a));
// a=--a;
// document.write("<br>The value of --a is "+a);
// document.write("<br>Now,The value of a is "+a);
// a=a--;
// document.write("<br>The value of a-- is "+a);
// document.write("<br>Now,The value of a is "+--a);

//Q:2
// var a=2,b=1;
// document.write("The value of a is "+a);
// document.write("<br>The value of b is "+b);
// var result= --a - --b + ++b + b--;
//              1  - 0   +  1+    1
// document.write("<br>result is "+result);
// --a;1
// --a - --b;0-0
// --a - --b + ++b;0-0+1
// --a - --b + ++b + b--;0-0+2+1

//Q:3
// var name=prompt("Entre your name..");
// alert("Hi "+name+"! Welcome to my website");

//Q:5
// var a=prompt("Entre a number to show its multiplication table");
 
// var x=+a
// var b=5;
// if(a==""){
//     for(var i=1;i<=10;i++){
//         document.write(b+"x"+i+"="+b*i+"<br>");

//     }
    
// }
// else{
//     for(var i=1;i<=10;i++){
//         document.write(x+"x"+i+"="+x*i+"<br>");
//     }

// }

//Q:6
// var sub1=prompt("Entre 1st subject name..") ,sub2=prompt("Entre 2nd subject name.."),sub3=prompt("Entre 3rd subject name..");
// var total_marks=100;
// var sub1_mark=prompt("Entre your first subject marks.."),sub2_mark=prompt("Entre your 2nd subject marks.."),sub3_mark=prompt("Entre your 3rd subject marks..");
// document.write("Subject Total Marks Obtained Marks Percentage <br>");
// document.write(sub1+"   "+"   "+total_marks+"   "+"   "+sub1_mark+"   "+"   "+(sub1_mark/total_marks)*total_marks+"% <br>");
// document.write(sub2+"   "+"   "+total_marks+"   "+"   "+sub2_mark+"   "+"   "+(sub2_mark/total_marks)*total_marks+"%<br>");
// document.write(sub3+"   "+"   "+total_marks+"   "+"   "+sub3_mark+"   "+"   "+(sub3_mark/total_marks)*total_marks+"%");
// document.write(total_marks+total_marks+total_marks+" "+ sub1_mark+sub2_mark+sub3_mark+" "());


