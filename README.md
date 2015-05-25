#dialog.js

该dialog需要JQuery支持;

#dialog方法
参数

1.trigger:出发dialog的dom，如"#btn";
2.content:dialog内容;
3.title:标题
4.effectShow:打开效果
5.effectHide:关闭效果
6.onClose:关闭后执行的方法

例子
```
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
```