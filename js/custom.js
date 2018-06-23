(function ($) {
    'use strict';

    $(window).resize(function () {
        if ($(this).width() >= 992) {
            $('#navbarMenu').removeClass('menuon');
        }
        // if ($(window).width() >= 768) {
        //     $('#character-index')
        //         .attr({"data-0":"bottom: 18rem;"})
        // };
    });

    $('body').on('click', '.navbar-toggler', function (e) {
        $('#navbarMenu').toggleClass('menuon');
    })

})(jQuery);