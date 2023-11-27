var assert = require("assert");
const {getStandardConversion,getAllConversions,getPreciseNumberV,getPrecisionV} = require("../code/conversions/conversion");

// const Data = require("../code/conversions/Area");
let unit_object = {
    unit: "kilograms",
    type: "mass",
    aliases: ["kilograms", "kilogram", "kgs", "kg"],
    ratio: 1, // multiply with this quantity to convert from base to this unit
}
const listOfUnits = ["m2", "cm2", "km2", "miles2", "ft2", "in2", "ha2", "acre2", "yd2"];

describe('Area',function(){
    it("Standard Conversion should not be empty",function(){
        assert.notStrictEqual(getStandardConversion(unit_object,10),"")
    });
    it("All the conversions should not be empty ", function(){
        let precision = getPrecisionV(100);
        let precisionNumber = getPreciseNumberV(precision);
        assert.notStrictEqual(getAllConversions(100,precisionNumber,unit_object, listOfUnits),"");
        // assert.notStrictEqual(getAllConversions(0),"");
    });





})



// describe('Area', function () {
//     it("Conversions should not be empty", function () {
//         let m2 = new Data("m2", ["cm2", "km2", "miles2", "ft2", "in2", "ha2", "acre2", "yd2"]);
//         assert.notStrictEqual(m2.getStandardConversion(30), "");
//     });
//     it("Standard Conversions should not be empty", function () {
//         let m2 = new Data("m2", ["cm2", "km2", "miles2", "ft2", "in2", "ha2", "acre2", "yd2"]);
//         assert.notStrictEqual(m2.getAllConversions(1, 5), "");
//         assert.notStrictEqual(m2.getAllConversions(1.5, 8), "");
//     });

//     it("Conversions should not be empty", function () {
//         let m2 = new Data("m2", ["cm2", "km2", "miles2", "ft2", "in2", "ha2", "acre2", "yd2"]);
//         assert.notStrictEqual(m2.getStandardConversion(100), "");
//     });
//     it("Standard Conversions should not be empty", function () {
//         let m2 = new Data("m2", ["cm2", "km2", "miles2", "ft2", "in2", "ha2", "acre2", "yd2"]);
//         assert.notStrictEqual(m2.getAllConversions(150, 5), "");
//         assert.notStrictEqual(m2.getAllConversions(175.5, 10), "");
//     });
    
//     it("Conversions should not be empty", function () {
//         let cm2 = new Data("cm2", ["m2", "km2", "miles2", "ft2", "in2", "ha2", "acre2", "yd2"]);
//         assert.notStrictEqual(cm2.getStandardConversion(30), "");
//     });
//     it("Standard Conversions should not be empty", function () {
//         let cm2 = new Data("cm2", ["m2", "km2", "miles2", "ft2", "in2", "ha2", "acre2", "yd2"]);
//         assert.notStrictEqual(cm2.getAllConversions(1, 5), "");
//         assert.notStrictEqual(cm2.getAllConversions(1.5, 8), "");
//     });

//     it("Conversions should not be empty", function () {
//         let cm2 = new Data("cm2", ["m2", "km2", "miles2", "ft2", "in2", "ha2", "acre2", "yd2"]);
//         assert.notStrictEqual(cm2.getStandardConversion(100), "");
//     });
//     it("Standard Conversions should not be empty", function () {
//         let cm2 = new Data("cm2", ["m2", "km2", "miles2", "ft2", "in2", "ha2", "acre2", "yd2"]);
//         assert.notStrictEqual(cm2.getAllConversions(150, 5), "");
//         assert.notStrictEqual(cm2.getAllConversions(175.5, 10), "");
//     });

//     it("Conversions should not be empty", function () {
//         let km2 = new Data("km2", ["m2", "cm2", "miles2", "ft2", "in2", "ha2", "acre2", "yd2"]);
//         assert.notStrictEqual(km2.getStandardConversion(30), "");
//     });
//     it("Standard Conversions should not be empty", function () {
//         let km2 = new Data("km2", ["m2", "cm2", "miles2", "ft2", "in2", "ha2", "acre2", "yd2"]);
//         assert.notStrictEqual(km2.getAllConversions(1, 5), "");
//         assert.notStrictEqual(km2.getAllConversions(1.5, 8), "");
//     });

//     it("Conversions should not be empty", function () {
//         let km2 = new Data("km2", ["m2", "cm2", "miles2", "ft2", "in2", "ha2", "acre2", "yd2"]);
//         assert.notStrictEqual(km2.getStandardConversion(100), "");
//     });
//     it("Standard Conversions should not be empty", function () {
//         let km2 = new Data("km2", ["m2", "cm2", "miles2", "ft2", "in2", "ha2", "acre2", "yd2"]);
//         assert.notStrictEqual(km2.getAllConversions(150, 5), "");
//         assert.notStrictEqual(km2.getAllConversions(175.5, 10), "");
//     });

//     it("Conversions should not be empty", function () {
//         let miles2 = new Data("miles2", ["m2", "cm2", "km2", "ft2", "in2", "ha2", "acre2", "yd2"]);
//         assert.notStrictEqual(miles2.getStandardConversion(30), "");
//     });
//     it("Standard Conversions should not be empty", function () {
//         let miles2 = new Data("miles2", ["m2", "cm2", "km2", "ft2", "in2", "ha2", "acre2", "yd2"]);
//         assert.notStrictEqual(miles2.getAllConversions(1, 5), "");
//         assert.notStrictEqual(miles2.getAllConversions(1.5, 8), "");
//     });

//     it("Conversions should not be empty", function () {
//         let miles2 = new Data("miles2", ["m2", "cm2", "km2", "ft2", "in2", "ha2", "acre2", "yd2"]);
//         assert.notStrictEqual(miles2.getStandardConversion(100), "");
//     });
//     it("Standard Conversions should not be empty", function () {
//         let miles2 = new Data("miles2", ["m2", "cm2", "km2", "ft2", "in2", "ha2", "acre2", "yd2"]);
//         assert.notStrictEqual(miles2.getAllConversions(150, 5), "");
//         assert.notStrictEqual(miles2.getAllConversions(175.5, 8), "");
//     });

//     it("Conversions should not be empty", function () {
//         let ft2 = new Data("ft2", ["m2", "cm2", "km2", "miles2", "in2", "ha2", "acre2", "yd2"]);
//         assert.notStrictEqual(ft2.getStandardConversion(30), "");
//     });
//     it("Standard Conversions should not be empty", function () {
//         let ft2 = new Data("ft2", ["m2", "cm2", "km2", "miles2", "in2", "ha2", "acre2", "yd2"]);
//         assert.notStrictEqual(ft2.getAllConversions(1, 5), "");
//         assert.notStrictEqual(ft2.getAllConversions(1.5, 8), "");
//     });

//     it("Conversions should not be empty", function () {
//         let ft2 = new Data("ft2", ["m2", "cm2", "km2", "miles2", "in2", "ha2", "acre2", "yd2"]);
//         assert.notStrictEqual(ft2.getStandardConversion(100), "");
//     });
//     it("Standard Conversions should not be empty", function () {
//         let ft2 = new Data("ft2", ["m2", "cm2", "km2", "miles2", "in2", "ha2", "acre2", "yd2"]);
//         assert.notStrictEqual(ft2.getAllConversions(150, 5), "");
//         assert.notStrictEqual(ft2.getAllConversions(175.5, 10), "");
//     });

//     it("Conversions should not be empty", function () {
//         let in2 = new Data("in2", ["m2", "cm2", "km2", "miles2", "ft2", "ha2", "acre2", "yd2"]);
//         assert.notStrictEqual(in2.getStandardConversion(30), "");
//     });
//     it("Standard Conversions should not be empty", function () {
//         let in2 = new Data("in2", ["m2", "cm2", "km2", "miles2", "ft2", "ha2", "acre2", "yd2"]);
//         assert.notStrictEqual(in2.getAllConversions(1, 5), "");
//         assert.notStrictEqual(in2.getAllConversions(1.5, 8), "");
//     });

//     it("Conversions should not be empty", function () {
//         let in2 = new Data("in2", ["m2", "cm2", "km2", "miles2", "ft2", "ha2", "acre2", "yd2"]);
//         assert.notStrictEqual(in2.getStandardConversion(100), "");
//     });
//     it("Standard Conversions should not be empty", function () {
//         let in2 = new Data("in2", ["m2", "cm2", "km2", "miles2", "ft2", "ha2", "acre2", "yd2"]);
//         assert.notStrictEqual(in2.getAllConversions(150, 5), "");
//         assert.notStrictEqual(in2.getAllConversions(175.5, 10), "");
//     });

//     it("Conversions should not be empty", function () {
//         let ha2 = new Data("ha2", ["m2", "cm2", "km2", "miles2", "ft2", "in2", "acre2", "yd2"]);
//         assert.notStrictEqual(ha2.getStandardConversion(30), "");
//     });
//     it("Standard Conversions should not be empty", function () {
//         let ha2 = new Data("ha2", ["m2", "cm2", "km2", "miles2", "ft2", "in2", "acre2", "yd2"]);
//         assert.notStrictEqual(ha2.getAllConversions(1, 5), "");
//         assert.notStrictEqual(ha2.getAllConversions(1.5, 8), "");
//     });

//     it("Conversions should not be empty", function () {
//         let ha2 = new Data("ha2", ["m2", "cm2", "km2", "miles2", "ft2", "in2", "acre2", "yd2"]);
//         assert.notStrictEqual(ha2.getStandardConversion(100), "");
//     });
//     it("Standard Conversions should not be empty", function () {
//         let ha2 = new Data("ha2", ["m2", "cm2", "km2", "miles2", "ft2", "in2", "acre2", "yd2"]);
//         assert.notStrictEqual(ha2.getAllConversions(150, 5), "");
//         assert.notStrictEqual(ha2.getAllConversions(175.5, 8), "");
//     });

//     it("Conversions should not be empty", function () {
//         let acre2 = new Data("acre2", ["m2", "cm2", "km2", "miles2", "ft2", "in2", "ha2", "yd2"]);
//         assert.notStrictEqual(acre2.getStandardConversion(30), "");
//     });
//     it("Standard Conversions should not be empty", function () {
//         let acre2 = new Data("acre2", ["m2", "cm2", "km2", "miles2", "ft2", "in2", "ha2", "yd2"]);
//         assert.notStrictEqual(acre2.getAllConversions(1, 5), "");
//         assert.notStrictEqual(acre2.getAllConversions(1.5, 8), "");
//     });

//     it("Conversions should not be empty", function () {
//         let acre2 = new Data("acre2", ["m2", "cm2", "km2", "miles2", "ft2", "in2", "ha2", "yd2"]);
//         assert.notStrictEqual(acre2.getStandardConversion(100), "");
//     });
//     it("Standard Conversions should not be empty", function () {
//         let acre2 = new Data("acre2", ["m2", "cm2", "km2", "miles2", "ft2", "in2", "ha2", "yd2"]);
//         assert.notStrictEqual(acre2.getAllConversions(150, 5), "");
//         assert.notStrictEqual(acre2.getAllConversions(175.5, 10), "");
//     });

//     it("Conversions should not be empty", function () {
//         let yd2 = new Data("yd2", ["m2", "cm2", "km2", "miles2", "ft2", "in2", "ha2", "acre2"]);
//         assert.notStrictEqual(yd2.getStandardConversion(30), "");
//     });
//     it("Standard Conversions should not be empty", function () {
//         let yd2 = new Data("yd2", ["m2", "cm2", "km2", "miles2", "ft2", "in2", "ha2", "acre2"]);
//         assert.notStrictEqual(yd2.getAllConversions(1, 5), "");
//         assert.notStrictEqual(yd2.getAllConversions(1.5, 8), "");
//     });

//     it("Conversions should not be empty", function () {
//         let yd2 = new Data("yd2", ["m2", "cm2", "km2", "miles2", "ft2", "in2", "ha2", "acre2"]);
//         assert.notStrictEqual(yd2.getStandardConversion(100), "");
//     });
//     it("Standard Conversions should not be empty", function () {
//         let yd2 = new Data("yd2", ["m2", "cm2", "km2", "miles2", "ft2", "in2", "ha2", "acre2"]);
//         assert.notStrictEqual(yd2.getAllConversions(150, 5), "");
//         assert.notStrictEqual(yd2.getAllConversions(175.5, 8), "");
//     });

//     it("Conversions should not be empty", function () {
//         let yd2 = new Data("", ["m2", "cm2", "km2", "miles2", "ft2", "in2", "ha2", "acre2"]);
//         assert.notStrictEqual(yd2.getStandardConversion(30), "");
//     });
//     it("Standard Conversions should not be empty", function () {
//         let yd2 = new Data("", ["m2", "cm2", "km2", "miles2", "ft2", "in2", "ha2", "acre2"]);
//         assert.notStrictEqual(yd2.getAllConversions(1, 5), "");
//         assert.notStrictEqual(yd2.getAllConversions(1.5, 8), "");
//     });

//     it("Conversions should not be empty", function () {
//         let yd2 = new Data("", ["m2", "cm2", "km2", "miles2", "ft2", "in2", "ha2", "acre2"]);
//         assert.notStrictEqual(yd2.getStandardConversion(100), "");
//     });
//     it("Standard Conversions should not be empty", function () {
//         let yd2 = new Data("", ["m2", "cm2", "km2", "miles2", "ft2", "in2", "ha2", "acre2"]);
//         assert.notStrictEqual(yd2.getAllConversions(150, 5), "");
//         assert.notStrictEqual(yd2.getAllConversions(175.5, 8), "");
//     });

// });