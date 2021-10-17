const drawingAreaSizePicker = document.querySelector('#drawing-area-size-picker');
const drawingAreaDiv = document.querySelector('#drawing-area');
const colorPicker = document.querySelector('#color-picker');
const labelForDrawingAreaSize = document.querySelector('[for=drawing-area-size-picker]');

let chosenColor = document.querySelector('#color-picker').value;

addEventListeners();
refreshInputLabel();
generatePixelDivs();

function generatePixelDivs() {
  drawingAreaDiv.innerHTML = '';

  let numberOfDivs = drawingAreaSizePicker.value;
  let sizeOfPixel  = (400 / numberOfDivs) + 'px';

  for (let i = 0; i < (numberOfDivs ** 2); i++) {
    let drawingAreaPixel = document.createElement('div');
    drawingAreaPixel.id = 'div' + i;
    drawingAreaPixel.classList.add('pixel');
    drawingAreaPixel.style.cssText = `background-color: white;
      width: ${sizeOfPixel};
      height: ${sizeOfPixel};`
    drawingAreaPixel.addEventListener('mouseenter', changePixelColor);
    drawingAreaPixel.addEventListener('mousedown', changePixelColor);

    drawingAreaDiv.appendChild(drawingAreaPixel);
  }
}

function changePixelColor(e) {
  if (e.buttons > 0) {
    e.target.style.backgroundColor = chosenColor;
  }
}

function changeColor(e) {
  chosenColor = e.target.value;
}

function refreshInputLabel() {
  let valueOfInput = drawingAreaSizePicker.value;
  labelForDrawingAreaSize.textContent = `${valueOfInput}x${valueOfInput}`;
}

function addEventListeners() {
  drawingAreaSizePicker.addEventListener('input', refreshInputLabel);
  drawingAreaSizePicker.addEventListener('input', generatePixelDivs);
  colorPicker.addEventListener('input', changeColor);
}
