const convertToRoman = require('./convertToRoman');
const thousandUnitExpectations = [
  [3000, 'MMM'],
  [2000, 'MM'],
  [1000, 'M'],
  [500, 'D'],
  [300, 'CCC'],
  [700, 'DCC'],
  [100, 'C'],
  [10, 'X'],
  [40, 'XL'],
  [90, 'XC'],
  [10, 'X'],
  [5, 'V'],
  [4, 'IV'],
  [1355, 'MCCCLV'],
  [2891, 'MMDCCCXCI'],
  [103, 'CIII'],
  [234, 'CCXXXIV'],
  [4000, 'exceeds the maximum allowed which is 3999'],
  [-1, 'The minimum to convert to a Roman numeral is 1'],
];

describe('ConvertToRoman', () => {
  it('should convert a set of expectations', () => {
    thousandUnitExpectations.forEach(([input, expected]) => {
      expect(convertToRoman(input)).toBe(expected);
    });
  });
});
