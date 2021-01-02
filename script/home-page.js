function currentSlide(num) {
    document.getElementById("rec1").style.backgroundColor = "#fe9900"
    let rectangles = document.getElementsByClassName('rectangle')
    for(i = 0; i < rectangles.length; i++) {
        rectangles[i].className = rectangles[i].className.replace(" active", "")
    }

    let slides = document.getElementsByClassName("mySlide")
    for(i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    switch(num) {
    case 1:
        document.getElementById('slide1').style.display = "block"
        document.getElementById('rec1').className += " active"
        document.getElementById("rec1").style.backgroundColor = "#ffffff"
        break;
    case 2:
        document.getElementById('slide2').style.display = "block"
        document.getElementById('rec2').className += " active"
        break;
    case 3:
        document.getElementById('slide3').style.display = "block"
        document.getElementById('rec3').className += " active"
        break;
    case 4:
        document.getElementById('slide4').style.display = "block"
        document.getElementById('rec4').className += " active"
        break;
    case 5:
        document.getElementById('slide5').style.display = "block"
        document.getElementById('rec5').className += " active"
        break;
    default:
        document.getElementById('slide1').style.display = "block"
        document.getElementById('rec1').className += " active"
        document.getElementById("rec1").style.backgroundColor = "#ffffff"
    }
}

var imageID=0;
function changeimage(every_seconds){
    if(!imageID){
        document.getElementById("my-img").setAttribute("style", "background-image: url(images/blur3.jpg);");
        imageID++;
    }
    else{if(imageID==1){
        document.getElementById("my-img").setAttribute("style", "background-image: url(images/desktop-blur.jpg);");
        imageID++;
    }else{if(imageID==2){
        document.getElementById("my-img").setAttribute("style", "background-image: url(images/desktop-setup2-blur.jpg);");
        imageID=0;
    }}}
    setTimeout("changeimage("+every_seconds+")",((every_seconds)*1000));
}