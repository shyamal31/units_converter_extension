/**
 * Speed class handles all mass related conversions
 */
class Speed {
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
    /** 
     * @param {Number} number input number value
     * @param {Number} precision input precision digit number
     * @returns number after precision
     */
    getPreciseNumber(number, precision) {
        return number.toPrecision(
            Math.min(Math.max(this.getPrecision(number), precision), 10)
        );
    }
    /**
     * Our standard conversion is m/s, so we try to convert all selection to m/s
     * @param {Number} quantity input number
     * @returns returns value with accuracy of 10 decimal points 
     */
    getStandardConversion(quantity) {
        switch (this.unit.toLowerCase()) {
            case "m/s":
                return quantity;
            case "km/h":
                return quantity / 3.6;
            case "mph":
                return quantity / 2.2369362920544025;
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
                case "m/s": {
                    res += "," + this.getPreciseNumber(quantity, precision) + " M/s";
                    break;
                }
                case "km/h": {
                    let conv = quantity * 3.6;
                    res += "," + this.getPreciseNumber(conv, precision) + " Km/h";
                    break;
                }
                case "mph": {
                    let conv = quantity * 2.2369362920544025;
                    res += "," + this.getPreciseNumber(conv, precision) + " Mph";
                    break;
                }
            }
        });
        console.log(res);
        return res;
    }
}

if(typeof module == 'object') {
	module.exports = Speed;
}
