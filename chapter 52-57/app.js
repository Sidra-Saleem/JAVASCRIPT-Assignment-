//task 1

// < ./  see html for model  /.>

//task 2
var imageArray = ["images/others/1.jpg", "images/others/2.jpg", "images/others/3.jpg", "images/others/5.jpg",];

//task 3
var display_images= document.getElementById("display_image");
for(var i=0 ; i<imageArray.length ; i++){
    var image= document.createElement("img");
    var image_src=image.setAttribute("src" , imageArray[i]);
    var image_src=image.setAttribute("class" , "imgclass");
    var image_src=image.setAttribute("onclick" , "imagesfun(this)");
    display_images.appendChild(image);
}

//task 4

function imagesfun(e){
    var model=document.getElementById("model");
    var model_image=document.getElementById("modelImage");
    model_image.src = e.src ;
    model.style.display="inline" ;

}

// task 5
var model=document.getElementById("model");
var modelClass= model.setAttribute("class" , "model_open");
model.style.display="none" ;

//task 6
var close_btn = document.getElementById("close");
var close_class = close_btn.setAttribute("class" , "model_close");
function close_model(){
     
    model.style.display = "none"; 

}

