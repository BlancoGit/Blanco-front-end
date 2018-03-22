$( function() {
    $( ".datepicker" ).datepicker();
  } );

$(function() {

  $('#top').click(function() {
    $('html, body').animate({scrollTop: 0},700);
    return false;
  });
});(jQuery)

$(function(){

  $('.slider').slick({
  centerMode: true,
   arrows: false,
  centerPadding: '12.8%',
  slidesToShow: 3,
  responsive: [
    {
      breakpoint: 769,
      settings: 'slick'
    },
    {
      breakpoint: 4000,
      settings: 'unslick' 
    },
    {
      breakpoint: 768,
      settings: {
        arrows: true,
        infinite: true,
        dots: false,
        slidesToShow: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
  centerMode: true,
   arrows: false,
  centerPadding: '12.8%',
  slidesToShow: 1,
  dots: true
    }
  }
  ]
});
});




