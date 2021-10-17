const drawingAreaSizePicker = document.querySelector('#drawing-area-size-picker');
const drawingAreaDiv = document.querySelector('#drawing-area');

const labelForDrawingAreaSize = document.querySelector('[for=drawing-area-size-picker]');
const colorPickerBrush = document.querySelector('#color-picker-brush');
const colorPickerBackground = document.querySelector('#color-picker-background');
const eraseButton = document.querySelector('#erase-button');

let chosenBrushColor = colorPickerBrush.value;
let chosenBackgroundColor = colorPickerBackground.value; 

addEventListeners();
refreshInputLabel();
generatePixelDivs();
changeBackgroundColor();

function generatePixelDivs() {
  drawingAreaDiv.innerHTML = '';

  let numberOfDivs = drawingAreaSizePicker.value;
  let sizeOfPixel  = (500 / numberOfDivs) + 'px';

  for (let i = 0; i < (numberOfDivs ** 2); i++) {
    let drawingAreaPixel = document.createElement('div');
    drawingAreaPixel.id = 'div' + i;
    drawingAreaPixel.classList.add('pixel');
    drawingAreaPixel.style.cssText = `
      width: ${sizeOfPixel};
      height: ${sizeOfPixel};`
    drawingAreaPixel.addEventListener('mouseenter', changePixelColor);
    drawingAreaPixel.addEventListener('mousedown', changePixelColor);

    drawingAreaDiv.appendChild(drawingAreaPixel);
  }
}

function changePixelColor(e) {
  if (e.buttons > 0) {
    e.target.style.backgroundColor = chosenBrushColor;
  }
}

function changeBrushColor() {
  chosenBrushColor = colorPickerBrush.value;
}

function changeBackgroundColor() {
  chosenBackgroundColor = colorPickerBackground.value;
  drawingAreaDiv.style.backgroundColor = chosenBackgroundColor;
}

function refreshInputLabel() {
  let valueOfInput = drawingAreaSizePicker.value;
  labelForDrawingAreaSize.textContent = `${valueOfInput}x${valueOfInput}`;
}

function addEventListeners() {
  drawingAreaSizePicker.addEventListener('input', refreshInputLabel);
  drawingAreaSizePicker.addEventListener('input', generatePixelDivs);
  colorPickerBrush.addEventListener('input', changeBrushColor);
  colorPickerBackground.addEventListener('input', changeBackgroundColor);
  eraseButton.addEventListener('click', generatePixelDivs);
}
