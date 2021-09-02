const Fraction = require('./fractions');

describe('Fraction', () => {
  it('should add two fractions', () => {
    const a = new Fraction(1, 2);
    const b = new Fraction(1, 4);
    expect(a.add(b)).toEqual(new Fraction(3, 4));
  });

  it('should substract two fractions', () => {
    const a = new Fraction(1, 1);
    const b = new Fraction(1, 2);
    expect(a.substract(b)).toEqual(new Fraction(1, 2));
  });

  it('should multiply two fractions', () => {
    const a = new Fraction(2, 3);
    const b = new Fraction(1, 2);
    expect(a.multiply(b)).toEqual(new Fraction(1, 3));
  });

  it('should divide two fractions', () => {
    const a = new Fraction(3, 4);
    const b = new Fraction(1, 2);
    expect(a.divide(b)).toEqual(new Fraction(3, 2));
  });

  it('should power a fraction with positive number', () => {
    const a = new Fraction(3, 4);
    expect(a.pow(2)).toEqual(new Fraction(9, 16));
  });

  it('should power a fraction with negative number', () => {
    const a = new Fraction(3, 4);
    expect(a.pow(-2)).toEqual(new Fraction(16, 9));
  });

  it('should solve logarithm for a fraction in neperian base', () => {
    const a = new Fraction(3, 4);
    expect(a.log()).toEqual(0.36787944117144233);
  });

  it('should solve logarithm for a fraction in base 4', () => {
    const a = new Fraction(3, 4);
    expect(a.log(4)).toEqual(0.25);
  });

  it('should show the inverse of the fraction', () => {
    const a = new Fraction(3, 4);
    expect(a.inverse).toEqual(new Fraction(4, 3));
  });

  it('should show a fraction in a string', () => {
    const a = new Fraction(3, 4);
    expect(a.toString).toEqual('3/4');
  });

  it('should transform fraction a number', () => {
    const a = new Fraction(3, 4);
    expect(a.toNumber).toEqual(3 / 4);
  });
});

describe('Fraction with 0', () => {
  it('should divide 0 and a fraction', () => {
    const a = new Fraction(0, 3);
    const b = new Fraction(1, 2);
    expect(a.divide(b)).toEqual(new Fraction(0, 1));
  });

  it('should multiply 0 and a fraction', () => {
    const a = new Fraction(0, 3);
    const b = new Fraction(1, 2);
    expect(a.divide(b)).toEqual(new Fraction(0, 1));
  });

  it('should add 0 and a fraction', () => {
    const a = new Fraction(0, 3);
    const b = new Fraction(1, 2);
    expect(a.add(b)).toEqual(new Fraction(1, 2));
  });

  it('should substract 0 and a fraction', () => {
    const a = new Fraction(0, 3);
    const b = new Fraction(1, 2);
    expect(a.substract(b)).toEqual(new Fraction(-1, 2));
  });

  it('should power 0 with a positive number', () => {
    const a = new Fraction(0, 3);
    expect(a.pow(2)).toEqual(new Fraction(0, 1));
  });

  it('should power 0 with a negative number', () => {
    const a = new Fraction(0, 3);
    expect(a.pow(-2)).toEqual(new Fraction(0, 1));
  });

  it('should solve logarithm for 0 in neperian base and return "Not defined"', () => {
    const a = new Fraction(0, 3);
    expect(a.log()).toEqual('Not defined');
  });

  it('should solve logarithm for 0 in base 4 and return "Not defined"', () => {
    const a = new Fraction(0, 3);
    expect(a.log(4)).toEqual('Not defined');
  });
});

describe('Fraction with power using Fractions', () => {
  it('should power a fraction with a fraction', () => {
    const a = new Fraction(3, 4);
    const b = new Fraction(1, 2);
    expect(a.pow(b)).toEqual(new Fraction(1.7320508075688772, 2));
  });
});
