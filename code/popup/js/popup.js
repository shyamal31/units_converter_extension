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
})

const populateUnit = (e) => {
    let unitSelector = $("#unit_selector_left");
    let type = e.target.value;
    unitSelector.empty();
    POPULAR_UNITS[type].forEach(function (unit) {
        unitSelector.append($('<option>', {
            value: unit,
            text: unit.charAt(0).toUpperCase() + unit.slice(1) // Capitalize the first letter
        }));
    });

    // there is unit_selector_right, it should have all the value same as left just expect the value selected in left

    let unitSelectorRight = $("#unit_selector_right");
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
}

const getConversion = () => {
    let unitSelectorLeftVal = $("#unit_selector_left").val()
    let unitSelectorRightVal = $("#unit_selector_right").val()
}