# Time Zone Conversion

This JavaScript file provides utility functions for converting time between different time zones. We have used only a few important time zones here. 

## Methods

### 1. `convertTime(inputTimeString, offset, toTimeZone)`

Converts a given input time string from a specified time zone offset to the desired target time zone.

- **Parameters:**
  - `inputTimeString`: String representing the input time.
  - `offset`: Time zone offset of the input time.
  - `toTimeZone`: Target time zone for conversion.

- **Returns:**
  - A string representing the converted time.

### 2. `getTzString(tz)`

Retrieves the time zone string (tz_string) based on the provided time zone abbreviation or alias.

- **Parameters:**
  - `tz`: Time zone abbreviation or alias.

- **Returns:**
  - Time zone string (tz_string) or `null` if not found.

### 3. `getTzOffset(tz)`

Retrieves the time zone offset based on the provided time zone abbreviation or alias.

- **Parameters:**
  - `tz`: Time zone abbreviation or alias.

- **Returns:**
  - Time zone offset or `null` if not found.

### 4. `getDateIfNotExist(dateTimeString)`

Parses a date-time string, handling cases where the input may not include a specific date.

- **Parameters:**
  - `dateTimeString`: String representing the date and time.

- **Returns:**
  - A JavaScript `Date` object.

### 5. `getAllTimeConversions(inputString)`

Processes an array of input strings, cleans them, and performs time conversions for various time zones.

- **Parameters:**
  - `inputString`: Array of strings representing input date and time.

- **Returns:**
  - A formatted string containing time conversions for different time zones.

## Example Usage

```javascript
const { getAllTimeConversions } = require('./timeConversion');

const inputString = "31st December, 2021 12:34:00 AM PST";
const result = getAllTimeConversions(inputString);
console.log(result);

```

##Example Output

<img width="406" alt="image" src="https://github.com/shyamal31/units_converter_extension/assets/57554284/7c3ff601-aac0-4220-8ec1-54509fe36cd1">
