var assert = require("assert");

const Data = require("../code/conversions/Data");

describe("Data", function () {
  //Byte
  let byte = new Data("B", ["KB", "MB", "GB", "TB"]);
  it("Conversions should not be empty", function () {
    assert.notStrictEqual(byte.getStandardConversion(30), "");
  });
  it("Standard Conversions should not be empty", function () {
    assert.notStrictEqual(byte.getAllConversions(1, 5), "");
    assert.notStrictEqual(byte.getAllConversions(1.5, 8), "");
  });

  //KiloByte
  let kb = new Data("KB", ["B", "MB", "GB", "TB"]);
  it("Conversions should not be empty", function () {
    assert.notStrictEqual(kb.getStandardConversion(30), "");
  });
  it("Standard Conversions should not be empty", function () {
    assert.notStrictEqual(kb.getAllConversions(1, 5), "");
    assert.notStrictEqual(kb.getAllConversions(1.5, 8), "");
  });

  //MegaByte
  let mb = new Data("MB", ["B", "KB", "GB", "TB"]);
  it("Conversions should not be empty", function () {
    assert.notStrictEqual(mb.getStandardConversion(30), "");
  });

  it("Standard Conversions should not be empty", function () {
    assert.notStrictEqual(mb.getAllConversions(1, 5), "");
    assert.notStrictEqual(mb.getAllConversions(1.5, 8), "");
  });

  //GigaByte
  let gb = new Data("GB", ["B", "KB", "MB", "TB"]);
  it("Conversions should not be empty", function () {
    assert.notStrictEqual(gb.getStandardConversion(30), "");
  });

  it("Standard Conversions should not be empty", function () {
    assert.notStrictEqual(gb.getAllConversions(1, 5), "");
    assert.notStrictEqual(gb.getAllConversions(1.5, 8), "");
  });

  //TeraByte
  let tb = new Data("TB", ["B", "KB", "MB", "GB"]);
  it("Conversions should not be empty", function () {
    assert.notStrictEqual(tb.getStandardConversion(30), "");
  });

  it("Standard Conversions should not be empty", function () {
    assert.notStrictEqual(tb.getAllConversions(1, 5), "");
    assert.notStrictEqual(tb.getAllConversions(1.5, 8), "");
  });
  it("Conversions should not be empty", function () {
    let test = new Data("", ["B","KB", "MB", "GB", "TB"]);
    assert.notStrictEqual(test.getStandardConversion(30), "");
});
  it("Conversions should not be empty", function () {
  let test = new Data("", ["B","KB","MB", "GB", "TB"]);
  assert.notStrictEqual(test.getStandardConversion(30), "");
});
});
