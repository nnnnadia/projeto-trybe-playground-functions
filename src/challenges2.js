/*
  Used documentation:
  - www.w3schools.com/
  - www.developer.mozilla.org/
*/

// Desafio 11
function writePhoneNumber(numberArr) {
  let phoneNumber = numberArr.join('');
  phoneNumber = `(${phoneNumber.slice(0, 2)}) ${phoneNumber.slice(2, 7)}-${phoneNumber.slice(7)}`;
  return phoneNumber;
}

function has11Digits(numberArr) {
  if (numberArr.length === 11) {
    return true;
  }
  return false;
}

function countsNumbers(numberArr) {
  let numbers = {
    0: 0,
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
    7: 0,
    8: 0,
    9: 0,
  };
  for (let number of numberArr) {
    numbers[`${number}`] += 1;
  }
  return numbers;
}

function repeatsThreeTimes(numberArr) {
  let numbers = countsNumbers(numberArr);
  for (let count in numbers) {
    if (numbers[count] > 2) {
      return true;
    }
  }
  return false;
}

function validArray(numberArr) {
  if (Math.min(...numberArr) < 0 || Math.max(...numberArr) > 9) {
    return false;
  }
  if (repeatsThreeTimes(numberArr)) {
    return false;
  }
  return true;
}

function generatePhoneNumber(numberArr) {
  if (has11Digits(numberArr) && validArray(numberArr)) {
    return writePhoneNumber(numberArr);
  }
  if (!has11Digits(numberArr)) {
    return 'Array com tamanho incorreto.';
  }
  if (!validArray(numberArr)) {
    return 'não é possível gerar um número de telefone com esses valores';
  }
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let triangleLines = [lineA, lineB, lineC];
  triangleLines.sort();
  let sum = triangleLines[1] + triangleLines[2];
  let absDif = Math.abs(triangleLines[1] - triangleLines[2]);
  if (triangleLines[0] < sum && triangleLines[0] > absDif) {
    return true;
  }
  return false;
}

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
