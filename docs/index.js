/******/ (() => { // webpackBootstrap
/******/ 	"use strict";


// белый шум на фоне

var canvas = document.getElementById('noise');
var ctx = canvas.getContext('2d');
function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);
function drawNoiseFrame() {
  var w = canvas.width;
  var h = canvas.height;
  var imageData = ctx.createImageData(w, h);
  var buffer = imageData.data;
  for (var i = 0; i < buffer.length; i += 4) {
    var shade = 160 + Math.random() * 130;
    buffer[i] = shade;
    buffer[i + 1] = shade;
    buffer[i + 2] = shade;
    buffer[i + 3] = 200;
  }
  ctx.putImageData(imageData, 0, 0);
}
var lastFrameTime = 0;
function animate(time) {
  if (time - lastFrameTime > 60) {
    drawNoiseFrame();
    lastFrameTime = time;
  }
  requestAnimationFrame(animate);
}
drawNoiseFrame();
requestAnimationFrame(animate);

// шейп растет на странице о нас

var shape = document.querySelector('.shape-1');
var maxScale = 1.15;
var growthSpeed = 0.0001;
function onScroll() {
  var scrollY = window.scrollY;
  var scale = 1 + scrollY * growthSpeed;
  if (scale > maxScale) {
    scale = maxScale;
  }
  shape.style.transform = "scale(".concat(scale, ")");
}
window.addEventListener('scroll', onScroll);
onScroll();
/******/ })()
;