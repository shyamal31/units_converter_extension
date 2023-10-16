//Our mass class handles all mass related conversions
/**
 * Mass class handles all mass related conversions
 */
class Mass {
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
     * Our standard conversion is Kilograms, so we try to convert all selection to Kilograms
     * @param {Number} quantity input number
     * @returns returns value with accuracy of 10 decimal points 
     */

    getStandardConversion(quantity) {
        //We use a switch case to make appropriate conversion
        switch (this.unit.toLowerCase()) {
            case "kilograms":
                return quantity;
            case "grams":
                return quantity / 1000;
            case "pound":
                return quantity * 0.45359237;
            case "tonne":
                return quantity * 1000;
            case "milligrams":
                return quantity / 1000000;
            case "micrograms":
                return quantity / 1000000000;
            case "ounces":
                return quantity / 35.273962;
            case "tonss":
                return quantity * 907.18474;
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
                case "kilograms":
                    res += "," + this.getPreciseNumber(quantity, precision) + " Kgs";
                                        break;
                case "grams": {
                    let conv = quantity * 1000;
                    res += "," + this.getPreciseNumber(conv, precision) + " gms";
                                        break;
                }
                case "pounds": {
                    let conv = quantity / 0.4535923;
                    res += "," + this.getPreciseNumber(conv, precision) + " lbs";
                                        break;
                }
                case "tonnes": {
                    let conv = quantity / 1000;
                    res += "," + this.getPreciseNumber(conv, precision) + " tonnes";
                                        break;
                }
                case "milligrams": {
                    let conv = quantity * 1000000;
                    res += "," + this.getPreciseNumber(conv, precision) + " milligrams";
                                        break;
                }
                case "micrograms": {
                    let conv = quantity * 1000000000;
                    res += "," + this.getPreciseNumber(conv, precision) + " micrograms";
                                        break;
                }
                case "ounces": {
                    let conv = quantity * 35.273962;
                    res += "," + this.getPreciseNumber(conv, precision) + " ounces";
                                        break;
                }
                case "ton": {
                    let conv = quantity / 907.18474;
                    res += "," + this.getPreciseNumber(conv, precision) + " tonss";
                                        break;
                }
            }
        });
        
        return res;
    }


}

if(typeof module == 'object') {
	module.exports = Mass;
}
