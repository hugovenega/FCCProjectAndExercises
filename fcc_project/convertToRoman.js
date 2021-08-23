function convertToRoman(num) {
  let preRoman = [];
  let roman= [];
  do { 
    preRoman.push(num % 10);
    num = Math.trunc(num /10);
  } while(num !== 0);
  for (let i = preRoman.length; i > 0; i--){
    switch (i) {
      case 4:
        let unitThousand = preRoman.pop();
        while (unitThousand != 0) {
          roman.push("M");
          unitThousand -= 1;}
        break
      case 3:
        let unitOfHundred = preRoman.pop();
        if (unitOfHundred == 9) {
          roman.push("CM");
          unitOfHundred = 0;
        }
        if (unitOfHundred >= 5) {
          roman.push("D");
          unitOfHundred -= 5;
          while (unitOfHundred != 0) {
            roman.push("C");
            unitOfHundred -= 1;
          }}
        if (unitOfHundred == 4) {
          roman.push("CD");
          unitOfHundred -= 4;
        } else {
          while (unitOfHundred != 0) {
            roman.push("C");
            unitOfHundred -= 1;
        }
        }
        break;
      case 2:
        let unitOfTen = preRoman.pop();
        if (unitOfTen == 9) {
          roman.push("XC");
          unitOfTen = 0;
        }
        if (unitOfTen >= 5) {
          roman.push("L");
          unitOfTen -= 5;
          while (unitOfTen != 0) {
            roman.push("X");
            unitOfTen -= 1;
          }}
        if (unitOfTen == 4) {
          roman.push("XL");
          unitOfTen -= 4;
        } else {
          while (unitOfTen != 0) {
            roman.push("X");
            unitOfTen -= 1;
        }
        }
        break;
      case 1:
        let unit = preRoman.pop();
        if (unit == 9) {
          roman.push("IX");
          unit = 0;
        }
        if (unit >= 5) {
          roman.push("V");
          unit -= 5;
          while (unit != 0) {
            roman.push("I");
            unit -= 1;
          }}
        if (unit == 4) {
          roman.push("IV");
          unit -= 4;
        } else {
          while (unit != 0) {
            roman.push("I");
            unit -= 1;
        }
        }
        
        break;
    }
  }
  ;
  return roman.join("");
 }
 
 console.log(convertToRoman(3666));