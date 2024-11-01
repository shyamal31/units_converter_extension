const assert = require('assert')
const fs = require('fs')
const path = require('path')

// add jsdom
const jsdom = require('jsdom')
const { JSDOM } = jsdom
const dom = new JSDOM('<!DOCTYPE html><html><body></body></html>')
global.window = dom.window
global.document = dom.window.document
global.navigator = dom.window.navigator
global.window.jQuery = require('jquery')
global.$ = global.window.jQuery

// Read and evaluate the popup.js file
const popupPath = path.join(__dirname, '../code/popup/js/popup.js')
const popupContent = fs.readFileSync(popupPath, 'utf8')
eval(popupContent)

describe('Statistics Calculations', () => {
  describe('calculateEntropy()', () => {
    it('should calculate entropy correctly for uniform distribution', () => {
      const numbers = [1, 2, 3, 4]
      const entropy = calculateEntropy(numbers)
      assert.strictEqual(entropy.toFixed(4), '2.0000')
    })

    it('should calculate entropy correctly for same numbers', () => {
      const numbers = [1, 1, 1, 1]
      const entropy = calculateEntropy(numbers)
      assert.strictEqual(entropy.toFixed(4), '0.0000')
    })

    it('should handle empty array', () => {
      const numbers = []
      const entropy = calculateEntropy(numbers)
      assert.strictEqual(entropy, 0)
    })

    // add new test cases for entropy
    it('should handle single number array', () => {
      const numbers = [5]
      const entropy = calculateEntropy(numbers)
      assert.strictEqual(entropy.toFixed(4), '0.0000')
    })

    it('should handle negative numbers', () => {
      const numbers = [-1, -2, -3, -4]
      const entropy = calculateEntropy(numbers)
      assert.strictEqual(entropy.toFixed(4), '2.0000')
    })

    it('should handle mixed positive and negative numbers', () => {
      const numbers = [-2, -1, 0, 1, 2]
      const entropy = calculateEntropy(numbers)
      assert.strictEqual(entropy.toFixed(4), '2.3219')
    })

    it('should handle repeating numbers', () => {
      const numbers = [1, 1, 1, 2, 2, 3]
      const entropy = calculateEntropy(numbers)
      assert.strictEqual(entropy.toFixed(4), '1.4591')
    })

    it('should handle large arrays', () => {
      const numbers = Array.from({ length: 100 }, (_, i) => i)
      const entropy = calculateEntropy(numbers)
      assert.ok(entropy > 0)
    })
  })

  describe('Statistical Calculations', () => {
    let testData

    beforeEach(() => {
      // Setup test data
      testData = [2, 4, 4, 4, 5, 5, 7, 9]
    })

    it('should calculate correct mean', () => {
      const mean = testData.reduce((a, b) => a + b) / testData.length
      assert.strictEqual(mean.toFixed(4), '5.0000')
    })

    it('should calculate correct standard deviation', () => {
      const mean = testData.reduce((a, b) => a + b) / testData.length
      const variance = testData.reduce((a, b) => a + Math.pow(b - mean, 2), 0) / (testData.length - 1)
      const std = Math.sqrt(variance)
      assert.strictEqual(std.toFixed(4), '2.1381')
    })

    it('should handle decimal numbers', () => {
      const decimalData = [1.5, 2.5, 3.5, 4.5]
      const mean = decimalData.reduce((a, b) => a + b) / decimalData.length
      assert.strictEqual(mean.toFixed(4), '3.0000')
    })
  })

  describe('Input Validation', () => {
    it('should handle comma-separated string input', () => {
      const input = '1.2, 3.4, 5.6, 7.8'
      const numbers = input.split(',').map(num => parseFloat(num.trim())).filter(num => !isNaN(num))
      assert.deepStrictEqual(numbers, [1.2, 3.4, 5.6, 7.8])
    })

    it('should filter out invalid numbers', () => {
      const input = '1.2, abc, 3.4, xyz, 5.6'
      const numbers = input.split(',').map(num => parseFloat(num.trim())).filter(num => !isNaN(num))
      assert.deepStrictEqual(numbers, [1.2, 3.4, 5.6])
    })

    // add new test cases for input validation
    it('should handle whitespace in input', () => {
      const input = '  1.2,    3.4,5.6  '
      const numbers = input.split(',').map(num => parseFloat(num.trim())).filter(num => !isNaN(num))
      assert.deepStrictEqual(numbers, [1.2, 3.4, 5.6])
    })

    it('should handle mixed number formats', () => {
      const input = '1.2, .5, 2., 3'
      const numbers = input.split(',').map(num => parseFloat(num.trim())).filter(num => !isNaN(num))
      assert.deepStrictEqual(numbers, [1.2, 0.5, 2, 3])
    })

    it('should reject negative zero', () => {
      const input = '1.2, -0, 3.4'
      const numbers = input.split(',')
        .map(num => {
          const parsed = parseFloat(num.trim())
          return Object.is(parsed, -0) ? 0 : parsed
        })
        .filter(num => !isNaN(num))
      assert.deepStrictEqual(numbers, [1.2, 0, 3.4])
    })

    it('should handle empty string input', () => {
      const input = ''
      const numbers = input.split(',').map(num => parseFloat(num.trim())).filter(num => !isNaN(num))
      assert.deepStrictEqual(numbers, [])
    })

    it('should handle input with only invalid numbers', () => {
      const input = 'abc, def, ghi'
      const numbers = input.split(',').map(num => parseFloat(num.trim())).filter(num => !isNaN(num))
      assert.deepStrictEqual(numbers, [])
    })

    it('should handle mixed valid and invalid input', () => {
      const input = '1.2, abc, 3.4, def'
      const numbers = input.split(',').map(num => parseFloat(num.trim())).filter(num => !isNaN(num))
      assert.deepStrictEqual(numbers, [1.2, 3.4])
    })
  })

  // add new test cases for error handling
  describe('Error Handling', () => {
    it('should handle division by zero', () => {
      const numbers = [0, 0, 0]
      const mean = numbers.reduce((a, b) => a + b, 0) / numbers.length
      assert.strictEqual(mean, 0)
    })

    it('should handle very small numbers', () => {
      const smallData = [0.0000001, 0.0000002, 0.0000003]
      const mean = smallData.reduce((a, b) => a + b) / smallData.length
      assert.strictEqual(mean.toFixed(7), '0.0000002')
    })

    it('should handle Infinity values', () => {
      const input = '1.2, Infinity, 3.4'
      const numbers = input.split(',')
        .map(num => parseFloat(num.trim()))
        .filter(num => !isNaN(num) && isFinite(num))
      assert.deepStrictEqual(numbers, [1.2, 3.4])
    })

    it('should handle scientific notation', () => {
      const input = '1.2e2, 3.4e-1, 5.6e+1'
      const numbers = input.split(',').map(num => parseFloat(num.trim())).filter(num => !isNaN(num))
      assert.deepStrictEqual(numbers, [120, 0.34, 56])
    })

    it('should handle NaN values', () => {
      const input = '1.2, NaN, 3.4'
      const numbers = input.split(',')
        .map(num => parseFloat(num.trim()))
        .filter(num => !isNaN(num))
      assert.deepStrictEqual(numbers, [1.2, 3.4])
    })

    it('should handle undefined values', () => {
      const input = '1.2, undefined, 3.4'
      const numbers = input.split(',')
        .map(num => parseFloat(num.trim()))
        .filter(num => !isNaN(num))
      assert.deepStrictEqual(numbers, [1.2, 3.4])
    })

    it('should handle null values', () => {
      const input = '1.2, null, 3.4'
      const numbers = input.split(',')
        .map(num => parseFloat(num.trim()))
        .filter(num => !isNaN(num))
      assert.deepStrictEqual(numbers, [1.2, 3.4])
    })
  })
})
