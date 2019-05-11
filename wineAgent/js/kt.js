$(function(){
	$("#dingbu").click(function(){
		$("html,body").animate({scrollTop:0}, 500);
  });
//以上为回到顶部
	
	
	
	
	$("#ln_right ul li:eq(1)").hover(function(){
		$("#ktq").slideToggle(100);	
	})
	$("#ln_right ul li:eq(2)").hover(function(){
		$("#gf").slideToggle(100);
	})	
//	以上为弹出二维码

	var count = 0;
	var timer;
	timer = setInterval(function(){
		count++;
		if(count == $("#banner img").length){
			count = 0;
		}
		$("#banner img").eq(count).fadeIn('fast').siblings().fadeOut('fast');
	},2000);
	//以上为控制轮播
	$("#banner").hover(function(){
		clearInterval(timer);	
	},function(){timer = setInterval(function(){
		count++;
		if(count == $("#banner img").length){
			count = 0;
		}
		$("#banner img").eq(count).fadeIn('fast').siblings().fadeOut('fast');
	},2000);
		
	})

//以上为 鼠标放入停止轮播 移出继续	
 setInterval(function(){
	$("#hua").animate({"left":-900},39000,function(){
	$(this).css({"left":"0"})
});
},0)
 //以上为文字轮播 欠缺
})




