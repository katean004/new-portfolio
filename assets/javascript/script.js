$(document).ready(function(){
    $(".menu-toggler").on("click", function(){
        $(this).toggleClass("open");
        $(".top-nav").toggleClass("open");
    });

    $(".top-nav .nav-link").on("click", function(){
        $(".menu-toggler").removeClass("open");
        $(".top-nav").removeClass("open");
    });

    $(".go-up").on("click", function(){
        window.scrollTo(0, 0);
    })

});

