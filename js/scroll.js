$(document).ready(function(){
	console.log("Mi resolución de pantalla es: "+screen.width + " px por "+screen.height)
	$('#muestraMenuA').click(function(){
		$('#menuCompleto').removeClass('menuOculto')
		$('#ocultaMenuA').removeClass('none')
		$('#menuCompleto').addClass('menuMostrado')
		$('#muestraMenuA').addClass('none')
	});
	$('#ocultaMenuA').click(function(){
		$('#menuCompleto').removeClass('menuMostrado')
		$('#muestraMenuA').removeClass('none')
		$('#menuCompleto').addClass('menuOculto')
		$('#ocultaMenuA').addClass('none')
	});
	$('#serviciosResponsive').click(function(){
		$('#menuCompleto').removeClass('menuMostrado')
		$('#muestraMenuA').removeClass('none')
		$('#menuCompleto').addClass('menuOculto')
		$('#ocultaMenuA').addClass('none')
	});
	$('#service').click(function(){
		$('body, html').animate({
			scrollTop: $('#servicios').offset().top
		}, 500);

	});	
	$('#serviceFix').click(function(){
		$('body, html').animate({
			scrollTop: $('#servicios').offset().top
		}, 500);

	});	

	$(window).scroll(function(){
		var barra = $(window).scrollTop();
		if (barra > 60 && screen.width > 640) {
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

		if (barra > 237 || screen.width < 640) {
			$('#antesDeContratar').removeClass('none')
			$('#antesDeContratar').addClass('fadeInUp animated')
		}else{
			$('#antesDeContratar').addClass('none')

		}

		if (barra > 590 || screen.width < 640) {
			$('#siniestros').removeClass('none')
			$('#siniestros').addClass('fadeInDown animated')
		}else{
			$('#siniestros').addClass('none')

		}
		if (barra > 895 || screen.width < 640) {
			$('#vigencia').removeClass('none')
			$('#vigencia').addClass('fadeInUp animated')
		}else{
			$('#vigencia').addClass('none')

		}
		if (barra > 1100 || screen.width < 640) {
			$('#renovacion').removeClass('none')
			$('#renovacion').addClass('fadeInDown animated')
		}else{
			$('#renovacion').addClass('none')

		}
	});
});