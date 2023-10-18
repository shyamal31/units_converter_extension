/*
    POPULAR UNITS is a map that stores all the popular units for each unit type
    Example : The some popular units for length type are : meters, kilometers, miles
*/
/**
 * @constant
 * @type {Array}
 */
const POPULAR_UNITS = {
  length: [
    "meters",
    "miles",
    "kilometers",
    "centimeters",
    "millimeters",
    "yard",
    "feet",
    "inch",
    "furlong",
    "chain",
  ],
  mass: [
    "grams",
    "kilograms",
    "pounds",
    "ounces",
    "tonnes",
    "ton",
    "milligrams",
    "micrograms",
  ],
  temperature: ["celcius", "fahrenheit", "kelvin"],
  currency: ["usd", "eur", "gbp", "inr", "jpy", "cad", "aud", "chf", "cny"],
  time: ["seconds", "minutes", "hours", "days", "weeks"],
  dataTransfer: ["b/s", "Kb/s", "Mb/s", "Gb/s", "Tb/s"],
  area: ["m2", "cm2", "km2", "miles2", "ft2", "in2", "ha2", "acre2", "yd2"],
  speed: ["m/s", "Km/h", "mph"],
  volume: [
    "litres",
    "milliliter",
    "cubic meter",
    "cubic inch",
    "cubic foot",
    "pint",
    "quart",
    "gallon",
    "fl oz",
  ],
  data: ["B", "KB", "MB", "GB", "TB"],
};

const PRE_SYMBOLS = new Set([
  "$",
  "₹",
  "€",
  "£",
  "¥",
  "Can$",
  "C$",
  "CA$",
  "A$",
  "AU$",
  "¥",
]);
