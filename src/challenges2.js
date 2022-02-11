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
countsNumbers([1, 2, 3, 4, 5, 9, 7, 8, 9, 9, 1]);

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

// console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1]));

// Desafio 12
function triangleCheck() {
  // seu código aqui
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
