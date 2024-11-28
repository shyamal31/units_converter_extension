const { expect } = require('chai')
const sinon = require('sinon')

// Import the functions from timezone.js for testing
const { getAllTimeConversions } = require('../code/conversions/TimeZone')

describe('getAllTimeConversions', () => {
  let consoleSpy
  let clock

  beforeEach(() => {
    // Spy on console.log before each test
    consoleSpy = sinon.spy(console, 'log')

    // 固定日期为 2024 年 10 月 28 日 12:34 PM（EST）
    clock = sinon.useFakeTimers(new Date('2024-10-28T12:34:00-04:00').getTime())
  })

  afterEach(() => {
    // Restore the original console.log function and clock after each test
    consoleSpy.restore()
    clock.restore()
  })

  it('should convert valid time to different timezones', () => {
    // 使用完整的日期、时间和时区字符串
    const inputString = '2024-10-28 12:34 PM EST'
    const result = getAllTimeConversions(inputString)

    // 预期的转换结果，注意调整后的时间
    expect(result).to.include('PST: 10/28/2024 10:34:00 AM,CT: 10/28/2024 12:34:00 PM,IST: 10/28/2024 11:04:00 PM,UTC: 10/28/2024 5:34:00 PM,')
  })
})
