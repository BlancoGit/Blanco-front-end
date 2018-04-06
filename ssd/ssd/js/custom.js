
(function ($) {
      $(function(){
        $('.burger-menu').on('click', function(){
          $(this).closest('.navigation').toggleClass('menu-open');
        });
      });
    })(jQuery); 


$(function(){
	$('#MyForm').validate({
		rules: {
			email: {
				required: true,
				email: true
			},
			name: {
				required: true,
				minlength: 3
			},
			message: {
				required: true,
				minlength: 5
			},
		},
		messages: {
			email: {
				required: 'Заповніть будь ласка це поле!',
				email: "Поле повинно мати знак '@'"
			},
			name: {
				required: "Це поле є обов'язковим!",
				minlength: 'Довжина повинна складати не меньше 3-х символів'
			},
			message: {
				required: "Поле є обов'язковим!",
				minlength: 'Довжина повинна складати не меньше 5-х символів'
			}
		}
	});
});




$('.slider').slick({
    autoplay: true,
    dots:true,
    speed: 1200,
    prevArrow: '<button class="l-btn" type="button"><img src="img/left-arrow.png"></button>',
	nextArrow: '<button class="r-btn" type="button"><img src="img/right-arrow.png"></button>', 
    autoplaySpeed: 4000
});

$(document).ready(function() {
	$('#ask').click( function(event){ 
		event.preventDefault(); 
		$('#overlay').fadeIn(300, 
		 	function(){ 
				$('.ask-form') 
					.css('display', 'block') 
					.animate({opacity: 1, top: '50%'}, 300); 
		});
	});
	$('#overlay').click( function(){ 
		$('.ask-form')
			.animate({opacity: 0, top: '45%'}, 200,
				function(){
					$(this).css('display', 'none');
					$('#overlay').fadeOut(400);
				}
			);
	});
});


