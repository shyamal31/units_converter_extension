var assert = require('assert')

const {getStandardConversion,getAllConversions} = require("../code/conversions/conversion");

describe('Length', function() {
  describe('#getStandardConversion(quantity)', function() {
    const unit_object_km = {
      unit: "kilometers",
      type: "length",
      aliases: ["kilometer", "kilometers", "km", "kms"],
      ratio: 0.001,
    };
    const object_list_km = ["meters", "miles", "centimeters", "millimeters", "yard", "feet", "inch", "furlong", "chain"];
    it('should return 3000 when quantity is 3 meters', function() {
      assert.strictEqual(getStandardConversion(unit_object_km,3), 3000)
    })
    //meters
    const unit_object_m = {
      unit: "meters",
      type: "length",
      aliases: ["meter", "meters", "m", "mts"],
      ratio: 1,
    };
    const object_list_m = ["meters", "miles", "centimeters", "millimeters", "yard", "feet", "inch", "furlong", "chain"];
    it('should not be empty', function() {
      assert.notStrictEqual(getStandardConversion(unit_object_m,3), 0)
    })
    //cm
    const unit_object_cm = {
      unit: "centimeters",
      type: "length",
      aliases: ["centimeter", "centimeters", "cm", "cms"],
      ratio: 100,
    };
    const object_list_cm = ["meters", "miles", "centimeters", "millimeters", "yard", "feet", "inch", "furlong", "chain"];
    it('should not be empty', function() {
      assert.notStrictEqual(getStandardConversion(unit_object_cm, 3), 0)
    })
    //mm
    const unit_object_mm = {
      unit: "millimeters",
      type: "length",
      aliases: ["millimeter", "millimeters", "mm", "mms"],
      ratio: 1000,
    };
    const object_list_mm = ["meters", "miles", "centimeters", "millimeters", "yard", "feet", "inch", "furlong", "chain"];
    it('should not be empty', function() {
      assert.notStrictEqual(getStandardConversion(unit_object_mm,3), 0)
    })
    //yard
    const unit_object_yard = {
      unit: "yard",
      type: "length",
      aliases: ["yard", "yards", "yd", "yds"],
      ratio: 1.09361,
    };
    const object_list_yard = ["meters", "miles", "centimeters", "millimeters", "yard", "feet", "inch", "furlong", "chain"];
    it('should not be empty', function() {
      assert.notStrictEqual(getStandardConversion(unit_object_yard, 3), 0)
    })
    //feet
    const unit_object_feet = {
      unit: "feet",
      type: "length",
      aliases: ["foot", "feet", "ft", "fts"],
      ratio: 3.28084,
    };
    const object_list_feet = ["meters", "miles", "centimeters", "millimeters", "yard", "feet", "inch", "furlong", "chain"];
    it('should not be empty', function() {
      assert.notStrictEqual(getStandardConversion(unit_object_feet, 3), 0)
    })
    //inch
    const unit_object_inch = {
      unit: "inch",
      type: "length",
      aliases: ["inches", "inch", '"'],
      ratio: 39.3701,
    };
    const object_list_inch = ["meters", "miles", "centimeters", "millimeters", "yard", "feet", "inch", "furlong", "chain"];
    it('should not be empty', function() {
      assert.notStrictEqual(getStandardConversion(unit_object_inch,3), 0)
    })
    //furlong
    const unit_object_furlong = {
      unit: "furlong",
      type: "length",
      aliases: ["furlong", "furlongs", "fur", "furss"],
      ratio: 0.00497096,
    };
    const object_list_furlong = ["meters", "miles", "centimeters", "millimeters", "yard", "feet", "inch", "furlong", "chain"];
    it('should not be empty', function() {
      assert.notStrictEqual(getStandardConversion(unit_object_furlong, 3), 0)
    })
    //chain
    const unit_object_chain = {
      unit: "chain",
      type: "length",
      aliases: ["chain", "chains"],
      ratio: 0.0497097,
    };
    const object_list_chain = ["meters", "miles", "centimeters", "millimeters", "yard", "feet", "inch", "furlong", "chain"];
    it('should not be empty', function() {
      assert.notStrictEqual(getStandardConversion(unit_object_chain, 3), 0)
    })
    //miles
    const unit_object_miles = {
      unit: "miles",
      type: "length",
      aliases: ["miles", "mile", "mi"],
      ratio: 0.000621371,
    };
    const object_list_miles = ["meters", "miles", "centimeters", "millimeters", "yard", "feet", "inch", "furlong", "chain"];
    it('should not be empty', function() {
      assert.notStrictEqual(getStandardConversion(unit_object_miles,3), 0)
    })
  })
})

// describe('Length', function() {
//   describe('#getAllConversions(quantity, precision)', function() {
//     const unit_object_m = {
//       unit: "meters",
//       type: "length",
//       aliases: ["meter", "meters", "m", "mts"],
//       ratio: 1,
//     };
//     const object_list_m = ["kilometers","meters", "miles", "centimeters", "millimeters", "yard", "feet", "inch", "furlong", "chain"];

//     it('should return ', function() {
//       assert.strictEqual(getAllConversions(3, 2, unit_object_m, object_list_m), ',0.003000 km,3 m,0.001864512119 mi,300 cm,3000 mm,3.281 yd,9.843 ft,118.11 inch,0.015 fur,0.149 chain')
//     })

//     it('should return ', function() {

//       assert.strictEqual(getAllConversions(-3, 2, unit_object_m, object_list_m), ',-0.003000 km,-3.0 m,-0.001864512119 mi,-300 cm,-3000 mm,-3.28083 yd,-9.84252 ft,-118.1103 inch,-0.01492537313 fur,-0.1491276035 chain')
//     })

//     it('should return ', function() {

//       assert.strictEqual(getAllConversions(-30, 2, unit_object_m, object_list_m), ',-0.0300 km,-30 m,-0.01864512119 mi,-3000 cm,-30000 mm,-32.8083 yd,-98.4252 ft,-1181.103 inch,-0.1492537313 fur,-1.491276035 chain')
//     })
//   })
// })