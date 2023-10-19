var assert = require("assert");

const Temp = require('../code/conversions/Temperature');

describe("Temperature", function () {
  it("Conversions should not be empty", function () {
    let celciuses = new Temp("celcius", [
      "kelvin",
      "fahrenheit",
    ]);
    assert.notStrictEqual(celciuses.getAllConversions(150, 2), "");
    assert.notStrictEqual(celciuses.getAllConversions(-150.00001, 2), "");
  });

  it("Conversions should not be empty", function () {
    let celciuses = new Temp("celcius", [
      "kelvin",
      "fahrenheit",
    ]);
    assert.notStrictEqual(celciuses.getAllConversions(1500.00001, 20), "");
    assert.notStrictEqual(celciuses.getAllConversions(-1500, 20), "");
  });

  it("Standard Conversions should not be empty", function () {
    let celciuses = new Temp("celcius", [
      "kelvin",
      "fahrenheit",
    ]);
    assert.notStrictEqual(celciuses.getStandardConversion(100), "");
  });

  it("Standard Conversions should not be empty", function () {
    let celciuses = new Temp("celcius", [
      "kelvin",
      "fahrenheit",
    ]);
    assert.notStrictEqual(celciuses.getStandardConversion(1), "");
  });

  it("Conversions should not be empty", function () {
    let kelvin = new Temp("kelvin", [
      "celcius",
      "fahrenheit",
    ]);
    assert.notStrictEqual(kelvin.getAllConversions(150.00001, 2), "");
    assert.notStrictEqual(kelvin.getAllConversions(-150, 2), "");
  });

  it("Conversions should not be empty", function () {
    let kelvin = new Temp("kelvin", [
      "celcius",
      "fahrenheit",
    ]);
    assert.notStrictEqual(kelvin.getAllConversions(1.5, 2), "");
    assert.notStrictEqual(kelvin.getAllConversions(-7.5, 2), "");
  });

  it("Conversions should not be empty", function () {
    let kelvin = new Temp("kelvin", [
      "celcius",
      "fahrenheit",
    ]);
    assert.notStrictEqual(kelvin.getAllConversions(15, 2), "");
    assert.notStrictEqual(kelvin.getAllConversions(-75.00001, 2), "");
  });

  it("Standard Conversions should not be empty", function () {
    let kelvin = new Temp("kelvin", [
      "celcius",
      "fahrenheit",
    ]);
    assert.notStrictEqual(kelvin.getStandardConversion(100), "");
  });

  it("Conversions should not be empty", function () {
    let fahrenheit = new Temp("fahrenheit", [
      "celcius",
      "kelvin",
    ]);
    assert.notStrictEqual(fahrenheit.getAllConversions(150.00001, 2), "");
    assert.notStrictEqual(fahrenheit.getAllConversions(-150, 2), "");
    assert.notStrictEqual(fahrenheit.getAllConversions(-1.5, 2), "");
  });

  it("Conversions should not be empty", function () {
    let fahrenheit = new Temp("fahrenheit", [
      "celcius",
      "kelvin",
    ]);
    assert.notStrictEqual(fahrenheit.getAllConversions(1500, 21), "");
    assert.notStrictEqual(fahrenheit.getAllConversions(-1500.00001, 21), "");
    assert.notStrictEqual(fahrenheit.getAllConversions(-15, 21), "");
  });

  it("Standard Conversions should not be empty", function () {
    let fahrenheit = new Temp("fahrenheit", [
      "celcius",
      "kelvin",
    ]);
    assert.notStrictEqual(fahrenheit.getStandardConversion(100), "");
  });

  it("Conversions should not be empty", function () {
    let temp = new Temp("", [
      "celcius",
      "kelvin",
      "fahrenheit",
    ]);
    assert.notStrictEqual(temp.getAllConversions(150, 2), "");
    assert.notStrictEqual(temp.getAllConversions(-150.00001, 2), "");
  });

  it("Standard Conversions should not be empty", function () {
    let temp = new Temp("", [
      "celcius",
      "kelvin",
      "fahrenheit",
    ]);
    assert.notStrictEqual(temp.getStandardConversion(100), "");
  });

  it("Standard Conversions should not be empty", function () {
    let temp = new Temp("", [
      "celcius",
      "kelvin",
      "fahrenheit",
    ]);
    assert.notStrictEqual(temp.getStandardConversion(1000.00001), "");
  });

});