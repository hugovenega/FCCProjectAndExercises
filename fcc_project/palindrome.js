function palindrome(str) {
  const regex =/\W|_/gi;
  let strRemplaced = str.replace(regex, "");
  let strTrimed = strRemplaced.toUpperCase().trim();
    console.log(strTrimed);
  let strSplited = strTrimed.split("");
  let strJoined = strSplited.reverse().join("");
    console.log(strJoined);
  return (strJoined == strTrimed ? true : false);

}
console.log(palindrome("not a palindrome"));
console.log([2,3,4].reverse());