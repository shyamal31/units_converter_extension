function calculateHealth(weightInput, heightInput, ageInput, genderInput) {
    // Get input values and convert to numbers
    const weight = parseFloat(weightInput) || 0;
    const height = parseFloat(heightInput) || 0;
    const age = parseFloat(ageInput) || 0;
    const gender = genderInput || 'male';

    // Calculate BMI (weight in kg / height in meters squared)
    let bmi = 0;
    if (height > 0) { // Prevent division by zero
        bmi = weight / Math.pow(height/100, 2); // Convert height to meters
    }

    // Calculate BMR using Mifflin-St Jeor Equation
    let bmr = 10 * weight + 6.25 * height - 5 * age;
    if (gender === 'male') {
        bmr += 5;
    } else {
        bmr -= 161;
    }

    // Calculate Ideal Weight
    let idealWeight = 0;
    if (height > 100) { // Only calculate if height is valid
        idealWeight = (height - 100) * 0.9;
    }

    return {
        bmi: bmi.toFixed(2),
        bmr: bmr.toFixed(2),
        idealWeight: idealWeight.toFixed(2)
    };
}

// DOM update function (for browser environment)
function updateHealthUI() {
    const results = calculateHealth(
        $('#weight').val(),
        $('#height').val(),
        $('#age').val(),
        $('#gender').val()
    );
    
    $('#bmi_result').text(results.bmi);
    $('#bmr_result').text(results.bmr);
    $('#ideal_weight_result').text(results.idealWeight);
}

module.exports = { calculateHealth, updateHealthUI }; 