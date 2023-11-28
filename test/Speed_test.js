var assert = require("assert");

const {getStandardConversion,getAllConversions} = require("../code/conversions/conversion");


describe('Speed', function() {
    let unit_object_ms = {
        unit: "m/s",
        type: "speed",
        aliases: ["meters/s", "m/s", "meters per sec", "meters per second"],
        ratio: 1,
    };
    let object_list_ms = ["km/h", "mph"];

    it("Conversions should not be empty", function() {
        assert.notStrictEqual(getStandardConversion(unit_object_ms,30), "");
    });


    it("Standard Conversions should not be empty", function () {
        assert.notStrictEqual(getAllConversions(100, 500,unit_object_ms,object_list_ms), "");
        assert.notStrictEqual(getAllConversions(1000, 800, unit_object_ms, object_list_ms), "");
    });

    let unit_object_kmh = {
        unit: "Km/h",
        type: "speed",
        aliases: [
            "kilometers/h",
            "Km/h",
            "Kilometers per hour",
            "Kilometers per hour",
        ],
        ratio: 3.6,
    };
    let object_list_kmh = ["m/s", "mph"];

    it("Standard Conversions should not be empty", function() {
        assert.notStrictEqual(getStandardConversion(unit_object_kmh, 40), "");
    });

    it("All Conversions should not be empty", function () {
        assert.notStrictEqual(getAllConversions(10, 3, unit_object_kmh, object_list_kmh), "");
        assert.notStrictEqual(getAllConversions(-1, 3, unit_object_kmh, object_list_kmh), "");
    });

    it("Standard Conversions should not be empty", function () {
        assert.notStrictEqual(getAllConversions(100, 30, unit_object_kmh, object_list_kmh), "");
        assert.notStrictEqual(getAllConversions(-10, 30, unit_object_kmh, object_list_kmh), "");
    });

    it("Standard Conversions should not be empty", function () {
        assert.notStrictEqual(getAllConversions(1000, 300, unit_object_kmh, object_list_kmh), "");
        assert.notStrictEqual(getAllConversions(-100, 300, unit_object_kmh, object_list_kmh), "");
    });

    let unit_object_mph = {
        unit: "mph",
        type: "speed",
        aliases: [
            "mph",
            "Mph",
            "mile/h",
            "Mile/h",
            "Miles per hour",
            "miles per hour",
        ],
        ratio: 2.23694,
    };
    let object_list_mph = ["m/s", "km/h"];
    it("Conversions should not be empty", function() {
        assert.notStrictEqual(getStandardConversion(unit_object_mph,20), "");
    });

    it("Standard Conversions should not be empty", function () {
        assert.notStrictEqual(getAllConversions(10, 2, unit_object_mph, object_list_mph), "");
    });

    
    it("Standard Conversions should not be empty", function () {
        assert.notStrictEqual(getAllConversions(100, 20, unit_object_mph, object_list_mph), "");
    });

    it("Standard Conversions should not be empty", function () {
        assert.notStrictEqual(getAllConversions(100, 20, unit_object_mph,object_list_mph), "");
    })
});