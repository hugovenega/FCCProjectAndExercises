function translatePigLatin(str) {
  const vocal = (letter) => ((letter == "a") ||(letter == "e") ||(letter == "i") ||(letter == "o") ||(letter == "u"));
  let split = str.split("");
  if ((split[0] == "a")||(split[0] == "e")||(split[0] == "i")||(split[0] == "o")||(split[0] == "u")){
   split.push("w","a","y"); 
  }else if ((split.some(vocal) == false)) {
    split.push("a","y");
  } else { let f=0;
    while ((split[f] !== "a")&&(split[f] !== "e")&&(split[f] !== "i")&&(split[f] !== "o")&&(split[f] !== "u")){
    split.push(split[f]);
    delete split[f];
    f += 1;
    }
    split.push("a","y");
  }
  
  return split.join("");
}

console.log(translatePigLatin("qwrty"));