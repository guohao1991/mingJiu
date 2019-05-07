$(function() {
	var conut = 0
	$("#main .pic ul li").eq(conut).fadeIn();
	$("#main .pic a").each(
		function(i){
			$(this).click(function() {
			conut = i;
			console.log(i)
			$("#main .pic ul li").eq(i).fadeIn("fast").siblings("li").fadeOut("fast");
			$(this).addClass("imgSelected").siblings().removeClass("imgSelected");
		});
		}
	)
	
	
	var timer = setInterval(function() {
			var go = (conut+1)%3
			$("#main .pic a").eq(go).click()
			
		}, 2000)
	$("#main .pic ul li").hover(function(){
		clearInterval(timer)
	},function(){
		timer = setInterval(function() {
			var go = (conut+1)%3
			$("#main .pic a").eq(go).click()
		}, 3000)
	}
		
	)
})