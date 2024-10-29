const { expect } = require('chai');
const jsdom = require('jsdom');
const { JSDOM } = jsdom;

// Create a mock DOM environment
const dom = new JSDOM('<!DOCTYPE html><html><body></body></html>');
global.window = dom.window;
global.document = dom.window.document;

const $ = require('jquery');
global.$ = $;

const { calculateHealthValues } = require('../code/popup/js/popup.js');

describe('Health Calculator Tests', () => {
    it('should calculate correct values for male', () => {
        const result = calculateHealthValues(70, 175, 30, 'male');
        expect(result.bmi).to.be.closeTo(22.86, 0.1);
        expect(result.bmr).to.be.closeTo(1648.75 , 0.1);
        expect(result.tdee).to.be.closeTo(1978.50 , 0.1);
    });

    it('should calculate correct values for female', () => {
        const result = calculateHealthValues(55, 160, 25, 'female');
        expect(result.bmi).to.be.closeTo(21.48, 0.1);
        expect(result.bmr).to.be.closeTo( 1264.00, 0.1);
        expect(result.tdee).to.be.closeTo(1516.80, 0.1);
    });

    // Young adult males
    it('should calculate correct values for young male', () => {
        const result = calculateHealthValues(75, 180, 20, 'male');
        expect(result.bmi).to.be.closeTo(23.15, 0.1);
        expect(result.bmr).to.be.closeTo(1780.00 , 0.1);
        expect(result.tdee).to.be.closeTo(2136.00, 0.1);
    });

    it('should calculate correct values for athletic male', () => {
        const result = calculateHealthValues(85, 185, 28, 'male');
        expect(result.bmi).to.be.closeTo(24.84, 0.1);
        expect(result.bmr).to.be.closeTo(1871.25 , 0.1);
        expect(result.tdee).to.be.closeTo(2245.50, 0.1);
    });

    // Middle-aged males
    it('should calculate correct values for middle-aged male', () => {
        const result = calculateHealthValues(80, 178, 45, 'male');
        expect(result.bmi).to.be.closeTo(25.25, 0.1);
        expect(result.bmr).to.be.closeTo(1692.50, 0.1);
        expect(result.tdee).to.be.closeTo(2031.00, 0.1);
    });


    it('should calculate correct values for overweight female', () => {
        const result = calculateHealthValues(82, 160, 38, 'female');
        expect(result.bmi).to.be.closeTo(32.03, 0.1);
        expect(result.bmr).to.be.closeTo(1469.00, 0.1);
        expect(result.tdee).to.be.closeTo(1762.80, 0.1);
    });

    // Senior females
    it('should calculate correct values for senior female', () => {
        const result = calculateHealthValues(58, 158, 70, 'female');
        expect(result.bmi).to.be.closeTo(23.23, 0.1);
        expect(result.bmr).to.be.closeTo(1056.50, 0.1);
        expect(result.tdee).to.be.closeTo(1267.80, 0.1);
    });


});
