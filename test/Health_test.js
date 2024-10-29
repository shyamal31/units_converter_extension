describe('Health Calculator Tests', () => {
    let $;
    let document;

    beforeEach(() => {
        // Create mock DOM environment
        document = {
            getElementById: sinon.stub(),
            querySelector: sinon.stub()
        };
        
        // Mock jQuery
        $ = sinon.stub();
        $.returns({
            val: sinon.stub(),
            text: sinon.stub(),
            css: sinon.stub()
        });
        
        global.$ = $;
    });

    // BMI calculation tests
    describe('BMI Calculations', () => {
        it('should calculate normal BMI correctly', () => {
            setupInputs(70, 170, 25, 'male');
            calculateHealth();
            expect($('#bmi-result').text.calledWith('24.22')).to.be.true;
        });

        it('should calculate underweight BMI correctly', () => {
            setupInputs(50, 170, 25, 'male');
            calculateHealth();
            expect($('#bmi-result').text.calledWith('17.30')).to.be.true;
        });

        it('should calculate overweight BMI correctly', () => {
            setupInputs(90, 170, 25, 'male');
            calculateHealth();
            expect($('#bmi-result').text.calledWith('31.14')).to.be.true;
        });

        it('should handle zero height for BMI', () => {
            setupInputs(70, 0, 25, 'male');
            calculateHealth();
            expect($('#bmi-result').text.calledWith('-')).to.be.true;
        });

        it('should handle zero weight for BMI', () => {
            setupInputs(0, 170, 25, 'male');
            calculateHealth();
            expect($('#bmi-result').text.calledWith('0.00')).to.be.true;
        });
    });

    // BMR calculation tests
    describe('BMR Calculations', () => {
        it('should calculate male BMR correctly', () => {
            setupInputs(70, 170, 25, 'male');
            calculateHealth();
            const expectedBMR = (10 * 70 + 6.25 * 170 - 5 * 25 + 5).toFixed(2);
            expect($('#bmr-result').text.calledWith(expectedBMR)).to.be.true;
        });

        it('should calculate female BMR correctly', () => {
            setupInputs(60, 165, 25, 'female');
            calculateHealth();
            const expectedBMR = (10 * 60 + 6.25 * 165 - 5 * 25 - 161).toFixed(2);
            expect($('#bmr-result').text.calledWith(expectedBMR)).to.be.true;
        });

        it('should handle zero weight for BMR', () => {
            setupInputs(0, 170, 25, 'male');
            calculateHealth();
            const expectedBMR = (6.25 * 170 - 5 * 25 + 5).toFixed(2);
            expect($('#bmr-result').text.calledWith(expectedBMR)).to.be.true;
        });

        it('should handle zero height for BMR', () => {
            setupInputs(70, 0, 25, 'male');
            calculateHealth();
            const expectedBMR = (10 * 70 - 5 * 25 + 5).toFixed(2);
            expect($('#bmr-result').text.calledWith(expectedBMR)).to.be.true;
        });

        it('should handle zero age for BMR', () => {
            setupInputs(70, 170, 0, 'male');
            calculateHealth();
            const expectedBMR = (10 * 70 + 6.25 * 170 + 5).toFixed(2);
            expect($('#bmr-result').text.calledWith(expectedBMR)).to.be.true;
        });
    });

    // TDEE calculation tests
    describe('TDEE Calculations', () => {
        it('should calculate male TDEE correctly', () => {
            setupInputs(70, 170, 25, 'male');
            calculateHealth();
            const bmr = 10 * 70 + 6.25 * 170 - 5 * 25 + 5;
            const expectedTDEE = (bmr * 1.2).toFixed(2);
            expect($('#tdee-result').text.calledWith(expectedTDEE)).to.be.true;
        });

        it('should calculate female TDEE correctly', () => {
            setupInputs(60, 165, 25, 'female');
            calculateHealth();
            const bmr = 10 * 60 + 6.25 * 165 - 5 * 25 - 161;
            const expectedTDEE = (bmr * 1.2).toFixed(2);
            expect($('#tdee-result').text.calledWith(expectedTDEE)).to.be.true;
        });

        it('should handle zero inputs for TDEE', () => {
            setupInputs(0, 0, 0, 'male');
            calculateHealth();
            const expectedTDEE = (5 * 1.2).toFixed(2);
            expect($('#tdee-result').text.calledWith(expectedTDEE)).to.be.true;
        });
    });

    // Color coding tests
    describe('Color Coding Tests', () => {
        it('should show red for underweight BMI', () => {
            setupInputs(50, 170, 25, 'male');
            calculateHealth();
            expect($('#bmi-result').css.calledWith('color', '#e74c3c')).to.be.true;
        });

        it('should show green for normal BMI', () => {
            setupInputs(70, 170, 25, 'male');
            calculateHealth();
            expect($('#bmi-result').css.calledWith('color', '#27ae60')).to.be.true;
        });

        it('should show red for overweight BMI', () => {
            setupInputs(90, 170, 25, 'male');
            calculateHealth();
            expect($('#bmi-result').css.calledWith('color', '#e74c3c')).to.be.true;
        });

        it('should show correct BMR color for male in normal range', () => {
            setupInputs(70, 170, 25, 'male');
            calculateHealth();
            expect($('#bmr-result').css.calledWith('color', '#27ae60')).to.be.true;
        });

        it('should show correct BMR color for female in normal range', () => {
            setupInputs(60, 165, 25, 'female');
            calculateHealth();
            expect($('#bmr-result').css.calledWith('color', '#27ae60')).to.be.true;
        });
    });

    // Gender display tests
    describe('Gender Display Tests', () => {
        it('should show male ranges when male is selected', () => {
            setupInputs(70, 170, 25, 'male');
            calculateHealth();
            expect($('.male-range').css.calledWith('display', 'inline')).to.be.true;
            expect($('.female-range').css.calledWith('display', 'none')).to.be.true;
        });

        it('should show female ranges when female is selected', () => {
            setupInputs(60, 165, 25, 'female');
            calculateHealth();
            expect($('.male-range').css.calledWith('display', 'none')).to.be.true;
            expect($('.female-range').css.calledWith('display', 'inline')).to.be.true;
        });
    });

    // Edge cases tests
    describe('Edge Cases', () => {
        it('should handle negative values', () => {
            setupInputs(-70, -170, -25, 'male');
            calculateHealth();
            expect($('#bmi-result').text.calledWith('-')).to.be.true;
        });

        it('should handle extremely large values', () => {
            setupInputs(1000, 300, 150, 'male');
            calculateHealth();
            expect($('#bmi-result').text).to.have.been.called;
            expect($('#bmr-result').text).to.have.been.called;
            expect($('#tdee-result').text).to.have.been.called;
        });

        it('should handle decimal values', () => {
            setupInputs(70.5, 170.5, 25.5, 'male');
            calculateHealth();
            expect($('#bmi-result').text).to.have.been.called;
            expect($('#bmr-result').text).to.have.been.called;
            expect($('#tdee-result').text).to.have.been.called;
        });
    });
});

// Helper function
function setupInputs(weight, height, age, gender) {
    $('#weight').val.returns(weight);
    $('#height').val.returns(height);
    $('#age').val.returns(age);
    $('#gender').val.returns(gender);
}
