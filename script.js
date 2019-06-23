var h3 = document.querySelector("h3");
var iColor = document.querySelector(".iColor");
var eColor = document.querySelector(".eColor");
var body = document.querySelector("body");
var randomButton = document.querySelector("#randomButton");

iColor.value = "#ff0000";
eColor.value = "#ffff00";
h3.textContent =  "linear-gradient(to right, " + iColor.value + " ," + eColor.value + ")";

function changeBackgroundColor(){
	body.style.background = "linear-gradient(to right, " + iColor.value + " ," + eColor.value + ")";
	h3.textContent = body.style.background;
}

function randomBackgroundcolor(){
	iColor.value = "#000000".replace(/0/g,function(){return (~~(Math.random()*16)).toString(16);});
	eColor.value = "#000000".replace(/0/g,function(){return (~~(Math.random()*16)).toString(16);});
	changeBackgroundColor();
}

iColor.addEventListener("input", changeBackgroundColor);
eColor.addEventListener("input", changeBackgroundColor);
randomButton.addEventListener("click", randomBackgroundcolor);
