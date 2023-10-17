/**
 * Time class handles all mass related conversions
 */
//Our time class handles all temperature related conversions
class Time {
  /**
   * @constructor
   * @param {Object} unit data unit
   * @param {Array} arr conversion rates array
   */
  constructor(unit, arr) {
    this.unit = unit;
    this.arr = arr;
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

  /**
   * Our standard conversion is seconds, so we try to convert all selection to seconds
   * @param {Number} quantity input number
   * @returns returns value with accuracy of 10 decimal points
   */
  getStandardConversion(quantity) {
    switch (this.unit.toLowerCase()) {
      case "seconds":
        return quantity;
      case "minutes":
        return quantity * 60;
      case "hours":
        return quantity * (60 * 60);
      case "days":
        return quantity * (24 * 60 * 60);
      case "weeks":
        return quantity * (7 * 24 * 60 * 60);
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
        case "seconds": {
          res += "," + this.getPreciseNumber(quantity) + " sec";
          break;
        }
        case "minutes": {
          let conv = quantity / 60;
          res += "," + this.getPreciseNumber(conv) + " mins";
          break;
        }
        case "hours": {
          let conv = quantity / (60 * 60);
          res += "," + this.getPreciseNumber(conv) + " hours";
          break;
        }
        case "days": {
          let conv = quantity / (24 * 60 * 60);
          res += "," + this.getPreciseNumber(conv) + " days";
          break;
        }
        case "weeks": {
          let conv = quantity / (7 * 24 * 60 * 60);
          res += "," + this.getPreciseNumber(conv) + " days";
          break;
        }
      }
    });
    return res;
  }
}

if (typeof module == "object") {
  module.exports = Time;
}
