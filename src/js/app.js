$(function() {
	function cmpFullscreen() {
		$(".cmp-fullscreen").each(function() {
			$(this).find("img").each(function() {
				$(this).css("background-image", "url('" + $(this).attr("src") + "')")
			});
		});
	}
	function cmpSlider() {
		$('.cmp-slider, .cmp-product-slider').slick();
	}
	function init() {
		cmpFullscreen();
		cmpSlider();
	}
	init();
});