window.onload = function(){
	var flying = setInterval("fly()",time);//调用fly();
	var funny = function(i){//判断点击数组的序号，显示相应的介绍信息
        buttons[i].onclick = function(){
        	showInformation(i);
        }
    }
	for(var i=0;i<buttons.length;i++){
        funny(i);
    }
}

//fly
var planes = document.getElementById("plane");
var flyWidth = document.body.clientWidth;
var time = 10;
function fly(){
	if (planes.offsetLeft<-234) {
			planes.style.left = flyWidth+100+"px";
	}else{
		planes.style.left = planes.offsetLeft -1 +"px";
	}
}
function getElementsByClassName(tagName,className) {  
    var tag = document.getElementsByTagName(tagName);  
    var tagAll = [];  
    for(var i = 0 ; i<tag.length ; i++){  
        if(tag[i].className.indexOf(className) != -1){  
            tagAll[tagAll.length] = tag[i];  
        }  
    }  
    return tagAll;     
}
//information 	
var buttons = getElementsByClassName("li","avatar-click");
var textareas = getElementsByClassName("li","textarea");
function showInformation(i){
	// console.log(textareas[i].innerHTML)
	if(textareas[i].style.display == "block"){
		textareas[i].style.display = "none";
	}
	if(textareas[i].style.display == "none"){
		for(var j=0;j<textareas.length;j++){
			textareas[j].style.display = "none";
		}
		textareas[i].style.display = "block";
	}
	
}