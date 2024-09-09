$(document).ready(function() {
	/* Navigation burger onclick side navigation show */
	$('.burger-container').on('click', function() {
		$('.main-navigation').toggle('slow');

		if($('#myBtn').hasClass('change')) {
			$('body').addClass('stop-scroll');
		} else {
			$('body').removeClass('stop-scroll');
		}
	});


	/* About me slider */
	$('.about-me-slider').slick({
		slidesToShow: 1,
		prevArrow: '<span class="span-arrow slick-prev"><</span>',
		nextArrow: '<span class="span-arrow slick-next">></span>'
	});

	/* Blog slider */
	$('.blog-slider').slick({
		slidesToShow: 2,
		prevArrow: '<span class="span-arrow slick-prev"><</span>',
		nextArrow: '<span class="span-arrow slick-next">></span>',
		responsive: [
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 1
			}
		}
		]
	});
	
});





// INICIO  Función para scroll exp2
let allowScrollFunction = true;
window.addEventListener('scroll', () => {
    if (allowScrollFunction) {
        let value = window.scrollY;
        if (value > 50) {
            barraSuperior.style.backgroundColor = '#00132d';
            opcionesMenu.forEach(opcion => opcion.classList.add('hover-activo'));
            logo.forEach(option => option.classList.add('barra-activa'));
            logoImg.src = '/static/assets/img/logo/logo.png';
            iconoHamburguesa.style.color = 'rgb(66, 135, 137)';
        } else {
            barraSuperior.style.backgroundColor = 'rgba(255, 255, 255, 0)';
            opcionesMenu.forEach(opcion => opcion.classList.remove('hover-activo'));
            logo.forEach(opcion => opcion.classList.remove('barra-activa'));
            logoImg.src = '/static/assets/img/logo/logoAzul.png';
            iconoHamburguesa.style.color = '';
        }
    }
});
// FIN  Función para scroll exp2