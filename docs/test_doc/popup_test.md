# Popup Statistics Test

This document provides an overview of the unit tests conducted for the popup statistics functionality in the project. The tests verify calculations for entropy, mean, and standard deviation within a simulated DOM environment, ensuring accurate updates to the DOM elements based on user inputs.

## Primary Functions

The primary functions being tested in `popupStatistics.test.js` are `calculateEntropy()`, `calculateMean()`, and `calculateStandardDeviation()`. The results are displayed on respective output fields in the DOM.

## Test Cases

### 1. Entropy Calculation Test

This test checks if the entropy is correctly calculated and displayed in the DOM for a sample input.

```javascript
describe("popupStatistics.js Tests", function () {
    it("should calculate and display entropy correctly", function () {
        document.getElementById("data_input").value = "1, 2, 3, 4";
        calculateEntropy();

        const expectedEntropy = 2.0000;
        expect(parseFloat(document.getElementById("entropy_output").value)).to.be.closeTo(expectedEntropy, 0.0001, "Entropy is within the expected range");
    });
});
```

### 2. Mean Calculation Test

This test verifies if the mean is calculated accurately and displayed in the DOM based on the data input field.

```javascript
describe("popupStatistics.js Tests", function () {
    it("should calculate and display mean correctly", function () {
        document.getElementById("data_input").value = "2, 4, 4, 5, 5, 7, 9";
        calculateMean();

        const expectedMean = 5.1429;
        expect(parseFloat(document.getElementById("mean_output").value)).to.be.closeTo(expectedMean, 0.0001, "Mean is within the expected range");
    });
});
```

### 3. Standard Deviation Calculation Test

This test checks if the standard deviation is calculated and displayed correctly for the data input.

```javascript
describe("popupStatistics.js Tests", function () {
    it("should calculate and display standard deviation correctly", function () {
        document.getElementById("data_input").value = "2, 4, 4, 5, 5, 7, 9";
        calculateStandardDeviation();

        const expectedStdDev = 2.1381;
        expect(parseFloat(document.getElementById("std_output").value)).to.be.closeTo(expectedStdDev, 0.0001, "Standard Deviation is within the expected range");
    });
});
```

### 4. Input Validation Test

This test ensures the input parsing correctly filters valid numbers from the input field, ignoring any invalid values or characters.

```javascript
describe("popupStatistics.js Tests", function () {
    it("should filter and parse valid numbers from input", function () {
        document.getElementById("data_input").value = "1.2, abc, 3.4, xyz, 5.6";
        const numbers = parseInput();

        expect(numbers).to.deep.equal([1.2, 3.4, 5.6], "Parsed numbers are as expected");
    });
});
```
These tests ensure that the functions for entropy, mean, and standard deviation calculations handle various data inputs correctly and update the DOM elements reliably, thereby enhancing user experience and functionality accuracy.