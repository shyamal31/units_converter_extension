function calculateHealth() {
    const weight = parseFloat($('#weight').val());
    const height = parseFloat($('#height').val()) / 100; // Convert to meters
    const age = parseFloat($('#age').val());
    const gender = $('#gender').val();

    // Calculate BMI
    const bmi = weight / (height * height);
    $('#bmi_result').text(bmi.toFixed(2));

    // Calculate BMR
    let bmr;
    if (gender === 'male') {
        bmr = 10 * weight + 6.25 * (height * 100) - 5 * age + 5;
    } else {
        bmr = 10 * weight + 6.25 * (height * 100) - 5 * age - 161;
    }
    $('#bmr_result').text(bmr.toFixed(2));

    // Calculate Ideal Weight
    const idealWeight = (height * 100 - 100) * 0.9;
    $('#ideal_weight_result').text(idealWeight.toFixed(2));
}

module.exports = { calculateHealth }; 