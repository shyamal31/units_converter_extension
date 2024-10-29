// popup.test.js
var assert = require("assert");
const { getStandardConversion, getAllConversions } = require("../code/conversions/conversion");

// 假设你有 DOM 相关的代码需要模拟，可以使用 jsdom
const { JSDOM } = require("jsdom");

describe("popup.js Tests", function () {
    let document;
    let window;

    before(function () {
        // 设置模拟 DOM 环境
        const dom = new JSDOM(`<!DOCTYPE html><html><body>
            <input id="data_input" type="text" />
            <input id="mean_output" />
            <input id="std_output" />
            <input id="entropy_output" />
            <input id="weight" />
            <input id="height" />
            <input id="age" />
            <select id="gender">
                <option value="male">Male</option>
                <option value="female">Female</option>
            </select>
            <div id="bmi-result"></div>
            <div id="bmr-result"></div>
            <div id="tdee-result"></div>
        </body></html>`, { runScripts: "dangerously", resources: "usable" });

        window = dom.window;
        document = window.document;

        // 如果 popup.js 在 node.js 中无法直接运行，需要在这里模拟函数
        global.calculateHealth = function() {
            const weight = parseFloat(document.getElementById("weight").value) || 0;
            const height = parseFloat(document.getElementById("height").value) || 0;
            const age = parseFloat(document.getElementById("age").value) || 0;
            const gender = document.getElementById("gender").value;
            const LIGHT_ACTIVITY = 1.2;

            const heightInMeters = height / 100;
            const bmi = weight / (heightInMeters * heightInMeters);

            let bmr;
            if (gender === 'male') {
                bmr = 10 * weight + 6.25 * height - 5 * age + 5;
            } else {
                bmr = 10 * weight + 6.25 * height - 5 * age - 161;
            }

            const tdee = bmr * LIGHT_ACTIVITY;

            // 更新 DOM 结果
            document.getElementById("bmi-result").textContent = isNaN(bmi) ? "-" : bmi.toFixed(2);
            document.getElementById("bmr-result").textContent = isNaN(bmr) ? "-" : bmr.toFixed(2);
            document.getElementById("tdee-result").textContent = isNaN(tdee) ? "-" : tdee.toFixed(2);
        };
    });

    it("should calculate BMI, BMR, and TDEE", function () {
        document.getElementById("weight").value = "70";
        document.getElementById("height").value = "175";
        document.getElementById("age").value = "25";
        document.getElementById("gender").value = "male";

        calculateHealth();

        const expectedBmi = 22.86;
        const expectedBmr = 1660.00;
        const expectedTdee = 1992.00;


        const tolerance = 0.1;

        assert.closeTo(parseFloat(document.getElementById("bmi-result").textContent), expectedBmi, tolerance, "BMI is within the expected range");
        assert.closeTo(parseFloat(document.getElementById("bmr-result").textContent), expectedBmr, tolerance, "BMR is within the expected range");
        assert.closeTo(parseFloat(document.getElementById("tdee-result").textContent), expectedTdee, tolerance, "TDEE is within the expected range");
    });

    it("should get standard conversion value", async function () {
        const result = await getStandardConversion("10 usd", "eur");
        assert(result !== null, "Conversion result should not be null");
        console.log("Standard conversion result:", result);
    });

    it("should get all conversions for a type", async function () {
        const result = await getAllConversions("currency");
        assert(Array.isArray(result), "Result should be an array");
        assert(result.length > 0, "There should be some conversions available");
        console.log("All conversions:", result);
    });
});
