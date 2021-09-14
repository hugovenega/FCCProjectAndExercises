const arrayRomanSymbols = [
  ['X', 'V', 'I'], // Roman symbols to represent unity
  ['C', 'L', 'X'], // Roman symbols to represent unity of ten
  ['M', 'D', 'C'], // Roman symbols to represent unity of hundred
  ['', '', 'M'], // Roman symbols to represent unity of thousand
];
function convertNumberToRomanSymbols(number, arrayWithUnitySymbols) {
  const [highestNumberSymbol, mediumNumberSymbol, lowestNumberSymbol] = arrayWithUnitySymbols;
  const SymbolsToConcat = [];
  let unit = number;
  if (unit === 9) {
    SymbolsToConcat.push(lowestNumberSymbol, highestNumberSymbol);
    unit = 0;
  }
  if (unit >= 5) {
    SymbolsToConcat.push(mediumNumberSymbol);
    unit -= 5;
  }
  if (unit === 4) {
    SymbolsToConcat.push(lowestNumberSymbol, mediumNumberSymbol);
    unit -= 4;
  } else {
    while (unit !== 0) {
      SymbolsToConcat.push(lowestNumberSymbol);
      unit -= 1;
    }
  }
  return SymbolsToConcat.join('');
}

function convertToRoman(num) {
  const numbersSplitByUnit = [];
  let number = num;
  const romanSymbols = [];
  if (number > 3999) {
    return 'exceeds the maximum allowed which is 3999';
  }
  if (number < 1) {
    return 'The minimum to convert to a Roman numeral is 1';
  }
  do {
    // separate the number into units
    numbersSplitByUnit.push(number % 10);
    number = Math.trunc(number / 10);
  } while (number !== 0);

  for (let i = 0; i < numbersSplitByUnit.length; i += 1) {
    romanSymbols.push(convertNumberToRomanSymbols(numbersSplitByUnit[i], arrayRomanSymbols[i]));
  }

  return romanSymbols
    .reverse()
    .join('');
}

module.exports = convertToRoman;
