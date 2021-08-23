function palindrome(str) {
  const regex =/\W|_/gi;
  let strRemplaced = str.replace(regex, "");
  let strUpperCase = strRemplaced.toUpperCase();
  let strSplited = strUpperCase.split("");
  let strJoined = strSplited.reverse().join("");
  return (strJoined == strUpperCase ? true : false);

}
console.log(palindrome("Ana na"));
