var assert = require('assert')

const { getStandardConversion, getAllConversions } = require('../code/conversions/conversion')

describe('Data', function () {
  // Byte
  const unit_object_byte = {
    unit: 'B',
    type: 'data',
    aliases: ['B', 'Byte'],
    ratio: 1099511627776
  }
  const object_list_byte = ['KB', 'MB', 'GB', 'TB']
  it('Standard Conversions should not be empty', function () {
    assert.notStrictEqual(getStandardConversion(unit_object_byte, 30), '')
  })
  it('All Conversions should not be empty', function () {
    assert.notStrictEqual(getAllConversions(1, 5, unit_object_byte, object_list_byte), '')
    assert.notStrictEqual(getAllConversions(1.5, 8, unit_object_byte, object_list_byte), '')
  })

  // KiloByte
  const unit_object_kb = {
    unit: 'KB',
    type: 'data',
    aliases: ['KB', 'KiloByte'],
    ratio: 1073741824
  }
  const object_list_kb = ['B', 'MB', 'GB', 'TB']
  it('Standard Conversions should not be empty', function () {
    assert.notStrictEqual(getStandardConversion(unit_object_kb, 30), '')
  })
  it('All Conversions should not be empty', function () {
    assert.notStrictEqual(getAllConversions(1, 5, unit_object_kb, object_list_kb), '')
    assert.notStrictEqual(getAllConversions(1.5, 8, unit_object_kb, object_list_kb), '')
  })

  // MegaByte
  const unit_object_mb = {
    unit: 'MB',
    type: 'data',
    aliases: ['MB', 'MegaByte'],
    ratio: 1048576
  }
  const object_list_mb = ['B', 'KB', 'GB', 'TB']
  it('Standard Conversions should not be empty', function () {
    assert.notStrictEqual(getStandardConversion(unit_object_mb, 30), '')
  })

  it('All Conversions should not be empty', function () {
    assert.notStrictEqual(getAllConversions(1, 5, unit_object_byte, object_list_byte), '')
    assert.notStrictEqual(getAllConversions(1.5, 8, unit_object_byte, object_list_byte), '')
  })

  // GigaByte
  const unit_object_gb = {
    unit: 'GB',
    type: 'data',
    aliases: ['GB', 'GigaByte'],
    ratio: 1024
  }
  const object_list_gb = ['B', 'KB', 'MB', 'TB']
  it('Standard Conversions should not be empty', function () {
    assert.notStrictEqual(getStandardConversion(unit_object_gb, 30), '')
  })

  it('All Conversions should not be empty', function () {
    assert.notStrictEqual(getAllConversions(1, 5, unit_object_gb, object_list_gb), '')
    assert.notStrictEqual(getAllConversions(1.5, 8, unit_object_gb, object_list_gb), '')
  })

  // TeraByte
  const unit_object_tb = {
    unit: 'TB',
    type: 'data',
    aliases: ['TB', 'TeraByte'],
    ratio: 1
  }
  const object_list_tb = ['B', 'KB', 'MB', 'GB']
  it('Standard Conversions should not be empty', function () {
    assert.notStrictEqual(getStandardConversion(unit_object_tb, 30), '')
  })

  it('All Conversions should not be empty', function () {
    assert.notStrictEqual(getAllConversions(1, 5, unit_object_tb, object_list_tb), '')
    assert.notStrictEqual(getAllConversions(1.5, 8, unit_object_tb, object_list_tb), '')
  })
})
