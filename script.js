// NavMenu Dropdown on Hover
$('li.dropdown').hover(function() {
    $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(500);
  }, function() {
    $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(500);
});

// NavMenu Parent Underline Highlight on Child Menu Hover
$('li .dropdown-item').hover(function() {
    console.log('highlighted');
    $(this).closest('li.dropdown').addClass('nav-item-highlight');
}, function() {
    $('li.dropdown').removeClass('nav-item-highlight');
});

$('.search-mobile').focusin(function () {
    $('.navbar-brand').css('margin-top','1rem');
    $('.navbar-toggler').css('margin-top','1rem');
});
$('.search-mobile').delay(500).focusout(function () {
    $('.navbar-brand').css('margin-top','0');
    $('.navbar-toggler').css('margin-top','0');
});
// OWL CAROUSEL
$(document).ready(function(){
    $(".owl-carousel").owlCarousel();
});

$('.owl-carousel').owlCarousel({
    dotsEach:true,
    loop:true,
    margin:10,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        },
        1400:{
            items:6
        }
    }
})