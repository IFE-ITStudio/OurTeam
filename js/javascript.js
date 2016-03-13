var plane = document.getElementById("plane");
var flyWidth = document.body.clientWidth;
function fly(){
	if (plane.style.left>0) {
		plane.style.left--;
	}else{
		plane.style.left = flyWidth;
	}
}
var flying = setInterval("")
