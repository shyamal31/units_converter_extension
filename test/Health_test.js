const { JSDOM } = require('jsdom');
const chai = require('chai');
const expect = chai.expect;
const { calculateHealth } = require('../js/health.js');

describe('Health Calculator Tests', function() {
    let $;
    let window;
    let document;
    
    before(function() {
        const dom = new JSDOM(`
            <!DOCTYPE html>
            <html>
            <body>
                <input id="weight" type="number">
                <input id="height" type="number">
                <input id="age" type="number">
                <select id="gender">
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                </select>
                <div id="bmi_result"></div>
                <div id="bmr_result"></div>
                <div id="ideal_weight_result"></div>
            </body>
            </html>
        `, {
            runScripts: 'dangerously',
            resources: 'usable'
        });

        window = dom.window;
        document = dom.window.document;
        $ = require('jquery')(dom.window);
        global.$ = $;
        global.window = window;
        global.document = document;
    });

    beforeEach(function() {
        // 重置输入值
        $('#weight').val('');
        $('#height').val('');
        $('#age').val('');
        $('#gender').val('male');
        $('#bmi_result').text('');
        $('#bmr_result').text('');
        $('#ideal_weight_result').text('');
    });

    describe('BMI Calculations', function() {
        it('should calculate BMI correctly for normal weight male', function() {
            $('#weight').val('70');
            $('#height').val('175');
            calculateHealth();
            
            const bmi = parseFloat($('#bmi_result').text());
            expect(bmi).to.be.closeTo(22.86, 0.1); // BMI = 70 / (1.75^2) ≈ 22.86
        });

        it('should calculate BMI correctly for overweight female', function() {
            $('#weight').val('80');
            $('#height').val('160');
            calculateHealth();
            
            const bmi = parseFloat($('#bmi_result').text());
            expect(bmi).to.be.closeTo(31.25, 0.1); // BMI = 80 / (1.6^2) ≈ 31.25
        });
    });

    describe('BMR Calculations', function() {
        it('should calculate BMR correctly for male', function() {
            $('#weight').val('70');
            $('#height').val('175');
            $('#age').val('30');
            $('#gender').val('male');
            calculateHealth();
            
            const bmr = parseFloat($('#bmr_result').text());
            // 男性 BMR = 10 × 体重 + 6.25 × 身高 - 5 × 年龄 + 5
            const expectedBMR = 10 * 70 + 6.25 * 175 - 5 * 30 + 5;
            expect(bmr).to.be.closeTo(expectedBMR, 1);
        });

        it('should calculate BMR correctly for female', function() {
            $('#weight').val('60');
            $('#height').val('165');
            $('#age').val('25');
            $('#gender').val('female');
            calculateHealth();
            
            const bmr = parseFloat($('#bmr_result').text());
            // 女性 BMR = 10 × 体重 + 6.25 × 身高 - 5 × 年龄 - 161
            const expectedBMR = 10 * 60 + 6.25 * 165 - 5 * 25 - 161;
            expect(bmr).to.be.closeTo(expectedBMR, 1);
        });
    });

    describe('Ideal Weight Calculations', function() {
        it('should calculate ideal weight correctly for male', function() {
            $('#height').val('175');
            $('#gender').val('male');
            calculateHealth();
            
            const idealWeight = parseFloat($('#ideal_weight_result').text());
            // 男性理想体重 = (身高 - 100) × 0.9
            const expectedIdealWeight = (175 - 100) * 0.9;
            expect(idealWeight).to.be.closeTo(expectedIdealWeight, 0.1);
        });

        it('should calculate ideal weight correctly for female', function() {
            $('#height').val('165');
            $('#gender').val('female');
            calculateHealth();
            
            const idealWeight = parseFloat($('#ideal_weight_result').text());
            // 女性理想体重 = (身高 - 100) × 0.9
            const expectedIdealWeight = (165 - 100) * 0.9;
            expect(idealWeight).to.be.closeTo(expectedIdealWeight, 0.1);
        });
    });

    describe('Edge Cases', function() {
        it('should handle zero values', function() {
            $('#weight').val('0');
            $('#height').val('0');
            $('#age').val('0');
            calculateHealth();
            
            expect($('#bmi_result').text()).to.not.be.empty;
            expect($('#bmr_result').text()).to.not.be.empty;
            expect($('#ideal_weight_result').text()).to.not.be.empty;
        });

        it('should handle negative values', function() {
            $('#weight').val('-50');
            $('#height').val('-160');
            $('#age').val('-25');
            calculateHealth();
            
            expect($('#bmi_result').text()).to.not.be.empty;
            expect($('#bmr_result').text()).to.not.be.empty;
            expect($('#ideal_weight_result').text()).to.not.be.empty;
        });
    });
});