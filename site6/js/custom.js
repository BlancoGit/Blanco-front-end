$(function () {

$('.carousel').carousel({
})
});

 function initMap() {
        var uluru = {lat: 49.839402, lng: 24.030668};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 13,
          center: uluru
        });
        var marker = new google.maps.Marker({
          position: uluru,
          map: map
        });
      }
 // skills bar!
// $(function() {
// 	function progress() {
// 		var prg	=	document.getElementById("progress");
// 		var counter = 5;
// 		var progress = 25;
// 		var id = setInterval(frame, 50);
// 		function frame() {
// 			if (progress ==500 && counter ==100) {
// 			} else {
// 				progress += 5;
// 				counter += 1;
// 				prg.style.width = progress + "px";
// 			}
// 		}
// 	}progress();});

(function($) {
  "use strict";

  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 71)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  $('body').scrollspy({
    target: '#mainNav',
    offset: 54
  });

  var navbarCollapse = function() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  };
  navbarCollapse();
  
  $(window).scroll(navbarCollapse);

})(jQuery);