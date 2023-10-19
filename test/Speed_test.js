var assert = require("assert");

const Speed = require("../code/conversions/Speed");

describe('Speed', function() {
    it("Conversions should not be empty", function() {
        let ms = new Speed("m/s", ["km/h", "mph"]);
        assert.notStrictEqual(ms.getStandardConversion(30), "");
    });

    it("Standard Conversions should not be empty", function () {
        let ms = new Speed("m/s", ["km/h", "mph"]);
        assert.notStrictEqual(ms.getAllConversions(1, 5), "");
        assert.notStrictEqual(ms.getAllConversions(1.5, 8), "");
    });

    it("Standard Conversions should not be empty", function () {
        let ms = new Speed("m/s", ["km/h", "mph"]);
        assert.notStrictEqual(ms.getAllConversions(100, 500), "");
        assert.notStrictEqual(ms.getAllConversions(1000, 800), "");
    });

    it("Conversions should not be empty", function() {
        let kmh = new Speed("km/h", ["m/s", "mph"]);
        assert.notStrictEqual(kmh.getStandardConversion(40), "");
    });

    it("Standard Conversions should not be empty", function () {
        let kmh = new Speed("km/h", ["m/s", "mph"]);
        assert.notStrictEqual(kmh.getAllConversions(10, 3), "");
        assert.notStrictEqual(kmh.getAllConversions(-1, 3), "");
    });

    it("Standard Conversions should not be empty", function () {
        let kmh = new Speed("km/h", ["m/s", "mph"]);
        assert.notStrictEqual(kmh.getAllConversions(100, 30), "");
        assert.notStrictEqual(kmh.getAllConversions(-10, 30), "");
    });

    it("Standard Conversions should not be empty", function () {
        let kmh = new Speed("km/h", ["m/s", "mph"]);
        assert.notStrictEqual(kmh.getAllConversions(1000, 300), "");
        assert.notStrictEqual(kmh.getAllConversions(-100, 300), "");
    });

    it("Conversions should not be empty", function() {
        let mph = new Speed("mph", ["m/s", "km/h"]);
        assert.notStrictEqual(mph.getStandardConversion(20), "");
    });

    it("Standard Conversions should not be empty", function () {
        let mph = new Speed("mph", ["m/s", "km/h"]);
        assert.notStrictEqual(mph.getAllConversions(10, 2), "");
    });

    
    it("Standard Conversions should not be empty", function () {
        let mph = new Speed("mph", ["m/s", "km/h"]);
        assert.notStrictEqual(mph.getAllConversions(100, 20), "");
    });

    it("Standard Conversions should not be empty", function () {
        let mph = new Speed("mph", ["m/s", "km/h"]);
        assert.notStrictEqual(mph.getAllConversions(100, 20), "");
    });

    it("Standard Conversions should not be empty", function () {
        let mph = new Speed("mph", ["m/s", "km/h"]);
        assert.notStrictEqual(mph.getAllConversions(1000, 200), "");
    });
});