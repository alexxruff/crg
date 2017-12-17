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

		if (barra > 237) {
			$('#antesDeContratar').removeClass('none')
			$('#antesDeContratar').addClass('fadeInUp animated')
		}else{
			$('#antesDeContratar').addClass('none')

		}

		if (barra > 590) {
			$('#siniestros').removeClass('none')
			$('#siniestros').addClass('fadeInDown animated')
		}else{
			$('#siniestros').addClass('none')

		}
		if (barra > 895) {
			$('#vigencia').removeClass('none')
			$('#vigencia').addClass('fadeInUp animated')
		}else{
			$('#vigencia').addClass('none')

		}
		if (barra > 1100) {
			$('#renovacion').removeClass('none')
			$('#renovacion').addClass('fadeInDown animated')
		}else{
			$('#renovacion').addClass('none')

		}
	});
});