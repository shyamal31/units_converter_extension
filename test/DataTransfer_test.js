var assert = require("assert");

const Data = require("../code/conversions/DataTransfer");

describe('DataTransfer', function () {
    it("Conversions should not be empty", function () {
        let test = new Data("", ["kb/s", "mb/s", "gb/s", "tb/s"]);
        assert.notStrictEqual(test.getStandardConversion(30), "");
    });

    it("Conversions should not be empty", function () {
        let bs = new Data("b/s", ["kb/s", "mb/s", "gb/s", "tb/s"]);
        assert.notStrictEqual(bs.getStandardConversion(30), "");
    });

    it("Standard Conversions should not be empty", function () {
        let bs = new Data("b/s", ["kb/s", "mb/s", "gb/s", "tb/s"]);
        assert.notStrictEqual(bs.getAllConversions(1, 5), "");
        assert.notStrictEqual(bs.getAllConversions(1.5, 8), "");
    });

    it("Conversions should not be empty", function () {
        let kbs = new Data("kb/s", ["b/s", "mb/s", "gb/s", "tb/s"]);
        assert.notStrictEqual(kbs.getStandardConversion(40), "");
    });

    it("Standard Conversions should not be empty", function () {
        let kbs = new Data("kb/s", ["b/s", "mb/s", "gb/s", "tb/s"]);
        assert.notStrictEqual(kbs.getAllConversions(10, 3), "");
        assert.notStrictEqual(kbs.getAllConversions(5.5, 3), "");
    });

    it("Conversions should not be empty", function () {
        let mbs = new Data("mb/s", ["b/s", "kb/s", "gb/s", "tb/s"]);
        assert.notStrictEqual(mbs.getStandardConversion(20), "");
    });

    it("Standard Conversions should not be empty", function () {
        let mbs = new Data("mb/s", ["b/s", "kb/s", "gb/s", "tb/s"]);
        assert.notStrictEqual(mbs.getAllConversions(10, 2), "");
        assert.notStrictEqual(mbs.getAllConversions(5.5, 10), "");
    });

    it("Conversions should not be empty", function () {
        let gbs = new Data("gb/s", ["b/s", "mb/s", "kb/s", "tb/s"]);
        assert.notStrictEqual(gbs.getStandardConversion(20), "");
    });

    it("Standard Conversions should not be empty", function () {
        let gbs = new Data("gb/s", ["b/s", "mb/s", "kb/s", "tb/s"]);
        assert.notStrictEqual(gbs.getAllConversions(10, 2), "");
        assert.notStrictEqual(gbs.getAllConversions(5.5, 10), "");
    });

    it("Conversions should not be empty", function () {
        let tbs = new Data("tb/s", ["b/s", "mb/s", "kb/s", "gb/s"]);
        assert.notStrictEqual(tbs.getStandardConversion(20), "");
    });

    it("Standard Conversions should not be empty", function () {
        let tbs = new Data("tb/s", ["b/s", "mb/s", "kb/s", "gb/s"]);
        assert.notStrictEqual(tbs.getAllConversions(10, 2), "");
        assert.notStrictEqual(tbs.getAllConversions(5.5, 10), "");
    });
});