$(document).ready(function() {
    var owl = $('.banner-slider ')
    owl.owlCarousel({
        autoplay: true,
        loop: true,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        margin: 0,
        touchDrag: true,
        mouseDrag: true,
        nav: false,
        smartSpeed: 2000,
        dots: false,
        dotsData: true,
        navText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"],
        navContainer: '.banner-nav',
        autoplayTimeout: 3500,
        autoplaySpeed: 4000,
        navText: [
            "<i class='fa fa-angle-left'></i>",
            "<i class='fa fa-angle-right'></i>",
        ],
        responsive: {
            0: {
                items: 1,

            },
            768: {
                items: 1,
            },
            1170: {
                items: 1,
            }
        }
    })

    // Pause carousel on mouseenter
    $('.banner-slider').mouseenter(function() {
        owl.trigger('stop.owl.autoplay')
    })

    // Resume carousel on mouseleave
    $('.banner-slider').mouseleave(function() {
        owl.trigger('play.owl.autoplay')
    })
});

$(document).ready(function() {
    var owl = $('.feature-slider')
    owl.owlCarousel({
        autoplay: true,
        loop: true,
        margin: 20,
        padding: 0,
        touchDrag: true,
        mouseDrag: true,
        nav: false,
        dots: false,
        smartSpeed: 2000,
        dotsData: true,
        navText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"],
        navContainer: '.feature-nav',
        autoplayTimeout: 2700,
        autoplaySpeed: 1000,
        navText: [
            "<i class='fa fa-angle-left'></i>",
            "<i class='fa fa-angle-right'></i>",
        ],
        responsive: {
            0: {
                items: 1,
                nav: true,

            },
            768: {
                items: 2,
                nav: true,
            },
            1170: {
                items: 4,
                loop: true,
                nav: true,
            }
        }
    })

    // Pause carousel on mouseenter
    $('.feature-slider').mouseenter(function() {
        owl.trigger('stop.owl.autoplay')
    })

    // Resume carousel on mouseleave
    $('.feature-slider').mouseleave(function() {
        owl.trigger('play.owl.autoplay')
    })
});



$(document).ready(function() {
    var owl = $('.test-slider')
    owl.owlCarousel({
        autoplay: true,
        loop: true,
        margin: 20,
        padding: 0,
        touchDrag: true,
        mouseDrag: true,
        nav: false,
        dots: true,
        smartSpeed: 2000,
        // dotsData: true,
        autoplayTimeout: 2700,
        autoplaySpeed: 1000,

        responsive: {
            0: {
                items: 1,
                nav: false,

            },
            768: {
                items: 1,
                nav: false,
            },
            1170: {
                items: 1,
                dots: true,
            }
        }
    })

    $('.test-slider').mouseenter(function() {
        owl.trigger('stop.owl.autoplay')
    })

    $('.test-slider').mouseleave(function() {
        owl.trigger('play.owl.autoplay')
    })
});








// sticky navbar
$(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
        $('.main-header').addClass("sticky");
    } else {
        $('.main-header').removeClass("sticky");
    }
});


$('.counter').counterUp({
    delay: 10,
    time: 2000
});


new WOW().init();

