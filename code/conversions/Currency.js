//Our currency class handles all currency related conversions
/**
 * Currency class handles currency conversions
 */
class Currency {
  /**
   * @constructor
   * @param {Object} unit Currency Unit
   * @param {Array} arr Currency converter rate
   */
  constructor(unit, arr) {
    this.unit = unit;
    this.arr = arr;
  }

  /**
   * @param {Number} number currency value
   * @returns currency rate
   */
  getPrecision(number) {
    let parts = number.toString().split(".");
    if (parts.length <= 1) {
      return number < 0 ? parts[0].length - 1 : parts[0].length;
    }
    let intlen = number < 0 ? parts[0].length - 1 : parts[0].length;
    return intlen + parts[1].length;
  }

  getPreciseNumber(number, precision) {
    if (number < 10e-3) {
      return Number(number).toPrecision(
        Math.min(Math.max(this.getPrecision(number), precision), 10)
      );
    }
    return Math.round(number * 1000) / 1000;
  }

  /**
   * api call that fetches the conversion rate for a given query q, where q is the stock name. For eg: USD
   * @param {Object} q query q
   * @returns conversion rate for a given query q
   */
  getData(q) {
    if (typeof fetch !== "function") {
      let fetch = require("node-fetch");
      return fetch(" https://open.er-api.com/v6/latest/" + q)
        .then((response) => response.json())
        .then((data) => data.rates);
    } else {
      return fetch(" https://open.er-api.com/v6/latest/" + q)
        .then((response) => response.json())
        .then((data) => data.rates);
    }
  }

  /**
   * Our standard conversion is USD, so we try to convert all selection to USD
   * @async
   * @param {Number} quantity input currency quantity
   * @returns standard money in USD
   */
  async getStandardConversion(quantity) {
    let rate;
    switch (this.unit.toLowerCase()) {
      case "usd":
        return quantity;
      case "eur":
        rate = await this.getData("EUR").then(function (d) {
          return d["USD"];
        });
        return rate * quantity;
      case "gbp":
        rate = await this.getData("GBP").then(function (d) {
          return d["USD"];
        });
        return rate * quantity;
      case "inr":
        rate = await this.getData("INR").then(function (d) {
          return d["USD"];
        });
        return rate * quantity;
      case "jpy":
        rate = await this.getData("JPY").then(function (d) {
          return d["USD"];
        });
        return rate * quantity;
      case "cad":
        rate = await this.getData("CAD").then(function (d) {
          return d["USD"];
        });
        return rate * quantity;
      case "aud":
        rate = await this.getData("AUD").then(function (d) {
          return d["USD"];
        });
        return rate * quantity;
      case "chf":
        rate = await this.getData("CHF").then(function (d) {
          return d["USD"];
        });
        return rate * quantity;
      case "cny":
        rate = await this.getData("CNY").then(function (d) {
          return d["CNY"];
        });
        return rate * quantity;
      default:
        return null;
    }
  }

  /**
   * From our standard conversion we try to convert into all the other units specified in arr property of this class with a precision no more than 10
   * @async
   * @param {Number} quantity input quantity
   * @param {Number} precision input precision
   * @returns money after conversion
   */
  async getAllConversions(quantity, precision) {
    let res = "";
    let factor;
    for (let i = 0; i < this.arr.length; i++) {
      switch (this.arr[i].toLowerCase()) {
        case "usd":
          res += ",$ " + this.getPreciseNumber(quantity, precision);
          break;
        case "eur":
          factor = await this.getData("USD").then(function (d) {
            return d["EUR"];
          });
          res += ",€ " + this.getPreciseNumber(factor * quantity, precision);
          break;
        case "gbp":
          factor = await this.getData("USD").then(function (d) {
            return d["GBP"];
          });
          res += ",£ " + this.getPreciseNumber(factor * quantity, precision);
          break;
        case "inr":
          factor = await this.getData("USD").then(function (d) {
            return d["INR"];
          });
          res += ",₹ " + this.getPreciseNumber(factor * quantity, precision);
          break;
        case "jpy":
          factor = await this.getData("USD").then(function (d) {
            return d["JPY"];
          });
          res += ",¥ " + this.getPreciseNumber(factor * quantity, precision);
          break;
        case "cad":
          factor = await this.getData("USD").then(function (d) {
            return d["CAD"];
          });
          res += ",C$ " + this.getPreciseNumber(factor * quantity, precision);
          break;
        case "aud":
          factor = await this.getData("USD").then(function (d) {
            return d["AUD"];
          });
          res += ",AU$ " + this.getPreciseNumber(factor * quantity, precision);
          break;
        case "chf":
          factor = await this.getData("USD").then(function (d) {
            return d["CHF"];
          });
          res += ",Fr " + this.getPreciseNumber(factor * quantity, precision);
          break;
        case "cny":
          factor = await this.getData("USD").then(function (d) {
            return d["CNY"];
          });
          res += ",¥ " + this.getPreciseNumber(factor * quantity, precision);
      }
    }
    return res;
  }
}

if (typeof module == "object") {
  module.exports = Currency;
}
