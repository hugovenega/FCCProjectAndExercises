function convertToRoman(num) {
  let preRoman = [];
  let roman= [];
  do { /* separate the number into units*/
    preRoman.push(num % 10);
    num = Math.trunc(num /10);
  } while(num !== 0);
  /*With the factory function it translates the unit with its respective Roman symbols assigned in its call.*/
  const factory = function(num, hi, med, low) {
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

  for (let i = preRoman.length; i > 0; i--){
    switch (i) {
      case 4:
        let unitThousand = preRoman.pop();
        while (unitThousand != 0) {
          roman.push("M");
          unitThousand -= 1;}
        break
      case 3:
        roman.push(factory(preRoman.pop(),"M", "D", "C"));
        break;
      case 2:
        roman.push(factory(preRoman.pop(),"C", "L", "X"));
        break;
      case 1:
        roman.push(factory(preRoman.pop(),"X", "V", "I"));
        break;
    }
  }
  ;
  return roman.join("");
 }
 
 console.log(convertToRoman(3999));