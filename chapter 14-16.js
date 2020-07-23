//chapter 14-16
//Q:1
// const studentNames = [];

//Q: 2
// const StudentNames = new Array();

//Q: 3
// const stringArray = ["muzammil"];
// alert(stringArray);

//Q: 4
// const numberArray = [0];
// alert(numberArray);

//Q: 5
// var nump = 5;     
// var anyBoxesChecked = new Array(nump).fill(false);
// console.log(anyBoxesChecked);

//Q: 6
// const numberString = ["shaheen" + " " + 315];
// alert(numberString);

 
//Q: 7 
// var arr=[ "SSC", "HSC", "BCS","BS", "BCOM", "MS", "M. Phil", "PhD"];
// for(var i=0;i<arr.length;i++ ){
//     document.write(i+1 +") "+arr[i]+"<br>");

// }
//Q:8    
// var std_name=["Micheal", "John", "Tony"];
// var score=[320,230,480];
// var totalMarks=500;
// for (let i=0; i<std.length; i++){
// document.write("<div class='second-head'>" + "<h3>" + "Score of "+std_name[i]+ " " + "is "+ score[i]+". Percentage:"+ " " +score[i]/totalMarks*100+ "%" + "<br>"+ "</h3>" + "</div>");
// }

//Q:9
//  var colors = ["red","green","blue","black"];
      //  document.write(colors);
      //part a
    //    var a = prompt(" enter color that you  wants to add to the beginning");
    //   colors.splice(0,0,a);
    
    //  document.write("<br>"+ colors);

      //part b
    //   var b = prompt(" enter color that you  wants to add to the end");
    //   colors.splice(3,0,b);
      
    //  document.write("<br>"+ colors);

//part c
// colors.splice(0,0,"grey","purple");
      
// document.write("<br>"+ colors);

//part d
// colors.splice(0,1);
      
//  document.write("<br>"+ colors);

 //part e

//  colors.splice(3,1);
      
//  document.write("<br>"+ colors);

//part f
// var c = prompt("enter the index num at which you want to add color");
// var d = prompt("enter the color ");

// colors.splice(c,0,d);
      
//  document.write("<br>"+ colors);

//part e
// var l = prompt("enter the index num at which you want to delete color");
// var m = prompt("how many colors you want to delete ");

// colors.splice(l,m);
      
//  document.write("<br>"+ colors);
//Q:10
// var arr1=[320,230,480,120];
// document.write(arr1+"<br>");
// document.write(arr1.sort (function(a, b){return a-b}));

//Q:11
// var cities=["karachi","lahore","Islamabad", "Quetta", "Peshawar"];
// document.write("<h2>Cities List</h2><br>"+cities);
// document.write("<br><h2>Selected Cities List</h2><br>"+cities.slice(2,4))

//Q:12
// var arr = ["This", "is" , "my ", " cat"];
// document.write("Array <br>"+arr);
// document.write(" <br>String<br>"+(arr.join(" ")));

 // //Q;13
// var devices=[];
// devices.push("keyboard");
// devices.push("mouse");
// devices.push("printer");
// devices.push("monitor");
// document.write("<h4>Devices</h4>"+devices);
// document.write("<br>Out<br>"+devices.shift());
// document.write("<br>Out<br>"+devices.shift());
// document.write("<br>Out<br>"+devices.shift());
// document.write("<br>Out<br>"+devices.shift());
 

//Q:14
// var devices=[];
 // devices.push("keyboard");
// devices.push("mouse");
// devices.push("printer");
// devices.push("monitor");
// document.write("<h4>Devices</h4>"+devices);
// document.write("<br>Out<br>"+devices.pop());
// document.write("<br>Out<br>"+devices.pop());
// document.write("<br>Out<br>"+devices.pop());
// document.write("<br>Out<br>"+devices.pop());
// document.write("<br>Out<br>"+devices);

//Q:15
// var phone=["Apple","Samsung", "Motorola"," Nokia", "Sony "," Haier"];
// for (var i = 0; i < phone.length; i++) {
//     // Append the element to the end of Array list
//     document.write( phone.pop(i)+"<br> "+phone);
// }​