import '../stylesheets/style.css'

// белый шум на фоне

const canvas = document.getElementById('noise')
const ctx = canvas.getContext('2d')

function resizeCanvas() {
  canvas.width = window.innerWidth
  canvas.height = window.innerHeight
}
resizeCanvas()
window.addEventListener('resize', resizeCanvas)
function drawNoiseFrame() {
  const w = canvas.width
  const h = canvas.height
  const imageData = ctx.createImageData(w, h)
  const buffer = imageData.data

  for (let i = 0; i < buffer.length; i += 4) {
    const shade = 120 + Math.random() * 130

    buffer[i] = shade
    buffer[i + 1] = shade
    buffer[i + 2] = shade
    buffer[i + 3] = 200
  }

  ctx.putImageData(imageData, 0, 0)
}

let lastFrameTime = 0
function animate(time) {
  if (time - lastFrameTime > 60) {
    drawNoiseFrame()
    lastFrameTime = time
  }

  requestAnimationFrame(animate)
}

drawNoiseFrame()
requestAnimationFrame(animate)

// шейпы растут

const lShapes = document.querySelectorAll('.l-shape')
const maxScale = 1.15
const growthSpeed = 0.0001

function onScrollLeft() {
  const scrollY = window.scrollY

  lShapes.forEach((shape) => {
    let scale = 1 + scrollY * growthSpeed
    if (scale > maxScale) {
      scale = maxScale
    }

    shape.style.transformOrigin = 'top right'
    shape.style.transform = `scale(${scale})`
  })
}

window.addEventListener('scroll', onScrollLeft)
onScrollLeft()

const rShapes = document.querySelectorAll('.r-shape')

function onScrollRight() {
  const scrollY = window.scrollY

  rShapes.forEach((shape) => {
    let scale = 1 + scrollY * growthSpeed
    if (scale > maxScale) {
      scale = maxScale
    }

    shape.style.transformOrigin = 'top left'
    shape.style.transform = `scale(${scale})`
  })
}

window.addEventListener('scroll', onScrollRight)
onScrollRight()
