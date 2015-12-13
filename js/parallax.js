/* 
Code by: http://jonathannicol.com/projects/parallax-scrolling/ ; http://callmenick.com/post/simple-parallax-scrolling-effect.
Modified by: Kelly Horigan
*/

$(document).ready(function() {
	
	redrawDotNav();
	
	/* Scroll event handler */
    $(window).bind('scroll',function(e){
    	parallaxScroll();
		redrawDotNav();
    });
    
	/* Next/prev and primary nav btn click handlers */
	$('a.module parallax parallax-1').click(function(){
    	$('html, body').animate({
    		scrollTop:0
    	}, 1000, function() {
	    	parallaxScroll(); // Callback is required for iOS
		});
    	return false;
	});
    $('a.module content').click(function(){
    	$('html, body').animate({
    		scrollTop:$('#module content').offset().top
    	}, 1000, function() {
	    	parallaxScroll(); // Callback is required for iOS
		});
    	return false;
    });
    $('a.module parallax parallax-2').click(function(){
    	$('html, body').animate({
    		scrollTop:$('#module parallax parallax-2').offset().top
    	}, 1000, function() {
	    	parallaxScroll(); // Callback is required for iOS
		});
    	return false;
    });
	$('a.module content-2').click(function(){
    	$('html, body').animate({
    		scrollTop:$('#module content-2').offset().top
    	}, 1000, function() {
	    	parallaxScroll(); // Callback is required for iOS
		});
    	return false;
    });
    $('a.module parallax parallax-3').click(function(){
    	$('html, body').animate({
    		scrollTop:$('#module parallax parallax-3').offset().top
    	}, 1000, function() {
	    	parallaxScroll(); // Callback is required for iOS
		});
    	return false;
    });
    
    /* Show/hide dot lav labels on hover */
    $('nav#primary a').hover(
    	function () {
			$(this).prev('h1').show();
		},
		function () {
			$(this).prev('h1').hide();
		}
    );
    
});

/* Set navigation dots to an active state as the user scrolls */
function redrawDotNav(){
	var section1Top =  0;
	// The top of each section is offset by half the distance to the previous section.
	var section2Top =  $('.module content').offset().top - (($('.module parallax parallax-2').offset().top - $('.module content').offset().top) / 2);
	var section3Top =  $('.module parallax parallax-2').offset().top - (($('.module parallax parallax-3').offset().top - $('.module parallax parallax-2').offset().top) / 2);
	var section4Top =  $('.module parallax parallax-3').offset().top - (($(document).height() - $('.module parallax parallax-3').offset().top) / 2);;
	$('nav#primary a').removeClass('active');
	if($(document).scrollTop() >= section1Top && $(document).scrollTop() < section2Top){
		$('nav#primary a.module parallax parallax-1').addClass('active');
	} else if ($(document).scrollTop() >= section2Top && $(document).scrollTop() < section3Top){
		$('nav#primary a.module content').addClass('active');
	} else if ($(document).scrollTop() >= section3Top && $(document).scrollTop() < section4Top){
		$('nav#primary a.module parallax parallax-2').addClass('active');
	} else if ($(document).scrollTop() >= section4Top){
		$('nav#primary a.module parallax parallax-3').addClass('active');
	}
	
}
