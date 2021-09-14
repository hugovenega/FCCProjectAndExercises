const NOT_A_LETTER_OR_NUMBER = /\W|_/gi;

function reverseString(str) {
  return str.split('')
    .reverse()
    .join('');
}

function removeNotValidCharacters(str) {
  return str
    .replace(NOT_A_LETTER_OR_NUMBER, '')
    .toUpperCase();
}

function palindrome(str) {
  const cleanedString = removeNotValidCharacters(str);
  return cleanedString === reverseString(cleanedString);
}

module.exports = palindrome;
