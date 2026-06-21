/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "/";
/******/ 	})();
/******/ 	
/************************************************************************/

;// ./src/images/tests/jigsaw.webp
const jigsaw_namespaceObject = __webpack_require__.p + "images/9e23193f7894c32b37fe.webp";
;// ./src/javascripts/puzzle.js
console.clear();

var PUZZLE_SIZE = 4;
var SNAP_RADIUS = 110;
var board = document.querySelector(".A_Puzzle");
var piecesLayer = document.querySelector(".C_PuzzlePieces");
var cells = Array.from(document.querySelectorAll(".Q_PartPuzzle"));
var uploadButton = document.getElementById("Upload");
var mainButtons = document.querySelector(".W_MainButtons");
var heading = document.querySelector(".Q_Header2Text");
var pieces = [];
var currentImage = jigsaw_namespaceObject;
var uploadedImageUrl = null;
function getPuzzleMetrics() {
  var boardRect = board.getBoundingClientRect();
  var pieceSize = boardRect.width / PUZZLE_SIZE;
  return {
    boardSize: boardRect.width,
    pieceSize: pieceSize
  };
}
function createPiecesData() {
  var data = [];
  for (var row = 0; row < PUZZLE_SIZE; row++) {
    for (var col = 0; col < PUZZLE_SIZE; col++) {
      data.push({
        row: row,
        col: col
      });
    }
  }
  return data.sort(function () {
    return Math.random() - 0.5;
  });
}
function createPiece(row, col, imageUrl) {
  var piece = document.createElement("div");
  var metrics = getPuzzleMetrics();
  piece.classList.add("Q_PuzzlePiece");
  piece.dataset.row = String(row);
  piece.dataset.col = String(col);
  piece.dataset.locked = "false";
  piece.style.width = "".concat(metrics.pieceSize, "px");
  piece.style.height = "".concat(metrics.pieceSize, "px");
  piece.style.backgroundImage = "url(\"".concat(imageUrl, "\")");
  piece.style.backgroundSize = "".concat(metrics.boardSize, "px ").concat(metrics.boardSize, "px");
  piece.style.backgroundPosition = "-".concat(col * metrics.pieceSize, "px -").concat(row * metrics.pieceSize, "px");
  return piece;
}
function placePiecesAroundBoard(puzzlePieces) {
  var boardRect = board.getBoundingClientRect();
  var layerRect = piecesLayer.getBoundingClientRect();
  var metrics = getPuzzleMetrics();
  var pieceSize = metrics.pieceSize;
  var gap = Math.max(8, pieceSize * 0.12);
  var isMobile = window.matchMedia("(max-width: 440px)").matches;
  if (isMobile) {
    var cols = 4;
    var mobileGap = Math.max(8, pieceSize * 0.12);
    var totalWidth = cols * pieceSize + (cols - 1) * mobileGap;
    var startX = Math.max(0, (layerRect.width - totalWidth) / 2);
    puzzlePieces.forEach(function (piece, index) {
      var col = index % cols;
      var row = Math.floor(index / cols);
      var x = startX + col * (pieceSize + mobileGap);
      var y = row * (pieceSize + mobileGap);
      piece.dataset.startX = String(x);
      piece.dataset.startY = String(y);
      piece.style.left = "".concat(x, "px");
      piece.style.top = "".concat(y, "px");
      piecesLayer.appendChild(piece);
    });
    return;
  }
  var boardLeft = boardRect.left - layerRect.left;
  var boardTop = boardRect.top - layerRect.top;
  var boardRight = boardLeft + boardRect.width;
  var boardHeight = boardRect.height;
  var leftAreaWidth = boardLeft;
  var rightAreaWidth = layerRect.width - boardRight;
  var leftCols = leftAreaWidth >= pieceSize * 2 + gap * 3 ? 2 : 1;
  var rightCols = rightAreaWidth >= pieceSize * 2 + gap * 3 ? 2 : 1;
  var leftBaseX = Math.max(gap, boardLeft - leftCols * pieceSize - leftCols * gap);
  var rightBaseX = Math.min(boardRight + gap, layerRect.width - rightCols * pieceSize - gap);
  puzzlePieces.forEach(function (piece, index) {
    var isLeft = index < 8;
    var localIndex = isLeft ? index : index - 8;
    var cols = isLeft ? leftCols : rightCols;
    var col = localIndex % cols;
    var row = Math.floor(localIndex / cols);
    var rows = Math.ceil(8 / cols);
    var x = (isLeft ? leftBaseX : rightBaseX) + col * (pieceSize + gap);
    var yStep = rows > 1 ? (boardHeight - pieceSize) / (rows - 1) : 0;
    var y = boardTop + row * yStep;
    piece.dataset.startX = String(x);
    piece.dataset.startY = String(y);
    piece.style.left = "".concat(x, "px");
    piece.style.top = "".concat(y, "px");
    piecesLayer.appendChild(piece);
  });
}
function isCellOccupied(cell) {
  var cellRow = cell.dataset.row;
  var cellCol = cell.dataset.col;
  return pieces.some(function (piece) {
    return piece.dataset.locked === "true" && piece.dataset.placedRow === cellRow && piece.dataset.placedCol === cellCol;
  });
}
function findNearestCorrectCell(piece) {
  var correctRow = Number(piece.dataset.row);
  var correctCol = Number(piece.dataset.col);
  var correctCell = cells.find(function (cell) {
    return Number(cell.dataset.row) === correctRow && Number(cell.dataset.col) === correctCol;
  });
  if (!correctCell) return null;
  if (isCellOccupied(correctCell)) return null;
  var pieceRect = piece.getBoundingClientRect();
  var cellRect = correctCell.getBoundingClientRect();
  var pieceCenterX = pieceRect.left + pieceRect.width / 2;
  var pieceCenterY = pieceRect.top + pieceRect.height / 2;
  var cellCenterX = cellRect.left + cellRect.width / 2;
  var cellCenterY = cellRect.top + cellRect.height / 2;
  var dx = pieceCenterX - cellCenterX;
  var dy = pieceCenterY - cellCenterY;
  var distance = Math.sqrt(dx * dx + dy * dy);
  if (distance <= SNAP_RADIUS) {
    return correctCell;
  }
  return null;
}
function snapPieceToCell(piece, cell) {
  var cellRect = cell.getBoundingClientRect();
  var layerRect = piecesLayer.getBoundingClientRect();
  var x = cellRect.left - layerRect.left;
  var y = cellRect.top - layerRect.top;
  piece.style.left = "".concat(x, "px");
  piece.style.top = "".concat(y, "px");
  piece.dataset.locked = "true";
  piece.dataset.placedRow = String(cell.dataset.row);
  piece.dataset.placedCol = String(cell.dataset.col);
  piece.classList.add("is-locked");
}
function showRestartButton() {
  var existingRestartButton = document.getElementById("RestartPuzzle");
  if (existingRestartButton) return;
  var restartButton = document.createElement("button");
  restartButton.id = "RestartPuzzle";
  restartButton.classList.add("A_Button");
  restartButton.innerText = "начать заново";
  restartButton.addEventListener("click", function () {
    resetPuzzle(currentImage);
  });
  mainButtons.insertBefore(restartButton, uploadButton);
}
function hideRestartButton() {
  var restartButton = document.getElementById("RestartPuzzle");
  if (restartButton) {
    restartButton.remove();
  }
}
function checkWin() {
  var allLocked = pieces.every(function (piece) {
    return piece.dataset.locked === "true";
  });
  if (!allLocked) return;
  if (heading) {
    heading.innerText = "УРА! ПАЗЛ СОБРАН!";
    heading.dataset.text = "УРА! ПАЗЛ СОБРАН!";
  }
  showRestartButton();
}
function makePieceDraggable(piece) {
  var shiftX = 0;
  var shiftY = 0;
  function onPointerDown(event) {
    if (piece.dataset.locked === "true") return;
    event.preventDefault();
    var rect = piece.getBoundingClientRect();
    shiftX = event.clientX - rect.left;
    shiftY = event.clientY - rect.top;
    piece.classList.add("is-dragging");
    document.addEventListener("pointermove", onPointerMove);
    document.addEventListener("pointerup", onPointerUp);
  }
  function onPointerMove(event) {
    var layerRect = piecesLayer.getBoundingClientRect();
    var metrics = getPuzzleMetrics();
    var pieceSize = metrics.pieceSize;
    var x = event.clientX - layerRect.left - shiftX;
    var y = event.clientY - layerRect.top - shiftY;
    var minX = 0;
    var minY = 0;
    if (window.matchMedia("(max-width: 440px)").matches) {
      var boardRect = board.getBoundingClientRect();
      minY = boardRect.top - layerRect.top;
    }
    var maxX = layerRect.width - pieceSize;
    var maxY = layerRect.height - pieceSize;
    if (x < minX) x = minX;
    if (y < minY) y = minY;
    if (x > maxX) x = maxX;
    if (y > maxY) y = maxY;
    piece.style.left = "".concat(x, "px");
    piece.style.top = "".concat(y, "px");
  }
  function onPointerUp() {
    piece.classList.remove("is-dragging");
    var nearestCorrectCell = findNearestCorrectCell(piece);
    if (nearestCorrectCell) {
      snapPieceToCell(piece, nearestCorrectCell);
      checkWin();
    }
    document.removeEventListener("pointermove", onPointerMove);
    document.removeEventListener("pointerup", onPointerUp);
  }
  piece.addEventListener("pointerdown", onPointerDown);
}
function resetPuzzle(imageUrl) {
  if (!board || !piecesLayer) return;
  currentImage = imageUrl;
  pieces = [];
  piecesLayer.innerHTML = "";
  hideRestartButton();
  if (heading) {
    heading.innerText = "ого! пазл!";
    heading.dataset.text = "ого! пазл!";
  }
  var piecesData = createPiecesData();
  piecesData.forEach(function (pieceData) {
    var piece = createPiece(pieceData.row, pieceData.col, currentImage);
    pieces.push(piece);
    makePieceDraggable(piece);
  });
  requestAnimationFrame(function () {
    placePiecesAroundBoard(pieces);
  });
}
function initUploadButton() {
  if (!uploadButton) return;
  var fileInput = document.createElement("input");
  fileInput.type = "file";
  fileInput.accept = "image/*";
  fileInput.style.display = "none";
  document.body.appendChild(fileInput);
  uploadButton.addEventListener("click", function () {
    fileInput.click();
  });
  fileInput.addEventListener("change", function () {
    var file = fileInput.files[0];
    if (!file) return;
    if (uploadedImageUrl) {
      URL.revokeObjectURL(uploadedImageUrl);
    }
    uploadedImageUrl = URL.createObjectURL(file);
    resetPuzzle(uploadedImageUrl);
    fileInput.value = "";
  });
}
function initPuzzle() {
  resetPuzzle(jigsaw_namespaceObject);
  initUploadButton();
}
document.addEventListener("DOMContentLoaded", function () {
  initPuzzle();
});
/******/ })()
;