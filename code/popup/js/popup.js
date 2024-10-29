let unit =  []
unit['usd'] = "$"
unit['eur'] = "€"
unit['gbp'] = "£"
unit['inr'] = "₹"
unit['yen'] = "¥"
unit['cad'] = "C$"
unit['aud'] = "AU$"
unit['chf'] = "Fr"
unit['cny'] = "¥"
unit["celcius"] = "°C"
unit["fahrenheit"] = "°F"
unit["kelvin"] = "°K"


$(function() {
    // type Selector Populate
    let typeSelector = $("#type_selector");
    let favouriteTypeSelector = $("#favourite_type_selector");
    let customTypeSelector = $("#custom_type_selector");
    let typeSelectorOptionsArray = Object.keys(POPULAR_UNITS)
    
    typeSelectorOptionsArray.forEach(function (type) {
        typeSelector.append($('<option>', {
            value: type,
            text: type.charAt(0).toUpperCase() + type.slice(1) // Capitalize the first letter
        }));

        favouriteTypeSelector.append($('<option>', {
            value: type,
            text: type.charAt(0).toUpperCase() + type.slice(1) // Capitalize the first letter
        }));

        console.log(type)
        if(type != "temperature" && type != "currency"){
            customTypeSelector.append($('<option>', {
                value: type,
                text: type.charAt(0).toUpperCase() + type.slice(1) // Capitalize the first letter
            }));
        }
        
    });

    $("#custom_unit_add").on("click",function(e){
        addCustomUnitVal(e)
    })

    $("#custom_unit_delete").on("click",function(e){
        deleteCustomUnitVal(e)
    })

    $("#weight, #height, #age, #gender").on('input change', function() {
        calculateHealth()
    })
    
    
    

    typeSelector.on('change', function (e) {
        populateUnit(e);
    });

    customTypeSelector.on('change', function (e) {
        populateCustomUnit(e);
    });

    let unitSelectorLeftVal = $("#left_input")
    let unitSelectorRightVal = $("#right_input")

    unitSelectorLeftVal.on('change', function () {
        getConversion("left");
    });
    
    unitSelectorRightVal.on('change', function () {
        getConversion("right");
    });
    populateUnit()
    populateFavUnit()
    populateCustomUnit()

    $(".tablinks").on("click",function () {
        // let type = $(this).attr("id")
        $(".tablinks").removeClass("selected")
        $(this).addClass("selected")
        let tab = $(this).children().html()
        $(".tab_container").hide()
        $(`.${tab}`).show()
    })

    $("#favourite_type_selector").on("change",function(e){
        populateFavUnit(e)
    })

})

document.addEventListener("DOMContentLoaded", function () {
    const colorblindModeSelector = document.getElementById("colorblind-mode");
    const buttons = document.querySelectorAll(".viewAllButton");
    colorblindModeSelector.addEventListener("change", function () {
        const mode = colorblindModeSelector.value;

        // 清除之前的样式
        document.body.classList.remove("red-green-mode", "blue-yellow-mode", "total-colorblind-mode");
        buttons.forEach(button => {
            button.classList.remove("red-green", "blue-yellow", "total-colorblind");
        });
        if (mode === "red-green") {
            document.body.classList.add("red-green-mode");
            buttons.forEach(button => button.classList.add("red-green"));
        } else if (mode === "blue-yellow") {
            document.body.classList.add("blue-yellow-mode");
            buttons.forEach(button => button.classList.add("blue-yellow"));
        } else if (mode === "total-colorblind") {
            document.body.classList.add("total-colorblind-mode");
            buttons.forEach(button => button.classList.add("total-colorblind"));
        }
    });
});

const addCustomUnitVal = () => {
    let baseUnit = $("#custom_unit_base").val();
    let customTypeSelector = $("#custom_type_selector").val();
    let customUnitName = $("#custom_unit_name_left").val()
    let customUnitRatio = $("#custom_unit_value_right").val()

    addCustomUnit({
        unit: customUnitName,
		type: customTypeSelector,
		aliases: [customUnitName],
		ratio: customUnitRatio,
    }).then(()=>{
        populateCustomUnit()
    })

    $("#custom_unit_name_left").val("")
    $("#custom_unit_value_right").val("")

}

const deleteCustomUnitVal = () => {
    let baseUnit = $("#custom_unit_base").val();
    let customTypeSelector = $("#custom_type_selector").val();
    let customUnitName = $("#delete_type_selector").val()

    deleteCustomUnit({
        unit: customUnitName,
        type: customTypeSelector,
        aliases: [customUnitName],
    }).then(()=>{
        populateCustomUnit()
    })

    $("#custom_unit_name_left").val("")
    $("#custom_unit_value_right").val("")


}

const populateCustomUnit = () => {
    let baseUnit = $("#custom_unit_base");
    let customTypeSelector = $("#custom_type_selector");
    let deleteCustomTypeSelector = $("#delete_type_selector");

    let unitField = UNITS.filter(unit=>{
        return unit.type == customTypeSelector.val() && unit.ratio == 1
    }) 
    console.log(unitField)
    baseUnit.empty();
    baseUnit.html(unitField[0].unit)


    getAllUnits().then(unitsData=>{
        console.log(unitsData)
        let type = customTypeSelector.val() 
        const POPULAR_UNIT = unitsData.reduce((accumulator, currentUnit) => {
            if (currentUnit.type && currentUnit.aliases) {
                if(accumulator[currentUnit.type]){
                    accumulator[currentUnit.type].push(currentUnit.unit);
                }else{
                    accumulator[currentUnit.type] = [currentUnit.unit];
                }
                
            }
            return accumulator;
          }, {});

          let notFound = true
          deleteCustomTypeSelector.empty()
          POPULAR_UNIT[type].forEach(function (unit) {
            if(!POPULAR_UNITS[type].includes(unit)){
                notFound = false
                deleteCustomTypeSelector.append($('<option>', {
                    value: unit,
                    text: unit.charAt(0).toUpperCase() + unit.slice(1) // Capitalize the first letter
                }));
            }
        });

        if(notFound){
            deleteCustomTypeSelector.append($('<option>', {
                value: "No Custom Unit Found",
                text: "No Custom Unit Found"
            }));

            $("#custom_unit_delete").hide()
        }else{
            $("#custom_unit_delete").show()
        }
    
        
    })
}

const populateUnit = () => {
    let unitSelector = $("#unit_selector_left");
    let type = $("#type_selector").val();


    unitSelector.off('change');
    
    

    unitSelector.empty();
    getAllUnits().then(unitsData=>{
        console.log(unitsData)
        const POPULAR_UNITS = unitsData.reduce((accumulator, currentUnit) => {
            if (currentUnit.type && currentUnit.aliases) {
                if(accumulator[currentUnit.type]){
                    accumulator[currentUnit.type].push(currentUnit.unit);
                }else{
                    accumulator[currentUnit.type] = [currentUnit.unit];
                }
                
            }
            return accumulator;
          }, {});
          
          POPULAR_UNITS[type].forEach(function (unit) {
            unitSelector.append($('<option>', {
                value: unit,
                text: unit.charAt(0).toUpperCase() + unit.slice(1) // Capitalize the first letter
            }));
        });
    
        // there is unit_selector_right, it should have all the value same as left just expect the value selected in left
    
        let unitSelectorRight = $("#unit_selector_right");
        unitSelectorRight.off('change');
        console.log(unitSelectorRight)
        unitSelectorRight.empty();
        POPULAR_UNITS[type].filter(unit => unit !== unitSelector.val()).forEach(function (unit) {
            unitSelectorRight.append($('<option>', {
                value: unit,
                text: unit.charAt(0).toUpperCase() + unit.slice(1) // Capitalize the first letter
            }));
        });
    
        unitSelector.on('change', function () {
            updateUnitSelectorsRight(type);
        });
        
        unitSelectorRight.on('change', function () {
            updateUnitSelectorsLeft(type);
        });
    
        getConversion("left")
    })
    
   
}

const populateFavUnit = () => {
    let container = $("#units_container")
    let type = $("#favourite_type_selector").val();
    container.empty()
    let favouriteArr = localStorage.getItem('favouriteArr')?JSON.parse(localStorage.getItem('favouriteArr')):[]

    getAllUnits().then(unitsData=>{
        console.log(unitsData)
        const POPULAR_UNITS = unitsData.reduce((accumulator, currentUnit) => {
            if (currentUnit.type && currentUnit.aliases) {
                if(accumulator[currentUnit.type]){
                    accumulator[currentUnit.type].push(currentUnit.unit);
                }else{
                    accumulator[currentUnit.type] = [currentUnit.unit];
                }
                
            }
            return accumulator;
          }, {});
          
          POPULAR_UNITS[type].forEach(function (ut) {
            var checkbox = $('<input>', {
                type: 'checkbox',
                id: 'checkbox_' + ut,
                value: type=="currency" || type=="temperature"?unit[ut.toLocaleLowerCase()]:ut,
                checked:type=="currency" || type=="temperature"?favouriteArr.includes(unit[ut.toLocaleLowerCase()])?true:false:favouriteArr.includes(ut)?true:false
            });
            
            var label = $('<label>', {
                for: 'checkbox_' + ut,
                text: ut.charAt(0).toUpperCase() + ut.slice(1) // Capitalize the first letter
            });
            
            // Append the checkbox and label to the li element
            container.append($('<li>').append(checkbox, label));
            
            // Attach the onchange event handler using jQuery's on method
            checkbox.on('change', function() {
                handleCheckboxChange(this);
            });
        });
    })

    
}

const handleCheckboxChange = async (e) => {
    let val = $(e).val()
    let favouriteArr =  chrome.storage.sync.get(['favouriteArr']).then(async (result)=>{
        console.log(result,val)
        favouriteArr =  result.favouriteArr? JSON.parse(result.favouriteArr):[]
        if($(e).is(":checked")){
            favouriteArr.push(val)
        }
        else{
            favouriteArr = favouriteArr.filter(ele=>ele!=val)
        }
        console.log(favouriteArr)
        localStorage.setItem('favouriteArr',JSON.stringify(favouriteArr))
        await chrome.storage.sync.set({"favouriteArr":JSON.stringify(favouriteArr)});
    })
    
}

function updateUnitSelectorsRight(type) {
    let unitSelectorLeft = $("#unit_selector_left");
    let unitSelectorRight = $("#unit_selector_right");

    let selectedUnitLeft = unitSelectorLeft.val();
    let selectedUnitRight = unitSelectorRight.val();

    

    // Clear and repopulate the right unit selector
    unitSelectorRight.empty();
    // Filter out the selected unit from the left unit selector
    POPULAR_UNITS[type].filter(unit => unit !== selectedUnitLeft).forEach(function (unit) {
        unitSelectorRight.append($('<option>', {
            value: unit,
            text: unit.charAt(0).toUpperCase() + unit.slice(1) // Capitalize the first letter
        }));
    });
    if(unitSelectorRight.val() != selectedUnitLeft) unitSelectorLeft.val(selectedUnitLeft);
    if(unitSelectorLeft.val() != selectedUnitRight) unitSelectorRight.val(selectedUnitRight);
    getConversion("left")
}

function updateUnitSelectorsLeft(type) {
    let unitSelectorLeft = $("#unit_selector_left");
    let unitSelectorRight = $("#unit_selector_right");

    let selectedUnitLeft = unitSelectorLeft.val();
    let selectedUnitRight = unitSelectorRight.val();
    
    // Clear and repopulate the right unit selector
    unitSelectorLeft.empty();
    POPULAR_UNITS[type].forEach(function (unit) {
        unitSelectorLeft.append($('<option>', {
            value: unit,
            text: unit.charAt(0).toUpperCase() + unit.slice(1) // Capitalize the first letter
        }));
    });
    if(unitSelectorRight.val() != selectedUnitLeft) unitSelectorLeft.val(selectedUnitLeft);
    if(unitSelectorLeft.val() != selectedUnitRight) unitSelectorRight.val(selectedUnitRight);
    getConversion("left")
}

const getConversion = async (change) => {
    let typeSelector = $("#type_selector").val()

    if(typeSelector == ""){
        return;
    }

    let unitSelectorLeftVal = $("#unit_selector_left").val()
    let unitSelectorRightVal = $("#unit_selector_right").val()

    let leftVal = $("#left_input").val()
    let rightVal = $("#right_input").val()

    if(unitSelectorRightVal == "jpy"){
        unitSelectorRightVal = "yen"
    }
    if(unitSelectorLeftVal == "jpy"){
        unitSelectorLeftVal = "yen"
    }

    console.log(`${leftVal} ${unitSelectorLeftVal}`,`${rightVal} ${unitSelectorRightVal}`)
    let result;
    if(change=="left"){
        result = await get_conversions(`${leftVal} ${unitSelectorLeftVal}`);
    }else{
        result = await get_conversions(`${rightVal} ${unitSelectorRightVal}`);
    }

    const elements = result.split(',').filter(element => element.trim() !== '');
    console.log(elements,unitSelectorRightVal,unitSelectorLeftVal)
    
    if(typeSelector=="currency" || typeSelector == "temperature"){
        unitSelectorRightVal = unit[unitSelectorRightVal]
        unitSelectorLeftVal = unit[unitSelectorLeftVal]
    }
    console.log(unitSelectorRightVal,unitSelectorLeftVal)
    
    
    if(change=="left"){
        $("#right_input").val(elements[elements.findIndex(ele=>ele.indexOf(unitSelectorRightVal)>-1)].split(" ")[typeSelector=="currency"?1:0])
    }else{
        $("#left_input").val(elements[elements.findIndex(ele=>ele.indexOf(unitSelectorLeftVal)>-1)].split(" ")[typeSelector=="currency"?1:0])
    }

    console.log(result);
}



function calculateHealth() {
    const weight = parseFloat($("#weight").val()) || 0;
    const height = parseFloat($("#height").val()) || 0;
    const age = parseFloat($("#age").val()) || 0;
    const gender = $("#gender").val();
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

    // Update results with values
    $("#bmi-result").text(isNaN(bmi) ? "-" : bmi.toFixed(2));
    $("#bmr-result").text(isNaN(bmr) ? "-" : bmr.toFixed(2));
    $("#tdee-result").text(isNaN(tdee) ? "-" : tdee.toFixed(2));

    // Update ranges based on gender
    $(".male-range").css("display", gender === 'male' ? "inline" : "none");
    $(".female-range").css("display", gender === 'male' ? "none" : "inline");

    // Optional: Add color coding for values
    if (!isNaN(bmi)) {
        const bmiResult = $("#bmi-result");
        if (bmi < 18.5) {
            bmiResult.css("color", "#e74c3c"); // Red for underweight
        } else if (bmi <= 24.9) {
            bmiResult.css("color", "#27ae60"); // Green for normal
        } else {
            bmiResult.css("color", "#e74c3c"); // Red for overweight
        }
    }

    if (!isNaN(bmr)) {
        const bmrResult = $("#bmr-result");
        const normalBmrMin = gender === 'male' ? 1500 : 1200;
        const normalBmrMax = gender === 'male' ? 2000 : 1600;
        
        if (bmr < normalBmrMin || bmr > normalBmrMax) {
            bmrResult.css("color", "#e74c3c"); // Red for out of range
        } else {
            bmrResult.css("color", "#27ae60"); // Green for normal range
        }
    }

    if (!isNaN(tdee)) {
        const tdeeResult = $("#tdee-result");
        const normalTdeeMin = gender === 'male' ? 2000 : 1600;
        const normalTdeeMax = gender === 'male' ? 2750 : 2200;
        
        if (tdee < normalTdeeMin || tdee > normalTdeeMax) {
            tdeeResult.css("color", "#e74c3c"); // Red for out of range
        } else {
            tdeeResult.css("color", "#27ae60"); // Green for normal range
        }
    }
}
