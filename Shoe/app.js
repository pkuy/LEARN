// chuyển đổng ảnh tự động
var myIndex = 0;
var timeOut = 4000;
const loop = true;

function carousel(runCarousel) {
    if (runCarousel == false) {
        console.log('chay')
        return;
    } else {
        var i;
        var x = document.getElementsByClassName("carousel__item");
        var dots = document.getElementsByClassName("slider-dot-item");
        for (i = 0; i < x.length; i++) {
            x[i].style.display = "none";
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" slider__dot--active", "");
        }
        myIndex++;
        if (myIndex > x.length) { myIndex = 1 }
        x[myIndex - 1].style.display = "block";
        x[myIndex - 1].style.animation = "fadeVisibility 1s";
        dots[myIndex - 1].className += " slider__dot--active";
        setTimeout(carousel, timeOut); // Change image every 4 seconds
        // console.log(myIndex);
    }
}

carousel(true)
    // Xử lí phần dot & button
var slideIndex = myIndex + 1;

function currentDiv(n) {

    showDivs(slideIndex = n);

}

function plusDivs(n) {

    showDivs(slideIndex += n);
}

function showDivs(n) {
    loop = false;
    var i;
    var x = document.getElementsByClassName("carousel__item");
    var dots = document.getElementsByClassName("slider-dot-item");
    if (n > x.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = x.length;
    }
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" slider__dot--active", "");
    }
    x[slideIndex - 1].style.display = "block";
    x[slideIndex - 1].style.animation = "fadeVisibility 1s";
    dots[slideIndex - 1].className += " slider__dot--active";
    //console.log(slideIndex);
}