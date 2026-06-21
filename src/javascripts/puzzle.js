console.clear();

import puzzleImage from "../images/tests/jigsaw.webp";

const PUZZLE_SIZE = 4;
const SNAP_RADIUS = 110;

const board = document.querySelector(".A_Puzzle");
const piecesLayer = document.querySelector(".C_PuzzlePieces");
const cells = Array.from(document.querySelectorAll(".Q_PartPuzzle"));
const uploadButton = document.getElementById("Upload");
const mainButtons = document.querySelector(".W_MainButtons");
const heading = document.querySelector(".Q_Header2Text");

let pieces = [];
let currentImage = puzzleImage;
let uploadedImageUrl = null;

function getPuzzleMetrics() {
  const boardRect = board.getBoundingClientRect();
  const pieceSize = boardRect.width / PUZZLE_SIZE;

  return {
    boardSize: boardRect.width,
    pieceSize,
  };
}

function createPiecesData() {
  const data = [];

  for (let row = 0; row < PUZZLE_SIZE; row++) {
    for (let col = 0; col < PUZZLE_SIZE; col++) {
      data.push({ row, col });
    }
  }

  return data.sort(() => Math.random() - 0.5);
}

function createPiece(row, col, imageUrl) {
  const piece = document.createElement("div");
  const metrics = getPuzzleMetrics();

  piece.classList.add("Q_PuzzlePiece");
  piece.dataset.row = String(row);
  piece.dataset.col = String(col);
  piece.dataset.locked = "false";

  piece.style.width = `${metrics.pieceSize}px`;
  piece.style.height = `${metrics.pieceSize}px`;
  piece.style.backgroundImage = `url("${imageUrl}")`;
  piece.style.backgroundSize = `${metrics.boardSize}px ${metrics.boardSize}px`;
  piece.style.backgroundPosition = `-${col * metrics.pieceSize}px -${row * metrics.pieceSize}px`;

  return piece;
}

function placePiecesAroundBoard(puzzlePieces) {
  const boardRect = board.getBoundingClientRect();
  const layerRect = piecesLayer.getBoundingClientRect();
  const metrics = getPuzzleMetrics();

  const pieceSize = metrics.pieceSize;
  const gap = Math.max(8, pieceSize * 0.12);

  const isMobile = window.matchMedia("(max-width: 440px)").matches;

  if (isMobile) {
    const cols = 4;
    const mobileGap = Math.max(8, pieceSize * 0.12);
    const totalWidth = cols * pieceSize + (cols - 1) * mobileGap;
    const startX = Math.max(0, (layerRect.width - totalWidth) / 2);

    puzzlePieces.forEach((piece, index) => {
      const col = index % cols;
      const row = Math.floor(index / cols);

      const x = startX + col * (pieceSize + mobileGap);
      const y = row * (pieceSize + mobileGap);

      piece.dataset.startX = String(x);
      piece.dataset.startY = String(y);

      piece.style.left = `${x}px`;
      piece.style.top = `${y}px`;

      piecesLayer.appendChild(piece);
    });

    return;
  }

  const boardLeft = boardRect.left - layerRect.left;
  const boardTop = boardRect.top - layerRect.top;
  const boardRight = boardLeft + boardRect.width;
  const boardHeight = boardRect.height;

  const leftAreaWidth = boardLeft;
  const rightAreaWidth = layerRect.width - boardRight;

  const leftCols = leftAreaWidth >= pieceSize * 2 + gap * 3 ? 2 : 1;
  const rightCols = rightAreaWidth >= pieceSize * 2 + gap * 3 ? 2 : 1;

  const leftBaseX = Math.max(gap, boardLeft - leftCols * pieceSize - leftCols * gap);
  const rightBaseX = Math.min(boardRight + gap, layerRect.width - rightCols * pieceSize - gap);

  puzzlePieces.forEach((piece, index) => {
    const isLeft = index < 8;
    const localIndex = isLeft ? index : index - 8;
    const cols = isLeft ? leftCols : rightCols;

    const col = localIndex % cols;
    const row = Math.floor(localIndex / cols);
    const rows = Math.ceil(8 / cols);

    const x = (isLeft ? leftBaseX : rightBaseX) + col * (pieceSize + gap);
    const yStep = rows > 1 ? (boardHeight - pieceSize) / (rows - 1) : 0;
    const y = boardTop + row * yStep;

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

function showRestartButton() {
  const existingRestartButton = document.getElementById("RestartPuzzle");

  if (existingRestartButton) return;

  const restartButton = document.createElement("button");

  restartButton.id = "RestartPuzzle";
  restartButton.classList.add("A_Button");
  restartButton.innerText = "начать заново";

  restartButton.addEventListener("click", () => {
    resetPuzzle(currentImage);
  });

  mainButtons.insertBefore(restartButton, uploadButton);
}

function hideRestartButton() {
  const restartButton = document.getElementById("RestartPuzzle");

  if (restartButton) {
    restartButton.remove();
  }
}

function checkWin() {
  const allLocked = pieces.every((piece) => piece.dataset.locked === "true");

  if (!allLocked) return;

  if (heading) {
    heading.innerText = "УРА! ПАЗЛ СОБРАН!";
    heading.dataset.text = "УРА! ПАЗЛ СОБРАН!";
  }

  showRestartButton();
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
    const metrics = getPuzzleMetrics();
    const pieceSize = metrics.pieceSize;

    let x = event.clientX - layerRect.left - shiftX;
    let y = event.clientY - layerRect.top - shiftY;

    const minX = 0;
    let minY = 0;

    if (window.matchMedia("(max-width: 440px)").matches) {
      const boardRect = board.getBoundingClientRect();
      minY = boardRect.top - layerRect.top;
    }
    const maxX = layerRect.width - pieceSize;
    const maxY = layerRect.height - pieceSize;

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

  const piecesData = createPiecesData();

  piecesData.forEach((pieceData) => {
    const piece = createPiece(pieceData.row, pieceData.col, currentImage);

    pieces.push(piece);
    makePieceDraggable(piece);
  });

  requestAnimationFrame(() => {
    placePiecesAroundBoard(pieces);
  });
}

function initUploadButton() {
  if (!uploadButton) return;

  const fileInput = document.createElement("input");

  fileInput.type = "file";
  fileInput.accept = "image/*";
  fileInput.style.display = "none";

  document.body.appendChild(fileInput);

  uploadButton.addEventListener("click", () => {
    fileInput.click();
  });

  fileInput.addEventListener("change", () => {
    const file = fileInput.files[0];

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
  resetPuzzle(puzzleImage);
  initUploadButton();
}

document.addEventListener("DOMContentLoaded", () => {
  initPuzzle();
});
