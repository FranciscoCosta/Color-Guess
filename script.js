const cores = document.getElementsByClassName('ball');
const rgbValue = document.getElementById('rgb-color');
const mudatxt = document.getElementById('answer');
const resetGame = document.getElementById('reset-game');
const points = document.getElementById('score');
window.ponto = 0;
resetGame.addEventListener('click', restart);

function restart() {
  coresAlt();
  mudatxt.innerText = '"Escolha uma cor"';
}

function getRandom() {
  let coresR = '';
  let r = Math.random() * (250 - 1) + 1;
  let g = Math.random() * (250 - 1) + 1;
  let b = Math.random() * (250 - 1) + 1;
  r = Math.round(r);
  g = Math.round(g);
  b = Math.round(b);
  coresR = 'rgb' + '(' + r + ', ' + g + ', ' + b + ')';
  window.coresRan = coresR;
}

function coresAlt() {
  let guardaBG = [];
  for (let i = 0; i < cores.length; i += 1) {
    getRandom();
    cores[i].style.backgroundColor = window.coresRan;
    guardaBG.push(cores[i].style.backgroundColor);
  }
  let corAdvinhar = guardaBG[Math.floor(Math.random() * guardaBG.length)];
  window.cor = corAdvinhar;
  rgbValue.innerText = window.cor;
}

function escolheBola() {
  for (let index = 0; index < cores.length; index++) {
    cores[index].addEventListener('click', escolheCor);
  }
}

function escolheCor() {
  if (this.style.backgroundColor == window.cor) {
    mudatxt.innerText = 'Acertou!';
    window.ponto = window.ponto + 3;
  } else {
    mudatxt.innerText = 'Errou! Tente novamente!';
  }
  pontuacao();
}

function pontuacao() {
  points.innerText = window.ponto;
}

window.onload = coresAlt();
escolheBola();
