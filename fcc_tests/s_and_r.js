function myReplace(str, before, after) {
  let split = str.split(" ");
  for (let i = 0; i < split.length; i++){
    if (split[i] == before) {
      let inletters = split[i].split("");
      if (inletters[0].toUpperCase() == inletters[0]) {
       let afterInLetters = after.split("");
        afterInLetters[0] = afterInLetters[0].toUpperCase();
        afterInLetters = afterInLetters.join("");
        split[i] = afterInLetters;
      }else if (inletters[0].toLowerCase() == inletters[0]) { 
      let afterInLetters = after.split("");
      afterInLetters[0] = afterInLetters[0].toLowerCase();
      afterInLetters = afterInLetters.join("");
      split[i] = afterInLetters;}
      else{ 
      split[i]= after;
    }}
  }
  return split.join(" ");
}

console.log(myReplace("I think we should look up there", "up", "Down"));