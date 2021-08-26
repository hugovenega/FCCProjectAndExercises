const palindrome = require('./palindrome');

describe('testing with words and texts that are palindromes', () => {
  it('Taco cat = true', () => {
    expect(palindrome('Taco Cat')).toBe(true);
  });
  it('Noon = true', () => {
    expect(palindrome('Noon')).toBe(true);
  });
  it('Aibohphobia = true', () => {
    expect(palindrome('Aibohphobia')).toBe(true);
  });
});

describe('testing with words and texts that are palindromes using non-alphanumeric symbols', () => {
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

describe('testing with words and texts that are not palindromes', () => {
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