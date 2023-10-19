var assert = require("assert");

const Data = require("../code/conversions/Volume");

//"lt", ["ml", "cm3", "in3", "ft3", "pt", "quart", "gal"]
describe('Volume', function () {
    it("Conversions should not be empty", function () {
        let litres = new Data("litres", ["milliliter", "cubic meter", "cubic inch", "cubic foot", "pint", "quart", "gallon", "fl oz"]);
        assert.notStrictEqual(litres.getStandardConversion(30), "");
    });
    it("Standard Conversions should not be empty", function () {
        let litres = new Data("litres", ["milliliter", "cubic meter", "cubic inch", "cubic foot", "pint", "quart", "gallon", "fl oz"]);
        assert.notStrictEqual(litres.getAllConversions(1, 5), "");
        assert.notStrictEqual(litres.getAllConversions(1.5, 8), "");
    });

    
    it("Conversions should not be empty", function () {
        let milliliter = new Data("milliliter", ["litres", "cubic meter", "cubic inch", "cubic foot", "pint", "quart", "gallon", "fl oz"]);
        assert.notStrictEqual(milliliter.getStandardConversion(30), "");
    });
    it("Standard Conversions should not be empty", function () {
        let milliliter = new Data("milliliter", ["litres", "cubic meter", "cubic inch", "cubic foot", "pint", "quart", "gallon", "fl oz"]);
        assert.notStrictEqual(milliliter.getAllConversions(1, 5), "");
        assert.notStrictEqual(milliliter.getAllConversions(1.5, 8), "");
    });

    it("Conversions should not be empty", function () {
        let cm3 = new Data("cubic meter", ["litres", "milliliter", "cubic inch", "cubic foot", "pint", "quart", "gallon", "fl oz"]);
        assert.notStrictEqual(cm3.getStandardConversion(30), "");
    });
    it("Standard Conversions should not be empty", function () {
        let cm3 = new Data("cubic meter", ["litres", "milliliter", "cubic inch", "cubic foot", "pint", "quart", "gallon", "fl oz"]);
        assert.notStrictEqual(cm3.getAllConversions(1, 5), "");
        assert.notStrictEqual(cm3.getAllConversions(1.5, 8), "");
    });

    it("Conversions should not be empty", function () {
        let in3 = new Data("cubic inch", ["litres", "milliliter", "cubic meter", "cubic foot", "pint", "quart", "gallon", "fl oz"]);
        assert.notStrictEqual(in3.getStandardConversion(30), "");
    });
    it("Standard Conversions should not be empty", function () {
        let in3 = new Data("cubic inch", ["litres", "milliliter", "cubic meter", "cubic foot", "pint", "quart", "gallon", "fl oz"]);
        assert.notStrictEqual(in3.getAllConversions(1, 5), "");
        assert.notStrictEqual(in3.getAllConversions(1.5, 8), "");
    });

    it("Conversions should not be empty", function () {
        let ft3 = new Data("cubic foot", ["litres", "milliliter", "cubic meter", "cubic inch", "pint", "quart", "gallon", "fl oz"]);
        assert.notStrictEqual(ft3.getStandardConversion(30), "");
    });
    it("Standard Conversions should not be empty", function () {
        let ft3 = new Data("cubic foot", ["litres", "milliliter", "cubic meter", "cubic inch", "pint", "quart", "gallon", "fl oz"]);
        assert.notStrictEqual(ft3.getAllConversions(1, 5), "");
        assert.notStrictEqual(ft3.getAllConversions(1.5, 8), "");
    });

    it("Conversions should not be empty", function () {
        let quart = new Data("quart", ["litres", "milliliter", "cubic meter", "cubic inch", "pint", "cubic foot", "gallon", "fl oz"]);
        assert.notStrictEqual(quart.getStandardConversion(30), "");
    });
    it("Standard Conversions should not be empty", function () {
        let quart = new Data("quart", ["litres", "milliliter", "cubic meter", "cubic inch", "pint", "cubic foot", "gallon", "fl oz"]);
        assert.notStrictEqual(quart.getAllConversions(1, 5), "");
        assert.notStrictEqual(quart.getAllConversions(1.5, 8), "");
    });
    
    it("Conversions should not be empty", function () {
        let pint = new Data("pint", ["litres", "milliliter", "cubic meter", "cubic inch", "quart", "cubic foot", "gallon", "fl oz"]);
        assert.notStrictEqual(pint.getStandardConversion(30), "");
    });
    it("Standard Conversions should not be empty", function () {
        let pint = new Data("pint", ["litres", "milliliter", "cubic meter", "cubic inch", "quart", "cubic foot", "gallon", "fl oz"]);
        assert.notStrictEqual(pint.getAllConversions(1, 5), "");
        assert.notStrictEqual(pint.getAllConversions(1.5, 8), "");
    });

    it("Conversions should not be empty", function () {
        let gal = new Data("gallon", ["litres", "milliliter", "cubic meter", "cubic inch", "quart", "cubic foot", "pint", "fl oz"]);
        assert.notStrictEqual(gal.getStandardConversion(30), "");
    });
    it("Standard Conversions should not be empty", function () {
        let gal = new Data("gallon", ["litres", "milliliter", "cubic meter", "cubic inch", "quart", "cubic foot", "pint", "fl oz"]);
        assert.notStrictEqual(gal.getAllConversions(1, 5), "");
        assert.notStrictEqual(gal.getAllConversions(1.5, 8), "");
    });

    it("Conversions should not be empty", function () {
        let gal = new Data("gallon", ["litres", "milliliter", "cubic meter", "cubic inch", "quart", "cubic foot", "pint", "fl oz"]);
        assert.notStrictEqual(gal.getStandardConversion(300), "");
    });
    it("Standard Conversions should not be empty", function () {
        let gal = new Data("gallon", ["litres", "milliliter", "cubic meter", "cubic inch", "quart", "cubic foot", "pint", "fl oz"]);
        assert.notStrictEqual(gal.getAllConversions(100, 5), "");
        assert.notStrictEqual(gal.getAllConversions(150, 8), "");
    });
    it("Standard Conversions should not be empty", function () {
        let oz = new Data("fl oz", ["litres", "milliliter", "cubic meter", "cubic inch", "quart", "cubic foot", "pint", "gallon"]);
        assert.notStrictEqual(oz.getAllConversions(100, 5), "");
        assert.notStrictEqual(oz.getAllConversions(150, 8), "");
    });
    it("Conversions should not be empty", function () {
        let oz = new Data("fl oz", ["litres", "milliliter", "cubic meter", "cubic inch", "quart", "cubic foot", "pint", "gallon"]);
        assert.notStrictEqual(oz.getStandardConversion(300), "");
    });
    it("Standard Conversions should not be empty", function () {
        let oz = new Data("fl oz", ["litres", "milliliter", "cubic meter", "cubic inch", "quart", "cubic foot", "pint", "gallon"]);
        assert.notStrictEqual(oz.getAllConversions(1, 5), "");
        assert.notStrictEqual(oz.getAllConversions(1.5, 8), "");
    });
    it("Conversions should not be empty", function () {
        let oz = new Data("fl oz", ["litres", "milliliter", "cubic meter", "cubic inch", "quart", "cubic foot", "pint", "gallon"]);
        assert.notStrictEqual(oz.getStandardConversion(3), "");
    });
    it("Standard Conversions should not be empty", function () {
        let oz = new Data("fl oz", ["litres", "milliliter", "cubic meter", "cubic inch", "quart", "cubic foot", "pint", "gallon"]);
        assert.notStrictEqual(oz.getAllConversions(1000.5, 5), "");
        assert.notStrictEqual(oz.getAllConversions(1500.5, 8), "");
    });
    it("Conversions should not be empty", function () {
        let oz = new Data("gallon", ["litres", "milliliter", "cubic meter", "cubic inch", "quart", "cubic foot", "pint", "gallon"]);
        assert.notStrictEqual(oz.getStandardConversion(3000), "");
    });

    it("Standard Conversions should not be empty", function () {
        let oz = new Data("", ["litres", "milliliter", "cubic meter", "cubic inch", "quart", "cubic foot", "pint", "gallon"]);
        assert.notStrictEqual(oz.getAllConversions(1, 5), "");
        assert.notStrictEqual(oz.getAllConversions(1.5, 8), "");
    });
    it("Conversions should not be empty", function () {
        let oz = new Data("", ["litres", "milliliter", "cubic meter", "cubic inch", "quart", "cubic foot", "pint", "gallon"]);
        assert.notStrictEqual(oz.getStandardConversion(3), "");
    });
    it("Standard Conversions should not be empty", function () {
        let oz = new Data("", ["litres", "milliliter", "cubic meter", "cubic inch", "quart", "cubic foot", "pint", "gallon"]);
        assert.notStrictEqual(oz.getAllConversions(1000, 5), "");
        assert.notStrictEqual(oz.getAllConversions(1500, 8), "");
    });
    it("Conversions should not be empty", function () {
        let oz = new Data("", ["litres", "milliliter", "cubic meter", "cubic inch", "quart", "cubic foot", "pint", "gallon"]);
        assert.notStrictEqual(oz.getStandardConversion(3000), "");
    });
});