/*
  Used documentation:
  - www.w3schools.com/
  - www.developer.mozilla.org/
*/

// Desafio 1
function compareTrue(value1, value2) {
  return value1 && value2;
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
function concatName(completeName) {
  let lastFirstName = [];
  lastFirstName.push(completeName.slice(completeName.length - 1));
  lastFirstName.push(completeName.slice(0, 1));
  return lastFirstName.join(', ');
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
function makeWeirdWord(number) {
  if (number % 5 !== 0) {
    if (number % 3 !== 0) {
      return 'bug!';
    }
    return 'fizz';
  }
  if (number % 3 === 0) {
    return 'fizzBuzz';
  }
  return 'buzz';
}

function fizzBuzz(numberArr) {
  let weirdArr = [];
  for (let number of numberArr) {
    weirdArr.push(makeWeirdWord(number));
  }
  return weirdArr;
}

// Desafio 9
function encode(string) {
  let encodedString = string;
  encodedString = encodedString.replace(/a/g, 1); //
  encodedString = encodedString.replace(/e/g, 2);
  encodedString = encodedString.replace(/i/g, 3);
  encodedString = encodedString.replace(/o/g, 4);
  encodedString = encodedString.replace(/u/g, 5);
  return encodedString;
}

function decode(string) {
  let decodedString = string;
  decodedString = decodedString.replace(/1/g, 'a');
  decodedString = decodedString.replace(/2/g, 'e');
  decodedString = decodedString.replace(/3/g, 'i');
  decodedString = decodedString.replace(/4/g, 'o');
  decodedString = decodedString.replace(/5/g, 'u');
  return decodedString;
}

// Desafio 10
function techList(techArr, userName) {
  let techArrWithName = [];
  if (techArr.length === 0) {
    return 'Vazio!';
  }
  techArr.sort();
  for (let i = 0; i < techArr.length; i += 1) {
    techArrWithName.push({
      tech: techArr[i],
      name: userName,
    });
  }
  return techArrWithName;
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
