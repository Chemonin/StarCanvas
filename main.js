const canvas = document.getElementById(`stars-container`);
const starColor = document.querySelector(`#color`);
const ctx = canvas.getContext(`2d`);
const starColorCtx = starColor.getContext(`2d`);
starColorCtx.fillStyle = `#ffffff`;
starColorCtx.fillRect(0, 0, starColor.width, starColor.height);
ctx.fillStyle = `#ffffff`;
ctx.fillRect(0, 0, canvas.width, canvas.height);
const colors = [`rgb(255, 0, 0)`, `rgb(0, 0, 255)`, `rgb(0, 255, 0)`, `rgb(255, 255, 0)`, `rgb(0, 0, 0)`];

colors.forEach((color, index) => {
  let x = 0;
  let y = 0;
  if (index < 3) {
    x = index * 150;
  } else {
    x = (index - 3) * 150;
    y = 150;
  }
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.moveTo(x + 55, y + 10);
  ctx.lineTo(x + 25, y + 104);
  ctx.lineTo(x + 100, y + 44);
  ctx.lineTo(x + 10, y + 44);
  ctx.lineTo(x + 85, y + 104);
  ctx.fill();
});

const onCanvasMousedown = function (evt) {
  const pixel = ctx.getImageData(evt.layerX, evt.layerY, 1, 1);
  const colorData = pixel.data;
  starColorCtx.clearRect(0, 0, starColor.width, starColor.height);
  starColorCtx.fillStyle = `rgb(${colorData[0]}, ${colorData[1]}, ${colorData[2]})`;
  starColorCtx.fillRect(0, 0, starColor.width, starColor.height);
}

canvas.addEventListener(`mousedown`, onCanvasMousedown);
