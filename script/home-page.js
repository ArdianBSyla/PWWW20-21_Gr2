let slideIndex = 1;
showSlide(slideIndex);


function currentSlide(num) {
    console.log('current ', num);
    showSlide((slideIndex = num))
}

function showSlide(n) {
    let i;
    let slides = document.getElementsByClassName('mySlide');
    let rectangles = document.getElementsByClassName('rectangle')




    if(n > slides.length){
        slideIndex = 1;
    }
    if(n < 1 ){
        slideIndex = slides.length
    }

    for(i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for(i = 0; i < rectangles.length; i++) {
        rectangles[i].className = rectangles[i].className.replace(" active", "")
    }

    console.log(slides);
    console.log(slideIndex);
    console.log(rectangles);
    console.log(slides[slideIndex - 1]);

    slides[slideIndex -  1].style.display = "block";
    rectangles[slideIndex - 1].className += " active";
}