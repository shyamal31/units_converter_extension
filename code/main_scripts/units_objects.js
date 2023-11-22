/*
    This a comprehensive array of all units that will be recognized by the chrome extension
    Each Unit will have 3 attributes : 
    1) unit : this the name of the unit that we plan to recongnize
    2) type : what type of attribute the unit represents : LENGTH, TIME, CURRENCY etc.
    3) aliases : what other representations the unit has 
*/
/**
 * @constant
 * @type {Array}
 */
const UNITS = [
	{
		unit: "kilograms",
		type: "mass",
		aliases: ["kilograms", "kilogram", "kgs", "kg"],
		ratio: 1, // multiply with this quantity to convert from base to this unit
	},
	{
		unit: "celcius",
		type: "temperature",
		aliases: ["celcius", "c", "°c"],
	},
	{
		unit: "fahrenheit",
		type: "temperature",
		aliases: ["fahrenheit", "f", "°f"],
	},
	{
		unit: "kelvin",
		type: "temperature",
		aliases: ["kelvin", "k", "°k"],
	},
	{
		unit: "grams",
		type: "mass",
		aliases: ["grams", "gram", "gms", "gm", "g"],
		ratio: 1000,
	},
	{
		unit: "pounds",
		type: "mass",
		aliases: ["pounds", "pound", "lbs", "lb"],
		ratio: 2.20462,
	},
	{
		unit: "tonne",
		type: "mass",
		aliases: ["metric tons", "metric ton", "tonnes", "tonne"],
		ratio: 0.001,
	},
	{
		unit: "milligrams",
		type: "mass",
		aliases: ["milligrams", "milligram", "mgs", "mg"],
		ratio: 1000000,
	},
	{
		unit: "micrograms",
		type: "mass",
		aliases: ["micrograms", "microgram"],
		ratio: 1000000000,
	},
	{
		unit: "ounces",
		type: "mass",
		aliases: ["ounces", "ounce", "ozs", "oz"],
		ratio: 35.273962,
	},
	{
		unit: "ton",
		type: "mass",
		aliases: ["tons", "ton"],
	},
	{
		unit: "USD",
		type: "currency",
		aliases: ["dollars", "dollar", "USD", "$"],
	},
	{
		unit: "EUR",
		type: "currency",
		aliases: ["euros", "euro", "EUR", "€"],
	},
	{
		unit: "GBP",
		type: "currency",
		aliases: ["pound", "GBP", "£"],
	},
	{
		unit: "INR",
		type: "currency",
		aliases: ["rupees", "rupee", "INR", "₹"],
	},
	{
		unit: "CAD",
		type: "currency",
		aliases: ["Can$", "C$", "CA$", "CAD"],
	},
	{
		unit: "JPY",
		type: "currency",
		aliases: ["¥", "yen", "yuan"],
	},
	{
		unit: "AUD",
		type: "currency",
		aliases: ["AU$", "A$", "AUD"],
	},
	{
		unit: "CHF",
		type: "currency",
		aliases: ["franc", "francs", "CHF"],
	},
	{
		unit: "CNY",
		type: "currency",
		aliases: ["cny", "chinese yuan", "yuan", "¥"],
	},
	{
		unit: "meters",
		type: "length",
		aliases: ["meter", "meters", "m", "mts"],
		ratio: 1,
	},
	{
		unit: "kilometers",
		type: "length",
		aliases: ["kilometer", "kilometers", "km", "kms"],
		ratio: 0.001,
	},
	{
		unit: "miles",
		type: "length",
		aliases: ["miles", "mile", "mi"],
		ratio: 0.000621371,
	},
	{
		unit: "centimeters",
		type: "length",
		aliases: ["centimeter", "centimeters", "cm", "cms"],
		ratio: 100,
	},
	{
		unit: "millimeters",
		type: "length",
		aliases: ["millimeter", "millimeters", "mm", "mms"],
		ratio: 1000,
	},
	{
		unit: "yard",
		type: "length",
		aliases: ["yard", "yards", "yd", "yds"],
		ratio: 1.09361,
	},
	{
		unit: "feet",
		type: "length",
		aliases: ["foot", "feet", "ft", "fts"],
		ratio: 3.28084,
	},
	{
		unit: "inch",
		type: "length",
		aliases: ["inches", "inch", '"'],
		ratio: 39.3701,
	},
	{
		unit: "furlong",
		type: "length",
		aliases: ["furlong", "furlongs", "fur", "furss"],
		ratio: 0.00497096,
	},
	{
		unit: "chain",
		type: "length",
		aliases: ["chain", "chains"],
		ratio: 0.0497097,
	},
	{
		unit: "seconds",
		type: "time",
		aliases: ["sec", "s", "secs", "second", "seconds"],
		ratio: 604800,
	},
	{
		unit: "minutes",
		type: "time",
		aliases: ["mins", "min", "minute", "minutes"],
		ratio: 10080,
	},
	{
		unit: "hours",
		type: "time",
		aliases: ["hrs", "h", "hour", "hours"],
		ratio: 168,
	},
	{
		unit: "days",
		type: "time",
		aliases: ["day", "days"],
		ratio: 7,
	},
	{
		unit: "weeks",
		type: "time",
		aliases: ["week", "wks", "weeks"],
		ratio: 1,
	},
	{
		unit: "m2",
		type: "area",
		aliases: ["m2", " m2", "m²", "sqm"],
		ratio: 1,
	},
	{
		unit: "cm2",
		type: "area",
		aliases: ["cm2", " cm2", "cm²", "sqcm"],
		ratio: 10000,
	},
	{
		unit: "km2",
		type: "area",
		aliases: ["km2", " km2", "km²", "sqkm"],
		ratio: 0.000001,
	},
	{
		unit: "miles2",
		type: "area",
		aliases: ["miles2", " miles2", "miles²", "sqmiles"],
		ratio: 0.0000003861,
	},
	{
		unit: "ft2",
		type: "area",
		aliases: ["ft2", " ft2", "ft²", " sqft"],
		ratio: 10.76385024645,
	},
	{
		unit: "in2",
		type: "area",
		aliases: ["in2", " in2", "in²", "sqin"],
		ratio: 1549.9944354888,
	},
	{
		unit: "ha2",
		type: "area",
		aliases: ["ha2", " ha2", "ha²", "sqha"],
		ratio: 0.0001,
	},
	{
		unit: "acre2",
		type: "area",
		aliases: ["acre2", " acre2", "acre²", "sqacre"],
		ratio: 0.000247105,
	},
	{
		unit: "yd2",
		type: "area",
		aliases: ["yd2", " yd2", "yd²", "sqyd"],
		ratio: 1.19599,
	},
	{
		unit: "b/s",
		type: "dataTransfer",
		aliases: ["b/s", "bps"],
		ratio: 1000000000000,
	},
	{
		unit: "Kb/s",
		type: "dataTransfer",
		aliases: ["Kb/s", "Kbps"],
		ratio: 1000000000,
	},
	{
		unit: "Mb/s",
		type: "dataTransfer",
		aliases: ["Mb/s", "Mbps"],
		ratio: 1000000,
	},
	{
		unit: "Gb/s",
		type: "dataTransfer",
		aliases: ["Gb/s", "Gbps"],
		ratio: 1000,
	},
	{
		unit: "Tb/s",
		type: "dataTransfer",
		aliases: ["Tb/s", "Tbps"],
		ratio: 1,
	},
	{
		unit: "m/s",
		type: "speed",
		aliases: ["meters/s", "m/s", "meters per sec", "meters per second"],
		ratio: 1,
	},
	{
		unit: "Km/h",
		type: "speed",
		aliases: [
			"kilometers/h",
			"Km/h",
			"Kilometers per hour",
			"Kilometers per hour",
		],
		ratio: 3.6,
	},
	{
		unit: "mph",
		type: "speed",
		aliases: [
			"mph",
			"Mph",
			"mile/h",
			"Mile/h",
			"Miles per hour",
			"miles per hour",
		],
		ratio: 2.23694,
	},
	{
		unit: "B",
		type: "data",
		aliases: ["B", "Byte"],
		ratio: 1099511627776,
	},
	{
		unit: "KB",
		type: "data",
		aliases: ["KB", "KiloByte"],
		ratio: 1073741824,
	},
	{
		unit: "MB",
		type: "data",
		aliases: ["MB", "MegaByte"],
		ratio: 1048576,
	},
	{
		unit: "GB",
		type: "data",
		aliases: ["GB", "GigaByte"],
		ratio: 1024,
	},
	{
		unit: "TB",
		type: "data",
		aliases: ["TB", "TeraByte"],
		ratio: 1,
	},
	{
		unit: "litres",
		type: "volume",
		aliases: ["lt", " liter", "liters", "litre", "Litres", "L"],
		ratio: 1000,
	},
	{
		unit: "milliliter",
		type: "volume",
		aliases: ["ml", "mls", "millilitre", "milliliters", "millilitres"],
		ratio: 1000000,
	},
	{
		unit: "cubic meter",
		type: "volume",
		aliases: ["cubic meters", " cubic metre", "cubic metres", "m3"],
		ratio: 1,
	},
	{
		unit: "cubic inch",
		type: "volume",
		aliases: ["cubic inches", " ci3"],
		ratio: 61023.7,
	},
	{
		unit: "cubic foot",
		type: "volume",
		aliases: ["cf3", " cubic feet"],
		ratio: 35.3147,
	},
	{
		unit: "pint",
		type: "volume",
		aliases: ["pts", " pt", "pints"],
		ratio: 2113.38,
	},
	{
		unit: "quart",
		type: "volume",
		aliases: ["quarts", " qt", "qts"],
		ratio: 1056.69,
	},
	{
		unit: "gallon",
		type: "volume",
		aliases: ["gallons", " gal", "gals", "gl", "gls"],
		ratio: 264.172,
	},
	{
		unit: "fl oz",
		type: "volume",
		aliases: [
			"fluid ounce",
			" fluid ounces",
			"FlOz",
			"US fluid ounce",
			"US fl oz",
			"Fl Oz",
		],
		ratio: 33814,
	},
];
