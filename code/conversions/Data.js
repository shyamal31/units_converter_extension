/**
 * Data class handles data rate-related conversions
 */
class Data {
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
   * @param {Number} number input number
   * @returns precise rate
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

  // /**
  //  *
  //  * @param {Number} number input number value
  //  * @param {Number} precision input precision digit number
  //  * @returns number after precision
  //  */
  // getPreciseNumber(number, precision) {
  //   return number.toPrecision(
  //     Math.min(Math.max(this.getPrecision(number), precision), 10)
  //   );
  // }

  /**
   * @param {Number} quantity input quantity number
   * @returns number value in conversion
   */
  getStandardConversion(quantity) {
    //We use a switch case to make appropriate conversion

    switch (this.unit.toUpperCase()) {
      case "B":
        return quantity;
      case "KB":
        return quantity * 1024;
      case "MB":
        return quantity * 1048576;
      case "GB":
        return quantity * 1073741824;
      case "TB":
        return quantity * 1099511627776;
      default:
        return null;
    }
  }

  /**
   *
   * @param {Number} quantity input number
   * @param {Number} precision input precision digits
   * @returns value after conversion with accuracy of 10 decimal points
   */

  getAllConversions(quantity, precision) {
    let res = "";
    this.arr.forEach((u) => {
      switch (u.toUpperCase()) {
        case "B": {
          res += "," + this.getPreciseNumber(quantity) + " B";
          break;
        }
        case "KB": {
          let conv = quantity / 1024;
          res += "," + this.getPreciseNumber(conv) + " KB";
          break;
        }
        case "MB": {
          let conv = quantity / 1048576;
          res += "," + this.getPreciseNumber(conv) + " MB";
          break;
        }
        case "GB": {
          let conv = quantity / 1073741824;
          res += "," + this.getPreciseNumber(conv) + " GB";
          break;
        }
        case "TB": {
          let conv = quantity / 1099511627776;
          let temp = this.getPreciseNumber(conv);

          res += "," + temp + " TB";

          break;
        }
      }
    });
    return res;
  }
}

if (typeof module == "object") {
  module.exports = Data;
}
