const conversionRate = {
  'ONE HUNDRED': 100,
  'TWENTY': 20,
  'TEN': 10,
  'FIVE': 5,
  'ONE': 1,
  'QUARTER': 0.25,
  'DIME': 0.1,
  'NICKEL': 0.5,
  'PENNY': 0.01
};


function checkCashRegister(price, cash, cid) {
  const [penny, nickel, dime, quarter, one, five, ten, twenty, oneHundred] = cid;
  const restTotal = cash - price;
  let rest = restTotal;
  let state;
  const cashInCid = getTotalCash(cid);
  let array = [];
  if (cashInCid >= rest) {
    state = 'OPEN';
    rest = cid.reduce((rest, [bill, value]) => {
      return getQuantity(value, bill, conversionRate[bill], rest );
    }, rest)
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


function getQuantity(inBox, bill, value, resto) {
  const array = [];
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

function getTotalCash(cid) {
  return cid.reduce((acc, item) => acc + item[1], 0);
}

module.exports = checkCashRegister;
