$(document).ready(function() {
    // $('.nav-button').click(function() {
    //   $('.nav-button').toggleClass('change');
    // });

    $('.nav-button').click(function () {
      $('.nav-button').toggleClass('change');
      $('.navbar-collapse').collapse('hide');
    });
  
    $('.nav-link').click(function () {
      if ($(window).width() > 992) {
        $('.nav-button').removeClass('change');
        $('.navbar-collapse').collapse('hide');
      }
      else {
        $('.nav-button').toggleClass('change');
        $('.navbar-collapse').collapse('hide');
      }
      // $('.nav-button').toggleClass('change');
      // $('.navbar-collapse').collapse('hide');
      $('.nav-link').removeClass('nav-active');
      $(this).addClass('nav-active');
    });
    

    // $('a[href*="#"]:not([href="#"])').click(function () {
    //   if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
    //     var target = $(this.hash);
    //     target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    //     if (target.length) {
    //       $('html, body').animate({
    //         scrollTop: (target.offset().top - 54)
    //       }, 1000, "easeInOutExpo");
    //       return false;
    //     }
    //   }
    // });

  });