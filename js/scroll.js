$(document).ready(function(){
	$(window).scroll(function(){
		var barra = $(window).scrollTop();
		console.log(barra);
		if (barra > 60) {
			$('.menuScroll').css({
				'display': 'block',
				'transition': '1s'
			});		
		}else{
			$('.menuScroll').css({
				'display': 'none',
				'transition': '1s'
			});		
		}
	});
});