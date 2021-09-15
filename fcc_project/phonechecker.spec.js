const telephoneCheck = require('./phonechecker');

describe('telephoneChecker', () => {
  describe('for all US phone spell patterns using your country code', () => {
    const patternsWithUSACode = ['1 555-555-5555', '1 (555)555-5555', '1 (555) 555-5555', '1 555 555 5555', '1 5555555555'];
    it('should return true', () => {
      patternsWithUSACode.forEach((pattern) => {
        expect(telephoneCheck(pattern)).toBe(true);
      });
    });
  });

  describe('for all US phone spell patterns', () => {
    const patternsWithOutUSACode = ['555-555-5555', '(555)555-5555', '(555) 555-5555', '555 555 5555', '5555555555'];
    it('should return true', () => {
      patternsWithOutUSACode.forEach((pattern) => {
        expect(telephoneCheck(pattern)).toBe(true);
      });
    });
  });

  describe('for US phone spell using your country code', () => {
    const phoneNumbersWithUSACode = ['1 234-567-8901', '1 (232)564-9987', '1 (396) 500-2934', '1 333 209 1029', '1 3245610021'];
    phoneNumbersWithUSACode.forEach((pattern) => {
      it(`should return true for ${pattern}`, () => {
        expect(telephoneCheck(pattern)).toBe(true);
      });
    });
  });

  describe('for US phone spell', () => {
    const phoneNumbersWithOutUSACode = ['234-567-8901', '(232)564-9987', '(396) 500-2934', '333 209 1029', '3245610021'];
    phoneNumbersWithOutUSACode.forEach((pattern) => {
      it(`should return true for ${pattern}`, () => {
        expect(telephoneCheck(pattern)).toBe(true);
      });
    });
  });

  describe('for any income that is not a US phone number', () => {
    const notPhoneNumbers = ['2 sixthree4 54% 324', '1 (432( 3455-9812', '1 (3233)342 444', '532+888 1923', '1120985834122'];
    notPhoneNumbers.forEach((pattern) => {
      it(`should return false for ${pattern}`, () => {
        expect(telephoneCheck(pattern)).toBe(false);
      });
    });
  });
});
