function getStyle(obj,attr){
	if(obj.currentStyle){
		return obj.currentStyle[attr];
	}
	
	return getComputedStyle(obj,null)[attr];
}
//{width:500,height:300,left:100}
function startMove(obj,json){
	clearInterval(obj.timer);
	obj.timer = setInterval(function(){
		//假设每一次定时器开始时，所有的属性都达到了目标值
		var flag = true;
		for(var attr in json){
			var iTarget = json[attr];
			if(attr == "opacity"){
				var iCur = Math.round(getStyle(oBox,"opacity")*100);
			}else{
				var iCur = parseInt(getStyle(obj,attr));
			}
			
			
			var iSpeed = (iTarget-iCur)/8;
			iSpeed = iSpeed >0?Math.ceil(iSpeed):Math.floor(iSpeed);
			
			if(attr == "opacity"){
				oBox.style.opacity = (iCur+iSpeed)/100;
				oBox.style.filter = "alpha(opacity="+(iCur+iSpeed)+")";
			}else{
				obj.style[attr] = iCur + iSpeed + "px";
			}
			
			
			//如果iCur!= iTarget,假设不成立
			if(iSpeed != 0){
				flag = false;
			}
			
		}
		//flag为true 所有的属性都达到了目标值
		if(flag){
			clearInterval(obj.timer);
		}
		
		
	},20);
}
