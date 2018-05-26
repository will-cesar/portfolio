
$(document).ready(function(){
	$( "#menu-item1" ).click(function() {
	  $( this ).addClass( "change-menu" );
	  $( "#menu-item2").removeClass( "change-menu" );
	  $( "#menu-item3").removeClass( "change-menu" );
	  $( "#menu-item4").removeClass( "change-menu" );
	  $('html, body').animate({
            scrollTop: $('#div1').offset().top -0
        }, 500);
	});
    $( "#menu-item2" ).click(function() {
	  $( this ).addClass( "change-menu" );
	  $( "#menu-item1").removeClass( "change-menu" );
	  $( "#menu-item3").removeClass( "change-menu" );
	  $( "#menu-item4").removeClass( "change-menu" );
	  $('html, body').animate({
            scrollTop: $('#div2').offset().top -0
        }, 500);
	});
	$( "#menu-item3" ).click(function() {
	  $( this ).addClass( "change-menu" );
	  $( "#menu-item2").removeClass( "change-menu" );
	  $( "#menu-item1").removeClass( "change-menu" );
	  $( "#menu-item4").removeClass( "change-menu" );
	  $('html, body').animate({
            scrollTop: $('#div3').offset().top -0
        }, 500);
	});
	$( "#menu-item4" ).click(function() {
	  $( this ).addClass( "change-menu" );
	  $( "#menu-item2").removeClass( "change-menu" );
	  $( "#menu-item3").removeClass( "change-menu" );
	  $( "#menu-item1").removeClass( "change-menu" );
	  $('html, body').animate({
            scrollTop: $('#div4').offset().top -0
        }, 500);
	});
	$( "#seta1" ).click(function() {
	  $('html, body').animate({
            scrollTop: $('#div2').offset().top -0
        }, 1000);
	});
	$( "#seta2" ).click(function() {
	  $('html, body').animate({
            scrollTop: $('#div3').offset().top -0
        }, 1000);
	});

});



$(window).scroll(function () {
        $('.typewriter-text,.div-pika').each(function (i) {
            var bottom_of_object = $(this).position().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            /* se o objeto estiver completamente "scrollado" pra dentro da janela, fazer o fade_in*/
            if (bottom_of_window > bottom_of_object) {
                $( ".typewriter-text" ).addClass("line-1");
                $( ".div-espec" ).css({"opacity":"1"});
                $( "#seta2" ).css({"opacity":"1"});
            }
        });
    });




$(document).ready(function(){
  AOS.init({ disable: 'mobile' });
}); 

