$(document).ready(function(){
function addEffectForComp() {
		$('.main-link').attr('id', 'hover-effect');
		$('.dropdown').addClass('hover-effect-2');
		$('.simple-link').hover(
			function() {
				$('.list').hide();
				$(this).attr('id', 'hover-effect').css('margin', '0');
			}, function() {
			    $(this).removeAttr('id', 'hover-effect').css('margin', '');
			  	}
		);
		
	} // for Comp

	function addEffectForList() {
		$('.list li').hover(
        function(){
           $(this).css('background', '#76c7c0');
        }, // первая анонимная функция
	        function(){
	           $(this).css('background', '#e5655d');
	        } // вторая анонимная функция
  		); // окончание функции hover
	}

	var dropDownTimer = null;

	function toogleDropDownMenu() {

		$('.header-wrapper .nav .dropdown').mouseenter(function(){
			clearTimeout(dropDownTimer);
			$('.list').fadeIn(1000);
		}) // end mouseenter

		$('.header-wrapper .nav .dropdown').mouseleave(function(){
			dropDownTimer = setTimeout(function(){
				$('.list').fadeOut();
			}, 600)
		}) // end mouseleave

		$('.list').mouseenter(function(){
			clearTimeout(dropDownTimer);
		}) // end mouseenter

		$('.list').mouseleave(function(){
			dropDownTimer = setTimeout(function(){
				$('.list').fadeOut();
			}, 600)
		}) // end mouseleave
	}

	function addEffectForTablet() {
		$('.main-link').attr('id', 'hover-effect-mobile');
		$('.dropdown').addClass('hover-effect-mobile-2');
		$('.simple-link').hover(
			function() {
				$('.list').hide();
				$(this).attr('id', 'hover-effect-mobile').css('margin', '0');
			}, function() {
			    $(this).removeAttr('id', 'hover-effect-mobile').css('margin', '');
			  	}
		);
	}


if ($(window).width() > 1000) {
	addEffectForComp();
	toogleDropDownMenu();
	addEffectForList();
} else if ($(window).width() <= 1000 && $(window).width() > 585) {
	addEffectForTablet();
	toogleDropDownMenu();
	addEffectForList();
} else if ($(window).width() <= 585) {
		$('.main-link, .simple-link, .dropdown').hover(
        function(){
            $(this).css('background', '#528b86');
          //  $('.list').hide();
        }, // первая анонимная функция
        function(){
            $(this).css('background', '#62a29e');
        } // вторая анонимная функция
 ); // окончание функции hover
}

$('.article-1, .article-2, .article-3, .article-4').hover(
			function() {
				$(this).css('background', '#fff');
				$(this).find('.icons').css('color', '#e2534b');
				$(this).find('.more').css({'background': '#e8645a', 'border-bottom': '3px solid #e2534b'});
			}, function() {
				$(this).css('background', '');
				$(this).find('.icons').css('color', '');
				$(this).find('.more').css({'background': '', 'border-bottom': ''});
			   }
		);

$('.arrows .ar-1, .ar-2').hover(
			function() {
				$(this).css({'background': '#e2534b', 'border-bottom': '#e2534b'});
				
			}, function() {
				$(this).css({'background': '', 'border-bottom': ''});
			   }
		);

function AnimateProgressBar() { 
	$(".progress").each(function(){
  
		var $bar = $(this).find(".bar");
		var $val = $(this).find(".number");
		var perc = parseInt($val.text(), 10);

		$({p:0}).animate({p:perc}, {
		    duration: 3000,
		    easing: "linear",
		    step: function(p) {
      		$bar.css({
        	transform: "rotate("+ (45+(p*1.8)) +"deg)",
			});
    		$val.text(p|0);
    		}
  		});
	});

}; 


    
setInterval(AnimateProgressBar, 6000);

$('.img-container').hover(
		function() {
			$(this).css({
				'background': '#7f8c8c',
				'transition': 'all 0.3s ease-in-out',
			});
		}, function() {
		    $(this).css({
		    	'background': '',
				});
		  	}
	);

}); // end ready
