function palindrome(str) {
  const regex = /\W|_/gi;
  const firstPart = str
    .replace(regex, '')
    .toUpperCase();
  const secondPart = firstPart
    .split('')
    .reverse()
    .join('');

  return (firstPart === secondPart);
}

module.exports = palindrome;
