// =================== Variáveis globais ===================
const firstColor = document.querySelector('.selected');
const allColors = document.getElementsByClassName('color');
const pixels = document.getElementsByClassName('pixel');
const clearButton = document.getElementById('clear-board');
const pixelPallet = document.getElementById('pixel-board');
const rows = document.getElementsByClassName('row');

// =================== end ===================

// =================== Funções construtivas ===================
function excludePixelTable() {
  pixelPallet.innerHTML = '';
}

function generatePixelRow(numberOfRows) {
  excludePixelTable();
  let tr;
  for (let i = 0; i < numberOfRows; i += 1) {
    tr = document.createElement('tr');
    tr.classList.add('row');
    pixelPallet.appendChild(tr);
  }
}

function generatePixelColumn(numberOfColumns) {
  let td;
  for (let i = 0; i < numberOfColumns; i += 1) {
    for (let a = 0; a < numberOfColumns; a += 1) {
      td = document.createElement('td');
      td.classList.add('pixel');
      rows[a].appendChild(td);
    }
  }
}
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
  for (let index = 1; index < allColors.length; index += 1) {
    allColors[index].style.backgroundColor = rgbRadom();
  }
}
// =================== end ===================

// =================== Funções interativas ===================
function removeSelected() {
  for (let i = 0; i < allColors.length; i += 1) {
    if (allColors[i].classList.contains('selected')) {
      allColors[i].classList.remove('selected');
    }
  }
}

function choosingOtherColor() {
  for (let i = 0; i < allColors.length; i += 1) {
    allColors[i].addEventListener('click', () => {
      removeSelected();
      allColors[i].classList.add('selected');
    });
  }
}

function extractBackground() {
  for (let i = 0; i < allColors.length; i += 1) {
    if (allColors[i].classList.contains('selected')) {
      return allColors[i].style.backgroundColor;
    }
  }
}
function paintPixel() {
  for (let i = 0; i < pixels.length; i += 1) {
    pixels[i].addEventListener('click', () => {
      pixels[i].style.backgroundColor = extractBackground();
    });
  }
}

function clearPixels() {
  for (let i = 0; i < pixels.length; i += 1) {
    clearButton.addEventListener('click', () => {
      pixels[i].style.backgroundColor = 'white';
    });
  }
}
// =================== end ===================

// Execução
window.onload = () => {
  generatePixelRow(5);
  generatePixelColumn(5);
  clearPixels();
  paintPixel();
  choosingOtherColor();
  colorsTable();
};
