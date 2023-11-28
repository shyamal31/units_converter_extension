# Temperature Test

This documentation provides an overview of the unit tests conducted for the temperature conversion functionality in the project. The tests cover various temperature units to ensure the correct functioning of the conversion methods.

## Temperature Functions

The primary functions being tested in the `Temperature.js` file include `getAllConversions()` and `getStandardConversion()`. These functions are responsible for handling all conversions and standard conversions, respectively.

## Test Cases

### Celsius Unit

#### Test Case 1.1 - All Conversions Should Not Be Empty

```javascript
it("All Conversions should not be empty", function () {
    let celciuses = new Temp("celcius", [
        "kelvin",
        "fahrenheit",
    ]);
    assert.notStrictEqual(celciuses.getAllConversions(150, 2), "");
    assert.notStrictEqual(celciuses.getAllConversions(-150.00001, 2), "");
});

```

#### Test Case 1.2 - Standard Conversions Should Not Be Empty
```javascript
 it("Standard Conversions should not be empty", function () {
    let celciuses = new Temp("celcius", [
        "kelvin",
        "fahrenheit",
    ]);
    assert.notStrictEqual(celciuses.getStandardConversion(100), "");
});

```

Similary we have tested all the other temperature units. You can refer to the [code here](https://github.com/shyamal31/units_converter_extension/blob/shyamal31-patch-1/test/Temperature_test.js)
