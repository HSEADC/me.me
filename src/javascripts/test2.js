console.clear();

import "../stylesheets/style.css";
import puzzleImage from "../images/tests/jigsaw.webp";

// белый шум на фоне

const canvas = document.getElementById("noise");
const ctx = canvas.getContext("2d");

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

resizeCanvas();
window.addEventListener("resize", resizeCanvas);

function drawNoiseFrame() {
  const w = canvas.width;
  const h = canvas.height;
  const imageData = ctx.createImageData(w, h);
  const buffer = imageData.data;

  for (let i = 0; i < buffer.length; i += 4) {
    const shade = 120 + Math.random() * 130;
    buffer[i] = shade;
    buffer[i + 1] = shade;
    buffer[i + 2] = shade;
    buffer[i + 3] = 150;
  }

  ctx.putImageData(imageData, 0, 0);
}

let lastFrameTime = 0;

function animate(time) {
  if (time - lastFrameTime > 60) {
    drawNoiseFrame();
    lastFrameTime = time;
  }

  requestAnimationFrame(animate);
}

drawNoiseFrame();
requestAnimationFrame(animate);

// обводка

function syncOutlinedText() {
  document.querySelectorAll(".txt, .hd, .nv, .A_HeaderPart, .A_PuzzleBackButton, .A_PuzzleWinButton").forEach((el) => {
    el.setAttribute("data-text", el.textContent.trim());
  });
}

document.addEventListener("DOMContentLoaded", () => {
  syncOutlinedText();

  const observer = new MutationObserver(() => {
    syncOutlinedText();
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true,
    characterData: true,
  });
});

// инлайн-картинки

function applyInlineHeaderImages() {
  const imageBlocks = document.querySelectorAll(".Q_ImageInHeader, .Q_ImageBigFloat, .Q_ImageSmallFloat");
  if (!imageBlocks.length) return;

  const req = require.context("../images/inlined", false, /^\.\/inlined-\d+\.webp$/i);
  const urls = req.keys().map((key) => req(key));
  const shuffledImages = [...urls].sort(() => Math.random() - 0.5);

  imageBlocks.forEach((block, index) => {
    const imageUrl = shuffledImages[index % shuffledImages.length];
    block.style.backgroundImage = `url("${imageUrl}")`;
  });
}

document.addEventListener("DOMContentLoaded", () => {
  applyInlineHeaderImages();
});

// пазл

const PUZZLE_SIZE = 4;
const BOARD_SIZE = 864;
const PIECE_SIZE = BOARD_SIZE / PUZZLE_SIZE; // 216
const SNAP_RADIUS = 110;

const board = document.getElementById("puzzle-board");
const piecesLayer = document.getElementById("puzzle-pieces-layer");
const cells = Array.from(document.querySelectorAll(".A_PuzzleCell"));
const pieces = [];

function createPiecesData() {
  const data = [];

  for (let row = 0; row < PUZZLE_SIZE; row++) {
    for (let col = 0; col < PUZZLE_SIZE; col++) {
      data.push({ row, col });
    }
  }

  return data.sort(() => Math.random() - 0.5);
}

function createPiece(row, col) {
  const piece = document.createElement("div");
  piece.classList.add("A_PuzzlePiece");
  piece.dataset.row = String(row);
  piece.dataset.col = String(col);
  piece.dataset.locked = "false";

  piece.style.width = `${PIECE_SIZE}rem`;
  piece.style.height = `${PIECE_SIZE}rem`;
  piece.style.backgroundImage = `url("${puzzleImage}")`;
  piece.style.backgroundSize = `${BOARD_SIZE}rem ${BOARD_SIZE}rem`;
  piece.style.backgroundPosition = `-${col * PIECE_SIZE}rem -${row * PIECE_SIZE}rem`;

  return piece;
}

function placePiecesAroundBoard(puzzlePieces) {
  const boardRect = board.getBoundingClientRect();
  const layerRect = piecesLayer.getBoundingClientRect();

  const leftAreaWidth = Math.max(220, boardRect.left - layerRect.left - 24);
  const rightAreaStart = boardRect.left - layerRect.left + boardRect.width + 24;

  const leftCols = 2;
  const rightCols = 2;
  const leftGapX = 12;
  const rightGapX = 12;
  const gapY = 12;

  const leftBaseX = Math.max(12, leftAreaWidth - leftCols * PIECE_SIZE - leftGapX);
  const rightBaseX = rightAreaStart;
  const topStart = 24;

  puzzlePieces.forEach((piece, index) => {
    let x = 0;
    let y = 0;

    if (index < 8) {
      const localIndex = index;
      const col = localIndex % leftCols;
      const row = Math.floor(localIndex / leftCols);

      x = leftBaseX + col * (PIECE_SIZE + leftGapX);
      y = topStart + row * (PIECE_SIZE + gapY);
    } else {
      const localIndex = index - 8;
      const col = localIndex % rightCols;
      const row = Math.floor(localIndex / rightCols);

      x = rightBaseX + col * (PIECE_SIZE + rightGapX);
      y = topStart + row * (PIECE_SIZE + gapY);

      const maxRightX = layerRect.width - PIECE_SIZE - 12;
      if (x > maxRightX) x = maxRightX;
    }

    piece.dataset.startX = String(x);
    piece.dataset.startY = String(y);

    piece.style.left = `${x}px`;
    piece.style.top = `${y}px`;

    piecesLayer.appendChild(piece);
  });
}

function isCellOccupied(cell) {
  const cellRow = cell.dataset.row;
  const cellCol = cell.dataset.col;

  return pieces.some((piece) => {
    return piece.dataset.locked === "true" && piece.dataset.placedRow === cellRow && piece.dataset.placedCol === cellCol;
  });
}

function findNearestCorrectCell(piece) {
  const correctRow = Number(piece.dataset.row);
  const correctCol = Number(piece.dataset.col);

  const correctCell = cells.find((cell) => {
    return Number(cell.dataset.row) === correctRow && Number(cell.dataset.col) === correctCol;
  });

  if (!correctCell) return null;
  if (isCellOccupied(correctCell)) return null;

  const pieceRect = piece.getBoundingClientRect();
  const cellRect = correctCell.getBoundingClientRect();

  const pieceCenterX = pieceRect.left + pieceRect.width / 2;
  const pieceCenterY = pieceRect.top + pieceRect.height / 2;

  const cellCenterX = cellRect.left + cellRect.width / 2;
  const cellCenterY = cellRect.top + cellRect.height / 2;

  const dx = pieceCenterX - cellCenterX;
  const dy = pieceCenterY - cellCenterY;
  const distance = Math.sqrt(dx * dx + dy * dy);

  if (distance <= SNAP_RADIUS) {
    return correctCell;
  }

  return null;
}

function snapPieceToCell(piece, cell) {
  const cellRect = cell.getBoundingClientRect();
  const layerRect = piecesLayer.getBoundingClientRect();

  const x = cellRect.left - layerRect.left;
  const y = cellRect.top - layerRect.top;

  piece.style.left = `${x}px`;
  piece.style.top = `${y}px`;
  piece.dataset.locked = "true";
  piece.dataset.placedRow = String(cell.dataset.row);
  piece.dataset.placedCol = String(cell.dataset.col);
  piece.classList.add("is-locked");
}

function checkWin() {
  const allLocked = pieces.every((piece) => piece.dataset.locked === "true");
  if (!allLocked) return;

  const existingButton = document.querySelector(".A_PuzzleWinButton");
  if (existingButton) return;

  const resultButton = document.createElement("a");
  resultButton.classList.add("A_PuzzleWinButton");
  resultButton.href = "../tests.html";
  resultButton.setAttribute("data-text", resultButton.textContent.trim());
}

function makePieceDraggable(piece) {
  let shiftX = 0;
  let shiftY = 0;

  function onPointerDown(event) {
    if (piece.dataset.locked === "true") return;

    event.preventDefault();

    const rect = piece.getBoundingClientRect();
    shiftX = event.clientX - rect.left;
    shiftY = event.clientY - rect.top;

    piece.classList.add("is-dragging");

    document.addEventListener("pointermove", onPointerMove);
    document.addEventListener("pointerup", onPointerUp);
  }

  function onPointerMove(event) {
    const layerRect = piecesLayer.getBoundingClientRect();

    let x = event.clientX - layerRect.left - shiftX;
    let y = event.clientY - layerRect.top - shiftY;

    const minX = 0;
    const minY = 0;
    const maxX = layerRect.width - PIECE_SIZE;
    const maxY = layerRect.height - PIECE_SIZE;

    if (x < minX) x = minX;
    if (y < minY) y = minY;
    if (x > maxX) x = maxX;
    if (y > maxY) y = maxY;

    piece.style.left = `${x}px`;
    piece.style.top = `${y}px`;
  }

  function onPointerUp() {
    piece.classList.remove("is-dragging");

    const nearestCorrectCell = findNearestCorrectCell(piece);

    if (nearestCorrectCell) {
      snapPieceToCell(piece, nearestCorrectCell);
      checkWin();
    }

    document.removeEventListener("pointermove", onPointerMove);
    document.removeEventListener("pointerup", onPointerUp);
  }

  piece.addEventListener("pointerdown", onPointerDown);
}

function initPuzzle() {
  if (!board || !piecesLayer) return;

  const piecesData = createPiecesData();

  piecesData.forEach((pieceData) => {
    const piece = createPiece(pieceData.row, pieceData.col);
    pieces.push(piece);
    makePieceDraggable(piece);
  });

  requestAnimationFrame(() => {
    placePiecesAroundBoard(pieces);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  initPuzzle();
});
