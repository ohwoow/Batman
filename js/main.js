$(document).ready(function () {
    let menuLink = $('.full-info__menu-link');
    
    menuLink.on('click', function(event){
        event.preventDefault();
        let activeContent = $(this).attr('href');
        $('.visible').toggleClass('visible');
        $(activeContent).toggleClass('visible');
        $('.full-info__menu-link--active').toggleClass('full-info__menu-link--active');
        $(this).toggleClass('full-info__menu-link--active');
    });
});
