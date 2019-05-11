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
	
})
