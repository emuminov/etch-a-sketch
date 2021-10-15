const drawingAreaSizePicker = document.querySelector('#drawing-area-size-picker');
const colorPicker = document.querySelector('#color-picker');
const numberOfDivs = ``;
let labelForDrawingAreaSize = document.querySelector('[for=drawing-area-size-picker]');
let chosenColor = document.querySelector('#color-picker').value;

function generatePixelDivs(numberOfDivs) {
  let drawingAreaDiv = document.querySelector('#drawing-area');
  let sizeOfPixel  = 500 / numberOfDivs + 'px';

  for (let i = 0; i < (numberOfDivs ** 2) ; i++) {
    let drawingAreaPixel = document.createElement('div');
    drawingAreaPixel.id = 'div' + i;
    drawingAreaPixel.style.cssText = `background-color: white;
      width: ${sizeOfPixel};
      height: ${sizeOfPixel}`
    drawingAreaPixel.addEventListener('mouseover', changePixelColor);

    refreshInputLabel();
    drawingAreaDiv.appendChild(drawingAreaPixel);
    // console.log(i);
  }
}

function changePixelColor(e) {
  e.target.style.backgroundColor = chosenColor;
}

function changeColor(e) {
  chosenColor = e.target.value;
}

function refreshInputLabel() {
  let valueOfInput = drawingAreaSizePicker.value;
  labelForDrawingAreaSize.textContent = `${valueOfInput}x${valueOfInput}`;
}

drawingAreaSizePicker.addEventListener('input', refreshInputLabel);
colorPicker.addEventListener('input', changeColor);
generatePixelDivs(16);
