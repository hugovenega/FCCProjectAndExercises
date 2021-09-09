const palindrome = require('./palindrome');

describe('palindrome', () => {
  describe('words that are palindromes', () => {
    const palindromes = ['Taco Cat', 'Noon', 'Aibohphobia'];
    palindromes.forEach((word) => {
      it(`should return true for valid palindrome: ${word}`, () => {
        expect(palindrome(word)).toBe(true);
      });
    });
  });
});

describe.skip('testing with words and texts that are palindromes using non-alphanumeric symbols', () => {
  it('E$$y?!e = true', () => {
    expect(palindrome('E$$y?!e')).toBe(true);
  });
  it('Mr. Owl ate my metal worm = true', () => {
    expect(palindrome('Mr. Owl ate my metal worm')).toBe(true);
  });
  it('Eva, can I stab bats in a cave? = true', () => {
    expect(palindrome('Eva, can I stab bats in a cave?')).toBe(true);
  });
});

describe.skip('testing with words and texts that are not palindromes', () => {
  it('Spectator = false', () => {
    expect(palindrome('Spectator')).toBe(false);
  });
  it('Example', () => {
    expect(palindrome('Example = false')).toBe(false);
  });
  it('in the real academy = false', () => {
    expect(palindrome('in the real academy')).toBe(false);
  });
});
