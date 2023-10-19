var assert = require('assert')

const Length = require('../code/conversions/Length')

describe('Length', function() {
  describe('#getStandardConversion(quantity)', function() {
    it('should return 3000 when quantity is 3 meters', function() {
      const length = new Length("kilometers", ["meters", "miles", "centimeters", "millimeters", "yard", "feet", "inch", "furlong", "chain"])
      assert.strictEqual(length.getStandardConversion(3), 3000)
    })
    it('should not be empty', function() {
      const length = new Length("meters", ["meters", "miles", "centimeters", "millimeters", "yard", "feet", "inch", "furlong", "chain"])
      assert.notStrictEqual(length.getStandardConversion(3), 0)
    })
    it('should not be empty', function() {
      const length = new Length("centimeters", ["meters", "miles", "centimeters", "millimeters", "yard", "feet", "inch", "furlong", "chain"])
      assert.notStrictEqual(length.getStandardConversion(3), 0)
    })
    it('should not be empty', function() {
      const length = new Length("millimeters", ["meters", "miles", "centimeters", "millimeters", "yard", "feet", "inch", "furlong", "chain"])
      assert.notStrictEqual(length.getStandardConversion(3), 0)
    })
    it('should not be empty', function() {
      const length = new Length("yard", ["meters", "miles", "centimeters", "millimeters", "yard", "feet", "inch", "furlong", "chain"])
      assert.notStrictEqual(length.getStandardConversion(3), 0)
    })
    it('should not be empty', function() {
      const length = new Length("feet", ["meters", "miles", "centimeters", "millimeters", "yard", "feet", "inch", "furlong", "chain"])
      assert.notStrictEqual(length.getStandardConversion(3), 0)
    })
    it('should not be empty', function() {
      const length = new Length("inch", ["meters", "miles", "centimeters", "millimeters", "yard", "feet", "inch", "furlong", "chain"])
      assert.notStrictEqual(length.getStandardConversion(3), 0)
    })
    it('should not be empty', function() {
      const length = new Length("furlong", ["meters", "miles", "centimeters", "millimeters", "yard", "feet", "inch", "furlong", "chain"])
      assert.notStrictEqual(length.getStandardConversion(3), 0)
    })
    it('should not be empty', function() {
      const length = new Length("chain", ["meters", "miles", "centimeters", "millimeters", "yard", "feet", "inch", "furlong", "chain"])
      assert.notStrictEqual(length.getStandardConversion(3), 0)
    })
    it('should not be empty', function() {
      const length = new Length("miles", ["meters", "miles", "centimeters", "millimeters", "yard", "feet", "inch", "furlong", "chain"])
      assert.notStrictEqual(length.getStandardConversion(3), 0)
    })
    it('should not be empty', function() {
      const length = new Length("", ["meters", "miles", "centimeters", "millimeters", "yard", "feet", "inch", "furlong", "chain"])
      assert.notStrictEqual(length.getStandardConversion(3), 0)
    })
  })
})

describe('Length', function() {
  describe('#getAllConversions(quantity, precision)', function() {
    it('should return ', function() {
      const length = new Length("kilometers", ["kilometers", "meters", "miles", "centimeters", "millimeters", "yard", "feet", "inch", "furlong", "chain"])
      assert.strictEqual(length.getAllConversions(3, 2), ',0.003000 km,3 m,0.001864512119 mi,300 cm,3000 mm,3.281 yd,9.843 ft,118.11 inch,0.015 fur,0.149 chain')
    })

    it('should return ', function() {
      const length = new Length("kilometers", ["kilometers", "meters", "miles", "centimeters", "millimeters", "yard", "feet", "inch", "furlong", "chain"])
      assert.strictEqual(length.getAllConversions(-3, 2), ',-0.003000 km,-3.0 m,-0.001864512119 mi,-300 cm,-3000 mm,-3.28083 yd,-9.84252 ft,-118.1103 inch,-0.01492537313 fur,-0.1491276035 chain')
    })

    it('should return ', function() {
      const length = new Length("kilometers", ["kilometers", "meters", "miles", "centimeters", "millimeters", "yard", "feet", "inch", "furlong", "chain"])
      assert.strictEqual(length.getAllConversions(-30, 2), ',-0.0300 km,-30 m,-0.01864512119 mi,-3000 cm,-30000 mm,-32.8083 yd,-98.4252 ft,-1181.103 inch,-0.1492537313 fur,-1.491276035 chain')
    })
  })
})