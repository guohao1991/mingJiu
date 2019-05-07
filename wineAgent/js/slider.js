function Slider(id) {
	this.bannerArea = document.getElementById(id);
	this.i = 0;
	this.createBaseDOM = function(data) {
		//[{url:"点击图片可以跳转页面",imgsrc:"正常展示的图片的路径"},{},{}]
		//["1.jpg","2.jpg","3.jpg"]
		var str = "";
		for(let i = 0; i < data.length; i++) {
			str += `
				<li><a href='${data[i].url}'><img src="${data[i].imgsrc}"></a></li>
			`;
		}
		str += `<li><a href='${data[0].url}'><img src="${data[0].imgsrc}"></a></li>`
		this.oUl = document.createElement("ul");
		this.oUl.innerHTML = str;
		this.aLi = this.oUl.children;
		this.len = this.aLi.length;
		this.bannerArea.appendChild(this.oUl);
		this.oUl.style.width = this.aLi[0].offsetWidth * this.len + "px";
	}
	this.timer = setInterval(() => {
		this.move();
	}, 700);
	this.move = function() {
		this.i++;
		//123123
		if(this.i == this.len) {
			this.oUl.style.left = 0;
			this.i = 1;
		}
		//321321
		if(this.i == -1) {
			this.oUl.style.left = -this.aLi[0].offsetWidth * (this.len - 1) + "px";
			this.i = this.len - 2;
		}
		if(this.numsLi) {
			//角标随着图片轮播自动点亮
			for(let i = 0; i < this.numsLi.length; i++) {
				this.numsLi[i].className = "";
			}
			//当前的numsLi添加一个类名
			if(this.i == this.len - 1) {
				this.numsLi[0].className = "hover";
			} else {
				this.numsLi[this.i].className = "hover";
			}

		}
		startMove(this.oUl, {
			"left": -this.aLi[0].offsetWidth * this.i
		});
	};

	//添加左右按钮
	this.createButton = function() {
		let oDiv = document.createElement("div");
		oDiv.innerHTML = "<span>&lt;</span><span>&gt;</span>";
		this.bannerArea.appendChild(oDiv);

		this.btns = oDiv.children;

		this.btns[0].onclick = () => {
			this.i = this.i - 2;
			this.move();
		}

		this.btns[1].onclick = () => {
			this.move();
		}

	}
	//添加小角标
	this.createNums = function() {
		var str = "";
//		var nam = {}
			for(let i = 0; i < this.len - 1; i++) {
			str += `<li>${i+1}</li>`;
		}
//		str1 = <li><a href="">'山东城市人家酒业'</a></li>;
//		str1 = <li><a href="">椰岛海王酒</a></li>;
//		str1 = <li><a href="">刁小妹酒业</a></li>;
//		str1 = <li><a href="">宝岛台湾小酒</a></li>;
		var oUl = document.createElement("ul");
		oUl.innerHTML = str;
		this.bannerArea.appendChild(oUl);

		this.numsLi = oUl.children;
		this.numsLi[0].className = "hover";

		for(let i = 0; i < this.numsLi.length; i++) {
			this.numsLi[i].onclick = () => {
				this.i = i - 1;
				this.move();
			}
		}

	}


	//鼠标移入移出清除开启定时器
	this.bannerArea.onmouseover = () => {
		clearInterval(this.timer);
	}
	this.bannerArea.onmouseout = () => {
		this.timer = setInterval(() => {
			this.move();
		}, 3000);

	}

}