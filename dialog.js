$(document).ready(function() {

	dialog({
		trigger: '#btn',
		content: '<strong>哼哼哈嘿</strong>',
		title: 'I am Title',
		effectShow: function($element) {
			// 淡入显示
			$element.fadeIn(500)
		},
		effectHide: function($element) {
			// 淡出显示
			$element.fadeOut(500)
		},
		onClose: function() {
		}
	});
})


// 封装成dialog组件,接受对象参数
function dialog(obj) {
	if (!document.getElementById("dialog")) {
		createDialog();
		document.onkeydown = function(event) {
			var e = event || window.event || arguments.callee.caller.arguments[0];
			if (e && e.keyCode == 27) { // 按 Esc 
				if (obj.effectHide) {
					obj.effectHide($("#dialog"));
					$("#dialog-bg").css({
						"display": "none"
					});
				} else {
					clearDialog();
				}
				if (obj.onClose) {
					obj.onClose($("#dialog"));
				}
			}
		}
	}
	if ($ != "undefined") {
		if (obj.trigger && obj.title && obj.content) {
			var trigger = $(obj.trigger);
			trigger.click(function() {
				setDialog(obj.title, obj.content);
				if (obj.effectShow) {
					obj.effectShow($("#dialog"));
				}
			});

			var closetrigger = $("#dialog-close");
			closetrigger.click(function() {
				if (obj.effectHide) {
					obj.effectHide($("#dialog"));
					$("#dialog-bg").css({
						"display": "none"
					});
				} else {
					clearDialog();
				}
				if (obj.onClose) {
					obj.onClose($("#dialog"));
				}
			});
		}
	}
}

// 创建dom
function createDialog() {

	loadCss("./dialog.css");
	var body = document.getElementsByTagName("body")[0];
	var bgdiv = document.createElement("div");
	var dialogdiv = document.createElement("div");
	// 设置div属性
	bgdiv.setAttribute("id", "dialog-bg")
	dialogdiv.setAttribute("id", "dialog");
	body.appendChild(bgdiv);
	body.appendChild(dialogdiv);
	// dialog下添加标题，内容和关闭选项
	var title = document.createElement("div");
	title.setAttribute("id", "dialog-title");
	// 文本节点，标题
	var titlep = document.createElement("p");
	titlep.setAttribute("id", "dialog-title-p");
	title.appendChild(titlep);
	// 标题内容
	// titlep.innerHTML = tle;

	var close = document.createElement("div");
	close.setAttribute("id", "dialog-close");
	dialogdiv.appendChild(title);
	dialogdiv.appendChild(close);

	var content = document.createElement("div");
	content.setAttribute("id", "dialog-content");
	dialogdiv.appendChild(content);
	// 内容文字
	var contentp = document.createElement("p");
	contentp.setAttribute("id", "dialog-content-p");
	content.appendChild(contentp);
	//正文内容文本
	// contentp.innerHTML = ctn;
	// 关闭叉叉
	var cha = document.createElement("div");
	cha.setAttribute("id", "dialog-close-cha");
	close.appendChild(cha);
	//横
	var hori = document.createElement("div");
	hori.setAttribute("id", "dialog-close-cha-hori");
	// 竖
	var vert = document.createElement("div");
	vert.setAttribute("id", "dialog-close-cha-vert");
	cha.appendChild(hori);
	cha.appendChild(vert);
}

// 设置dom值
function setDialog(title, content) {
	var titlep = document.getElementById("dialog-title-p");
	var contentp = document.getElementById("dialog-content-p");
	// 背景变暗
	var bg = document.getElementById("dialog-bg");
	bg.style.display = "block";
	titlep.innerHTML = title;
	contentp.innerHTML = content;
}

// 清除dom值
function clearDialog() {
	var dialog = document.getElementById("dialog");
	dialog.style.display = "none";
	var bg = document.getElementById("dialog-bg");
	bg.style.display = "none";
}

// 引用css样式
function loadCss(filename) {
	var dialogCss = document.createElement("link");
	dialogCss.setAttribute("rel", "stylesheet");
	dialogCss.setAttribute("type", "text/css");
	dialogCss.setAttribute("href", filename);
	var head = document.getElementsByTagName("head")[0];
	head.appendChild(dialogCss);
}

