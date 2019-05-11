$(function(){
	$(".nav-first .nav-special").siblings().each(function(){
		$(this).hover(()=>{
			$(this).children().eq(1).css({"display":"block"})
		},
		()=>{
			$(this).children().eq(1).css({"display":"none"})
		})
	})
})

