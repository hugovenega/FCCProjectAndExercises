function convertHTML(str){
  let html = str.split("");
  const entity = [];
  const findEntity = function (char) {
    switch (char) {
      case "'": 
        entity.push(["&apos;"]);
        break;
      case '"':
        entity.push(["&quot;"]);
        break;
      case "<":
        entity.push(["&lt;"]);
        break;
      case ">":
        entity.push(["&gt;"]);
        break;
      case "&":
        entity.push(["&amp;"]);
        break;
      default: 
        entity.push(char);
        break;
    }
  };
  html.forEach(element => findEntity(element));
  return entity.join(""); 
}

console.log(convertHTML("Hello world & < > ' "));