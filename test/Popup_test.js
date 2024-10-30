// popup.test.js
const { assert, expect } = require("chai");
const { JSDOM } = require("jsdom");
const { getStandardConversion, getAllConversions } = require("../code/conversions/conversion");

describe("popup.js Tests", function () {
    let document;
    let window;

    before(function () {
        // Set up a simulated DOM environment
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

            // Update DOM results
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
        const expectedBmr = 1673.75;
        const expectedTdee = 2008.50;
        const tolerance = 0.1;

        expect(parseFloat(document.getElementById("bmi-result").textContent)).to.be.closeTo(expectedBmi, tolerance, "BMI is within the expected range");
        expect(parseFloat(document.getElementById("bmr-result").textContent)).to.be.closeTo(expectedBmr, tolerance, "BMR is within the expected range");
        expect(parseFloat(document.getElementById("tdee-result").textContent)).to.be.closeTo(expectedTdee, tolerance, "TDEE is within the expected range");
    });

    it("should get a standard conversion value", async function () {
        const result = await getStandardConversion("10 usd", "eur");
        assert(result !== null, "Conversion result should not be null");
    });
    // describe("Colorblind Mode Tests", function () {
    //     before(function () {
    //         // Setup listener for colorblind mode change
    //         document.getElementById("colorblind-mode").addEventListener("change", function () {
    //             const mode = document.getElementById("colorblind-mode").value;
    //
    //             // Clear the previous css style
    //             document.body.classList.remove("red-green-mode", "blue-yellow-mode", "total-colorblind-mode");
    //             document.querySelectorAll(".viewAllButton").forEach(button => {
    //                 button.classList.remove("red-green", "blue-yellow", "total-colorblind");
    //             });
    //
    //             if (mode === "red-green") {
    //                 document.body.classList.add("red-green-mode");
    //                 document.querySelectorAll(".viewAllButton").forEach(button => button.classList.add("red-green"));
    //             } else if (mode === "blue-yellow") {
    //                 document.body.classList.add("blue-yellow-mode");
    //                 document.querySelectorAll(".viewAllButton").forEach(button => button.classList.add("blue-yellow"));
    //             } else if (mode === "total-colorblind") {
    //                 document.body.classList.add("total-colorblind-mode");
    //                 document.querySelectorAll(".viewAllButton").forEach(button => button.classList.add("total-colorblind"));
    //             }
    //         });
    //     });
    //
    //     it("should apply red-green colorblind mode classes", function () {
    //         document.getElementById("colorblind-mode").value = "red-green";
    //         document.getElementById("colorblind-mode").dispatchEvent(new window.Event("change"));
    //
    //         expect(document.body.classList.contains("red-green-mode")).to.be.true;
    //         document.querySelectorAll(".viewAllButton").forEach(button => {
    //             expect(button.classList.contains("red-green")).to.be.true;
    //         });
    //     });
    //
    //     it("should apply blue-yellow colorblind mode classes", function () {
    //         document.getElementById("colorblind-mode").value = "blue-yellow";
    //         document.getElementById("colorblind-mode").dispatchEvent(new window.Event("change"));
    //
    //         expect(document.body.classList.contains("blue-yellow-mode")).to.be.true;
    //         document.querySelectorAll(".viewAllButton").forEach(button => {
    //             expect(button.classList.contains("blue-yellow")).to.be.true;
    //         });
    //     });
    //
    //     it("should apply total-colorblind mode classes", function () {
    //         document.getElementById("colorblind-mode").value = "total-colorblind";
    //         document.getElementById("colorblind-mode").dispatchEvent(new window.Event("change"));
    //
    //         expect(document.body.classList.contains("total-colorblind-mode")).to.be.true;
    //         document.querySelectorAll(".viewAllButton").forEach(button => {
    //             expect(button.classList.contains("total-colorblind")).to.be.true;
    //         });
    //     });
    //
    //     it("should reset classes when set to normal mode", function () {
    //         document.getElementById("colorblind-mode").value = "normal";
    //         document.getElementById("colorblind-mode").dispatchEvent(new window.Event("change"));
    //
    //         expect(document.body.classList.contains("red-green-mode")).to.be.false;
    //         expect(document.body.classList.contains("blue-yellow-mode")).to.be.false;
    //         expect(document.body.classList.contains("total-colorblind-mode")).to.be.false;
    //         document.querySelectorAll(".viewAllButton").forEach(button => {
    //             expect(button.classList.contains("red-green")).to.be.false;
    //             expect(button.classList.contains("blue-yellow")).to.be.false;
    //             expect(button.classList.contains("total-colorblind")).to.be.false;
    //         });
    //     });
    // });

});