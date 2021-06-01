// jQuery code
$(document).ready(function () {
  // for navbar
  $('.menu-toggler').on('click', function () {
    $(this).toggleClass('active');
    $('.top-nav').toggleClass('open');
  });
  $('.top-nav .nav-link').on('click', function () {
    $('.menu-toggler').removeClass('active');
    $('.top-nav').removeClass('open');
  });
  $('nav a[href*="#"]').on('click', function () {
    $('html, body').animate( {
      scrollTop: $($(this).attr('href')).offset().top - 100
    }, 2000);
  });
  $('#up').on('click', function () {
    $('html, body').animate( {
      scrollTop: 0
    }, 2000);
  });
  // AOS initialization
  AOS.init({
    easing: 'ease',
    duration: 1800,
    once: true
  });
});



