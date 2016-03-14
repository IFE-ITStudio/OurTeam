window.onload = function() {
	var flying = setInterval("fly()", time); //调用fly();
	var funny = function(i) { //判断点击数组的序号，显示相应的介绍信息
		buttons[i].onclick = function() {
			showInformation(i);
		}
	}
	for (var i = 0; i < buttons.length; i++) {
		funny(i);
	}
}

//fly
var planes = document.getElementById("plane");
var flyWidth = document.body.clientWidth;
var time = 10;

function fly() {
	if (planes.offsetLeft < -234) {
		planes.style.left = flyWidth + 100 + "px";
	} else {
		planes.style.left = planes.offsetLeft - 1 + "px";
	}
}

function getElementsByClassName(tagName, className) {
	var tag = document.getElementsByTagName(tagName);
	var tagAll = [];
	for (var i = 0; i < tag.length; i++) {
		if (tag[i].className.indexOf(className) != -1) {
			tagAll[tagAll.length] = tag[i];
		}
	}
	return tagAll;
}
//information 	
var buttons = getElementsByClassName("li", "avatar-click");
var textareas = getElementsByClassName("li", "textarea");

/*显示相应人物信息*/
function showInformation(i) {
	if (textareas[i].style.display == "none") {
		/*遍历所有人物，先全部隐藏*/
		for (var j = 0; j < textareas.length; j++) {
			if(j==i) continue;
			textareas[j].style.display = "none";
		}
		/*显示对应的人物信息*/
		fadeIn(textareas[i], 30);
	}

}



//淡入效果(含淡入到指定透明度)
function fadeIn(elem, speed, opacity) {
	/*
	 * elem==>需要淡入的元素
	 * speed==>淡入速度,正整数(可选)
	 * opacity==>淡入到指定的透明度,0~100(可选)
	 */
	speed = speed || 20;
	opacity = opacity || 100;
	//显示元素,并将元素值为0透明度(不可见)
	elem.style.display = 'block';
	setOpacity(elem, 0);
	//初始化透明度变化值为0
	var val = 0;
	//循环将透明值以5递增,即淡入效果
	(function() {
		setOpacity(elem, val);
		val += 5;
		if (val <= opacity) {
			setTimeout(arguments.callee, speed)
		}
	})();
}

//淡出效果(含淡出到指定透明度)
function fadeOut(elem, speed, opacity) {
	/*
	 * elem==>需要淡入的元素
	 * speed==>淡入速度,正整数(可选)
	 * opacity==>淡入到指定的透明度,0~100(可选)
	 */
	speed = speed || 20;
	opacity = opacity || 0;
	//初始化透明度变化值为0
	var val = 100;
	//循环将透明值以5递减,即淡出效果
	(function() {
		setOpacity(elem, val);
		val -= 5;
		if (val >= opacity) {
			setTimeout(arguments.callee, speed);
		} else if (val < 0) {
			//元素透明度为0后隐藏元素
			elem.style.display = 'none';
		}
	})();
}

/*设置元素透明度函数*/
function setOpacity(ele, opacity) {
	if (ele.style.opacity != undefined) {
		///兼容FF和GG和新版本IE 
		ele.style.opacity = opacity / 100;

	} else {
		///兼容老版本ie 
		ele.style.filter = "alpha(opacity=" + opacity + ")";
	}
}