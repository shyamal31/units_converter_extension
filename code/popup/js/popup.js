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

        customTypeSelector.append($('<option>', {
            value: type,
            text: type.charAt(0).toUpperCase() + type.slice(1) // Capitalize the first letter
        }));
    });
    
    
    

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

const populateCustomUnit = () => {
    let baseUnit = $("#custom_unit_base");
    let customTypeSelector = $("#custom_type_selector");

    let unitField = UNITS.filter(unit=>{
        return unit.type == customTypeSelector.val() && unit.ratio == 1
    }) 
    console.log(unitField)
    baseUnit.empty();
    baseUnit.html(unitField[0].unit)
}

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

const populateFavUnit = () => {
    let container = $("#units_container")
    let type = $("#favourite_type_selector").val();
    container.empty()
    let favouriteArr = localStorage.getItem('favouriteArr')?JSON.parse(localStorage.getItem('favouriteArr')):[]

    POPULAR_UNITS[type].forEach(function (ut) {
        var checkbox = $('<input>', {
            type: 'checkbox',
            id: 'checkbox_' + ut,
            value: type=="currency" || type=="temperature"?unit[ut]:ut,
            checked:type=="currency" || type=="temperature"?favouriteArr.includes(unit[ut])?true:false:favouriteArr.includes(ut)?true:false
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
}

const handleCheckboxChange = async (e) => {
    let val = $(e).val()
    let favouriteArr =  chrome.storage.sync.get(['favouriteArr']).then(async (result)=>{
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