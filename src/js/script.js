$(document).ready(function() {
    $('.carousel__inner').slick({
        speed: 1000,
        slidesToShow: 1,
        prevArrow: '<button type="button" class="slick-prev"><img src="../icons/fourth_page/chevron-left-solid.svg"</button>',
        nextArrow: '<button type="button" class="slick-next"><img src="../icons/fourth_page/chevron-right-solid.svg"</button>',
        responsive: [{
            breakpoint: 992,
            settings: {
                dots: true,
                arrows: false
            }
        }]
    });
});