$(function() {
	$(".upper-rt-ho").mousemove(function() {
		$(".upper-nav").css("display", "block");
	})	
	$(".upper-rt-ho").mouseout(function(){
		$(".upper-nav").css("display", "none");
	})
	$(".upper-nav").mousemove(function() {
		$(".upper-nav").css("display", "block");
	})
	$(".upper-nav").mouseout(function() {
		$(".upper-nav").css("display", "none");
	})
})