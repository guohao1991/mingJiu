function ajax(type,url,data,fnSuc){
	if(window.XMLHttpRequest) {
		var xhr = new XMLHttpRequest();
	} else {
		var xhr = new ActiveXObject("Microsoft.XMLHTTP");
	}
	
	var str = "";
	for(var attr in data){
		str += attr+"="+data[attr]+"&";
	}
	str = str.replace(/&$/,"");
	
	if(type.toUpperCase() == "GET"){
		xhr.open("get",url+"?"+str,true);
		xhr.send();
	}
	if(type.toUpperCase() == "POST"){
		xhr.open("POST",url,true);
		xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		xhr.send(str);
	}
	
	xhr.onreadystatechange = function() {
		if(xhr.readyState == 4) {
			if(xhr.status == 200) {
				var data = xhr.responseText;
				fnSuc(data);
			}
		}
	}
	
}
