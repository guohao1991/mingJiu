//$(function(){
//	
//	$(".nav-second-l>li").hover(function(){
//		$(".nav-second-one").css(""display":"block"")
//	})
//	$(".nav-second-one").hover(function(){
//		$(".nav-second-one").css({"display":"block"})
//	})
//})
$(function() {
	var arry = $(".nav-first>li");
	console.log(arry)
	$.each($(".nav-first>li"), function() {

		$(".nav-first>li").mousemove(function() {
			$(".nav-first>li").children().css("display", "block");
		})
		$(".nav-first>li").mouseout(function() {
			$(".upper-nav").children().css("display", "none");
		})

	});

	$(".nav-second-one").mousemove(function() {
		$(".nav-second-one").css("display", "block");
	})
	$(".nav-second-one").mouseout(function() {
		$(".nav-second-one").css("display", "none");
	})
})