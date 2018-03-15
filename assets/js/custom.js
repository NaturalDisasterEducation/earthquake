// // vertical menu home icon $("#fp-nav").prepend(` <div class="clearfix"> <h5
// class="l-right" id="GoNDEHome">     <a href="naturalDisaster.html"> <span
// class="glyphicon glyphicon-globe"></span>     </a> </h5> </div>`);
// $("#GoNDEHome").on("click", function () {     window.location.href =
// "naturalDisaster.html"; }) // natural disaster homepage footer collapse
// $('#FooterContent').on('show.bs.collapse', function () { $('.panel-heading
// .glyphicon.glyphicon-chevron-up').css({ 'transform': 'rotate(180deg)'     },
// 500); }) $('#FooterContent').on('hide.bs.collapse', function () {
// $('.panel-heading .glyphicon.glyphicon-chevron-up').css({ 'transform':
// 'rotate(0deg)'     }, 500); })

(function ($) {
    'use strict';

    $(window).resize(function () {
        if ($(this).width() >= 992) {
            $('#navbarMenu').removeClass('menuon');
        }
    });

    $('body').on('click', '.navbar-toggler', function (e) {
        $('#navbarMenu').toggleClass('menuon');
    })

    // $('#building').prepend("<button class='btn btn-primary' style='z-index:999; left:4rem; position: relativ" +
    //         "e'>+</button>");
})(jQuery);