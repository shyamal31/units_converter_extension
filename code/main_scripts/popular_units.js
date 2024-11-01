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
    'miles',
    'meters',
    'kilometers',
    'yard',
    'feet',
    'furlong',
    'chain',
    'centimeters',
    'millimeters',
    'inch'
  ],
  mass: [
    'kilograms',
    'pounds',
    'ounces',
    'grams',
    'tonnes',
    'milligrams',
    'micrograms'
  ],
  temperature: ['celcius', 'fahrenheit', 'kelvin'],
  currency: ['usd', 'eur', 'gbp', 'inr', 'jpy', 'cad', 'aud', 'chf', 'cny'],
  time: ['seconds', 'minutes', 'hours', 'days', 'weeks'],
  dataTransfer: ['Mb/s', 'Gb/s', 'Tb/s', 'b/s', 'Kb/s'],
  area: ['km2', 'miles2', 'ft2', 'ha2', 'acre2', 'yd2', 'm2', 'in2', 'cm2'],
  speed: ['Km/h', 'mph', 'm/s'],
  volume: [
    'litres',
    'milliliter',
    'cubic meter',
    'cubic inch',
    'cubic foot',
    'pint',
    'quart',
    'gallon',
    'fl oz'
  ],
  data: ['MB', 'GB', 'TB', 'B', 'KB']
}

const PRE_SYMBOLS = new Set([
  '$',
  '₹',
  '€',
  '£',
  '¥',
  'Can$',
  'C$',
  'CA$',
  'A$',
  'AU$',
  '¥'
])
