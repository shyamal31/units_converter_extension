var assert = require('assert')

const Currency = require('../code/conversions/Currency')

describe('Currency', function () {
  const usd = new Currency('USD', [
    'usd',
    'eur',
    'gbp',
    'inr',
    'jpy',
    'cad',
    'aud',
    'chf',
    'cny'
  ])
  it('Conversions should not be empty', async () => {
    const tmp = await usd.getData('usd')
    const res = usd.getAllConversions(tmp, 2)
    assert.notStrictEqual(res, '')
    const res2 = usd.getAllConversions('', 2)
    assert.notStrictEqual(res2, '')
  })

  it('Standard Conversions should not be empty', function () {
    const res = usd.getStandardConversion(30)
    assert.notStrictEqual(res, 0)
    const res2 = usd.getStandardConversion('')
    assert.notStrictEqual(res2, '')
  })

  const eur = new Currency('EUR', ['usd', 'eur', 'gbp', 'inr', 'jpy', 'cad', 'aud', 'chf', 'cny'])
  it('Conversions in EUR', function () {
    assert.notStrictEqual(eur.getAllConversions(49.94, 2), '')
    assert.notStrictEqual(eur.getAllConversions(-49.94, 2), '')
    assert.notStrictEqual(eur.getAllConversions(-1, 2), '')
  })
  it('Standard Conversions in EUR', function () {
    assert.notStrictEqual(eur.getStandardConversion(30), '')
  })

  const gbp = new Currency('GBP', ['usd', 'eur', 'gbp', 'inr', 'jpy', 'cad', 'aud', 'chf', 'cny'])
  it('Conversions in GBP', function () {
    assert.notStrictEqual(gbp.getAllConversions(49.94, 2), '')
  })
  it('Standard Conversions in GBP', function () {
    assert.notStrictEqual(gbp.getStandardConversion(30), '')
  })

  const inr = new Currency('INR', ['usd', 'eur', 'gbp', 'inr', 'jpy', 'cad', 'aud', 'chf', 'cny'])
  it('Conversions in INR', function () {
    assert.notStrictEqual(inr.getAllConversions(49.94, 2), '')
  })
  it('Standard Conversions in INR', function () {
    assert.notStrictEqual(inr.getStandardConversion(30), '')
  })

  const jpy = new Currency('JPY', ['usd', 'eur', 'gbp', 'inr', 'jpy', 'cad', 'aud', 'chf', 'cny'])
  it('Conversions in JPY', function () {
    assert.notStrictEqual(jpy.getAllConversions(49.94, 2), '')
  })
  it('Standard Conversions in JPY', function () {
    assert.notStrictEqual(jpy.getStandardConversion(30), '')
  })

  const cad = new Currency('CAD', ['usd', 'eur', 'gbp', 'inr', 'jpy', 'cad', 'aud', 'chf', 'cny'])
  it('Conversions in CAD', function () {
    assert.notStrictEqual(cad.getAllConversions(49.94, 2), '')
  })
  it('Standard Conversions in CAD', function () {
    assert.notStrictEqual(cad.getStandardConversion(30), '')
  })

  const aud = new Currency('AUD', ['usd', 'eur', 'gbp', 'inr', 'jpy', 'cad', 'aud', 'chf', 'cny'])
  it('Conversions in AUD', function () {
    assert.notStrictEqual(aud.getAllConversions(49.94, 2), '')
  })
  it('Standard Conversions in AUD', function () {
    assert.notStrictEqual(aud.getStandardConversion(30), '')
  })

  const chf = new Currency('CHF', ['usd', 'eur', 'gbp', 'inr', 'jpy', 'cad', 'aud', 'chf', 'cny'])
  it('Conversions in CHF', function () {
    assert.notStrictEqual(chf.getAllConversions(49.94, 2), '')
  })
  it('Standard Conversions in CHF', function () {
    assert.notStrictEqual(chf.getStandardConversion(30), '')
  })

  const cny = new Currency('CNY', ['usd', 'eur', 'gbp', 'inr', 'jpy', 'cad', 'aud', 'chf', 'cny'])
  it('Conversions in CNY', function () {
    assert.notStrictEqual(cny.getAllConversions(49.94, 2), '')
  })
  it('Standard Conversions in CNY', function () {
    assert.notStrictEqual(cny.getStandardConversion(30), '')
  })

  const currency = new Currency('', ['usd', 'eur', 'gbp', 'inr', 'jpy', 'cad', 'aud', 'chf', 'cny'])
  it('Conversions in null', function () {
    assert.notStrictEqual(currency.getAllConversions(49.94, 2), '')
  })
  it('Standard Conversions in null', function () {
    assert.notStrictEqual(currency.getStandardConversion(30), '')
  })
})
