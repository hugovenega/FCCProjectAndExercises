const palindrome = require('./palindrome');

describe('palindrome', () => {
  describe('words that are palindromes', () => {
    const palindromesWords = ['Taco Cat', 'Noon', 'Aibohphobia'];
    palindromesWords.forEach((word) => {
      it(`should return true for valid palindrome: ${word}`, () => {
        expect(palindrome(word)).toBe(true);
      });
    });
  });

  describe('texts and words that are palindromes using non-alphanumeric symbols', () => {
    const palindromesTextsAndWordsWithAlphanumerics = ['Mr. Owl ate my metal worm', 'Eva, can I stab bats in a cave?', 'E$$y?!e'];
    palindromesTextsAndWordsWithAlphanumerics.forEach((word) => {
      it(`should return true for valid palindrome: ${word}`, () => {
        expect(palindrome(word)).toBe(true);
      });
    });
  });

  describe('texts and words that are not palindromes', () => {
    const notPalindromes = ['Spectator', 'Cinema', 'In the real Academy'];
    notPalindromes.forEach((word) => {
      it(`should return false for valid palindrome: ${word}`, () => {
        expect(palindrome(word)).toBe(false);
      });
    });
  });
});

