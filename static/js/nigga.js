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


  // $(function() {
  //   var $el,
  //     leftPos,
  //     newWidth,
  //     $mainNav = $(".navbar-nav");
  
  //   $mainNav.append("<li class='nav-item' id='magic-line'></li>");
  //   var $magicLine = $("#magic-line");
  
  //   $magicLine
  //     .width($(".active").width())
  //     .css("left", $(".active a").position().left)
  //     .data("origLeft", $magicLine.position().left)
  //     .data("origWidth", $magicLine.width());
  
  //   $(".navbar-nav li a").hover(
  //     function() {
  //       $el = $(this);
  //       leftPos = $el.position().left;
  //       newWidth = $el.parent().width();
  //       $magicLine.stop().animate({
  //         left: leftPos,
  //         width: newWidth
  //       });
  //     },
  //     function() {
  //       $magicLine.stop().animate({
  //         left: $magicLine.data("origLeft"),
  //         width: $magicLine.data("origWidth")
  //       });
  //     }
  //   );
  // });
  