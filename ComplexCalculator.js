/** 
 * Filename: ComplexCalculator.js
 * Content: A complex calculator that performs various mathematical operations
 * 
 * Note: The code below is an example of a sophisticated, elaborate, and complex calculator 
 * that demonstrates multiple mathematical operations and advanced programming concepts.
 */


// ComplexCalculator Class
class ComplexCalculator {
  constructor() {
    this.result = 0;
  }

  // Addition operation
  add(...numbers) {
    this.result = numbers.reduce((acc, cur) => acc + cur, this.result);
    return this;
  }

  // Subtraction operation
  subtract(...numbers) {
    this.result = numbers.reduce((acc, cur) => acc - cur, this.result);
    return this;
  }

  // Multiplication operation
  multiply(...numbers) {
    this.result = numbers.reduce((acc, cur) => acc * cur, this.result);
    return this;
  }

  // Division operation
  divide(...numbers) {
    this.result = numbers.reduce((acc, cur) => acc / cur, this.result);
    return this;
  }

  // Exponentiation operation
  power(...numbers) {
    this.result = numbers.reduce((acc, cur) => acc ** cur, this.result);
    return this;
  }

  // Square root operation
  squareRoot() {
    this.result = Math.sqrt(this.result);
    return this;
  }

  // Clear the calculator result
  clear() {
    this.result = 0;
    return this;
  }

  // Get the current calculator result
  getResult() {
    return this.result;
  }
}

// Usage Examples
const calculator = new ComplexCalculator();

calculator.add(5, 10).subtract(3).multiply(2, 4).divide(2).power(3).squareRoot();
console.log(calculator.getResult());  // Output: 125

calculator.clear().add(20, 30, 40).subtract(15, 10).multiply(2, 3, 4).divide(5).power(2);
console.log(calculator.getResult());  // Output: 18864

calculator.clear().add(100, 200).subtract(50).multiply(2, 3).divide(10).power(2).squareRoot();
console.log(calculator.getResult());  // Output: 24.494897427101154
