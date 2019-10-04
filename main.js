const canvas = document.getElementById(`stars-container`);
const starColor = document.querySelector(`#color`);
const ctx = canvas.getContext(`2d`);
const colors = [`rgb(255, 0, 0)`, `rgb(0, 0, 255)`, `rgb(0, 255, 0)`, `rgb(255, 255, 0)`, `rgb(0, 0, 0)`];

const star = new Path2D();
star.moveTo(55, 10);
star.lineTo(25, 104);
star.lineTo(100, 44);
star.lineTo(10, 44);
star.lineTo(85, 104);
star.lineTo(55, 10);

colors.forEach((color, index) => {
  let x = 0;
  let y = 0;
  if (index < 3) {
    x = index;
  } else {
    x = index - 3;
    y = 150;
  }
  ctx.save();
  ctx.fillStyle = color;
  ctx.translate(x * 150, y);
  ctx.fill(star);
  ctx.restore();
});

const onCanvasMousedown = function (evt) {
  const pixel = ctx.getImageData(evt.layerX, evt.layerY, 1, 1);
  const colorData = pixel.data;
  console.log(colorData);
  starColor.style.backgroundColor = `rgb(${colorData[0]}, ${colorData[1]}, ${colorData[2]})`;
}

canvas.addEventListener(`mousedown`, onCanvasMousedown);
