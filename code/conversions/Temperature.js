//Our temperature class handles all temperature related conversions
/**
 * Temperature class handles all mass related conversions
 */
class Temperature {
  /**
   * @constructor
   * @param {Object} unit data unit
   * @param {Array} arr conversion rates array
   */
  constructor(unit, arr) {
    this.unit = unit;
    this.arr = arr;
  }
  /**
   * Our standard conversion is celcius, so we try to convert all selection to celcius
   * @param {Number} quantity input number
   * @returns returns value with accuracy of 10 decimal points
   */
  getStandardConversion(quantity) {
    //We use a switch case to make appropriate conversion
    switch (this.unit.toLowerCase()) {
      case "celcius":
        return quantity;
      case "kelvin":
        return quantity - 273.15;
      case "fahrenheit":
        return ((quantity - 32) / 9) * 5;
      default:
        return null;
    }
  }

  /**
   * From our standard conversion we try to convert into all the other units specified in arr property of this class with a precision no more than 10
   * @param {Number} quantity input quantity number
   * @param {Number} precision input precision digit
   * @returns all values with accuracy of 10 decimal points
   */
  /**/
  getAllConversions(quantity, precision) {
    let res = "";
    this.arr.forEach((u) => {
      switch (u.toLowerCase()) {
        case "celcius":
          res += "," + this.getPreciseNumber(quantity) + " °C";
          break;
        case "kelvin": {
          let conv = quantity + 273.15;
          res += "," + this.getPreciseNumber(conv) + " °K";
          break;
        }
        case "fahrenheit": {
          let conv = (quantity / 5) * 9 + 32;
          res += "," + this.getPreciseNumber(conv) + " °F";
          break;
        }
      }
    });

    return res;
  }

  getPreciseNumber(number) {
    if (number < 10e-3) {
      return number;
    }
    return Math.round(number * 1000) / 1000;
  }

  /**
   * @param {Number} number input number value
   * @returns returns value with accuracy of input number decimal points
   */
  getPrecision(number) {
    let parts = number.toString().split(".");
    if (parts.length <= 1) {
      return number < 0 ? parts[0].length - 1 : parts[0].length;
    }
    let intlen = number < 0 ? parts[0].length - 1 : parts[0].length;
    return intlen + parts[1].length;
  }
}

if (typeof module == "object") {
  module.exports = Temperature;
}
