$(function() {
	$(window).scroll(function() {
  	if($(document).scrollTop() > 10) {
        $('.menu').addClass('shrink');
        $('.menu').css('border-top','4px solid #107dac');
    }
    else {
        $('.menu').removeClass('shrink');
        $('.menu').css('border-top','');
    }
  });
});