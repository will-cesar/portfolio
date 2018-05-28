
// Animação referente ao menu e as setas ==============================

$(document).ready(function(){
	$( ".botao-menu" ).click(function() {
	  $( this ).toggleClass( "change-botao-menu" );
	  $( ".menu" ).toggle("slow");
	});

	$( ".list-menu1" ).click(function() {
	  $('html, body').animate({
            scrollTop: $('.div1').offset().top -0
        }, 1000);
	});

	$( ".list-menu2" ).click(function() {
	  $('html, body').animate({
            scrollTop: $('.div2').offset().top -50
        }, 1000);
	});

	$( ".list-menu3" ).click(function() {
	  $('html, body').animate({
            scrollTop: $('.div3').offset().top -0
        }, 1000);
	});

	$( ".list-menu4" ).click(function() {
	  $('html, body').animate({
            scrollTop: $('.div4').offset().top -0
        }, 1000);
	});

	$( "#seta1" ).click(function() {
	  $('html, body').animate({
            scrollTop: $('.div2').offset().top -0
        }, 1000);
	});

	$( "#seta2" ).click(function() {
	  $('html, body').animate({
            scrollTop: $('.div3').offset().top -0
        }, 1000);
	});

	$( "#seta3" ).click(function() {
	  $('html, body').animate({
            scrollTop: $('.div4').offset().top -0
        }, 1000);
	});

});

$.fn.isInViewport = function() {
  var elementTop = $(this).offset().top;
  var elementBottom = elementTop + $(this).outerHeight();

  var viewportTop = $(window).scrollTop();
  var viewportBottom = viewportTop + $(window).height();

  return elementBottom > viewportTop && elementTop < viewportBottom;
};

$(window).on('resize scroll', function() {
    if ($(".div1").isInViewport()) {
    	$( ".menu ul li" ).removeClass( "click-li" );
	  	$( ".list-menu1" ).addClass( "click-li" );
    }
    if ($(".div2").isInViewport()) {
    	$( ".menu ul li" ).removeClass( "click-li" );
	  	$( ".list-menu2" ).addClass( "click-li" );
    }
    if ($(".div3").isInViewport()) {
    	$( ".menu ul li" ).removeClass( "click-li" );
	  	$( ".list-menu3" ).addClass( "click-li" );
    }
    if ($(".div4").isInViewport()) {
    	$( ".menu ul li" ).removeClass( "click-li" );
	  	$( ".list-menu4" ).addClass( "click-li" );
    }
});


// Animação referente a div 2 ========================================

$(window).scroll(function () {
    $('.typewriter-text').each(function (i) {
        var bottom_of_object = $(this).position().top + $(this).outerHeight();
        var bottom_of_window = $(window).scrollTop() + $(window).height();
        /* se o objeto estiver completamente "scrollado" pra dentro da janela, fazer o fade_in*/
        if (bottom_of_window > bottom_of_object) {
            $( ".typewriter-text" ).addClass("line-1");
            $( ".div-espec" ).css({"opacity":"1"});
            $( "#seta2" ).css({"opacity":"1"});
            $( "#seta3" ).css({"opacity":"1"});
        }
    });
});


// Plugin AOS Animation ==============================================

$(document).ready(function(){
  AOS.init({ disable: 'mobile' });
}); 

