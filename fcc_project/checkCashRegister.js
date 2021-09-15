const conversionRate = {
  PENNY: 0.01,
  NICKEL: 0.05,
  DIME: 0.10,
  QUARTER: 0.25,
  ONE: 1.00,
  FIVE: 5.00,
  TEN: 10.00,
  TWENTY: 20.00,
  'ONE HUNDRED': 100.00,
};

function checkCashRegister(price, cash, cid) {
  let totalCID = 0;

  cid.forEach((elem) =>{
    totalCID += elem[1];
  });

  totalCID = totalCID.toFixed(2);
  let changeToGive = cash - price;
  const changeArray = [];
  if (changeToGive > totalCID) {
    return { status: 'INSUFFICIENT_FUNDS', change: changeArray };
  } if (changeToGive.toFixed(2) === totalCID) {
    return { status: 'CLOSED', change: cid };
  }
  const cidReversed = cid.reverse();

  cidReversed.forEach(elem => {
    const temp = [elem[0], 0];
    while (changeToGive >= conversionRate[elem[0]] && elem[1] > 0) {
      temp[1] += conversionRate[elem[0]];
      elem[1] -= conversionRate[elem[0]];
      changeToGive -= conversionRate[elem[0]];
      changeToGive = changeToGive.toFixed(2);
    }
    if (temp[1] > 0) {
      changeArray.push(temp);
    }
  });

  if (changeToGive > 0) {
    return { status: 'INSUFFICIENT_FUNDS', change: [] };
  }
  return { status: 'OPEN', change: changeArray };
}

module.exports = checkCashRegister;
