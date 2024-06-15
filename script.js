$(document).ready(function() {
    $('.hamburger').on('click', function() {
        $('.menu').toggleClass('active');
    });

    $('.slick').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
        autoplay: true,
        utoplaySpeed: 1000,
    });

    AOS.init();

    $(".cta-button").on("click", function(e){
        e.preventDefault();
        $(".modal-popups").fadeToggle();
    });

    $(".close-popups").on("click", function(e){
        e.preventDefault();
        $(".modal-popups").fadeToggle();
    });

});
