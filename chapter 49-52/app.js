// Task 1
function myDataFun() {
    var username = document.f1.uname.value;
    var user_password = document.f1.upass.value;
    var user_email = document.f1.uemail.value;
    var gender = document.f1.gender.value;
    var university = document.f1.ucity.value;
    document.write("User Name:" + "  " + "  " + username + "<br/>" + "Password:" + "  " + "  " + user_password + "<br/>" + "Email:" + "  " + "  " + user_email + "<br/>" + " Gender:" + "  " + "  " + gender + "<br/>" + "City:" + "   " + "  " + university);
}



// Task 2
var para = document.getElementById("pera").hidden = true;
function aboutme() {
    var para = document.getElementById("pera").innerHTML;
    var about = document.getElementById("about")
    about.innerHTML = para;
}
document.getElementById("text").hidden = true;
function readmore() {
    var text = document.getElementById("text").innerHTML;
    var para = document.getElementById("pera")
    para.innerHTML = text;
}



// Task 3
var row = 1;
var entry = document.getElementById("entry");
entry.addEventListener("click", displayDetails);
function displayDetails() {
    var std_Name = document.getElementById("name").value;
    var std_Course = document.getElementById("course").value;

    var display = document.getElementById("tab");
    var newRow = display.insertRow(row);
    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    cell1.innerHTML =std_Name;
    cell2.innerHTML =std_Course;
    row++;
}

function addRow() {
    var table = document.getElementById("tab");
    var row = table.insertRow(0);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    cell1.innerHTML = "NEW Student";
    cell2.innerHTML = "NEW Course";
}

function deleteRow(btn) {
    var table = btn.parentNode.parentNode.rowIndex;
    document.getElementById("mytab").deleteRow(table);
}