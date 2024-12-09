$(document).ready(function () {
    // Ініціалізація Owl Carousel
    $("#nature-slider").owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000,
        dots: true,
    });

    // Ініціалізація Unite Gallery
    $("#gallery").unitegallery({
        gallery_theme: "tiles",
        tiles_type: "justified"
    });
});
