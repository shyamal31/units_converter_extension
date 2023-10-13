/**
    The following file has all the utility functions that perform trivial yet important tasks
*/

/**
 * This is a sort function used to sort an array of string in descending order of string lengths
 * @function descending_length
 * @param {Array} a string array
 * @param {Array} b string array
 * @returns sort array in decending order
 */
function descending_length(a, b) {
    return b.length - a.length;
}


/**
 * This is a filtering function used by get_possible_conversions_list to filter out the current unit itself
 * @function matches_filter
 * @param {String} currentUnit input string
 * @returns return true if currentUnit lower case is different with element lower case, else return false
 */
function matches_filter(currentUnit) {
    return function (element) {
        return element.toLowerCase() != currentUnit.toLowerCase();
    }
}

/**
 * For a given unit, this function returns all the popular units that it can be converted into except itself
 * @function get_possible_conversions_list
 * @param {String} type 
 * @param {String} currentUnit
 * @returns all the popular units that it can be converted into except itself
 */
function get_possible_conversions_list(type, currentUnit) {
    return POPULAR_UNITS[type].filter(matches_filter(currentUnit))
}


/**
 * Return appropriate conversion class from the conversion scripts based on unit type
 * @function get_conversion_class
 * @param {String} type
 * @param {String} unit
 * @returns appropriate conversion class
 */
function get_conversion_class(type, unit) {
    if (type == "temperature") {
        return new Temperature(unit, get_possible_conversions_list(type, unit));
    } else if (type == "currency") {
        return new Currency(unit, get_possible_conversions_list(type, unit));
    } else if (type == "length") {
        return new Length(unit, get_possible_conversions_list(type, unit));
    } else if (type == "time") {
        return new Time(unit, get_possible_conversions_list(type, unit));
    } else if (type == "mass") {
        return new Mass(unit, get_possible_conversions_list(type, unit));
    } else if (type == "dataTransfer") {
        return new DataTransfer(unit, get_possible_conversions_list(type, unit));
    } else if (type == "area") {
        return new Area(unit, get_possible_conversions_list(type, unit));
    } else if (type == "speed") {
        return new Speed(unit, get_possible_conversions_list(type, unit));
    }
    else if (type == "volume") {
        return new Volume(unit, get_possible_conversions_list(type, unit));
    }

}

/**
 * Get a number's precision
 * @function getPrecision
 * @param {Number} number input number
 * @returns number's precision
 */
function getPrecision(number) {
    let parts = number.toString().split(".");
    if (parts.length <= 1) {
        return number < 0 ? parts[0].length - 1 : parts[0].length;
    }
    let intlen = (number < 0 ? parts[0].length - 1 : parts[0].length);
    return intlen + parts[1].length;
}

/**
 * Return number with a max precison of 10
 * @function getPreciseNumber
 * @param {Number} number input number
 * @param {Number} precision input precision number
 * @returns number with a max precison of 10
 */
function getPreciseNumber(number, precision) {
    return number.toPrecision(Math.min(Math.max(getPrecision(number), precision), 10))
}
