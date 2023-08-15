
$('.arrivals .owl-carousel').owlCarousel({
    loop: true,
    navClass: true,
    margin: 25,
    autoplayTimeOut: 2000,
    responsiveClass: true,
    responsive: {
        0: {
            items: 2,
            nav: false,
        },
        575: {
            items: 2,
            nav: true
        },
        767: {
            items: 3,
            nav: true
        },
        991: {
            items: 4,
            nav: true,
            loop: false
        }
    }
})

// uniform carousal 

$('.uniform .owl-carousel').owlCarousel({
    loop: true,
    navClass: true,
    margin: 25,
    autoplayTimeOut: 2000,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1,
            nav: false,
        },
        575: {
            items: 1,
            nav: true
        },
        767: {
            items: 1,
            nav: true
        },
        991: {
            items: 1,
            nav: true,
            loop: false
        }
    }
})

// blogs 

$('.blogs .owl-carousel').owlCarousel({
    loop: true,
    navClass: true,
    margin: 25,
    autoplayTimeOut: 2000,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1,
            nav: false,
        },
        575: {
            items: 1,
            nav: false
        },
        767: {
            items: 2,
            nav: true
        },
        991: {
            items: 2,
            nav: true,
            loop: false
        }
    }
})

// gallery

$('.gallery .owl-carousel').owlCarousel({
    loop: true,
    navClass: true,
    margin: 10,
    autoplayTimeOut: 2000,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1,
            nav: false,
        },
        575: {
            items: 2,
            nav: false
        },
        767: {
            items: 4,
            nav: true
        },
        991: {
            items: 6,
            nav: true,
            loop: false
        }
    }
})

/// detail product
let mainImg = document.getElementById('mainImg');
let smallImag = document.getElementsByClassName('small-img');


smallImag[0].onclick = function () {
    mainImg.src = smallImag[0].src
}

smallImag[1].onclick = function () {
    mainImg.src = smallImag[1].src
}

smallImag[2].onclick = function () {
    mainImg.src = smallImag[2].src
}

smallImag[3].onclick = function () {
    mainImg.src = smallImag[3].src
}