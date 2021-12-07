/* Индекс слайдов по умолчанию */
var slideIndex1 = 1;
var slideIndex2 = 1;
var slideIndex3 = 1;
var slideIndex4 = 1;
var slideIndex5 = 1;
showSlides(slideIndex1, "sc1");
showSlides(slideIndex2, "sc2");
showSlides(slideIndex3, "sc3");
showSlides(slideIndex4, "sc4");
showSlides(slideIndex5, "sc5");


/* Функция увеличивает индекс на 1, показывает следующй слайд*/
function getSlideIndexP(id){
    switch (id) {
        case "sc1":
            slideIndex1 += 1;
            if (slideIndex1 > 5) {
                slideIndex1 = 1
            }
            return slideIndex1;
        case "sc2":
            slideIndex2 += 1;
            if (slideIndex2 > 5) {
                slideIndex2 = 1
            }
            return slideIndex2;
        case "sc3":
            slideIndex3 += 1;
            if (slideIndex3 > 5) {
                slideIndex3 = 1
            }
            return slideIndex3;
        case "sc4":
            slideIndex4 += 1;
            if (slideIndex4 > 5) {
                slideIndex4 = 1
            }
            return slideIndex4;
        case "sc5":
            slideIndex5 += 1;
            if (slideIndex5 > 5) {
                slideIndex5 = 1
            }
            return slideIndex5;
    }
}

function getSlideIndexM(id){
    switch (id) {
        case "sc1":
            slideIndex1 -= 1;
            if (slideIndex1 < 1) {
                slideIndex1 = 5
            }
            return slideIndex1;
        case "sc2":
            slideIndex2 -= 1;
            if (slideIndex2 < 1) {
                slideIndex2 = 5
            }
            return slideIndex2;
        case "sc3":
            slideIndex3 -= 1;
            if (slideIndex3 < 1) {
                slideIndex3 = 5
            }
            return slideIndex3;
        case "sc4":
            if (slideIndex4 < 1) {
                slideIndex4 = 5
            }
            slideIndex4 -= 1;
            return slideIndex4;
        case "sc5":
            slideIndex5 -= 1;
            if (slideIndex5 < 1) {
                slideIndex5 = 5
            }
            return slideIndex5;
    }
}

function plusSlide(id) {
    showSlides(getSlideIndexP(id), id);
}

/* Функция уменьшяет индекс на 1, показывает предыдущий слайд*/
function minusSlide(id) {
    showSlides(getSlideIndexM(id), id);
}

/* Основная функция слайдера */
function showSlides(n, id) {
    var i;
    var slides = document.getElementById(id).getElementsByClassName("slide_img")
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[n - 1].style.display = "block";
}