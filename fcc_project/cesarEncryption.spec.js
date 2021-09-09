const rot13 = require('./cesarEncryption');

const expectations = [
  ['GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.', 'THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.'],
  ['SERR PBQR PNZC', 'FREE CODE CAMP'],
  ['SERR CVMMN!', 'FREE PIZZA!'],
];

describe('cesarEntryption', () => {
  it('should rotate a set of expectations', () => {
    expectations.forEach(([input, expected]) => {
      expect(rot13(input)).toBe(expected);
    });
  });
});
