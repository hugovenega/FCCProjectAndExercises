function factory (num, hi, med, low){
  let element = [];
  let unit = num;
  if (unit == 9) {
    element.push(low,hi);
    unit = 0;
  }
  if (unit >= 5) {
    element.push(med);
    unit -= 5; 
    while (unit != 0) {
      element.push(low);
      unit -= 1;
    }
  }
  if (unit == 4) {
    element.push(low,med);
    unit -= 4;
  } else {
    while (unit != 0) {
      element.push(low);
      unit -= 1;
   }
}
  return element.join("");
}
console.log(factory(9, "M","D","C"));