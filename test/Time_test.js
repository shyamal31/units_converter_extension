var assert = require('assert')

const { getStandardConversion, getAllConversions } = require('../code/conversions/conversion')

describe('Time', function () {
  // seconds
  const unit_object_second = {
    unit: 'seconds',
    type: 'time',
    aliases: ['sec', 's', 'secs', 'second', 'seconds'],
    ratio: 604800
  }
  const object_list_second = ['minutes', 'hours', 'days', 'weeks']

  it('standard Conversions should not be empty for seconds', function () {
    assert.notStrictEqual(getStandardConversion(unit_object_second, 30), '')
  })

  it('All Conversions should not be empty for seconds', function () {
    assert.notStrictEqual(getAllConversions(-1, 5, unit_object_second, object_list_second), '')
    assert.notStrictEqual(getAllConversions(-1.5, 5, unit_object_second, object_list_second), '')
  })

  // Minutes
  const unit_object_mn = {
    unit: 'minutes',
    type: 'time',
    aliases: ['mins', 'min', 'minute', 'minutes'],
    ratio: 10080
  }
  const object_list_mn = ['seconds', 'hours', 'days', 'weeks']
  it('Standard Conversions should not be empty for minutes', function () {
    assert.notStrictEqual(getStandardConversion(unit_object_mn, 40), '')
  })

  it('All Conversions should not be empty for minutes', function () {
    assert.notStrictEqual(getAllConversions(10, 3, unit_object_mn, object_list_mn), '')
    assert.notStrictEqual(getAllConversions(-1, 3, unit_object_mn, object_list_mn), '')
  })

  // hours

  const unit_object_hr = {
    unit: 'hours',
    type: 'time',
    aliases: ['hrs', 'h', 'hour', 'hours'],
    ratio: 168
  }
  const object_list_hr = ['seconds', 'minutes', 'days', 'weeks']

  it('Conversions should not be empty', function () {
    assert.notStrictEqual(getStandardConversion(unit_object_hr, 20), '')
  })

  it('Standard Conversions should not be empty', function () {
    assert.notStrictEqual(getAllConversions(10, 2, unit_object_hr, object_list_hr), '')
  })

  // days
  const unit_object_dy = {
    unit: 'days',
    type: 'time',
    aliases: ['day', 'days'],
    ratio: 7
  }
  const object_list_dy = ['seconds', 'minutes', 'hours', 'weeks']
  it('Conversions should not be empty', function () {
    assert.notStrictEqual(getStandardConversion(unit_object_dy, 50), '')
  })

  it('Standard Conversions should not be empty', function () {
    assert.notStrictEqual(getAllConversions(15, 3, unit_object_dy, object_list_dy), '')
  })

  // weeks
  const unit_object_wk = {
    unit: 'weeks',
    type: 'time',
    aliases: ['week', 'wks', 'weeks'],
    ratio: 1
  }
  const object_list_wk = ['seconds', 'minutes', 'hours', 'days']
  it('Conversions should not be empty', function () {
    assert.notStrictEqual(getStandardConversion(unit_object_wk, 20), '')
  })

  it('Standard Conversions should not be empty', function () {
    assert.notStrictEqual(getAllConversions(25, 3, unit_object_wk, object_list_wk), '')
  })
})
