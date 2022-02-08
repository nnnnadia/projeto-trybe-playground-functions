// Desafio 1
function compareTrue(valor1, valor2) {
  return valor1 && valor2;
}

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
  return area;
}

// Desafio 3
function splitSentence(sentence) {
  let sentenceArray = sentence.split(' ');
  return sentenceArray;
}

// Desafio 4
function concatName(nomeCompleto) {
  let ultimoPrimeiroNome = [];
  ultimoPrimeiroNome.push(nomeCompleto.slice(nomeCompleto.length - 1));
  ultimoPrimeiroNome.push(nomeCompleto.slice(0, 1));
  return ultimoPrimeiroNome.join(', ');
}

// Desafio 5
function footballPoints(wins, ties) {
  let totalPoints = wins * 3 + ties * 1;
  return totalPoints;
}

// Desafio 6
function highestCount(numberArr) {
  let maxNumber = Math.max(...numberArr);
  let frequencyCount = 0;
  for (let number of numberArr) {
    if (number === maxNumber) {
      frequencyCount += 1;
    }
  }
  return frequencyCount;
}

// Desafio 7
function calcDistance(mouse, cat) {
  let distance = 0;
  if ((mouse <= 0 && cat <= 0) || (mouse >= 0 && cat >= 0)) {
    distance = Math.abs(mouse - cat);
  } else {
    distance = Math.abs(mouse) + Math.abs(cat);
  }
  return distance;
}

function catAndMouse(mouse, cat1, cat2) {
  let distanceCat1 = calcDistance(mouse, cat1);
  let distanceCat2 = calcDistance(mouse, cat2);
  if (distanceCat1 <= distanceCat2) {
    if (distanceCat1 === distanceCat2) {
      return 'os gatos trombam e o rato foge';
    }
    return 'cat1';
  }
  return 'cat2';
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

// Desafio 10
function techList() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
