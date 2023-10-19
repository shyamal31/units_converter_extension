/*Our Length class handles all length related conversions. Currently implemented conversions are 
[meters, miles, kilometers, centimeters, millimeters, yard, feet, inch, furlong, chain]*/
/**
 * Length class handles currency conversions
 */
class Length {
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
      return number.toPrecision(
        Math.min(Math.max(this.getPrecision(number), precision), 10)
      );
    }
    return Math.round(number * 1000) / 1000;
  }

  /**
   * Our standard conversion is meters, so we try to convert all selection to meters
   * @param {Number} quantity input number
   * @returns returns value with accuracy of 10 decimal points
   */

  getStandardConversion(quantity) {
    //We use a switch case to make appropriate conversion
    switch (this.unit.toLowerCase()) {
      case "meters":
        return quantity;
      case "miles":
        return quantity * 1609.34;
      case "kilometers":
        return quantity * 1000;
      case "centimeters":
        return quantity / 100;
      case "millimeters":
        return quantity / 1000;
      case "yard":
        return quantity / 1.094;
      case "feet":
        return quantity / 3.281;
      case "inch":
        return quantity / 39.3701;
      case "furlong":
        return quantity * 201;
      case "chain":
        return quantity * 20.1168;
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
        case "meters": {
          res += "," + this.getPreciseNumber(quantity, precision) + " m";
          break;
        }
        case "miles": {
          let conv = quantity / 1609;
          res += "," + this.getPreciseNumber(conv, precision) + " mi";
          break;
        }
        case "kilometers": {
          let conv = quantity / 1000;
          res += "," + this.getPreciseNumber(conv, precision) + " km";
          break;
        }
        case "centimeters": {
          let conv = quantity * 100;
          res += "," + this.getPreciseNumber(conv, precision) + " cm";
          break;
        }
        case "millimeters": {
          let conv = quantity * 1000;
          res += "," + this.getPreciseNumber(conv, precision) + " mm";
          break;
        }
        case "yard": {
          let conv = quantity * 1.09361;
          res += "," + this.getPreciseNumber(conv, precision) + " yd";
          break;
        }
        case "feet": {
          let conv = quantity * 3.28084;
          res += "," + this.getPreciseNumber(conv, precision) + " ft";
          break;
        }
        case "inch": {
          let conv = quantity * 39.3701;
          res += "," + this.getPreciseNumber(conv, precision) + " inch";
          break;
        }
        case "furlong": {
          let conv = quantity / 201;
          res += "," + this.getPreciseNumber(conv, precision) + " fur";
          break;
        }
        case "chain": {
          let conv = quantity / 20.117;
          res += "," + this.getPreciseNumber(conv, precision) + " chain";
          break;
        }
      }
    });

    return res;
  }
}

if (typeof module == "object") {
  module.exports = Length;
}
