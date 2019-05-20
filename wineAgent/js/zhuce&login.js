$(function() {
  //注册页面代码 ↓
  var flag1 = 0;
  var flag2 = 0;
  var flag3 = 0;
  var flag4 = 0;
  var flag5 = 0;
  var flag6 = 0;
  var flag7 = 0;
  $(window).load(function() {
    $("<div>用户名不能少于4个字符</div>")
      .appendTo("#txtusernameTip")
      .addClass("onLoad");
    $("<div>密码由6-16位字符组成，请使用数字加字母组合密码</div>")
      .appendTo("#txtpwdTip")
      .addClass("onLoad");
    $("<div>请再次输入新设密码！</div>")
      .appendTo("#txtpwd2Tip")
      .addClass("onLoad");
    $("<div>请填写真实手机号，避免错失商机。若找回密码需提供手机号！</div>")
      .appendTo("#txtphoneTip")
      .addClass("onLoad");
    $("<div>通过邮箱可以找回密码</div>")
      .appendTo("#txtemailTip")
      .addClass("onLoad");
    $("<div>请输入正确的验证码</div>")
      .appendTo("#txtcodeTip")
      .addClass("onLoad");
  });
  $("#txtusername").focus(function() {
    $(this)
      .next()
      .children()
      .children()
      .removeClass()
      .addClass("onFocus")
      .html("用户名不能少于4个字符");
  });
  $("#txtpwd").focus(function() {
    $(this)
      .next()
      .children()
      .children()
      .removeClass()
      .addClass("onFocus")
      .html("密码由6-16位字符组成，请使用数字加字母组合密码");
  });
  $("#txtpwd2").focus(function() {
    $(this)
      .next()
      .children()
      .children()
      .removeClass()
      .addClass("onFocus")
      .html("请再次输入新设密码！");
  });
  $("#txtphone").focus(function() {
    $(this)
      .next()
      .children()
      .children()
      .removeClass()
      .addClass("onFocus")
      .html("请填写真实手机号，避免错失商机。若找回密码需提供手机号！");
  });
  $("#txtemail").focus(function() {
    $(this)
      .next()
      .children()
      .children()
      .removeClass()
      .addClass("onFocus")
      .html("通过邮箱可以找回密码");
  });
  $("#txtusername").blur(function() {
    var reg1 = /^.{4,20}$/;
    if (reg1.test(this.value)) {
      flag1 = 1;
      $(this)
        .next()
        .children()
        .children()
        .removeClass()
        .addClass("onCorrect")
        .html("该用户名可以注册");
    } else {
      $(this)
        .next()
        .children()
        .children()
        .removeClass()
        .addClass("onError")
        .html("用户名在4到20个字符,请确认！");
    }
  });
  $("#txtpwd").blur(function() {
    var reg2 = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,16}$/;
    if (reg2.test(this.value)) {
      flag2 = 1;
      $(this)
        .next()
        .children()
        .children()
        .removeClass()
        .addClass("onCorrect")
        .html("新密码合法");
    } else {
      $(this)
        .next()
        .children()
        .children()
        .removeClass()
        .addClass("onError")
        .html("新密码由6-16个字符组成，请使用数字加字母组合!");
    }
  });
  $("#txtpwd2").blur(function() {
    //				console.log(this.value,$("#txtpwd").val())
    if (this.value == $("#txtpwd").val()) {
      flag3 = 1;
      $(this)
        .next()
        .children()
        .children()
        .removeClass()
        .addClass("onCorrect")
        .html("两次密码输入一致");
    }
    if (this.value == "") {
      $(this)
        .next()
        .children()
        .children()
        .removeClass()
        .addClass("onError")
        .html("密码不能为空");
    }
    if (this.value != $("#txtpwd").val()) {
      $(this)
        .next()
        .children()
        .children()
        .removeClass()
        .addClass("onError")
        .html("2次密码不一致,请确认");
    }
  });
  $("#txtphone").blur(function() {
    var reg3 = /^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/;
    if (reg3.test(this.value)) {
      flag4 = 1;
      $(this)
        .next()
        .children()
        .children()
        .removeClass()
        .addClass("onCorrect")
        .html("手机号输入正确");
    } else {
      $(this)
        .next()
        .children()
        .children()
        .removeClass()
        .addClass("onError")
        .html("你输入的手机格式不正确");
    }
  });
  $("#txtemail").blur(function() {
    var reg4 = /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/;
    if (reg4.test(this.value)) {
      flag5 = 1;
      $(this)
        .next()
        .children()
        .children()
        .removeClass()
        .addClass("onCorrect")
        .html("电子邮箱输入正确");
    } else {
      $(this)
        .next()
        .children()
        .children()
        .removeClass()
        .addClass("onError")
        .html("你输入的邮箱格式不正确");
    }
  });
  $("#txtcode").blur(function() {
    console.log(this.value, $("#ewm").html());
    if (
      this.value ==
      $("#ewm")
        .html()
        .replace(/ /g, "")
    ) {
      flag6 = 1;
      $(this)
        .next()
        .next()
        .children()
        .children()
        .removeClass()
        .addClass("onCorrect")
        .html("验证码正确");
    } else {
      $(this)
        .next()
        .next()
        .children()
        .children()
        .removeClass()
        .addClass("onError")
        .html("验证码错误");
    }
    console.log(flag6);
  });
  $("#rbusertype").click(function() {
    flag7 = 0;
    $("#div_chk").show();
    $("#div_company").hide();
  });
  $("#rbusertype1").click(function() {
    flag7 = 1;
    $("#div_chk").hide();
    $("#div_company").show();
  });
  //同意协议

  //点击 注册 按钮
  $("#zcbtn").click(function() {
    var flag = flag1 + flag2 + flag3 + flag4 + flag5 + flag6;
    if (flag == 6) {
      if ($("#xieyi").prop("checked") == false) {
        alert("请阅读服务协议并同意！");
        return false;
      }
      if ($("#phonecode").val() == "") {
        alert("请输入手机验证码！");
        return false;
      }
      $.ajax({
        type: "get",
        url:
          "http://47.102.214.131:8081/jiudaili-1.0/jiudaili/userRegister/checkCode.do",
        data: { code: $("#phonecode").val(),phone: $("#txtphone").val() },
        success: function(res) {
          console.log(res);
          if (res.code == 0) {
            alert("手机验证码错误或者已经失效");
          }
          if (res.code == 1) {
            $.ajax({
              type: "post",
              url:
                "http://47.102.214.131:8081/jiudaili-1.0/jiudaili/userRegister/register.do",
              async: true,
              contentType: "application/json",
              data: JSON.stringify({
                userName: $("#txtusername").val(),
                password: $("#txtpwd").val(),
                phone: $("#txtphone").val(),
                email: $("#txtemail").val(),
                user_type: flag7
              }),
              success: function(data) {
                console.log(data);
                if (data.code == 1) {
                  alert(data.msg + "!");
                  location.href = "denglu.html";
                }
                if (data.code == 0) {
                  alert(data.msg + "！");
                }
              }
            });
          }
        }
      });
    } else {
      alert("请完善注册信息，谢谢");
    }
  });

  //点击 获取手机验证码 按钮
  $("#getcode").click(function() {
    var count = 6;
    var myreg = /^(((13[0-9]{1})|(14[0-9]{1})|(17[0-9]{1})|(15[0-3]{1})|(15[5-9]{1})|(18[0-9]{1}))+\d{8})$/;
    if ($("#txtphone").val() == "") {
      alert("请输入手机号");
      return false; //return 停止执行
    }
    if (!myreg.test($("#txtphone").val())) {
      alert("手机号码格式不正确");
      return false; //return 停止执行
    }
    $.ajax({
      type: "get",
      url:
        "http://47.102.214.131:8081/jiudaili-1.0/jiudaili/userRegister/sendCode.do",
      data: { phone: $("#txtphone").val() },
      async: true,
      success: function success(data) {
        console.log(data);
        if (data.code == "1") {
          //验证码发送成功，设置计时60s输入有效
          $("#getcode").attr("disabled", "true"); //此行代码表示将禁用该键
          var timer = setInterval(function() {
            count--;
            $("#getcode").val("请在" + count + "秒内输入验证码");
            console.log(count);
            if (count == 0) {
              clearInterval(timer); //输入有效时间结束，清除定时器
              $("#getcode").val("重新获取验证码");
              code = "";
              $("#getcode").removeAttr("disabled", "true"); //移除禁用
            }
          }, 1000);
        } else if (data.code == "0") {
          alert("发送失败，请重新获取");
          $("#getcode").val("重新获取");
        }
        // else if (data == "phoneError") {
        //   alert("手机号码错误，请检查");
        // }
      }
    });
  });

  //登录页面代码↓
  $("#deng2").click(function() {
    if (
      $("#txtcode").val() ==
      $("#ewm")
        .html()
        .replace(/ /g, "")
    ) {
      $.ajax({
        type: "post",
        url:
          "http://47.102.214.131:8081/jiudaili-1.0/jiudaili/userRegister/login.do",
        async: true,
        contentType: "application/json",
        data: JSON.stringify({
          userName: $("#txtusername").val(),
          password: $("#txtpwd").val()
        }),
        success: function(data) {
          if (data.msg == "用户名或密码不正确") {
            alert("用户名或密码不正确");
          }
          if (data.msg == "登录成功") {
            alert("登录成功！");
            location.href = "index.html";
          }
        }
      });
    } else {
      alert("请输入正确的验证码!");
    }
  });
});

//创建随机码（注册页面，登录页面共用）
function createRandCode() {
  var str = "1234567890abcdefghijklmnopqrstuvwxyz";
  var randCode = "";
  for (var i = 0; i < 4; i++) {
    var randIndex = parseInt(Math.random() * str.length);
    randCode += str[randIndex] + " ";
  }
  $("#ewm")
    .show()
    .html(randCode);
}
