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
    var shade = 120 + Math.random() * 130;
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

// шейпы растут

var lShapes = document.querySelectorAll('.l-shape');
var maxScale = 1.15;
var growthSpeed = 0.0001;
function onScrollLeft() {
  var scrollY = window.scrollY;
  lShapes.forEach(function (shape) {
    var scale = 1 + scrollY * growthSpeed;
    if (scale > maxScale) {
      scale = maxScale;
    }
    shape.style.transformOrigin = 'top right';
    shape.style.transform = "scale(".concat(scale, ")");
  });
}
window.addEventListener('scroll', onScrollLeft);
onScrollLeft();
var rShapes = document.querySelectorAll('.r-shape');
function onScrollRight() {
  var scrollY = window.scrollY;
  rShapes.forEach(function (shape) {
    var scale = 1 + scrollY * growthSpeed;
    if (scale > maxScale) {
      scale = maxScale;
    }
    shape.style.transformOrigin = 'top left';
    shape.style.transform = "scale(".concat(scale, ")");
  });
}
window.addEventListener('scroll', onScrollRight);
onScrollRight();
/******/ })()
;