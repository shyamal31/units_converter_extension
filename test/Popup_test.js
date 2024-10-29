const tolerance = 0.1;

it("should calculate BMI, BMR, and TDEE for male, age 30, 80kg, 180cm", function () {
    document.getElementById("weight").value = "80";
    document.getElementById("height").value = "180";
    document.getElementById("age").value = "30";
    document.getElementById("gender").value = "male";

    calculateHealth();

    const weight = 80, height = 180, age = 30, LIGHT_ACTIVITY = 1.2;
    const heightInMeters = height / 100;
    const expectedBmi = weight / (heightInMeters * heightInMeters);
    const expectedBmr = 10 * weight + 6.25 * height - 5 * age + 5;
    const expectedTdee = expectedBmr * LIGHT_ACTIVITY;

    expect(parseFloat(document.getElementById("bmi-result").textContent)).to.be.closeTo(expectedBmi, tolerance);
    expect(parseFloat(document.getElementById("bmr-result").textContent)).to.be.closeTo(expectedBmr, tolerance);
    expect(parseFloat(document.getElementById("tdee-result").textContent)).to.be.closeTo(expectedTdee, tolerance);
});

it("should calculate BMI, BMR, and TDEE for female, age 27, 65kg, 165cm", function () {
    document.getElementById("weight").value = "65";
    document.getElementById("height").value = "165";
    document.getElementById("age").value = "27";
    document.getElementById("gender").value = "female";

    calculateHealth();

    const weight = 65, height = 165, age = 27, LIGHT_ACTIVITY = 1.2;
    const heightInMeters = height / 100;
    const expectedBmi = weight / (heightInMeters * heightInMeters);
    const expectedBmr = 10 * weight + 6.25 * height - 5 * age - 161;
    const expectedTdee = expectedBmr * LIGHT_ACTIVITY;

    expect(parseFloat(document.getElementById("bmi-result").textContent)).to.be.closeTo(expectedBmi, tolerance);
    expect(parseFloat(document.getElementById("bmr-result").textContent)).to.be.closeTo(expectedBmr, tolerance);
    expect(parseFloat(document.getElementById("tdee-result").textContent)).to.be.closeTo(expectedTdee, tolerance);
});

// Repeat similar format for 18 more cases with different inputs

it("should calculate BMI, BMR, and TDEE for male, age 22, 72kg, 172cm", function () {
    document.getElementById("weight").value = "72";
    document.getElementById("height").value = "172";
    document.getElementById("age").value = "22";
    document.getElementById("gender").value = "male";
    calculateHealth();

    const weight = 72, height = 172, age = 22, LIGHT_ACTIVITY = 1.2;
    const heightInMeters = height / 100;
    const expectedBmi = weight / (heightInMeters * heightInMeters);
    const expectedBmr = 10 * weight + 6.25 * height - 5 * age + 5;
    const expectedTdee = expectedBmr * LIGHT_ACTIVITY;

    expect(parseFloat(document.getElementById("bmi-result").textContent)).to.be.closeTo(expectedBmi, tolerance);
    expect(parseFloat(document.getElementById("bmr-result").textContent)).to.be.closeTo(expectedBmr, tolerance);
    expect(parseFloat(document.getElementById("tdee-result").textContent)).to.be.closeTo(expectedTdee, tolerance);
});

it("should calculate BMI, BMR, and TDEE for female, age 35, 75kg, 170cm", function () {
    document.getElementById("weight").value = "75";
    document.getElementById("height").value = "170";
    document.getElementById("age").value = "35";
    document.getElementById("gender").value = "female";
    calculateHealth();

    const weight = 75, height = 170, age = 35, LIGHT_ACTIVITY = 1.2;
    const heightInMeters = height / 100;
    const expectedBmi = weight / (heightInMeters * heightInMeters);
    const expectedBmr = 10 * weight + 6.25 * height - 5 * age - 161;
    const expectedTdee = expectedBmr * LIGHT_ACTIVITY;

    expect(parseFloat(document.getElementById("bmi-result").textContent)).to.be.closeTo(expectedBmi, tolerance);
    expect(parseFloat(document.getElementById("bmr-result").textContent)).to.be.closeTo(expectedBmr, tolerance);
    expect(parseFloat(document.getElementById("tdee-result").textContent)).to.be.closeTo(expectedTdee, tolerance);
});
it("should calculate BMI, BMR, and TDEE for female, age 45, 85kg, 175cm", function () {
    document.getElementById("weight").value = "85";
    document.getElementById("height").value = "175";
    document.getElementById("age").value = "45";
    document.getElementById("gender").value = "female";
    calculateHealth();

    const weight =85, height = 175, age = 45, LIGHT_ACTIVITY = 1.2;
    const heightInMeters = height / 100;
    const expectedBmi = weight / (heightInMeters * heightInMeters);
    const expectedBmr = 10 * weight + 6.25 * height - 5 * age - 161;
    const expectedTdee = expectedBmr * LIGHT_ACTIVITY;

    expect(parseFloat(document.getElementById("bmi-result").textContent)).to.be.closeTo(expectedBmi, tolerance);
    expect(parseFloat(document.getElementById("bmr-result").textContent)).to.be.closeTo(expectedBmr, tolerance);
    expect(parseFloat(document.getElementById("tdee-result").textContent)).to.be.closeTo(expectedTdee, tolerance);
});
it("should calculate BMI, BMR, and TDEE for female, age  28, 50kg, 160cm", function () {
    document.getElementById("weight").value = "50";
    document.getElementById("height").value = "160";
    document.getElementById("age").value = "28";
    document.getElementById("gender").value = "female";
    calculateHealth();

    const weight =50, height = 160, age = 28, LIGHT_ACTIVITY = 1.2;
    const heightInMeters = height / 100;
    const expectedBmi = weight / (heightInMeters * heightInMeters);
    const expectedBmr = 10 * weight + 6.25 * height - 5 * age - 161;
    const expectedTdee = expectedBmr * LIGHT_ACTIVITY;

    expect(parseFloat(document.getElementById("bmi-result").textContent)).to.be.closeTo(expectedBmi, tolerance);
    expect(parseFloat(document.getElementById("bmr-result").textContent)).to.be.closeTo(expectedBmr, tolerance);
    expect(parseFloat(document.getElementById("tdee-result").textContent)).to.be.closeTo(expectedTdee, tolerance);
});

// male, age 33, 78kg, 182cm
// female, age 40, 55kg, 158cm
// male, age 26, 92kg, 188cm
// female, age 29, 58kg, 166cm
// male, age 52, 77kg, 170cm
// female, age 31, 68kg, 162cm
// male, age 38, 82kg, 177cm
// female, age 23, 54kg, 155cm
// male, age 44, 90kg, 180cm
// female, age 37, 62kg, 165cm
// male, age 25, 79kg, 173cm
// female, age 32, 60kg, 160cm
// male, age 36, 74kg, 168cm
// female, age 27, 59kg, 159cm
// male, age 50, 83kg, 176cm
// female, age 24, 64kg, 164cm

