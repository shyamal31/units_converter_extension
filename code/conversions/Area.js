/**
 * Area class handles all mass related conversions
 */
class Area {
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
      return number.toPrecision(
        Math.min(Math.max(this.getPrecision(number), precision), 10)
      );
    }
    return Math.round(number * 1000) / 1000;
  }

  /**
   * Our standard conversion is square meter, so we try to convert all selection to square meter
   * @param {Number} quantity input number
   * @returns returns value with accuracy of 10 decimal points
   */
  getStandardConversion(quantity) {
    //We use a switch case to make appropriate conversion
    switch (this.unit.toLowerCase()) {
      case "m2":
        return quantity;
      case "cm2":
        return quantity / 100;
      case "km2":
        return quantity * 1000000;
      case "miles2":
        return quantity * 2590000;
      case "ft2":
        return quantity * 0.092903;
      case "in2":
        return quantity * 0.00064516;
      case "ha2":
        return quantity * 10000;
      case "acre2":
        return quantity * 4046.86;
      case "yd2":
        return quantity * 0.836127;
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
        case "m2": {
          res += "," + this.getPreciseNumber(quantity) + " m2";
          break;
        }
        case "cm2": {
          let conv = quantity * 100;
          res += "," + this.getPreciseNumber(conv) + " cm2";
          break;
        }
        case "km2": {
          let conv = quantity / 1000000;
          res += "," + this.getPreciseNumber(conv) + " km2";
          break;
        }
        case "miles": {
          let conv = quantity / 2590000;
          res += "," + this.getPreciseNumber(conv) + " miles";
          break;
        }
        case "ft2": {
          let conv = quantity / 0.092903;
          res += "," + this.getPreciseNumber(conv) + " ft2";
          break;
        }
        case "in2": {
          let conv = quantity / 0.00064516;
          res += "," + this.getPreciseNumber(conv) + " in2";
          break;
        }
        case "ha2": {
          let conv = quantity / 10000;
          res += "," + this.getPreciseNumber(conv) + " ha2";
          break;
        }
        case "acre2": {
          let conv = quantity / 4046.86;
          res += "," + this.getPreciseNumber(conv) + " acre2";
          break;
        }
        case "yd2": {
          let conv = quantity / 0.836127;
          res += "," + this.getPreciseNumber(conv) + " yd2";
          break;
        }
      }
    });

    return res;
  }
}

if (typeof module == "object") {
  module.exports = Area;
}
