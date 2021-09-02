const array = [];
let rest = 136.41;
function sameThing(inBox, bill, value, resto) {
  let box = inBox;
  let theRest = resto;
  let countBill = 0;
  while (box >= value && theRest >= value) {
    box -= value;
    theRest -= value;
    countBill += 1;
  }
  const money = countBill * value;
  array.push([bill, money]);
  return theRest;
}
rest = sameThing(100, 'ONE HUNDRED', 100, rest);
rest = sameThing(20, 'TWENTY', 20, rest);
rest = sameThing(10, 'TEN', 10, rest);
rest = sameThing(5, 'FIVE', 5, rest);
rest = sameThing(1, 'ONE', 1, rest);
rest = sameThing(0.25, 'QUARTER', 0.25, rest);
rest = sameThing(0.10, 'DIME', 0.10, rest);
rest = sameThing(0.05, 'NICKEL', 0.05, rest);
rest = sameThing(0.00, 'PENNY', 0.01, parseFloat(rest.toFixed(2)));
console.log(array, rest);
