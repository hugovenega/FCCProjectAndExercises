function checkCashRegister(price, cash, cid) {
  const restTotal = cash - price;
  let rest = restTotal;
  const [penny, nickel, dime, quarter, one, five, ten, twenty, oneHundred] = cid;
  let state;
  const cashInCid = parseFloat(
    (
      penny[1]
      + nickel[1]
      + dime[1]
      + quarter[1]
      + one[1]
      + five[1]
      + ten[1]
      + twenty[1]
      + oneHundred[1]
    ).toFixed(2),
  );

  let array = [];
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
    if (countBill > 0) {
      array.push([bill, money]);
    }
    return parseFloat((theRest).toFixed(2));
  }
  if (cashInCid >= rest) {
    state = 'OPEN';
    rest = sameThing(oneHundred[1], 'ONE HUNDRED', 100, rest);
    rest = sameThing(twenty[1], 'TWENTY', 20, rest);
    rest = sameThing(ten[1], 'TEN', 10, rest);
    rest = sameThing(five[1], 'FIVE', 5, rest);
    rest = sameThing(one[1], 'ONE', 1, rest);
    rest = sameThing(quarter[1], 'QUARTER', 0.25, rest);
    rest = sameThing(dime[1], 'DIME', 0.10, rest);
    rest = sameThing(nickel[1], 'NICKEL', 0.05, rest);
    rest = sameThing(penny[1], 'PENNY', 0.01, parseFloat((rest).toFixed(2)));
    if ((rest === 0.01) && (penny[1] > array[array.length - 1][1])) {
      array[array.length - 1][1] = array[array.length - 1][1] + 0.01;
      rest -= 0.01;
    }
  }
  if (cashInCid === restTotal) {
    state = 'CLOSED';
    array = cid;
  } else if (rest > 0) {
    state = 'INSUFFICIENT_FUNDS';
    array = [];
  }
  return { status: state, change: array };
}

module.exports = checkCashRegister;
