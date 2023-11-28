var assert = require("assert");
const {getStandardConversion,getAllConversions} = require("../code/conversions/conversion");

// const Data = require("../code/conversions/Area");


// const listOfUnits = ["m2", "cm2", "km2", "miles2", "ft2", "in2", "ha2", "acre2", "yd2"];

describe('Area',function(){
    const unit_object_m2 = {
        unit: "m2",
        type: "area",
        aliases: ["m2", " m2", "m²", "sqm"],
        ratio: 1,
    };
    const listOfUnits_m2 = ["cm2", "km2", "miles2", "ft2", "in2", "ha2", "acre2", "yd2"];
    it("Standard Conversion should not be empty for m2",function(){
        assert.notStrictEqual(getStandardConversion(unit_object_m2,10),"","m2 conversion should not be empty")
    });
    it("All the conversions should not be empty for m2", function(){
        assert.notStrictEqual(getAllConversions(100,5,unit_object_m2, listOfUnits_m2),"","m2 conversion should not be empty");
        
    });
    //cm2 test
    const unit_object_cm2 = {
		unit: "cm2",
		type: "area",
		aliases: ["cm2", " cm2", "cm²", "sqcm"],
		ratio: 10000,
	};
    const listOfUnits_cm2 = ["m2", "km2", "miles2", "ft2", "in2", "ha2", "acre2", "yd2"];
    it("Standard Conversion should not be empty for cm2",function(){
        assert.notStrictEqual(getStandardConversion(unit_object_cm2,20),"","cm2 conversion should not be empty")
    });
    it("All the conversions should not be empty for cm2 ", function(){
    
        assert.notStrictEqual(getAllConversions(200,2,unit_object_cm2, listOfUnits_cm2),"","cm2 conversion should not be empty");
        // assert.notStrictEqual(getAllConversions(0),"");
    });
    //km2 test
    const unit_object_km2 = {
		unit: "km2",
		type: "area",
		aliases: ["km2", " km2", "km²", "sqkm"],
		ratio: 0.000001
	};
    const listOfUnits_km2 = ["cm2", "m2", "miles2", "ft2", "in2", "ha2", "acre2", "yd2"];
    it("Standard Conversion should not be empty for km2",function(){
        assert.notStrictEqual(getStandardConversion(unit_object_km2,10),"","km2 conversion should not be empty")
    });
    it("All the conversions should not be empty for km2 ", function(){
      
        assert.notStrictEqual(getAllConversions(100,4,unit_object_km2, listOfUnits_km2),"","km2 conversion should not be empty");
        // assert.notStrictEqual(getAllConversions(0),"");
    });
    //miles2 test
    const unit_object_miles2 = {
		unit: "miles2",
		type: "area",
		aliases: ["miles2", " miles2", "miles²", "sqmiles"],
		ratio: 0.0000003861
	};
    const listOfUnits_miles2 = ["cm2", "km2", "m2", "ft2", "in2", "ha2", "acre2", "yd2"];
    it("Standard Conversion should not be empty for miles2",function(){
        assert.notStrictEqual(getStandardConversion(unit_object_miles2,30),"","miles2 conversion should not be empty")
    });
    it("All the conversions should not be empty for miles2 ", function(){
 
        assert.notStrictEqual(getAllConversions(100,3,unit_object_miles2, listOfUnits_miles2),"","miles2 conversion should not be empty");
        // assert.notStrictEqual(getAllConversions(0),"");
    });


    //ft2 test
    const unit_object_ft2 = {
		unit: "ft2",
		type: "area",
		aliases: ["ft2", " ft2", "ft²", " sqft"],
		ratio: 10.76385024645,
	};
    const listOfUnits_ft2 = ["cm2", "km2", "miles2", "m2", "in2", "ha2", "acre2", "yd2"];
    it("Standard Conversion should not be empty for ft2",function(){
        assert.notStrictEqual(getStandardConversion(unit_object_ft2,10),"","ft2 conversion should not be empty")
    });
    it("All the conversions should not be empty for ft2 ", function(){
  
        assert.notStrictEqual(getAllConversions(100,7,unit_object_ft2, listOfUnits_ft2),"","ft2 conversion should not be empty");
        // assert.notStrictEqual(getAllConversions(0),"");
    });
    //in2 test
    const unit_object_in2 = {
		unit: "in2",
		type: "area",
		aliases: ["in2", " in2", "in²", "sqin"],
		ratio: 1549.9944354888,
	};
    const listOfUnits_in2 = ["cm2", "km2", "miles2", "ft2", "m2", "ha2", "acre2", "yd2"];
    it("Standard Conversion should not be empty for in2",function(){
        assert.notStrictEqual(getStandardConversion(unit_object_in2,10),"","in2 conversion should not be empty")
    });
    it("All the conversions should not be empty for in2 ", function(){
   
        assert.notStrictEqual(getAllConversions(100,2,unit_object_in2, listOfUnits_in2),"","in2 conversion should not be empty");
        // assert.notStrictEqual(getAllConversions(0),"");
    });
    //ha2 test
    const unit_object_ha2 = {
		unit: "ha2",
		type: "area",
		aliases: ["ha2", " ha2", "ha²", "sqha"],
		ratio: 0.0001,
	};
    const listOfUnits_ha2 = ["cm2", "km2", "miles2", "ft2", "in2", "m2", "acre2", "yd2"];
    it("Standard Conversion should not be empty for ha2",function(){
        assert.notStrictEqual(getStandardConversion(unit_object_ha2,10),"","ha2 conversion should not be empty")
    });
    it("All the conversions should not be empty for ha2", function(){
  
        assert.notStrictEqual(getAllConversions(100,5,unit_object_ha2, listOfUnits_ha2),"","ha2 conversion should not be empty");
        // assert.notStrictEqual(getAllConversions(0),"");
    });
    //acre2 test
    const unit_object_acre2 = {
		unit: "acre2",
		type: "area",
		aliases: ["acre2", " acre2", "acre²", "sqacre"],
		ratio: 0.000247105,
	};
    const listOfUnits_acre2 = ["cm2", "km2", "miles2", "ft2", "in2", "ha2", "m2", "yd2"];
    it("Standard Conversion should not be empty for acre2",function(){
        assert.notStrictEqual(getStandardConversion(unit_object_acre2,10),"","acre2 conversion should not be empty")
    });
    it("All the conversions should not be empty for acre2 ", function(){
  
        assert.notStrictEqual(getAllConversions(100,10,unit_object_acre2, listOfUnits_acre2),"","acre2 conversion should not be empty");
        // assert.notStrictEqual(getAllConversions(0),"");
    });
    //yd2 test
    const unit_object_yd2 = {
		unit: "yd2",
		type: "area",
		aliases: ["yd2", " yd2", "yd²", "sqyd"],
		ratio: 1.19599,
	};
    const listOfUnits_yd2 = ["cm2", "km2", "miles2", "ft2", "in2", "ha2", "acre2", "m2"];
    it("Standard Conversion should not be empty for yd2",function(){
        assert.notStrictEqual(getStandardConversion(unit_object_yd2,10),"","yd2 conversion should not be empty")
    });
    it("All the conversions should not be empty for yd2", function(){

        assert.notStrictEqual(getAllConversions(100,6,unit_object_yd2, listOfUnits_yd2),"","yd2 conversion should not be empty");
        // assert.notStrictEqual(getAllConversions(0),"");
    })
}); 



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