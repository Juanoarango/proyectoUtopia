// NIVO LIGHTBOX
$('#portafolio a').nivoLightbox({
    effect: 'fadeScale',
});

// HIDE MOBILE MENU AFTER CLIKING ON A LINK
$('.navbar-collapse a').click(function() {
    $(".navbar-collapse").collapse('hide');
});