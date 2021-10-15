const chosenColor = 'yellow';
const numberOfDivs = ``;

function fillDrawingPageWithDivs(numberOfDivs) {
  let drawingAreaDiv = document.querySelector('#drawing-area');
  let sizeOfPixel  = 500 / numberOfDivs + 'px';

  for (let i = 0; i < (numberOfDivs ** 2) ; i++) {
    let drawingAreaPixel = document.createElement('div');
    drawingAreaPixel.id = 'div' + i;
    drawingAreaPixel.style.cssText = `background-color: black;
      width: ${sizeOfPixel};
      height: ${sizeOfPixel}`
    drawingAreaPixel.addEventListener('mouseover', changePixelColor);

    drawingAreaDiv.appendChild(drawingAreaPixel);
    console.log(i);
  }
}

function changePixelColor(e) {
  e.target.style.backgroundColor = chosenColor;
}

fillDrawingPageWithDivs(16);
