$(document).ready(function(){
    $('.slider__inner').slick({
        infinite: true,
        speed: 700,
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow: '<button type="button" class="slick-prev"><img src="img/chevron-left-solid.png" alt=""></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="img/chevron-right-solid.png" alt="">' +
            '</button>',
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    dots: true,
                    arrow: false
                }
            }]
    });
});
