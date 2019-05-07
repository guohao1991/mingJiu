$(function() {
	gundong();


	function gundong() {
		var num = 0;

		function goTop() {
			//根据你给的尺寸，可变的
			if(num == -10) {
				num = 0;
			}
			num -= 1;
			$("#scroll").css({
				top: num
			})
		}
		
		//设置滚动速度
		var timer = setInterval(goTop, 500);
		//设置鼠标经过时滚动停止
		$("#scroll").hover(function() {
				clearInterval(timer);
			},
			function() {
				timer = setInterval(goTop,500);
			});
	}
	
})