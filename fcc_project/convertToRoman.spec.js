const convertToRoman = require('./convertToRoman');

describe('testing combinations in unit of thousand', () => {
  it('3000 = "MMM"', () => {
    expect(convertToRoman(3000)).toEqual('MMM');
  });
  it('2000 = "MM', () => {
    expect(convertToRoman(2000)).toEqual('MM');
  });
  it('1000 = "M"', () => {
    expect(convertToRoman(1000)).toEqual('M');
  });
});

describe('testing combinations in unit of hundred', () => {
  it('500 = "D"', () => {
    expect(convertToRoman(500)).toEqual('D');
  });
  it('300 = "CCC"', () => {
    expect(convertToRoman(300)).toEqual('CCC');
  });
  it('700 = "DCC', () => {
    expect(convertToRoman(700)).toEqual('DCC');
  });
  it('100 = "C"', () => {
    expect(convertToRoman(100)).toEqual('C');
  });
});

describe('testing combinations in ten unit', () => {
  it('10 = "X"', () => {
    expect(convertToRoman(10)).toEqual('X');
  });
  it('30 = "XXX"', () => {
    expect(convertToRoman(30)).toEqual('XXX');
  });
  it('80 = "LXXX', () => {
    expect(convertToRoman(80)).toEqual('LXXX');
  });
  it('90 = "XC"', () => {
    expect(convertToRoman(90)).toEqual('XC');
  });
});

describe('testing combinations in unity', () => {
  it('1 = "I"', () => {
    expect(convertToRoman(1)).toEqual('I');
  });
  it('4 = "IV"', () => {
    expect(convertToRoman(4)).toEqual('IV');
  });
  it('7 = "VII', () => {
    expect(convertToRoman(7)).toEqual('VII');
  });
  it('9 = "IX"', () => {
    expect(convertToRoman(9)).toEqual('IX');
  });
});

describe('testing random numbers between 1 and 3999', () => {
  it('1355 = "MCCCLV"', () => {
    expect(convertToRoman(1355)).toEqual('MCCCLV');
  });
  it('2893 = "MMDCCCXCIII"', () => {
    expect(convertToRoman(2893)).toEqual('MMDCCCXCIII');
  });
  it('103 = "CIII', () => {
    expect(convertToRoman(103)).toEqual('CIII');
  });
  it('205 = "CCV"', () => {
    expect(convertToRoman(205)).toEqual('CCV');
  });
  it('5 = "V"', () => {
    expect(convertToRoman(5)).toEqual('V');
  });
});

describe('testing numbers out of range', () => {
  it('4534 = "exceeds the maximum allowed which is 3999"', () => {
    expect(convertToRoman(4534)).toEqual('exceeds the maximum allowed which is 3999');
  });
  it('-12 = "The minimum to convert to a Roman numeral is 1"', () => {
    expect(convertToRoman(-12)).toEqual('The minimum to convert to a Roman numeral is 1');
  });
});
