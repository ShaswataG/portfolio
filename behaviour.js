$(".section-nav").hover(
    function () {
        $(this).addClass("nav-animate");
    },
    function() {
        $(this).removeClass("nav-animate");
    }
);

$(".card").hover(
    function () {
        $(this).addClass("project-animate");
    },
    function() {
        $(this).removeClass("project-animate");
    }
);

$(".card").hover(
    function () {
        $(this).addClass("project-animate");
    },
    function() {
        $(this).removeClass("project-animate");
    }
);

$(".project-url").hover(
    function () {
        $(this).addClass("project-url-animate");
    },
    function() {
        $(this).removeClass("project-url-animate");
    }
);

// $(".theme-toggle").click(function() {
//     $(".owner-name").toggleClass("owner-name-light");
//     // $(".content").toggleClass("sidebar");
//     $(".nav-link").toggle(
//         function() {
//             $(".nav-link").css("color", "black");
//         },
//         function() {
//             $(".nav-link").css("color", "white");
//         }
        
//     );
//     $(".content").toggleClass("content-light-theme");
//     $("#instagram-profile").attr("src", "./images/instagram-black");
//     $(".sidebar").toggleClass("sidebar-light-theme");
// })