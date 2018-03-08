/**
 * Created by memoresun on 16/2/17.
 */
var canvasWidth = window.innerWidth;
var canvasHeight = window.innerHeight;
console.log(window.innerWidth);

var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");

canvas.width = canvasWidth <640?canvasWidth:640;
canvas.height = canvasWidth <640?canvasHeight:614;
console.log(canvas.width);
var blur = document.getElementById("blur");
var blurimg = document.getElementById("blur-img");
var image = new Image();
var radius = 50;
var clippingRegion = {x:-1,y:-1,r:radius};
image.src = "http://static.memorecool.cn/hexo/example/canvasIMG/blur_1.jpg";


image.onload = function(){
    blur.style.width = canvas.width +'px';
    blur.style.height = canvas.height + 'px';
    initCanvas();
};

// 初始化
function initCanvas(){
    clippingRegion = {x:Math.random()*(canvas.width - 2*radius)+radius,
        y:Math.random()*(canvas.height - 2*radius)+radius,
        r:radius};
    draw(image,clippingRegion);
    console.log(clippingRegion);
}

function setClippingRegion(clippingRegion){
    context.beginPath();
    context.arc(clippingRegion.x,clippingRegion.y,clippingRegion.r,0,Math.PI*2,false);
    context.clip();
}

function draw(image,clippingRegion){
    context.clearRect(0,0,canvas.width,canvas.height);
    context.save();
    setClippingRegion(clippingRegion);
    context.drawImage(image,0,0);
    context.restore();
}

function reset(){
    initCanvas();
}

function show(){
    // show 动画效果
    var animation= setInterval(function(){
        clippingRegion.r += 20;
        if(clippingRegion.r >1000){
            clearInterval(animation);
        }
        draw(image,clippingRegion);
    },30);
}
