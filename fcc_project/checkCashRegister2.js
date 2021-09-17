const conversionRate = {
  PENNY: 1,
  NICKEL: 5,
  DIME: 10,
  QUARTER: 25,
  ONE: 100,
  FIVE: 500,
  TEN: 1000,
  TWENTY: 2000,
  'ONE HUNDRED': 10000,
};

function checkCashRegister(price, cash, cid) {
  const totalFunds = cid.reduce((acc, [, amount]) => amount + acc);
  let change = Math.round((cash - price) * 100);
  if (totalFunds < change) {
    return { status: 'INSUFFICIENT_FUNDS', change: [] };
  }
  const symbols = cid
    .map(([symbol]) => symbol)
    .reverse();
  const cashInDrawer = cid
    .map(([symbol, amount]) => ([symbol, {
      qty: Math.round((amount * 100) / conversionRate[symbol]),
      amount,
    }]))
    .reduce((acc, [symbol, all]) => {
      acc[symbol] = all;
      return acc;
    }, {});
  const vuelto = {};
  symbols.forEach((symbol) => {
    while (change >= conversionRate[symbol] && cashInDrawer[symbol].qty > 0) {
      if (!vuelto[symbol]) {
        vuelto[symbol] = 1;
      } else {
        vuelto[symbol] += 1;
      }
      change -= conversionRate[symbol];
      cashInDrawer[symbol].qty -= 1;
    }
  });
  const out = Object.entries(vuelto)
    .map(([symbol, qty]) => [symbol, (qty * conversionRate[symbol]) / 100]);
  const rest = symbols.reduce((acc, symbol) => acc + cashInDrawer[symbol].qty, 0);
  if (rest === 0 && change === 0) {
    return { status: 'CLOSED', change: cid };
  }
  if (change === 0) {
    return { status: 'OPEN', change: out };
  }
  return { status: 'INSUFFICIENT_FUNDS', change: [] };
}

module.exports = checkCashRegister;
