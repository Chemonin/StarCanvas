const canvas = document.getElementById(`stars-container`);
const starColor = document.querySelector(`#color`);
const ctx = canvas.getContext(`2d`);
const starColorCtx = starColor.getContext(`2d`);
starColorCtx.fillStyle = `#ffffff`;
starColorCtx.fillRect(0, 0, starColor.width, starColor.height);
ctx.fillStyle = `#ffffff`;
ctx.fillRect(0, 0, canvas.width, canvas.height);
const colors = [`rgb(255, 0, 0)`, `rgb(0, 0, 255)`, `rgb(0, 255, 0)`,
`rgb(255, 255, 0)`, `rgb(0, 0, 0)`,];

const renderStars = function () {
  let startCordX = 0;
  let startCordY = 0;
  colors.forEach((color, index) => {

    if (startCordX >= canvas.width) {
      startCordX = 0;
      startCordY += 200;
    }
    if (startCordY >= canvas.height) {
      return;
    }
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.moveTo(startCordX + 83, startCordY + 15);
    ctx.lineTo(startCordX + 38, startCordY + 156);
    ctx.lineTo(startCordX + 150, startCordY + 66);
    ctx.lineTo(startCordX + 15, startCordY + 66);
    ctx.lineTo(startCordX + 126, startCordY + 156);
    ctx.fill();
    startCordX += 200;
  });
};

renderStars();

const onCanvasMousedown = function (evt) {
  const pixel = ctx.getImageData(evt.layerX, evt.layerY, 1, 1);
  const colorData = pixel.data;
  starColorCtx.clearRect(0, 0, starColor.width, starColor.height);
  starColorCtx.fillStyle = `rgb(${colorData[0]}, ${colorData[1]}, ${colorData[2]})`;
  starColorCtx.fillRect(0, 0, starColor.width, starColor.height);
  starColor.style.boxShadow = `0 0 5px 10px rgb(${colorData[0]}, ${colorData[1]}, ${colorData[2]})`;
}

canvas.addEventListener(`mousedown`, onCanvasMousedown);
