// /**
//  * @param {Number} number input number value
//  * @returns returns value with accuracy of input number decimal points
//  */
const getPrecisionV = (number) => {
  let parts = number.toString().split(".");
  let intlen = number < 0 ? parts[0].length - 1 : parts[0].length;
  return intlen + parts[1].length;

}

const getPreciseNumberV = (number, precision) => {
  if (number < 0) {
    return number.toPrecision(
      Math.min(Math.max(getPrecisionV(number), precision), 10)
    );
  }
  return Math.round(number * 1000) / 1000;
}

/**
 * @param {Number} quantity input number
 * @returns returns value with accuracy of 10 decimal points
 */
const getStandardConversion = (unitObject, quantity) => {
  return quantity/unitObject.ratio;
}
/**
 * From our standard conversion we try to convert into all the other units specified in arr property of this class with a precision no more than 10
 * @param {Number} quantity input quantity number
 * @param {Number} precision input precision digit
 * @returns all values with accuracy of 10 decimal points
 */
/**/
const getAllConversions = async (quantity, precision, unitObject, listOfUnits) => {
  let res = "";
  const toUnits = listOfUnits.filter((object) => {
    return object.type === unitObject.type && object.unit !== unitObject.unit;
  });
  
  toUnits.forEach((u) => {
    res += "," + getPreciseNumberV(quantity*u.ratio, precision) + " " + u.unit;
  });

  return res;
}

// exports = {getStandardConversion,getAllConversions,getPrecisionV,getPreciseNumberV};
module.exports = {
  getStandardConversion,
  getAllConversions
};