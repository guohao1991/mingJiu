//搜索框效果
function hover(){
	var arr=["y_pro","y_com","y_pinpai","y_baike","y_tjh","y_news"];
	for(var i=0;i<arr.length;i++){
		document.getElementById(arr[i]).style="block";
	}
}
function out(){
	var arr=["y_pro","y_com","y_pinpai","y_baike","y_tjh","y_news"];
	for(var i=0;i<arr.length;i++){
		document.getElementById(arr[i]).style="none";
	}
}
function clickXL(y_id,y_type){
	var arr=["y_pro","y_com","y_pinpai","y_baike","y_tjh","y_news"];
	for(var i=0;i<arr.length;i++){
		document.getElementById(arr[i]).style="none";
	}
}