const conversionRate = {
  'ONE HUNDRED': 100,
  TWENTY: 20,
  TEN: 10,
  FIVE: 5,
  ONE: 1,
  QUARTER: 0.25,
  DIME: 0.1,
  NICKEL: 0.05,
  PENNY: 0.01,
};

function checkCashRegister(price, cash, cid) {
  let changeSum = parseFloat((cash - price).toFixed(2));
  const changeSumCheck = changeSum;
  let change = [];
  let status = '';

  let totalInCid = 0;
  const filteredCid = cid.filter((elem) => elem[1] !== 0).reverse();

  filteredCid.forEach((element) => {
    const coin = element[0];
    let coinSum = element[1];
    totalInCid += coinSum;
    let amount = 0;
    while (changeSum >= conversionRate[coin] && coinSum > 0) {
      amount += conversionRate[coin];
      changeSum -= conversionRate[coin];
      coinSum -= conversionRate[coin];
    }
    if (amount !== 0) {
      change.push([coin, amount]);
    }
  });
  if (changeSum > 0) {
    status = 'INSUFFICIENT_FOUNDS';
    change = [];
  } else if (changeSum === 0 && changeSumCheck === totalInCid) {
    status = 'CLOSED';
    change = cid;
  } else {
    status = 'OPEN';
  }
  return { 'status': status, 'change': change };
}

module.exports = checkCashRegister;
module.exports = checkCashRegister;
