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


})(jQuery);