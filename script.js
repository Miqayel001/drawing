const canvas = document.getElementById("drawing-board")
const context = canvas.getContext('2d')

canvas.width = 1000;
canvas.height = 500;

context.fillStyle = 'white'
context.fillRect(0, 0, canvas.width, canvas.height)


const clearBtn = document.getElementById("clear")
const colorPen = document.getElementById("color")
const lineSize = document.getElementById("line-width")

clearBtn.addEventListener('click', () => {
    context.fillRect(0, 0, canvas.width, canvas.height)
})

colorPen.addEventListener('change', () => {
    context.strokeStyle = colorPen.value
})

lineSize.addEventListener('change', () => {
    context.lineWidth = lineSize.value
})

const draw = (e) => {
    context.lineTo(e.offsetX, e.offsetY)
    context.stroke()
}

canvas.addEventListener("mousedown", () => {
    context.beginPath()
    canvas.addEventListener("mousemove", draw)

})

window.addEventListener("mouseup", () => {
    canvas.removeEventListener("mousemove", draw)
    context.closePath()

})