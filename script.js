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
});
