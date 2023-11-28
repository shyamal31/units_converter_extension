var assert = require("assert");

const {getStandardConversion,getAllConversions} = require("../code/conversions/conversion");

describe("Mass", function () {
  //kg
  const unit_object_kg = {
		unit: "kilograms",
		type: "mass",
		aliases: ["kilograms", "kilogram", "kgs", "kg"],
		ratio: 1, // multiply with this quantity to convert from base to this unit
	} ;
  const object_list_kg = [
    "grams",
    "pounds",
    "tonnes",
    "milligrams",
    "micrograms",
    "ounces",
    "tonss",
  ];
  it("Conversions should not be empty", function () {
    assert.notStrictEqual(getAllConversions(49, 2, unit_object_kg, object_list_kg), "");
    assert.notStrictEqual(getAllConversions(-49, 2, unit_object_kg, object_list_kg), "");
  });

  it("Standard Conversions should not be empty", function () {
    assert.notStrictEqual(getStandardConversion(unit_object_kg,1), "");
  });
  it("All Conversions should not be empty", function () {
    assert.notStrictEqual(getAllConversions(490.5, 2, unit_object_kg, object_list_kg), "");
    assert.notStrictEqual(getAllConversions(-490.5, 2, unit_object_kg, object_list_kg), "");
  });

  it("Standard Conversions should not be empty", function () {
    assert.notStrictEqual(getStandardConversion(unit_object_kg,100.5), "");
  });

  //grams
  const unit_object_grams = {
		unit: "grams",
		type: "mass",
		aliases: ["grams", "gram", "gms", "gm", "g"],
		ratio: 1000,
	};
  const object_list_grams = [
    "kilograms",
    "pounds",
    "tonnes",
    "milligrams",
    "micrograms",
    "ounces",
    "tonss",
  ];
  it("Conversions should not be empty", function () {
    assert.notStrictEqual(getAllConversions(49, 2,unit_object_grams, object_list_grams), "");
    assert.notStrictEqual(getAllConversions(-49, 2,unit_object_grams, object_list_grams), "");
  });

  it("Standard Conversions should not be empty", function () {
    assert.notStrictEqual(getStandardConversion(unit_object_grams,1), "");
  });

  it("Conversions should not be empty", function () {
    assert.notStrictEqual(getAllConversions(490.5, 2,unit_object_grams, object_list_grams), "");
    assert.notStrictEqual(getAllConversions(-490.5, 2,unit_object_grams, object_list_grams), "");
  });

  it("Standard Conversions should not be empty", function () {
    assert.notStrictEqual(getStandardConversion(unit_object_grams,100), "");
  });

  //pound
  const unit_object_pound = {
		unit: "pounds",
		type: "mass",
		aliases: ["pounds", "pound", "lbs", "lb"],
		ratio: 2.20462,
	};
  const object_list_pound = [
    "kilograms",
    "grams",
    "tonnes",
    "milligrams",
    "micrograms",
    "ounces",
    "tonss",
  ];
  it("Conversions should not be empty", function () {
    assert.notStrictEqual(getAllConversions(49, 2, unit_object_pound, object_list_pound), "");
    assert.notStrictEqual(getAllConversions(-49, 2, unit_object_pound, object_list_pound), "");
  });

  it("Standard Conversions should not be empty", function () {
    assert.notStrictEqual(getStandardConversion(unit_object_pound,1), "");
  });

  it("Conversions should not be empty", function () {
    assert.notStrictEqual(getAllConversions(490.5, 2, unit_object_pound, object_list_pound), "");
    assert.notStrictEqual(getAllConversions(-490.5, 2, unit_object_pound, object_list_pound), "");
  });

  it("Standard Conversions should not be empty", function () {
    assert.notStrictEqual(getStandardConversion(unit_object_pound,100.5), "");
  });

  //tonne
  const unit_object_tonne = {
		unit: "tonne",
		type: "mass",
		aliases: ["metric tons", "metric ton", "tonnes", "tonne"],
		ratio: 0.001,
	};
  const object_list_tonne = [
    "kilograms",
    "grams",
    "pounds",
    "milligrams",
    "micrograms",
    "ounces",
    "tonss",
  ];
  it("Conversions should not be empty", function () {

    assert.notStrictEqual(getAllConversions(49, 2, unit_object_tonne, object_list_tonne), "");
    assert.notStrictEqual(getAllConversions(-49, 2, unit_object_tonne, object_list_tonne), "");
  });

  it("Standard Conversions should not be empty", function () {
    assert.notStrictEqual(getStandardConversion(unit_object_tonne,1), "");
  });

  it("Conversions should not be empty", function () {
    assert.notStrictEqual(getAllConversions(490.5, 2, unit_object_tonne, object_list_tonne), "");
    assert.notStrictEqual(getAllConversions(-490.5, 2, unit_object_tonne, object_list_tonne), "");
  });

  it("Standard Conversions should not be empty", function () {
   
    assert.notStrictEqual(getStandardConversion(unit_object_tonne,100.5), "");
  });


  //mg
  const unit_object_mg = {
		unit: "milligrams",
		type: "mass",
		aliases: ["milligrams", "milligram", "mgs", "mg"],
		ratio: 1000000,
	} ;
  const object_list_mg = [
    "kilograms",
    "grams",
    "pounds",
    "tonnes",
    "micrograms",
    "ounces",
    "tonss",
  ];
  it("Conversions should not be empty", function () {
    assert.notStrictEqual(getAllConversions(49, 2,unit_object_mg, object_list_mg), "");
    assert.notStrictEqual(getAllConversions(-49, 2,unit_object_mg, object_list_mg), "");
  });

  it("Standard Conversions should not be empty", function () {
    assert.notStrictEqual(getStandardConversion(unit_object_mg,1), "");
  });

  it("Conversions should not be empty", function () {
    assert.notStrictEqual(getAllConversions(490.5, 2,unit_object_mg, object_list_mg), "");
    assert.notStrictEqual(getAllConversions(-490.5, 2,unit_object_mg, object_list_mg), "");
  });

  it("Standard Conversions should not be empty", function () {
    assert.notStrictEqual(getStandardConversion(unit_object_mg,100.5), "");
  });


  //micrograms
  const unit_object_microgram = {
		unit: "micrograms",
		type: "mass",
		aliases: ["micrograms", "microgram"],
		ratio: 1000000000,
	};
  const object_list_microgram = [
    "kilograms",
    "grams",
    "pounds",
    "tonnes",
    "milligrams",
    "ounces",
    "tonss",
  ]
  it("Conversions should not be empty", function () {
    assert.notStrictEqual(getAllConversions(49, 2, unit_object_microgram, object_list_microgram), "");
    assert.notStrictEqual(getAllConversions(-49, 2, unit_object_microgram, object_list_microgram), "");
  });

  it("Standard Conversions should not be empty", function () {
    assert.notStrictEqual(getStandardConversion(unit_object_microgram,1), "");
  });

  it("Conversions should not be empty", function () {
    assert.notStrictEqual(getAllConversions(490.5, 2, unit_object_microgram, object_list_microgram), "");
    assert.notStrictEqual(getAllConversions(-490.5, 2, unit_object_microgram, object_list_microgram), "");
  });

  it("Standard Conversions should not be empty", function () {
    assert.notStrictEqual(getStandardConversion(unit_object_microgram,100.5), "");
  });

  //ounces
  const unit_object_ounces = {
		unit: "ounces",
		type: "mass",
		aliases: ["ounces", "ounce", "ozs", "oz"],
		ratio: 35.273962,
	} ;
  const object_list_ounces = [
    "kilograms",
    "grams",
    "pounds",
    "tonnes",
    "milligrams",
    "micrograms",
    "tonss",
  ]
  it("Conversions should not be empty", function () {
    assert.notStrictEqual(getAllConversions(49, 2, unit_object_ounces, object_list_ounces), "");
    assert.notStrictEqual(getAllConversions(-49, 2, unit_object_ounces, object_list_ounces), "");
  });

  it("Standard Conversions should not be empty", function () {
 
    assert.notStrictEqual(getStandardConversion(unit_object_ounces,1), "");
  });

  it("Conversions should not be empty", function () {

    assert.notStrictEqual(getAllConversions(490.5, 2, unit_object_ounces, object_list_ounces), "");
    assert.notStrictEqual(getAllConversions(-490.5, 2, unit_object_ounces, object_list_ounces), "");
  });

  it("Standard Conversions should not be empty", function () {

    assert.notStrictEqual(getStandardConversion(unit_object_ounces,100.5), "");
  });
});