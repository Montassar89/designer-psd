$(function() {
  'use strict';
// plugins mixitup
$('#Container').mixItUp();

// hover links nav
 $('.navbar-right li a').click(function (){
   $(this).parent().addClass('activted').siblings().removeClass('activted');
 });

// data value id
$('.navbar-right li a').click(function (){

 $('html, body').animate({

   scrollTop: $('#' + $(this).data('value')).offset().top

 },2000);

});
// plugins counter number
$('.counter').counterUp();
//nice scroll
  $("html").niceScroll({

   cursorcolor : '#232323',

   cursorborderradius : 5


  });

});
