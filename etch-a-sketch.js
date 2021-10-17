const drawingAreaSizePicker = document.querySelector('#drawing-area-size-picker');
const drawingAreaDiv = document.querySelector('#drawing-area');

const labelForDrawingAreaSize = document.querySelector('[for=drawing-area-size-picker]');
const colorPickerBrush = document.querySelector('#color-picker-brush');
const colorPickerBackground = document.querySelector('#color-picker-background');

const buttons = document.querySelectorAll('[data-mode]');
const coloringButton = document.querySelector('[data-mode="rainbow"]');
const rainbowButton = document.querySelector('[data-mode="rainbow"]');
const clearButton = document.querySelector('#clear-button');

let chosenBrushColor = colorPickerBrush.value;
let chosenBackgroundColor = colorPickerBackground.value; 

const RAINBOW_COLORS = ['Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Indigo', 'Violet'];
let mode = 'rainbow';

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
    if (mode === 'coloring') {
      e.target.style.backgroundColor = chosenBrushColor;
    } else if (mode === 'rainbow') {
      let rainbowColor = RAINBOW_COLORS[Math.ceil(Math.random() * 7) - 1];
      e.target.style.backgroundColor = rainbowColor;
      rainbowButton.style.backgroundColor = rainbowColor;
    } else if (mode === 'erasing') {
      e.target.style.backgroundColor = '';
    }
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

function changeMode(e) {
  rainbowButton.style.backgroundColor = '';
  buttons.forEach(button => button.classList.remove('button-active'));
  mode = e.target.dataset.mode;
  e.target.classList.add('button-active');
}

function addEventListeners() {
  drawingAreaSizePicker.addEventListener('input', refreshInputLabel);
  drawingAreaSizePicker.addEventListener('input', generatePixelDivs);

  colorPickerBrush.addEventListener('input', changeBrushColor);
  colorPickerBackground.addEventListener('input', changeBackgroundColor);

  buttons.forEach(button => button.addEventListener('click', changeMode));
  clearButton.addEventListener('click', generatePixelDivs);
}
