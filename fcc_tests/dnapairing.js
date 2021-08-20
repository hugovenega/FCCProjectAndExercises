function pairElement(str){
  let firstOfPair = str.split("");
  const capsuleOfPairs = [];
  const findPair = function (char) {
    switch (char) {
      case "A": 
        capsuleOfPairs.push([char, "T"]);
        break;
      case "C":
        capsuleOfPairs.push([char,"G"]);
        break;
      case "G":
        capsuleOfPairs.push([char,"C"]);
        break;
      case "T":
        capsuleOfPairs.push([char,"A"]);
        break;
    }
  };
  firstOfPair.forEach(element => findPair(element));
  return capsuleOfPairs;
}
console.log(pairElement("ACCCATTGGTACGT"));