$(document).ready(function () {
    /* For sticky nav */

    $('.js--section-features').waypoint(function (direction) {
      if (direction == "down") {
        $("nav").addClass("sticky");
      } else {
        $("nav").removeClass("sticky");
      }
    },
    { offset: "10%;" }
  );
    
  /* Scroll on buttons */
    $('.js--scroll-to-plans').click(function() {
        $('html,body').animate({scrollTop: $('.js--section-plans').offset().top},2000);
    });
    $('.js--scroll-to-start').click(function() {
        $('html,body').animate({scrollTop: $('.js--section-features').offset().top},1000);
    });
   
    /* Animations on scroll */ 
    $('.js--wp-1').waypoint(function() {
        $('.js--wp-1').addClass('animate__animated animate__fadeIn');
    },{offset:'50%'});
    $('.js--wp-2').waypoint(function() {
        $('.js--wp-2').addClass('animate__animated animate__fadeInUp');
    },{offset:'50%'});
    $('.js--wp-3').waypoint(function() {
        $('.js--wp-3').addClass('animate__animated animate__fadeIn');
    },{offset:'30%'});
    $('.js--wp-4').waypoint(function() {
        $('.js--wp-4').addClass('animate__animated animate__pulse');
    },{offset:'30%'});

    /* Mobile nav */

    $('.js--nav-icon').click(function() {
        var nav = $('.js--main-nav');
        var icon= $('.js--nav-icon i');
        nav.slideToggle(200);
        if(icon.hasClass('ion-navicon-round')){
            icon.addClass('ion-close-round');
            icon.removeClass('ion-navicon-round');
        }
        else {
            icon.removeClass('ion-close-round');
            icon.addClass('ion-navicon-round');
        }



    })
});
