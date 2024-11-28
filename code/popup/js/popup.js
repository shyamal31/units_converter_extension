const unit = []
unit.usd = '$'
unit.eur = '€'
unit.gbp = '£'
unit.inr = '₹'
unit.yen = '¥'
unit.cad = 'C$'
unit.aud = 'AU$'
unit.chf = 'Fr'
unit.cny = '¥'
unit.celcius = '°C'
unit.fahrenheit = '°F'
unit.kelvin = '°K'

$(function () {
  // type Selector Populate
  const typeSelector = $('#type_selector')
  const favouriteTypeSelector = $('#favourite_type_selector')
  const customTypeSelector = $('#custom_type_selector')
  const typeSelectorOptionsArray = Object.keys(POPULAR_UNITS)

  typeSelectorOptionsArray.forEach(function (type) {
    typeSelector.append($('<option>', {
      value: type,
      text: type.charAt(0).toUpperCase() + type.slice(1) // Capitalize the first letter
    }))

    favouriteTypeSelector.append($('<option>', {
      value: type,
      text: type.charAt(0).toUpperCase() + type.slice(1) // Capitalize the first letter
    }))

    console.log(type)
    if (type != 'temperature' && type != 'currency') {
      customTypeSelector.append($('<option>', {
        value: type,
        text: type.charAt(0).toUpperCase() + type.slice(1) // Capitalize the first letter
      }))
    }
  })

  $('#custom_unit_add').on('click', function (e) {
    addCustomUnitVal(e)
  })

  $('#custom_unit_delete').on('click', function (e) {
    deleteCustomUnitVal(e)
  })

  $('#weight, #height, #age, #gender').on('input change', function () {
    calculateHealth()
  })

  typeSelector.on('change', function (e) {
    populateUnit(e)
  })

  customTypeSelector.on('change', function (e) {
    populateCustomUnit(e)
  })

  const unitSelectorLeftVal = $('#left_input')
  const unitSelectorRightVal = $('#right_input')

  unitSelectorLeftVal.on('change', function () {
    getConversion('left')
  })

  unitSelectorRightVal.on('change', function () {
    getConversion('right')
  })
  populateUnit()
  populateFavUnit()
  populateCustomUnit()

  $('.tablinks').on('click', function () {
    // let type = $(this).attr("id")
    $('.tablinks').removeClass('selected')
    $(this).addClass('selected')
    const tab = $(this).children().html()
    $('.tab_container').hide()
    $(`.${tab}`).show()
  })

  $('#favourite_type_selector').on('change', function (e) {
    populateFavUnit(e)
  })

  $('#calculate_statistics_btn').on('click', function () {
    const dataInput = $('#data_input').val()
    const numbers = dataInput.split(',').map(num => parseFloat(num.trim())).filter(num => !isNaN(num))

    if (numbers.length === 0) {
      alert('Please input valid numbers separated by commas')
      return
    }

    // calculate mean
    const mean = numbers.reduce((a, b) => a + b) / numbers.length

    // calculate standard deviation
    const variance = numbers.reduce((a, b) => a + Math.pow(b - mean, 2), 0) / (numbers.length - 1)
    const std = Math.sqrt(variance)

    // calculate entropy
    const entropy = calculateEntropy(numbers)

    // show result
    $('#mean_output').val(mean.toFixed(4))
    $('#std_output').val(std.toFixed(4))
    $('#entropy_output').val(entropy.toFixed(4))
  })
})

document.addEventListener('DOMContentLoaded', function () {
  const colorblindModeSelector = document.getElementById('colorblind-mode')
  const buttons = document.querySelectorAll('.viewAllButton')
  colorblindModeSelector.addEventListener('change', function () {
    const mode = colorblindModeSelector.value

    // clear the previous css style
    document.body.classList.remove('red-green-mode', 'blue-yellow-mode', 'total-colorblind-mode')
    buttons.forEach(button => {
      button.classList.remove('red-green', 'blue-yellow', 'total-colorblind')
    })
    if (mode === 'red-green') {
      document.body.classList.add('red-green-mode')
      buttons.forEach(button => button.classList.add('red-green'))
    } else if (mode === 'blue-yellow') {
      document.body.classList.add('blue-yellow-mode')
      buttons.forEach(button => button.classList.add('blue-yellow'))
    } else if (mode === 'total-colorblind') {
      document.body.classList.add('total-colorblind-mode')
      buttons.forEach(button => button.classList.add('total-colorblind'))
    }
  })
})

const addCustomUnitVal = () => {
  const baseUnit = $('#custom_unit_base').val()
  const customTypeSelector = $('#custom_type_selector').val()
  const customUnitName = $('#custom_unit_name_left').val()
  const customUnitRatio = $('#custom_unit_value_right').val()

  addCustomUnit({
    unit: customUnitName,
    type: customTypeSelector,
    aliases: [customUnitName],
    ratio: customUnitRatio
  }).then(() => {
    populateCustomUnit()
  })

  $('#custom_unit_name_left').val('')
  $('#custom_unit_value_right').val('')
}

const deleteCustomUnitVal = () => {
  const baseUnit = $('#custom_unit_base').val()
  const customTypeSelector = $('#custom_type_selector').val()
  const customUnitName = $('#delete_type_selector').val()

  deleteCustomUnit({
    unit: customUnitName,
    type: customTypeSelector,
    aliases: [customUnitName]
  }).then(() => {
    populateCustomUnit()
  })

  $('#custom_unit_name_left').val('')
  $('#custom_unit_value_right').val('')
}

const populateCustomUnit = () => {
  const baseUnit = $('#custom_unit_base')
  const customTypeSelector = $('#custom_type_selector')
  const deleteCustomTypeSelector = $('#delete_type_selector')

  const unitField = UNITS.filter(unit => {
    return unit.type == customTypeSelector.val() && unit.ratio == 1
  })
  console.log(unitField)
  baseUnit.empty()
  baseUnit.html(unitField[0].unit)

  getAllUnits().then(unitsData => {
    console.log(unitsData)
    const type = customTypeSelector.val()
    const POPULAR_UNIT = unitsData.reduce((accumulator, currentUnit) => {
      if (currentUnit.type && currentUnit.aliases) {
        if (accumulator[currentUnit.type]) {
          accumulator[currentUnit.type].push(currentUnit.unit)
        } else {
          accumulator[currentUnit.type] = [currentUnit.unit]
        }
      }
      return accumulator
    }, {})

    let notFound = true
    deleteCustomTypeSelector.empty()
    POPULAR_UNIT[type].forEach(function (unit) {
      if (!POPULAR_UNITS[type].includes(unit)) {
        notFound = false
        deleteCustomTypeSelector.append($('<option>', {
          value: unit,
          text: unit.charAt(0).toUpperCase() + unit.slice(1) // Capitalize the first letter
        }))
      }
    })

    if (notFound) {
      deleteCustomTypeSelector.append($('<option>', {
        value: 'No Custom Unit Found',
        text: 'No Custom Unit Found'
      }))

      $('#custom_unit_delete').hide()
    } else {
      $('#custom_unit_delete').show()
    }
  })
}

const populateUnit = () => {
  const unitSelector = $('#unit_selector_left')
  const type = $('#type_selector').val()

  unitSelector.off('change')

  unitSelector.empty()
  getAllUnits().then(unitsData => {
    console.log(unitsData)
    const POPULAR_UNITS = unitsData.reduce((accumulator, currentUnit) => {
      if (currentUnit.type && currentUnit.aliases) {
        if (accumulator[currentUnit.type]) {
          accumulator[currentUnit.type].push(currentUnit.unit)
        } else {
          accumulator[currentUnit.type] = [currentUnit.unit]
        }
      }
      return accumulator
    }, {})

    POPULAR_UNITS[type].forEach(function (unit) {
      unitSelector.append($('<option>', {
        value: unit,
        text: unit.charAt(0).toUpperCase() + unit.slice(1) // Capitalize the first letter
      }))
    })

    // there is unit_selector_right, it should have all the value same as left just expect the value selected in left

    const unitSelectorRight = $('#unit_selector_right')
    unitSelectorRight.off('change')
    console.log(unitSelectorRight)
    unitSelectorRight.empty()
    POPULAR_UNITS[type].filter(unit => unit !== unitSelector.val()).forEach(function (unit) {
      unitSelectorRight.append($('<option>', {
        value: unit,
        text: unit.charAt(0).toUpperCase() + unit.slice(1) // Capitalize the first letter
      }))
    })

    unitSelector.on('change', function () {
      updateUnitSelectorsRight(type)
    })

    unitSelectorRight.on('change', function () {
      updateUnitSelectorsLeft(type)
    })

    getConversion('left')
  })
}

const populateFavUnit = () => {
  const container = $('#units_container')
  const type = $('#favourite_type_selector').val()
  container.empty()
  const favouriteArr = localStorage.getItem('favouriteArr') ? JSON.parse(localStorage.getItem('favouriteArr')) : []

  getAllUnits().then(unitsData => {
    console.log(unitsData)
    const POPULAR_UNITS = unitsData.reduce((accumulator, currentUnit) => {
      if (currentUnit.type && currentUnit.aliases) {
        if (accumulator[currentUnit.type]) {
          accumulator[currentUnit.type].push(currentUnit.unit)
        } else {
          accumulator[currentUnit.type] = [currentUnit.unit]
        }
      }
      return accumulator
    }, {})

    POPULAR_UNITS[type].forEach(function (ut) {
      var checkbox = $('<input>', {
        type: 'checkbox',
        id: 'checkbox_' + ut,
        value: type == 'currency' || type == 'temperature' ? unit[ut.toLocaleLowerCase()] : ut,
        checked: type == 'currency' || type == 'temperature' ? !!favouriteArr.includes(unit[ut.toLocaleLowerCase()]) : !!favouriteArr.includes(ut)
      })

      var label = $('<label>', {
        for: 'checkbox_' + ut,
        text: ut.charAt(0).toUpperCase() + ut.slice(1) // Capitalize the first letter
      })

      // Append the checkbox and label to the li element
      container.append($('<li>').append(checkbox, label))

      // Attach the onchange event handler using jQuery's on method
      checkbox.on('change', function () {
        handleCheckboxChange(this)
      })
    })
  })
}

const handleCheckboxChange = async (e) => {
  const val = $(e).val()
  let favouriteArr = chrome.storage.sync.get(['favouriteArr']).then(async (result) => {
    console.log(result, val)
    favouriteArr = result.favouriteArr ? JSON.parse(result.favouriteArr) : []
    if ($(e).is(':checked')) {
      favouriteArr.push(val)
    } else {
      favouriteArr = favouriteArr.filter(ele => ele != val)
    }
    console.log(favouriteArr)
    localStorage.setItem('favouriteArr', JSON.stringify(favouriteArr))
    await chrome.storage.sync.set({ favouriteArr: JSON.stringify(favouriteArr) })
  })
}

function updateUnitSelectorsRight (type) {
  const unitSelectorLeft = $('#unit_selector_left')
  const unitSelectorRight = $('#unit_selector_right')

  const selectedUnitLeft = unitSelectorLeft.val()
  const selectedUnitRight = unitSelectorRight.val()

  // Clear and repopulate the right unit selector
  unitSelectorRight.empty()
  // Filter out the selected unit from the left unit selector
  POPULAR_UNITS[type].filter(unit => unit !== selectedUnitLeft).forEach(function (unit) {
    unitSelectorRight.append($('<option>', {
      value: unit,
      text: unit.charAt(0).toUpperCase() + unit.slice(1) // Capitalize the first letter
    }))
  })
  if (unitSelectorRight.val() != selectedUnitLeft) unitSelectorLeft.val(selectedUnitLeft)
  if (unitSelectorLeft.val() != selectedUnitRight) unitSelectorRight.val(selectedUnitRight)
  getConversion('left')
}

function updateUnitSelectorsLeft (type) {
  const unitSelectorLeft = $('#unit_selector_left')
  const unitSelectorRight = $('#unit_selector_right')

  const selectedUnitLeft = unitSelectorLeft.val()
  const selectedUnitRight = unitSelectorRight.val()

  // Clear and repopulate the right unit selector
  unitSelectorLeft.empty()
  POPULAR_UNITS[type].forEach(function (unit) {
    unitSelectorLeft.append($('<option>', {
      value: unit,
      text: unit.charAt(0).toUpperCase() + unit.slice(1) // Capitalize the first letter
    }))
  })
  if (unitSelectorRight.val() != selectedUnitLeft) unitSelectorLeft.val(selectedUnitLeft)
  if (unitSelectorLeft.val() != selectedUnitRight) unitSelectorRight.val(selectedUnitRight)
  getConversion('left')
}

const getConversion = async (change) => {
  const typeSelector = $('#type_selector').val()

  if (typeSelector == '') {
    return
  }

  let unitSelectorLeftVal = $('#unit_selector_left').val()
  let unitSelectorRightVal = $('#unit_selector_right').val()

  const leftVal = $('#left_input').val()
  const rightVal = $('#right_input').val()

  if (unitSelectorRightVal == 'jpy') {
    unitSelectorRightVal = 'yen'
  }
  if (unitSelectorLeftVal == 'jpy') {
    unitSelectorLeftVal = 'yen'
  }

  console.log(`${leftVal} ${unitSelectorLeftVal}`, `${rightVal} ${unitSelectorRightVal}`)
  let result
  if (change == 'left') {
    result = await get_conversions(`${leftVal} ${unitSelectorLeftVal}`)
  } else {
    result = await get_conversions(`${rightVal} ${unitSelectorRightVal}`)
  }

  const elements = result.split(',').filter(element => element.trim() !== '')
  console.log(elements, unitSelectorRightVal, unitSelectorLeftVal)

  if (typeSelector == 'currency' || typeSelector == 'temperature') {
    unitSelectorRightVal = unit[unitSelectorRightVal]
    unitSelectorLeftVal = unit[unitSelectorLeftVal]
  }
  console.log(unitSelectorRightVal, unitSelectorLeftVal)

  if (change == 'left') {
    $('#right_input').val(elements[elements.findIndex(ele => ele.indexOf(unitSelectorRightVal) > -1)].split(' ')[typeSelector == 'currency' ? 1 : 0])
  } else {
    $('#left_input').val(elements[elements.findIndex(ele => ele.indexOf(unitSelectorLeftVal) > -1)].split(' ')[typeSelector == 'currency' ? 1 : 0])
  }

  console.log(result)
}

function calculateEntropy (numbers) {
  if (numbers.length === 0) {
    return 0
  }
  const frequencies = {}
  numbers.forEach(num => {
    frequencies[num] = (frequencies[num] || 0) + 1
  })

  return -Object.values(frequencies).reduce((entropy, freq) => {
    const p = freq / numbers.length
    return entropy + p * Math.log2(p)
  }, 0)
}

function calculateHealthValues (weight, height, age, gender) {
  try {
    // Calculate BMI
    const bmi = weight / ((height / 100) * (height / 100))

    // Calculate BMR using Mifflin-St Jeor Equation
    let bmr
    if (gender === 'male') {
      bmr = 10 * weight + 6.25 * height - 5 * age + 5
    } else {
      bmr = 10 * weight + 6.25 * height - 5 * age - 161
    }

    // Calculate TDEE (using sedentary multiplier 1.2)
    const tdee = bmr * 1.2

    return {
      bmi: bmi || 0,
      bmr: bmr || 0,
      tdee: tdee || 0
    }
  } catch (error) {
    return {
      bmi: 0,
      bmr: 0,
      tdee: 0
    }
  }
}

function calculateHealth () {
  const weight = parseFloat($('#weight').val()) || 0
  const height = parseFloat($('#height').val()) || 0
  const age = parseFloat($('#age').val()) || 0
  const gender = $('#gender').val()

  const results = calculateHealthValues(weight, height, age, gender)

  // Update results with values
  $('#bmi-result').text(results.bmi === 0 ? '-' : results.bmi.toFixed(2))
  $('#bmr-result').text(results.bmr === 0 ? '-' : results.bmr.toFixed(2))
  $('#tdee-result').text(results.tdee === 0 ? '-' : results.tdee.toFixed(2))

  // Update ranges based on gender
  $('.male-range').css('display', gender === 'male' ? 'inline' : 'none')
  $('.female-range').css('display', gender === 'male' ? 'none' : 'inline')

  // Optional: Add color coding for values
  if (!isNaN(results.bmi)) {
    const bmiResult = $('#bmi-result')
    if (results.bmi < 18.5) {
      bmiResult.css('color', '#e74c3c') // Red for underweight
    } else if (results.bmi <= 24.9) {
      bmiResult.css('color', '#27ae60') // Green for normal
    } else {
      bmiResult.css('color', '#e74c3c') // Red for overweight
    }
  }

  if (!isNaN(results.bmr)) {
    const bmrResult = $('#bmr-result')
    const normalBmrMin = gender === 'male' ? 1500 : 1200
    const normalBmrMax = gender === 'male' ? 2000 : 1600

    if (results.bmr < normalBmrMin || results.bmr > normalBmrMax) {
      bmrResult.css('color', '#e74c3c') // Red for out of range
    } else {
      bmrResult.css('color', '#27ae60') // Green for normal range
    }
  }

  if (!isNaN(results.tdee)) {
    const tdeeResult = $('#tdee-result')
    const normalTdeeMin = gender === 'male' ? 2000 : 1600
    const normalTdeeMax = gender === 'male' ? 2750 : 2200

    if (results.tdee < normalTdeeMin || results.tdee > normalTdeeMax) {
      tdeeResult.css('color', '#e74c3c') // Red for out of range
    } else {
      tdeeResult.css('color', '#27ae60') // Green for normal range
    }
  }
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { calculateHealthValues }
}
