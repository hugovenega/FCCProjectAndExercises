const checkCashRegister = require('./box');

describe(`cash register. it should return status: 
Insufficient_founds if there is no necessary change.
Open: if there is exact change.
Closed: if the change in the box is equal to the change to be returned
in addition to returning an array with the change to return specifying how much of each`, () => {
  it('to pay 19.5, pay with 20, returned 0.5', () => {
    expect(checkCashRegister(19.5, 20, [['PENNY', 1.01], ['NICKEL', 2.05], ['DIME', 3.1], ['QUARTER', 4.25], ['ONE', 90], ['FIVE', 55], ['TEN', 20], ['TWENTY', 60], ['ONE HUNDRED', 100]]))
      .toEqual({ status: 'OPEN', change: [['QUARTER', 0.5]] });
  });
  it('to pay 3.26, pay with 100, returned 96.74', () => {
    expect(checkCashRegister(3.26, 100, [['PENNY', 1.01], ['NICKEL', 2.05], ['DIME', 3.1], ['QUARTER', 4.25], ['ONE', 90], ['FIVE', 55], ['TEN', 20], ['TWENTY', 60], ['ONE HUNDRED', 100]]))
      .toEqual({ status: 'OPEN', change: [['TWENTY', 60], ['TEN', 20], ['FIVE', 15], ['ONE', 1], ['QUARTER', 0.5], ['DIME', 0.2], ['PENNY', 0.04]] });
  });
  it('to pay 19.5 , pay with 20, there is no return due to lack of funds', () => {
    expect(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]))
      .toEqual({status: "INSUFFICIENT_FUNDS", change: []});
  });
  it('to pay 19.5 , pay with 20, returned 0.5 with penny and close the cashregister', () => {
    expect(checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]))
      .toEqual({status: "CLOSED", change: [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]});
  });
  it('to pay 19.5 , pay with 20, there is no return because there are no funds to give the exact change', () => {
    expect(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]))
      .toEqual({status: "INSUFFICIENT_FUNDS", change: []});
  });
});
