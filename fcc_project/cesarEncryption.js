function rot13(str) {
  const strPLetter = str.split('');
  const arrayCodes = [];
  const arrayNewLetters = [];
  for (let i = 0; i < strPLetter.length; i += 1) {
    if ((strPLetter[i].charCodeAt(0) < 65) || (strPLetter[i].charCodeAt(0) > 90)) {
      arrayCodes.push(strPLetter[i].charCodeAt(0));
    } else if ((strPLetter[i].charCodeAt(0) - 13) < 65) {
      const rest = (65 - (strPLetter[i].charCodeAt(0) - 12));
      arrayCodes.push(90 - rest);
    } else {
      arrayCodes.push(strPLetter[i].charCodeAt(0) - 13);
    }
  }
  for (let i = 0; i < arrayCodes.length; i += 1) {
    arrayNewLetters.push(String.fromCharCode(arrayCodes[i]));
  }
  return (arrayNewLetters.join(''));
}
module.exports = rot13;
