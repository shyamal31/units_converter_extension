//Our Volume class handles all Volume related conversions
/**
 * Volumes class handles all Volume related conversions
 */
class Volume {
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
   *
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

  getPreciseNumber(number) {
    if (number < 10e-3) {
      if (parts.length <= 1) {
        return number < 0 ? parts[0].length - 1 : parts[0].length;
      }
    }
    return Math.round(number * 1000) / 1000;
  }

  /**
   * Our standard conversion is Litres, so we try to convert all selection to Litres
   * @param {Number} quantity input number
   * @returns returns value with accuracy of 10 decimal points
   */

  getStandardConversion(quantity) {
    //We use a switch case to make appropriate conversion
    switch (this.unit.toLowerCase()) {
      case "litres":
        return quantity;
      case "milliliter":
        return quantity / 1000;
      case "cubic meter":
        return quantity / 0.001;
      case "cubic inch":
        return quantity / 61.023744;
      case "cubic foot":
        return quantity / 0.035314666;
      case "pint":
        return quantity / 2.1133764188;
      case "quart":
        return quantity / 1.056688209;
      case "gallon":
        return quantity / 0.26417205235815;
      case "fl oz":
        return quantity / 33.814;
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
        case "litres":
          res += "," + this.getPreciseNumber(quantity) + " lt";
          break;
        case "milliliter": {
          let conv = quantity * 1000;
          res += "," + this.getPreciseNumber(conv) + " ml";
          break;
        }
        case "cubic meter": {
          let conv = quantity * 0.001;
          res += "," + this.getPreciseNumber(conv) + " m3";
          break;
        }
        case "cubic inch": {
          let conv = quantity * 61.023744;
          res += "," + this.getPreciseNumber(conv) + " in3";
          break;
        }
        case "cubic foot": {
          let conv = quantity * 0.035314666;
          res += "," + this.getPreciseNumber(conv) + " ft3";
          break;
        }
        case "pint": {
          let conv = quantity * 2.113376418;
          res += "," + this.getPreciseNumber(conv) + " pint";
          break;
        }
        case "quart": {
          let conv = quantity * 1.056688209;
          res += "," + this.getPreciseNumber(conv) + " qt";
          break;
        }
        case "gallon": {
          let conv = quantity * 0.26417205235815;
          res += "," + this.getPreciseNumber(conv) + " gal";
          break;
        }
        case "fl oz": {
          let conv = quantity * 33.814;
          res += "," + this.getPreciseNumber(conv) + " fl oz";
          break;
        }
      }
    });

    return res;
  }
}

if (typeof module == "object") {
  module.exports = Volume;
}
