const assert = require('assert');
const fs = require('fs');
const path = require('path');

// 在这里添加新代码
const jsdom = require('jsdom');
const { JSDOM } = jsdom;
const dom = new JSDOM('<!DOCTYPE html><html><body></body></html>');
global.window = dom.window;
global.document = dom.window.document;
global.navigator = dom.window.navigator;
global.window.jQuery = require('jquery');
global.$ = global.window.jQuery;

// Read and evaluate the popup.js file
const popupPath = path.join(__dirname, '../code/popup/js/popup.js');
const popupContent = fs.readFileSync(popupPath, 'utf8');
eval(popupContent);

describe('Statistics Calculations', () => {
    describe('calculateEntropy()', () => {
        it('should calculate entropy correctly for uniform distribution', () => {
            const numbers = [1, 2, 3, 4];
            const entropy = calculateEntropy(numbers);
            assert.strictEqual(entropy.toFixed(4), '2.0000');
        });

        it('should calculate entropy correctly for same numbers', () => {
            const numbers = [1, 1, 1, 1];
            const entropy = calculateEntropy(numbers);
            assert.strictEqual(entropy.toFixed(4), '0.0000');
        });

        it('should handle empty array', () => {
            const numbers = [];
            const entropy = calculateEntropy(numbers);
            assert.strictEqual(entropy, 0);
        });
    });

    describe('Statistical Calculations', () => {
        let testData;
        
        beforeEach(() => {
            // Setup test data
            testData = [2, 4, 4, 4, 5, 5, 7, 9];
        });

        it('should calculate correct mean', () => {
            const mean = testData.reduce((a, b) => a + b) / testData.length;
            assert.strictEqual(mean.toFixed(4), '5.0000');
        });

        it('should calculate correct standard deviation', () => {
            const mean = testData.reduce((a, b) => a + b) / testData.length;
            const variance = testData.reduce((a, b) => a + Math.pow(b - mean, 2), 0) / (testData.length-1);
            const std = Math.sqrt(variance);
            assert.strictEqual(std.toFixed(4), '2.1381');
        });

        it('should handle decimal numbers', () => {
            const decimalData = [1.5, 2.5, 3.5, 4.5];
            const mean = decimalData.reduce((a, b) => a + b) / decimalData.length;
            assert.strictEqual(mean.toFixed(4), '3.0000');
        });
    });

    describe('Input Validation', () => {
        it('should handle comma-separated string input', () => {
            const input = "1.2, 3.4, 5.6, 7.8";
            const numbers = input.split(',').map(num => parseFloat(num.trim())).filter(num => !isNaN(num));
            assert.deepStrictEqual(numbers, [1.2, 3.4, 5.6, 7.8]);
        });

        it('should filter out invalid numbers', () => {
            const input = "1.2, abc, 3.4, xyz, 5.6";
            const numbers = input.split(',').map(num => parseFloat(num.trim())).filter(num => !isNaN(num));
            assert.deepStrictEqual(numbers, [1.2, 3.4, 5.6]);
        });
    });
});