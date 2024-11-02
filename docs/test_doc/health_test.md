# Health Test

This document provides an overview of the unit tests conducted for the heath functionality in the project. The health tests cover various units related to different measurements such as BMI, BMR, TDEE for different age, mass, heights, sex.

## CalculateHealthValues  Functions

The primary functions being tested in the health_test.js files are `calculateHealthValues()`. The function is  responsible for calculate the value of BMI, BMR, TDEE.

## Test Cases

### 1. Standard Male Test (70KG, 175CM, 30YRS, Male)
```javascript
describe('Health Calculator Tests', () => {
    // Standard male tests
    it('should calculate correct BMI for male', () => {
        const result = calculateHealthValues(70, 175, 30, 'male');
        expect(result.bmi).to.be.closeTo(22.86, 0.1);
    });

    it('should calculate correct BMR for male', () => {
        const result = calculateHealthValues(70, 175, 30, 'male');
        expect(result.bmr).to.be.closeTo(1648.75, 0.1);
    });

    it('should calculate correct TDEE for male', () => {
        const result = calculateHealthValues(70, 175, 30, 'male');
        expect(result.tdee).to.be.closeTo(1978.50, 0.1);
    });
});
````

### 2. Standard Female Test (50KG, 160CM, 25YRS, Female)
```javascript
describe('Health Calculator Tests', () => {
    // Standard female tests
    it('should calculate correct BMI for female', () => {
        const result = calculateHealthValues(55, 160, 25, 'female');
        expect(result.bmi).to.be.closeTo(21.48, 0.1);
    });

    it('should calculate correct BMR for female', () => {
        const result = calculateHealthValues(55, 160, 25, 'female');
        expect(result.bmr).to.be.closeTo(1264.00, 0.1);
    });

    it('should calculate correct TDEE for female', () => {
        const result = calculateHealthValues(55, 160, 25, 'female');
        expect(result.tdee).to.be.closeTo(1516.80, 0.1);
    });
});
````
### 3. Young Male Test (70KG, 180CM, 20YRS, Male)
```javascript
describe('Health Calculator Tests', () => {
    // Young male tests
    it('should calculate correct BMI for young male', () => {
        const result = calculateHealthValues(75, 180, 20, 'male');
        expect(result.bmi).to.be.closeTo(23.15, 0.1);
    });

    it('should calculate correct BMR for young male', () => {
        const result = calculateHealthValues(75, 180, 20, 'male');
        expect(result.bmr).to.be.closeTo(1780.00, 0.1);
    });

    it('should calculate correct TDEE for young male', () => {
        const result = calculateHealthValues(75, 180, 20, 'male');
        expect(result.tdee).to.be.closeTo(2136.00, 0.1);
    });;
});
````

### 4. Athletic Male Test (85KG, 185CM, 28YRS, Male)
```javascript
describe('Health Calculator Tests', () => {
    // Athletic male tests
    it('should calculate correct BMI for athletic male', () => {
        const result = calculateHealthValues(85, 185, 28, 'male');
        expect(result.bmi).to.be.closeTo(24.84, 0.1);
    });

    it('should calculate correct BMR for athletic male', () => {
        const result = calculateHealthValues(85, 185, 28, 'male');
        expect(result.bmr).to.be.closeTo(1871.25, 0.1);
    });

    it('should calculate correct TDEE for athletic male', () => {
        const result = calculateHealthValues(85, 185, 28, 'male');
        expect(result.tdee).to.be.closeTo(2245.50, 0.1);
    });
});
````

### 5. Middle-aged Male Test (80KG, 178CM, 45YRS, Male)
```javascript
describe('Health Calculator Tests', () => {
    // Middle-aged male tests
    it('should calculate correct BMI for middle-aged male', () => {
        const result = calculateHealthValues(80, 178, 45, 'male');
        expect(result.bmi).to.be.closeTo(25.25, 0.1);
    });

    it('should calculate correct BMR for middle-aged male', () => {
        const result = calculateHealthValues(80, 178, 45, 'male');
        expect(result.bmr).to.be.closeTo(1692.50, 0.1);
    });

    it('should calculate correct TDEE for middle-aged male', () => {
        const result = calculateHealthValues(80, 178, 45, 'male');
        expect(result.tdee).to.be.closeTo(2031.00, 0.1);
    });
});
````

### 6. Overweight Feale Test (82KG, 160CM, 38YRS, Female)
```javascript
describe('Health Calculator Tests', () => {
    // Overweight female tests
    it('should calculate correct BMI for overweight female', () => {
        const result = calculateHealthValues(82, 160, 38, 'female');
        expect(result.bmi).to.be.closeTo(32.03, 0.1);
    });

    it('should calculate correct BMR for overweight female', () => {
        const result = calculateHealthValues(82, 160, 38, 'female');
        expect(result.bmr).to.be.closeTo(1469.00, 0.1);
    });

    it('should calculate correct TDEE for overweight female', () => {
        const result = calculateHealthValues(82, 160, 38, 'female');
        expect(result.tdee).to.be.closeTo(1762.80, 0.1);
    });
});
```
