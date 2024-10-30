# Statistics Calculations Test

This document provides an overview of the unit tests conducted for the statistical calculations in the project. The tests cover functions for calculating entropy, mean, standard deviation, and validating input handling. Each test verifies the accuracy and robustness of the calculations under various input scenarios.

## Primary Functions

The primary functions being tested in `statistics_test.js` are `calculateEntropy()`, as well as mean and standard deviation calculations. The input validation checks handle parsing and filtering of valid numbers.

## Test Cases

### 1. Entropy Calculation Tests

#### Uniform Distribution
```javascript
describe('Statistics Calculations', () => {
    describe('calculateEntropy()', () => {
        it('should calculate entropy correctly for uniform distribution', () => {
            const numbers = [1, 2, 3, 4];
            const entropy = calculateEntropy(numbers);
            assert.strictEqual(entropy.toFixed(4), '2.0000');
        });
    });
});
```
#### Same Numbers
```javascript
describe('Statistics Calculations', () => {
    describe('calculateEntropy()', () => {
        it('should calculate entropy correctly for same numbers', () => {
            const numbers = [1, 1, 1, 1];
            const entropy = calculateEntropy(numbers);
            assert.strictEqual(entropy.toFixed(4), '0.0000');
        });
    });
});
```

#### Empty Array
```javascript
describe('Statistics Calculations', () => {
    describe('calculateEntropy()', () => {
        it('should handle empty array', () => {
            const numbers = [];
            const entropy = calculateEntropy(numbers);
            assert.strictEqual(entropy, 0);
        });
    });
});
```
#### Single Number Array
```javascript
describe('Statistics Calculations', () => {
    describe('calculateEntropy()', () => {
        it('should handle single number array', () => {
            const numbers = [5];
            const entropy = calculateEntropy(numbers);
            assert.strictEqual(entropy.toFixed(4), '0.0000');
        });
    });
});
```

#### Mixed Positive and Negative Numbers
```javascript
describe('Statistics Calculations', () => {
    describe('calculateEntropy()', () => {
        it('should handle mixed positive and negative numbers', () => {
            const numbers = [-2, -1, 0, 1, 2];
            const entropy = calculateEntropy(numbers);
            assert.strictEqual(entropy.toFixed(4), '2.3219');
        });
    });
});
```


### 2. Statistical Calculations

#### Mean Calculation
```javascript
describe('Statistics Calculations', () => {
    describe('Statistical Calculations', () => {
        let testData;

        beforeEach(() => {
            testData = [2, 4, 4, 4, 5, 5, 7, 9];
        });

        it('should calculate correct mean', () => {
            const mean = testData.reduce((a, b) => a + b) / testData.length;
            assert.strictEqual(mean.toFixed(4), '5.0000');
        });

    });
});
```


#### Standard Deviation Calculation
```javascript
describe('Statistics Calculations', () => {
    describe('Statistical Calculations', () => {
        it('should calculate correct standard deviation', () => {
            const mean = testData.reduce((a, b) => a + b) / testData.length;
            const variance = testData.reduce((a, b) => a + Math.pow(b - mean, 2), 0) / (testData.length-1);
            const std = Math.sqrt(variance);
            assert.strictEqual(std.toFixed(4), '2.1381');
        });
    });
});
```

### 3. Input Validation Tests
#### Comma-Separated String Input
```javascript
describe('Statistics Calculations', () => {
    describe('Input Validation', () => {
        it('should handle comma-separated string input', () => {
            const input = "1.2, 3.4, 5.6, 7.8";
            const numbers = input.split(',').map(num => parseFloat(num.trim())).filter(num => !isNaN(num));
            assert.deepStrictEqual(numbers, [1.2, 3.4, 5.6, 7.8]);
        });
    });
});
```

#### Handling Invalid Numbers
```javascript
describe('Statistics Calculations', () => {
    describe('Input Validation', () => {
        it('should filter out invalid numbers', () => {
            const input = "1.2, abc, 3.4, xyz, 5.6";
            const numbers = input.split(',').map(num => parseFloat(num.trim())).filter(num => !isNaN(num));
            assert.deepStrictEqual(numbers, [1.2, 3.4, 5.6]);
        });
    });
});
```

#### Handling Invalid Numbers
```javascript
describe('Statistics Calculations', () => {
    describe('Input Validation', () => {
        it('should handle mixed number formats', () => {
            const input = "1.2, .5, 2., 3";
            const numbers = input.split(',').map(num => parseFloat(num.trim())).filter(num => !isNaN(num));
            assert.deepStrictEqual(numbers, [1.2, 0.5, 2, 3]);
        });
    });
});
```

### 3. Error Handling
#### Division by Zero
```javascript
describe('Statistics Calculations', () => {
    describe('Error Handling', () => {
        it('should handle division by zero', () => {
            const numbers = [0, 0, 0];
            const mean = numbers.reduce((a, b) => a + b, 0) / numbers.length;
            assert.strictEqual(mean, 0);
        });
    });
});
```

#### Scientific Notation Input
```javascript
describe('Statistics Calculations', () => {
    describe('Error Handling', () => {
        it('should handle scientific notation', () => {
            const input = "1.2e2, 3.4e-1, 5.6e+1";
            const numbers = input.split(',').map(num => parseFloat(num.trim())).filter(num => !isNaN(num));
            assert.deepStrictEqual(numbers, [120, 0.34, 56]);
        });
    });
});
```
These tests verify the accuracy of entropy and statistical calculations and ensure that the program can handle a range of different and unexpected input formats, improving reliability and robustness.