document.addEventListener("DOMContentLoaded", function() {
	createDialog("我是标题", "我是内容");
	dialog({
		trigger: '#btn',
		content: '<strong>哈哈</strong>'
	})
}, false);



// 封装成dialog组件,接受对象参数
function dialog(obj) {
	if ($ != "undefined") {
		if (obj.trigger && obj.content) {
			var trigger = $(obj.trigger);
			console.log(trigger);
			// trigger.bind("click", function() {
			// 	console.log(argiments);
			// })
			trigger.click(function() {
				console.log('Adasda');
			})
		}
	}
}

// 创建dom
function createDialog(tle, ctn) {
	loadCss("./dialog.css");
	// 获取屏幕高宽

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
	var titletxt = document.createTextNode(tle);
	titlep.appendChild(titletxt);
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
	var contentxt = document.createTextNode(ctn);
	contentp.appendChild(contentxt);
	// 关闭叉叉
	var cha = document.createElement("div");
	cha.setAttribute("id", "dialog-close-cha");
	close.appendChild(cha);
	//横
	var hori = document.createElement("div");
	hori.setAttribute("id", "dialog-close-cha-hori")
		// 竖
	var vert = document.createElement("div");
	vert.setAttribute("id", "dialog-close-cha-vert");
	cha.appendChild(hori);
	cha.appendChild(vert);
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

//