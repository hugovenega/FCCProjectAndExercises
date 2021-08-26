const telephoneCheck = require('./phonechecker');

describe('telephonechecker test with standard pattern using USA country code', () => {
  it('1 555-555-5555', () => {
    expect(telephoneCheck('1 555-555-5555')).toBe(true);
  });
  it('1 (555)555-5555', () => {
    expect(telephoneCheck('1 (555)555-5555')).toBe(true);
  });
  it('1 (555) 555-5555', () => {
    expect(telephoneCheck('1 (555) 555-5555')).toBe(true);
  });
  it('1 555 555 5555', () => {
    expect(telephoneCheck('1 555 555 5555')).toBe(true);
  });
  it('1 5555555555', () => {
    expect(telephoneCheck('1 5555555555')).toBe(true);
  });
});
describe('telephonechecker test with standard pattern without USA country code', () => {
  it('555-555-5555', () => {
    expect(telephoneCheck('555-555-5555')).toBe(true);
  });
  it('(555)555-5555', () => {
    expect(telephoneCheck('(555)555-5555')).toBe(true);
  });
  it('(555) 555-5555', () => {
    expect(telephoneCheck('(555) 555-5555')).toBe(true);
  });
  it('555 555 5555', () => {
    expect(telephoneCheck('555 555 5555')).toBe(true);
  });
  it('5555555555', () => {
    expect(telephoneCheck('5555555555')).toBe(true);
  });
});

describe('telephonechecker test with numbers that respect the pattern using USA country code', () => {
  it('1 234-567-8901', () => {
    expect(telephoneCheck('1 234-567-8901')).toBe(true);
  });
  it('1 (232)564-9987', () => {
    expect(telephoneCheck('1 (232)564-9987')).toBe(true);
  });
  it('1 (396) 500-2934', () => {
    expect(telephoneCheck('1 (396) 500-2934')).toBe(true);
  });
  it('1 333 209 1029', () => {
    expect(telephoneCheck('1 333 209 1029')).toBe(true);
  });
  it('1 3245610021', () => {
    expect(telephoneCheck('1 3245610021')).toBe(true);
  });
});

describe('telephonechecker test with numbers that respect the pattern without USA country code', () => {
  it('234-675-1768', () => {
    expect(telephoneCheck('234-675-1768')).toBe(true);
  });
  it('(451)436-6711', () => {
    expect(telephoneCheck('(451)436-6711')).toBe(true);
  });
  it('(209) 443-5510', () => {
    expect(telephoneCheck('(209) 443-5510')).toBe(true);
  });
  it('532 888 1923', () => {
    expect(telephoneCheck('532 888 1923')).toBe(true);
  });
  it('1120985834', () => {
    expect(telephoneCheck('1120985834')).toBe(true);
  });
});

describe('telephonechecker test with with wrong numbers, errors and different country code, this should return false', () => {
  it('2 sixthree4 54% 324', () => {
    expect(telephoneCheck('2 sixthree4 54% 324')).toBe(false);
  });
  it('1 (432( 3455-9812', () => {
    expect(telephoneCheck('1 (432( 3455-9812')).toBe(false);
  });
  it('1 (3233)342 444', () => {
    expect(telephoneCheck('1 (3233) 342 444')).toBe(false);
  });
  it('532+888 1923', () => {
    expect(telephoneCheck('532+888 1923')).toBe(false);
  });
  it('1120985834122', () => {
    expect(telephoneCheck('1120985834122')).toBe(false);
  });
});
