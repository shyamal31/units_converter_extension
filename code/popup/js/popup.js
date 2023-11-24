let unit =  []
unit['usd'] = "$"
unit['eur'] = "€"
unit['gbp'] = "£"
unit['inr'] = "₹"
unit['jpy'] = "¥"
unit['cad'] = "Can$"
unit['aud'] = "A$"
unit['chf'] = "CHF"
unit['cny'] = "¥"
unit["celcius"] = "C"
unit["fahrenheit"] = "F"
unit["kelvin"] = "K"


$(function() {
    // type Selector Populate
    let typeSelector = $("#type_selector");
    let typeSelectorOptionsArray = Object.keys(POPULAR_UNITS)
    typeSelectorOptionsArray.forEach(function (type) {
        typeSelector.append($('<option>', {
            value: type,
            text: type.charAt(0).toUpperCase() + type.slice(1) // Capitalize the first letter
        }));
    });
    

    typeSelector.on('change', function (e) {
        populateUnit(e);
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
})

const populateUnit = () => {
    let unitSelector = $("#unit_selector_left");
    let type = $("#type_selector").val();

    unitSelector.off('change');
    
    

    unitSelector.empty();
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
   
}

function updateUnitSelectorsRight(type) {
    let unitSelectorLeft = $("#unit_selector_left");
    let unitSelectorRight = $("#unit_selector_right");

    let selectedUnitLeft = unitSelectorLeft.val();

    unitSelectorLeft.val(selectedUnitLeft);

    // Clear and repopulate the right unit selector
    unitSelectorRight.empty();
    // Filter out the selected unit from the left unit selector
    POPULAR_UNITS[type].filter(unit => unit !== selectedUnitLeft).forEach(function (unit) {
        unitSelectorRight.append($('<option>', {
            value: unit,
            text: unit.charAt(0).toUpperCase() + unit.slice(1) // Capitalize the first letter
        }));
    });
    getConversion("left")
}

function updateUnitSelectorsLeft(type) {
    let unitSelectorLeft = $("#unit_selector_left");
    let unitSelectorRight = $("#unit_selector_right");

    let selectedUnitLeft = unitSelectorLeft.val();
    
    unitSelectorLeft.val(selectedUnitLeft);

    // Clear and repopulate the right unit selector
    unitSelectorLeft.empty();
    POPULAR_UNITS[type].forEach(function (unit) {
        unitSelectorLeft.append($('<option>', {
            value: unit,
            text: unit.charAt(0).toUpperCase() + unit.slice(1) // Capitalize the first letter
        }));
    });
    getConversion("right")
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

    console.log(`${leftVal} ${unitSelectorLeftVal}`,`${rightVal} ${unitSelectorRightVal}`)
    let result;
    if(change=="left"){
        result = await get_conversions(`${leftVal} ${unitSelectorLeftVal}`);
    }else{
        result = await get_conversions(`${rightVal} ${unitSelectorRightVal}`);
    }

    const elements = result.split(',').filter(element => element.trim() !== '');
    console.log(elements)
    
    if(typeSelector=="currency" || typeSelector == "temperature"){
        unitSelectorRightVal = unit[unitSelectorRightVal]
        unitSelectorLeftVal = unit[unitSelectorLeftVal]
    }
    
    if(change=="left"){
        $("#right_input").val(elements[elements.findIndex(ele=>ele.indexOf(unitSelectorRightVal)>-1)].split(" ")[typeSelector=="currency"?1:0])
    }else{
        $("#left_input").val(elements[elements.findIndex(ele=>ele.indexOf(unitSelectorLeftVal)>-1)].split(" ")[typeSelector=="currency"?1:0])
    }

    console.log(result);
}