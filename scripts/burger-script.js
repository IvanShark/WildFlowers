$(document).ready(function() {
    $('.header__burger').click(function(event) {
        $('.header__burger, .burger__menu').addClass('active')
    });

    $('.close__burger').click(function(event) {
        $('.header__burger, .burger__menu').removeClass('active')
    });
})


