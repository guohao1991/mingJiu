$(function() {
	$('.search_left').mouseleave(function() {
		$('.typelist').hide();
	})
	$('.type').mouseover(function() {
		$('.typelist').show();
	})
	$(".typelist").children().click(function() {
		$('.typelist').hide();
		$('.type').html($(this).html());
	})
})
