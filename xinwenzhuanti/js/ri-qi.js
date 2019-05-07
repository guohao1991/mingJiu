//判断某年份是否为闰年
function isLeapYear(year) {
	if(year % 4 == 0 && year % 100 != 0 || year % 400 == 0) {
		return true;
	}
	return false;
}
//将日期格式化输出 “2015|08|24”

function formatDate(d, s) {
	var year = d.getFullYear();
	var month = d.getMonth() + 1;
	var day = d.getDate();

	if(month < 10) {
		month = "0" + month;
	}
	if(day < 10) {
		day = "0" + day;
	}
	var str = year + s + month + s + day;

	return str;
}
//获得某个月份的天数

function getNDays(y, m) {
	switch(m) {
		case 2:
			if(isLeapYear(y)) {
				return 29;
			}
			return 28;
		case 4:
		case 6:
		case 9:
		case 11:
			return 30;
		default:
			return 31;
	}
}
//判断两个日期相差的天数

function getDiffDays(d1, d2) {
	var ss = Math.abs(d2 - d1) / 1000;
	var day = Math.floor(ss / 3600 / 24);
	var hour = Math.floor(ss / 3600 % 24);
	var minute = Math.floor(ss / 60 % 60);
	var second = Math.floor(ss % 60);

	return "剩余" + day + "天" + hour + "时" + minute + "分" + second + "秒";
}
//获得N天以后的日期
function getNDay(n) {
	var oDate = new Date();
	oDate.setDate(oDate.getDate() + n);
	return oDate;
}