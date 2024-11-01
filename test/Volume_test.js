var assert = require('assert')

const { getStandardConversion, getAllConversions } = require('../code/conversions/conversion')

// "lt", ["ml", "cm3", "in3", "ft3", "pt", "quart", "gal"]
describe('Volume', function () {
  // litre
  const unit_obeject_lt = {
    unit: 'litres',
    type: 'volume',
    aliases: ['lt', ' liter', 'liters', 'litre', 'Litres', 'L'],
    ratio: 1000
  }
  const object_list_lt = ['milliliter', 'cubic meter', 'cubic inch', 'cubic foot', 'pint', 'quart', 'gallon', 'fl oz']
  it('Conversions should not be empty', function () {
    assert.notStrictEqual(getStandardConversion(unit_obeject_lt, 30), '')
  })
  it('Standard Conversions should not be empty', function () {
    assert.notStrictEqual(getAllConversions(1, 5, unit_obeject_lt, object_list_lt), '')
    assert.notStrictEqual(getAllConversions(1.5, 8, unit_obeject_lt, object_list_lt), '')
  })

  // ml
  const unit_obeject_ml = {
    unit: 'milliliter',
    type: 'volume',
    aliases: ['ml', 'mls', 'millilitre', 'milliliters', 'millilitres'],
    ratio: 1000000
  }
  const object_list_ml = ['litres', 'cubic meter', 'cubic inch', 'cubic foot', 'pint', 'quart', 'gallon', 'fl oz']
  it('Conversions should not be empty', function () {
    assert.notStrictEqual(getStandardConversion(unit_obeject_ml, 30), '')
  })
  it('Standard Conversions should not be empty', function () {
    assert.notStrictEqual(getAllConversions(1, 5, unit_obeject_ml, object_list_ml), '')
    assert.notStrictEqual(getAllConversions(1.5, 8, unit_obeject_ml, object_list_ml), '')
  })

  // cm3
  const unit_obeject_cm3 = {
    unit: 'cubic meter',
    type: 'volume',
    aliases: ['cubic meters', ' cubic metre', 'cubic metres', 'm3'],
    ratio: 1
  }
  const object_list_cm3 = ['litres', 'milliliter', 'cubic inch', 'cubic foot', 'pint', 'quart', 'gallon', 'fl oz']
  it('Conversions should not be empty', function () {
    assert.notStrictEqual(getStandardConversion(unit_obeject_cm3, 30), '')
  })
  it('Standard Conversions should not be empty', function () {
    assert.notStrictEqual(getAllConversions(1, 5, unit_obeject_cm3, object_list_cm3), '')
    assert.notStrictEqual(getAllConversions(1.5, 8, unit_obeject_cm3, object_list_cm3), '')
  })

  // in3
  const unit_object_in3 = {
    unit: 'cubic inch',
    type: 'volume',
    aliases: ['cubic inches', ' ci3'],
    ratio: 61023.7
  }
  const object_list_in3 = ['litres', 'milliliter', 'cubic meter', 'cubic foot', 'pint', 'quart', 'gallon', 'fl oz']
  it('Conversions should not be empty', function () {
    assert.notStrictEqual(getStandardConversion(unit_object_in3, 30), '')
  })
  it('Standard Conversions should not be empty', function () {
    assert.notStrictEqual(getAllConversions(1, 5, unit_object_in3, object_list_in3), '')
    assert.notStrictEqual(getAllConversions(1.5, 8, unit_object_in3, object_list_in3), '')
  })

  // ft3
  const unit_object_ft3 = {
    unit: 'cubic foot',
    type: 'volume',
    aliases: ['cf3', ' cubic feet'],
    ratio: 35.3147
  }
  const object_list_ft3 = ['litres', 'milliliter', 'cubic meter', 'cubic inch', 'pint', 'quart', 'gallon', 'fl oz']
  it('Conversions should not be empty', function () {
    assert.notStrictEqual(getStandardConversion(unit_object_ft3, 30), '')
  })
  it('Standard Conversions should not be empty', function () {
    assert.notStrictEqual(getAllConversions(1, 5, unit_object_ft3, object_list_ft3), '')
    assert.notStrictEqual(getAllConversions(1.5, 8, unit_object_ft3, object_list_ft3), '')
  })

  // quart
  const unit_obeject_quart = {
    unit: 'quart',
    type: 'volume',
    aliases: ['quarts', ' qt', 'qts'],
    ratio: 1056.69
  }
  const object_list_quart = ['litres', 'milliliter', 'cubic meter', 'cubic inch', 'pint', 'cubic foot', 'gallon', 'fl oz']
  it('Conversions should not be empty', function () {
    assert.notStrictEqual(getStandardConversion(unit_obeject_quart, 30), '')
  })
  it('Standard Conversions should not be empty', function () {
    assert.notStrictEqual(getAllConversions(1, 5, unit_obeject_quart, object_list_quart), '')
    assert.notStrictEqual(getAllConversions(1.5, 8, unit_obeject_quart, object_list_quart), '')
  })

  // pint
  const unit_obeject_pint = {
    unit: 'pint',
    type: 'volume',
    aliases: ['pts', ' pt', 'pints'],
    ratio: 2113.38
  }
  const object_list_pint = ['litres', 'milliliter', 'cubic meter', 'cubic inch', 'quart', 'cubic foot', 'gallon', 'fl oz']
  it('Conversions should not be empty', function () {
    assert.notStrictEqual(getStandardConversion(unit_obeject_pint, 30), '')
  })
  it('Standard Conversions should not be empty', function () {
    assert.notStrictEqual(getAllConversions(1, 5, unit_obeject_pint, object_list_pint), '')
    assert.notStrictEqual(getAllConversions(1.5, 8, unit_obeject_pint, object_list_pint), '')
  })

  // gal
  const unit_obeject_gal = {
    unit: 'gallon',
    type: 'volume',
    aliases: ['gallons', ' gal', 'gals', 'gl', 'gls'],
    ratio: 264.172
  }
  const object_list_gal = ['litres', 'milliliter', 'cubic meter', 'cubic inch', 'quart', 'cubic foot', 'pint', 'fl oz']
  it('Conversions should not be empty', function () {
    assert.notStrictEqual(getStandardConversion(unit_obeject_gal, 30), '')
  })
  it('Standard Conversions should not be empty', function () {
    assert.notStrictEqual(getAllConversions(1, 5, unit_obeject_gal, object_list_gal), '')
    assert.notStrictEqual(getAllConversions(1.5, 8, unit_obeject_gal, object_list_gal), '')
  })

  it('Conversions should not be empty', function () {
    assert.notStrictEqual(getStandardConversion(unit_obeject_gal, 300), '')
  })
  it('Standard Conversions should not be empty', function () {
    assert.notStrictEqual(getAllConversions(100, 5, unit_obeject_gal, object_list_gal), '')
    assert.notStrictEqual(getAllConversions(150, 8, unit_obeject_gal, object_list_gal), '')
  })

  // oz
  const unit_obeject_oz = {
    unit: 'fl oz',
    type: 'volume',
    aliases: [
      'fluid ounce',
      ' fluid ounces',
      'FlOz',
      'US fluid ounce',
      'US fl oz',
      'Fl Oz'
    ],
    ratio: 33814
  }
  const object_list_oz = ['litres', 'milliliter', 'cubic meter', 'cubic inch', 'quart', 'cubic foot', 'pint', 'gallon']
  it('Standard Conversions should not be empty', function () {
    assert.notStrictEqual(getAllConversions(100, 5, unit_obeject_oz, object_list_oz), '')
    assert.notStrictEqual(getAllConversions(150, 8, unit_obeject_oz, object_list_oz), '')
  })
  it('Conversions should not be empty', function () {
    assert.notStrictEqual(getStandardConversion(unit_obeject_oz, 300), '')
  })
  it('Standard Conversions should not be empty', function () {
    assert.notStrictEqual(getAllConversions(1, 5, unit_obeject_oz, object_list_oz), '')
    assert.notStrictEqual(getAllConversions(1.5, 8, unit_obeject_oz, object_list_oz), '')
  })
  it('Conversions should not be empty', function () {
    assert.notStrictEqual(getStandardConversion(unit_obeject_oz, 3), '')
  })
  it('Standard Conversions should not be empty', function () {
    assert.notStrictEqual(getAllConversions(1000.5, 5, unit_obeject_oz, object_list_oz), '')
    assert.notStrictEqual(getAllConversions(1500.5, 8, unit_obeject_oz, object_list_oz), '')
  })
  it('Conversions should not be empty', function () {
    assert.notStrictEqual(getStandardConversion(unit_obeject_oz, 3000), '')
  })

  it('Standard Conversions should not be empty', function () {
    assert.notStrictEqual(getAllConversions(1, 5, unit_obeject_oz, object_list_oz), '')
    assert.notStrictEqual(getAllConversions(1.5, 8, unit_obeject_oz, object_list_oz), '')
  })
  it('Conversions should not be empty', function () {
    assert.notStrictEqual(getStandardConversion(unit_obeject_oz, 3), '')
  })
  it('Standard Conversions should not be empty', function () {
    assert.notStrictEqual(getAllConversions(1000, 5, unit_obeject_oz, object_list_oz), '')
    assert.notStrictEqual(getAllConversions(1500, 8, unit_obeject_oz, object_list_oz), '')
  })
  it('Conversions should not be empty', function () {
    assert.notStrictEqual(getStandardConversion(unit_obeject_oz, 3000), '')
  })
})
