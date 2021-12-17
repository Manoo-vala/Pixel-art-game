// =================== Variáveis globais ===================
const firstColor = document.querySelector('.selected');
// const otherColors = document.querySelectorAll('.color');
const allColors = document.getElementsByClassName('color');
const pixels = document.getElementsByClassName('pixel');
const pixelPallet = document.getElementById('color-palette');

// =================== end ===================

// =================== Funções construtivas ===================
// function excludePixelTable() {

// }

// function generatePixelTable() {

// }
// =================== end ===================

// =================== Funções de cores ===================
function rgbRadom() {
  const color1 = Math.ceil(Math.random() * 250);
  const color2 = Math.ceil(Math.random() * 250);
  const color3 = Math.ceil(Math.random() * 250);

  const randomColor = `rgb(${color1}, ${color2}, ${color3})`;
  return randomColor;
}

function colorsTable() {
  firstColor.style.backgroundColor = 'black';
  for (let index = 1; index < 4; index += 1) {
    allColors[index].style.backgroundColor = rgbRadom();
  }
}
colorsTable();
// =================== end ===================

function removeSelected() {
  for (let i = 0; i < allColors.length; i += 1) {
    if (allColors[i].classList.contains('selected')) {
      allColors[i].classList.remove('selected');
    }
  }
}

for (let i = 0; i < allColors.length; i += 1) {
  allColors[i].addEventListener('click', () => {
    removeSelected();
    allColors[i].classList.add('selected');
  });
}

function extractBackground() {
  for (let i = 0; i < allColors.length; i += 1) {
    if (allColors[i].classList.contains('selected')) {
      return allColors[i].style.backgroundColor;
    }
  }
}
for (let i = 0; i < pixels.length; i += 1) {
  pixels[i].addEventListener('click', () => {
    pixels[i].style.backgroundColor = extractBackground();
  });
}

const clearButton = document.getElementById('clear-board');
function clearPixels() {
  for (let i = 0; i < pixels.length; i += 1) {
    clearButton.addEventListener('click', () => {
      pixels[i].style.backgroundColor = 'white';
    });
  }
}
clearPixels();
