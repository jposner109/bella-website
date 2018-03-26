//Mouseover to reveal an image
function mouseoverImage(image){
    document.getElementById(image).style.visibility = "visible";
    setTimeout(function(){document.getElementById(image).style.visibility = "hidden";}, 250);
}

//Click to hide or reveal video
function clickVideo(video){
    if(document.getElementById(video).style.visibility == "visible")
        document.getElementById(video).style.visibility = "hidden";
    else{
        document.getElementById(video).style.visibility = "visible"; 
    }
}

//Change Bella's face in some way
function changeFace(typeChange) {
    if(document.getElementById("eye").style.visibility == "hidden") {
        document.getElementById("bellaBack").src = "assets/images/bella.jpg";
        document.getElementById("nose").style.visibility = "visible"; document.getElementById("eye").style.visibility = "visible";
    } else{
        document.getElementById("bellaBack").src = "assets/images/bella" + typeChange + ".jpg"; document.getElementById("nose").style.visibility = "hidden"; document.getElementById("eye").style.visibility = "hidden";
    }
    return;
}