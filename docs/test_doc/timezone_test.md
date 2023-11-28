# TimeZone Test

This documentation outlines the unit tests conducted for the time conversion functionality in the project, focusing on the `getAllTimeConversions` function from `TimeZone.js`.

## Test Cases

### Valid Input Handling

#### Test Case 1 - Valid Input Should Not Log "Invalid Timezone"

```javascript
it('should not log "Invalid Timezone" for valid Input', () => {
    const inputString = "12:34 PM Eastern Time";
    getAllTimeConversions(inputString);
    // Ensure that the console.log was not called with "Invalid Timezone"
    expect(consoleSpy.notCalled).to.be.true;
});

```
### TimeZone conversion

#### Test Case 2 - Convert Valid Time to Different Timezones

```javascript
it('should convert valid time to different timezones', () => {
    const inputString = "12:34 PM EST";
    const result = getAllTimeConversions(inputString);
    expect(result).to.include('PST: 11/26/2023 9:34:00 PM,CT: 11/26/2023 11:34:00 PM,IST: 11/27/2023 11:04:00 AM,UTC: 11/27/2023 5:34:00 AM,');
});

```

#### Test Case 3 - Handle Time Conversion with Day of the Week in the String
```javascript
it('should handle time conversion with day of the week in the string', () => {
    const inputString = "'Wednesday 12:34 PM EST'";
    const result = getAllTimeConversions(inputString);
    expect(result).to.not.equal(null);
});

```

#### Test Case 4 - Default to Local Timezone If No Timezone is Specified
```javascript
it('should default to local timezone if no timezone is specified', () => {
    const inputString = "12:34 PM";
    result = getAllTimeConversions(inputString);
    expect(result).to.not.equal(null);
});

```


#### Test Case 5 - Return Correct Converted Timezones with Valid String
```javascript
it('should return the correct converted timezones with valid string with date, year, day, time, and timezone', () => {
    const inputString = "31st December, 2021 12:34:00 AM PST";
    result = getAllTimeConversions(inputString);
    expect(result).to.not.equal(null);
    expect(result).to.include('EST: 12/31/2021 3:34:00 AM,CT: 12/31/2021 2:34:00 AM,IST: 12/31/2021 2:04:00 PM,UTC: 12/31/2021 8:34:00 AM,');
});

```
