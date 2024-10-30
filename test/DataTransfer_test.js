var assert = require('assert')
const { getStandardConversion, getAllConversions } = require('../code/conversions/conversion')

describe('DataTransfer', function () {
  const unit_object_bs = {
    unit: 'b/s',
    type: 'dataTransfer',
    aliases: ['b/s', 'bps'],
    ratio: 1000000000000
  }
  const object_list_bs = ['kb/s', 'mb/s', 'gb/s', 'tb/s']
  it('Standard Conversions should not be empty', function () {
    assert.notStrictEqual(getStandardConversion(unit_object_bs, 30), '')
  })

  it('All Conversions should not be empty', function () {
    assert.notStrictEqual(getAllConversions(1, 5, unit_object_bs, object_list_bs), '')
    assert.notStrictEqual(getAllConversions(1.5, 8, unit_object_bs, object_list_bs), '')
  })

  const unit_object_kbs = {
    unit: 'Kb/s',
    type: 'dataTransfer',
    aliases: ['Kb/s', 'Kbps'],
    ratio: 1000000000
  }
  const object_list_kbs = ['b/s', 'mb/s', 'gb/s', 'tb/s']

  it('Standard Conversions should not be empty', function () {
    assert.notStrictEqual(getStandardConversion(unit_object_kbs, 40), '')
  })

  it('All Conversions should not be empty', function () {
    assert.notStrictEqual(getAllConversions(10, 3, unit_object_kbs, object_list_kbs), '')
    assert.notStrictEqual(getAllConversions(5.5, 3, unit_object_kbs, object_list_kbs), '')
  })

  const unit_object_mbs = {
    unit: 'Mb/s',
    type: 'dataTransfer',
    aliases: ['Mb/s', 'Mbps'],
    ratio: 1000000
  }
  const object_list_mbs = ['b/s', 'kb/s', 'gb/s', 'tb/s']
  it('Conversions should not be empty', function () {
    assert.notStrictEqual(getStandardConversion(unit_object_mbs, 20), '')
  })

  it('All Conversions should not be empty', function () {
    assert.notStrictEqual(getAllConversions(10, 2, unit_object_mbs, object_list_mbs), '')
    assert.notStrictEqual(getAllConversions(5.5, 10, unit_object_mbs, object_list_mbs), '')
  })

  const unit_object_gbs = {
    unit: 'Gb/s',
    type: 'dataTransfer',
    aliases: ['Gb/s', 'Gbps'],
    ratio: 1000
  }
  const object_list_gbs = ['b/s', 'mb/s', 'kb/s', 'tb/s']
  it('Standard Conversions should not be empty', function () {
    assert.notStrictEqual(getStandardConversion(unit_object_gbs, 20), '')
  })

  it('All Conversions should not be empty', function () {
    assert.notStrictEqual(getAllConversions(10, 2, unit_object_gbs, object_list_gbs), '')
    assert.notStrictEqual(getAllConversions(5.5, 10, unit_object_gbs, object_list_gbs), '')
  })

  const unit_object_tbs = {
    unit: 'Tb/s',
    type: 'dataTransfer',
    aliases: ['Tb/s', 'Tbps'],
    ratio: 1
  }
  const object_list_tbs = ['b/s', 'mb/s', 'kb/s', 'gb/s']

  it('Standard Conversions should not be empty', function () {
    assert.notStrictEqual(getStandardConversion(unit_object_tbs, 20), '')
  })

  it('All Conversions should not be empty', function () {
    assert.notStrictEqual(getAllConversions(10, 2, unit_object_tbs, object_list_tbs), '')
    assert.notStrictEqual(getAllConversions(5.5, 10, unit_object_tbs, object_list_tbs), '')
  })
})
