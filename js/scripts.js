$(document).ready(function(){

	$("#jumbo-heading").hide();
	$("#jumbo-heading").fadeIn(1000);

	$("#jumbo-text").hide();
	$("#jumbo-text").fadeIn(1500);

	$("#callToAction").hide();
	$("#callToAction").fadeIn(2000);

//scroll effect function
	$(function() {
	  $('a[href*="#"]:not([href="#"])').click(function() {
	    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
	      var target = $(this.hash);
	      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	      if (target.length) {
	        $('html, body').animate({
	          scrollTop: target.offset().top
	        }, 1000);
	      }
    	}
  	});
	});
});