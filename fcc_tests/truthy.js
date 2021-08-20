function truthCheck(collection, pre) {
  let count = 0;
  for (let c in collection){
    if (collection[c].hasOwnProperty(pre) && Boolean(collection[c][pre])){
      count ++;
    }
  }
    
  
  return count == collection.length;
}

console.log(truthCheck([{"user": "Tinky-Winky", "sex": "" }, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex"));