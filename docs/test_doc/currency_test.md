# Currency Test Documentation

This documentation details the unit tests conducted for the currency conversion functionality in the project. The currency tests cover various currencies to ensure the correct functioning of the conversion methods.

## Currency Functions

The primary functions being tested in the `Currency.js` file include `getStandardConversion()` and `getAllConversions()`. These functions are responsible for standard and all conversions, respectively.

## Test Cases

### 1. USD Currency

#### Test Case 1.1 - Standard Conversion Should Not Be Empty

```javascript
it("Standard Conversion should not be empty", async () => {
    const tmp = await usd.getData('usd');
    let res = usd.getAllConversions(tmp, 2);
    assert.notStrictEqual(res, "");
    let res2 = usd.getAllConversions("", 2);
    assert.notStrictEqual(res2, "");
});

```
#### Test Case 1.2 - All Conversions Should Not Be Empty

```javascript
it("All Conversions should not be empty", function () {
    let res = usd.getStandardConversion(30);
    assert.notStrictEqual(res, 0);
    let res2 = usd.getStandardConversion("");
    assert.notStrictEqual(res2, "");
});

```

Similarly, test cases for all the other currencies are written here. Refer to the [code here](https://github.com/shyamal31/units_converter_extension/blob/master/test/Currency_test.js).
