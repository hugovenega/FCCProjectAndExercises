class Fraction {
  constructor(numerator, denominator) {
    this.simplify(numerator, denominator, this.greatestCommonDivisor(numerator, denominator));
  }

  simplify(numerator, denominator, gCD) {
    if (((denominator - numerator) < 1) && ((denominator - numerator) > 0)) {
      this.numerator = numerator;
      this.denominator = denominator;
    } else if ((numerator == 0)) {
      this.numerator = numerator;
      this.denominator = 1;
    } else if (gCD !== 1) {
      this.numerator = numerator / gCD;
      this.denominator = denominator / gCD;
    } else {
      this.numerator = numerator;
      this.denominator = denominator;
    }
  }

  greatestCommonDivisor(numerator, denominator) {
    let a = numerator;
    let b = denominator;
    let temporal;
    while (b !== 0) {
      temporal = b;
      b = a % b;
      a = temporal;
    }
    return a;
  }

  add(fraction) {
    let newDenominator;
    let newNumerator;
    if (this.denominator !== fraction.denominator) {
      newDenominator = this.denominator * fraction.denominator;
      newNumerator = this.numerator * fraction.denominator + fraction.numerator * this.denominator;
    } else {
      newDenominator = this.denominator;
      newNumerator = this.numerator + fraction.numerator;
    }
    return new Fraction(newNumerator, newDenominator);
  }

  substract(fraction) {
    let newDenominator;
    let newNumerator;
    if (this.denominator !== fraction.denominator) {
      newDenominator = this.denominator * fraction.denominator;
      newNumerator = this.numerator * fraction.denominator - fraction.numerator * this.denominator;
    } else {
      newDenominator = this.denominator;
      newNumerator = this.numerator - fraction.numerator;
    }
    return new Fraction(newNumerator, newDenominator);
  }

  multiply(fraction) {
    const newNumerator = this.numerator * fraction.numerator;
    const newDenominator = this.denominator * fraction.denominator;
    return new Fraction(newNumerator, newDenominator);
  }

  divide(fraction) {
    const newNumerator = this.numerator * fraction.denominator;
    const newDenominator = this.denominator * fraction.numerator;
    return new Fraction(newNumerator, newDenominator);
  }

  pow(exponent) {
    let newNumerator;
    let newDenominator;
    if (typeof exponent !== 'number') {
      newNumerator = Math.pow(this.numerator, exponent.numerator / exponent.denominator);
      newDenominator = Math.pow(this.denominator, exponent.numerator / exponent.denominator);
    } else if (exponent >= 0) {
      newNumerator = Math.pow(this.numerator, exponent);
      newDenominator = Math.pow(this.denominator, exponent);
    } else if (this.numerator == 0) {
      newNumerator = 0;
      newDenominator = 1;
    } else {
      newNumerator = Math.pow(this.denominator, Math.abs(exponent));
      newDenominator = Math.pow(this.numerator, Math.abs(exponent));
    }
    return new Fraction(newNumerator, newDenominator);
  }

  log(base = Math.E) {
    let result;
    if (this.numerator == 0) {
      result = 'Not defined';
    } else {
      result = Math.pow(base, this.numerator) / Math.pow(base, this.denominator);
    }
    return result;
  }

  get toNumber() {
    return this.numerator / this.denominator;
  }

  get inverse() {
    return new Fraction(this.denominator, this.numerator);
  }

  get toString() {
    return `${this.numerator}/${this.denominator}`;
  }
}

module.exports = Fraction;
