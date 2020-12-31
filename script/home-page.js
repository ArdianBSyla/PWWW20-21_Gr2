let slideIndex = 0;
showSlide(slideIndex);


function currentSlide(num) {
    console.log('current ', num);
    showSlide((slideIndex = num))
}

function showSlide(n) {
    console.log(n, " n")
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
    console.log(slides['HTMLCollection'])
    // console.log(slideIndex);
    // console.log(rectangles);
    // console.log(slides[slideIndex - 1]);

    // if(slideIndex!=-1){
    console.log("hini")
    // slides[slideIndex].style.display = "block";
    rectangles[slideIndex].className += " active";
    // }
    
    
}