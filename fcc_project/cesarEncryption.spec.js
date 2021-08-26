const rot13 = require('./cesarEncryption');

describe('testing encrypted words', () => {
  it('GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.= "THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG."', () => {
    expect(rot13('GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.')).toBe('THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.');
  });
  it('SERR PBQR PNZC= "FREE CODE CAMP"', () => {
    expect(rot13('SERR PBQR PNZC')).toBe('FREE CODE CAMP');
  });
  it('SERR CVMMN!= "FREE PIZZA!"', () => {
    expect(rot13('SERR CVMMN!')).toBe('FREE PIZZA!');
  });
});
