# Conversion Test

This document provides an overview of the unit tests conducted for the conversion functionality in the project. The conversion tests cover various units related to different measurements such as area, data, data transfer, length, mass, speed, time, and volume.

## Conversion Functions

The primary functions being tested in the conversion.js files are `getStandardConversion()` and `getAllConversions()`. These functions are responsible for standard and all conversions, respectively.

## Test Files

### 1. Area_test.js
- **Units Tested:** ["m2", "cm2", "km2", "miles2", "ft2", "in2", "ha2", "acre2", "yd2"]
- **Function Tested:**
  - `getStandardConversion()`: Ensures the standard conversion for the given unit is not empty.
  - `getAllConversions()`: Verifies that all conversions for the given unit are not empty.

### 2. Data_test.js
- **Units Tested:** ["KB", "MB", "GB", "TB", "B"]
- **Function Tested:**
  - Similar to Area_test.js, it checks standard and all conversions for data units.

### 3. DataTransfer_test.js
- **Units Tested:** ["kb/s", "mb/s", "gb/s", "tb/s", "b/s"]
- **Function Tested:**
  - Similar to Area_test.js, it checks standard and all conversions for data transfer units.

### 4. Length_test.js
- **Units Tested:** ["meters", "miles", "centimeters", "millimeters", "yard", "feet", "inch", "furlong", "chain", "kilometers"]
- **Function Tested:**
  - Similar to Area_test.js, it checks standard and all conversions for length units.

### 5. Mass_test.js
- **Units Tested:** ["kilograms", "grams", "pounds", "tonnes", "milligrams", "micrograms", "ounces"]
- **Function Tested:**
  - Similar to Area_test.js, it checks standard and all conversions for mass units.

### 6. Speed_test.js
- **Units Tested:** ["km/h", "mph", "m/s"]
- **Function Tested:**
  - Similar to Area_test.js, it checks standard and all conversions for speed units.

### 7. Time_test.js
- **Units Tested:** ["seconds", "minutes", "hours", "days", "weeks"]
- **Function Tested:**
  - Similar to Area_test.js, it checks standard and all conversions for time units.

### 8. Volume_test.js
- **Units Tested:** ["litres", "milliliter", "cubic meter", "cubic inch", "cubic foot", "pint", "quart", "gallon", "fl oz"]
- **Function Tested:**
  - Similar to Area_test.js, it checks standard and all conversions for volume units.

## Example Test Case (Area_test.js)

```javascript
describe('Area', function() {
    const unit_object_m2 = {
        unit: "m2",
        type: "area",
        aliases: ["m2", " m2", "m²", "sqm"],
        ratio: 1,
    };
    const listOfUnits_m2 = ["cm2", "km2", "miles2", "ft2", "in2", "ha2", "acre2", "yd2"];

    it("Standard Conversion should not be empty for m2", function() {
        assert.notStrictEqual(getStandardConversion(unit_object_m2, 10), "", "m2 conversion should not be empty");
    });

    it("All the conversions should not be empty for m2", function() {
        assert.notStrictEqual(getAllConversions(100, 5, unit_object_m2, listOfUnits_m2), "", "m2 conversion should not be empty");
    });
});
