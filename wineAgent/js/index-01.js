$(function() {
	var conut = 0
	$(".pic ul li").eq(conut).fadeIn();
	$(".pic a").each(
		function(i){
			$(this).click(function() {
			conut = i;
			
			$(".pic ul li").eq(i).fadeIn("fast").siblings("li").fadeOut("fast");
			$(this).addClass("imgSelected").siblings().removeClass("imgSelected");
		});
		}
	)
	
	
	var timer = setInterval(function() {
			var go = (conut+1)%3
			$(".pic a").eq(go).click()
			
		}, 2000)
	$(".pic ul li").hover(function(){
		clearInterval(timer)
	},function(){
		timer = setInterval(function() {
			var go = (conut+1)%3
			$(".pic a").eq(go).click()
		}, 3000)
	}
		
	)
})