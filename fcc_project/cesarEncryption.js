const A_ASCII = 65;
const Z_ASCII = 90;
const ROT = 13;

function fromCodeToLetter(code) {
  return String.fromCharCode(code);
}

function letterOutOfRange(letter) {
  return letter < A_ASCII || letter > Z_ASCII;
}

function fromLetterToCode(letter) {
  return letter.charCodeAt(0);
}

function rotate(letterCode) {
  if (letterOutOfRange(letterCode)) {
    return letterCode;
  }
  if (letterCode - ROT < A_ASCII) {
    const rest = A_ASCII - letterCode + ROT - 1;
    return Z_ASCII - rest;
  }
  return letterCode - ROT;
}

function cesarEncryption(str) {
  return str
    .split('')
    .map(fromLetterToCode)
    .map(rotate)
    .map(fromCodeToLetter)
    .join('');
}

module.exports = cesarEncryption;
