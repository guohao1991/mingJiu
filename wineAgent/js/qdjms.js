$(function(){
	$(".natit").mousemove(function(){
		$(".sitnav").css("display","block")
	})
	$(".natit").mouseout(function(){
		$(".sitnav").css("display","none")
	})
	
	
	$(".sobk_left").mousemove(function(){
		$(".sobk_show li").css("display","block")
	})
	$(".sobk_left").mouseout(function(){
		$(".sobk_show li").css("display","none")
	})
		
//	 setInterval(function(){
//		$(".lb_jyg").animate({"left":"-1220"},10000,function(){
//			$(this).css({"left":"0"})
//		})
//	},0)
//	$(".lb_jyg").mouseover(function(){
//		$(".lb_jyg").finish()
//	})
//	
})
