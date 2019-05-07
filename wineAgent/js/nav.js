$(function() {
	gundong();
	gundong1();
	sousuo();

	function gundong() {
		var num = 0;

		function goTop() {
			//根据你给的尺寸，可变的
			if(num == -77) {
				num = 0;
			}
			num -= 1;
			$("#scroll").css({
				top: num
			})
		}
		
		//设置滚动速度
		var timer = setInterval(goTop, 40);
		//设置鼠标经过时滚动停止
		$("#scroll").hover(function() {
				clearInterval(timer);
			},
			function() {
				timer = setInterval(goTop, 40);
			});
	}





	function gundong1() {
		var num = 0;

		function goTop() {
			//根据你给的尺寸，可变的
			if(num == -300) {
				num = 0;
			}
			num -= 1;
			$("#scroll1").css({
				top: num
			})
		}
		
		//设置滚动速度
		var timer = setInterval(goTop, 40);
		//设置鼠标经过时滚动停止
		$("#scroll1").hover(function() {
				clearInterval(timer);
			},
			function() {
				timer = setInterval(goTop, 40);
			});
	}
	
	
	
	
	function sousuo() {
		$("#scroll_box").mouseover(function(event) {
			event.stopPropagation();
			$(this).find(".option").toggle();
			$(this).parent().siblings().find(".option").hide();
		});
		$("document").click(function(event) {
			var eo = $(event.target);
			if($(".select_box").is(":visible") && eo.attr("class") != "option" && !eo.parent(".option").length)
				$('.option').hide();
		});
		$(".option li").click(function() {
			var check_value = $(this).text();
			var zlValue = $('.option li:eq(1)').html();
			var bqValue = $('.option li:eq(2)').html();
			$(this).parent().siblings(".select_txt").text(check_value);
			$("#select_value").val(check_value);
			if(check_value == zlValue) {

				$('#searchPlaceholder').prop('placeholder', '中低价川酒');
			} else if(check_value == bqValue) {

				$('#searchPlaceholder').prop('placeholder', '中低价川酒');
			} else {

				$('#searchPlaceholder').prop('placeholder', '中低价川酒');
			}
		});
	}
})