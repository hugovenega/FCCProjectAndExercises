function rot13(str) {
  const strPLetter = str.split('');
  const getCodeLetters = function(letter) {
    if ((letter.charCodeAt(0) < 65) || (letter.charCodeAt(0) > 90)) {
      return (letter.charCodeAt(0));
    } if ((letter.charCodeAt(0) - 13) < 65) {
      const rest = (65 - (letter.charCodeAt(0) - 12));
      return (90 - rest);
    }
    return (letter.charCodeAt(0) - 13);
  };
  const getNewLetters = function(code) {
    return String.fromCharCode(code);
  };
  const arrayCodes = strPLetter.map((letter) => getCodeLetters(letter));
  const arrayNewLetters = arrayCodes.map((code) => getNewLetters(code));
  return arrayNewLetters.join('');
}
module.exports = rot13;
