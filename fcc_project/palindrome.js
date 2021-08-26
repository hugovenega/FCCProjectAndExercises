function palindrome(str) {
  const regex = /\W|_/gi;
  // const strRemplaced = str.replace(regex, '');
  // const strUpperCase = strRemplaced.toUpperCase();
  // const strSplited = strUpperCase.split('');
  // const strJoined = strSplited.reverse().join('');

  const firstPart = str
    .replace(regex, '')
    .toUpperCase();
  const secondPart = firstPart
    .split('')
    .reverse()
    .join('');

  return (firstPart === secondPart);
}
console.log(palindrome('Sopa apos'));
