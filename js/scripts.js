$(document).ready(() => {
    /**
     * SLICK
     */
    $('#slider').slick({
        infinite: true,
        arrows: true,
        dots: true,
        prevArrow: '<button class="slick-arrow slick-prev" />',
        nextArrow: '<button class="slick-arrow slick-next" />',
        slidesToShow: 1,
        autoplay: true,
    });
});
