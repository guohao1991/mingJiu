$(function() {
	$(".lert span").eq(0).hover(function() {
		$(".lert span").eq(0).addClass("color").siblings().removeClass()
		$(".box ol").eq(0).stop(false,true).fadeIn().siblings().fadeOut()
	})
	$(".lert span").eq(1).hover(function() {
	$(".lert span").eq(1).addClass("color").siblings().removeClass()
	$(".box ol").eq(1).stop(false,true).fadeIn().siblings().fadeOut()
	})
	
	
	
	
$(".box1 .left2-l1").eq(0).fadeIn()
$(".header1 a").eq(0).hover(function(){
	
	console.log($(".box1 .left2-l1"))
	$(".box1 .left2-l1").eq(0).stop(false,true).fadeIn().siblings().fadeOut()
})
$(".header1 a").eq(1).hover(function(){
	$(".box1 .left2-l1").eq(1).stop(false,true).fadeIn().siblings().fadeOut()
})
$(".header1 a").eq(2).hover(function(){
	$(".box1 .left2-l1").eq(2).stop(false,true).fadeIn().siblings().fadeOut()
})
})