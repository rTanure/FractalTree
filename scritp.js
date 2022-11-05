const canvas = document.querySelector("canvas")
const ctx = canvas.getContext('2d')

const slider = document.querySelector("#slider")

const lineColor = "rgba(256, 256, 256, 1)"
const background = '#242424'
const canvasSize = 500
const reduction = 0.7

var angle

function setAngle() {
  angle = slider.value * Math.PI / 180
  main()
}
setAngle()


function configCanvas() {
  canvas.style.background = background

  canvas.width = canvasSize
  canvas.height = canvasSize
}

function main() {
  configCanvas()
  draw()
}
main()

function draw() {
  let len = 100
  ctx.translate(canvasSize/2, canvasSize)
  branch(len)
}

function branch(len) {
  drawLine(0, 0, 0, -len)
  ctx.translate(0, -len)
  
  if(len > 4) {
    ctx.save()
    ctx.rotate(angle)
    branch(len*reduction)
    ctx.restore()
    ctx.rotate(-angle)
    branch(len*reduction)
  }
  
  //drawLine(0, 0, 0,-len*reduction)
}

function drawLine(x1, y1, x2, y2) {
  ctx.beginPath()
  ctx.moveTo(x1, y1)
  ctx.lineTo(x2, y2)
  ctx.strokeStyle = lineColor
  ctx.stroke()
} 