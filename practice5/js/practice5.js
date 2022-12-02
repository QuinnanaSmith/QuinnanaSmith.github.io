let Color1 = document.getElementById("square1");
let Color2 = document.getElementById("square2");
let Color3 = document.getElementById("square3");

let squareHeight = 100;
let squarewidth = 100;

Color1.style.height = squareHeight + "px";
Color1.style.width = squarewidth + "px";
Color1.style.backgroundColor = "yellow"


Color2.style.height = squareHeight + "px";
Color2.style.width = squarewidth + "px";
Color2.style.backgroundColor = "purple"


Color3.style.height = squareHeight + "px";
Color3.style.width = squarewidth + "px";
Color3.style.backgroundColor = "turquoise"

function bgChange(bg) {
    document.body.style.backgroundColor = bg;
}
