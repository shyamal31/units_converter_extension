const { expect } = require('chai');
const sinon = require('sinon');

// Import the functions from timezone.js for testing
const { getAllTimeConversions } = require('../code/conversions/TimeZone');

describe("getAllTimeConversions", () => {
    let consoleSpy;

    beforeEach(() => {
        // Spy on console.log before each test
        consoleSpy = sinon.spy(console, 'log');
    });

    afterEach(() => {
        // Restore the original console.log function after each test
        consoleSpy.restore();
    });

    it('should not log "Invalid Timezone" for valid Input', () => {
        const inputString = "12:34 PM Eastern Time";
        getAllTimeConversions(inputString);
        // Ensure that console.log was not called with "Invalid Timezone"
        expect(consoleSpy.notCalled).to.be.true;
    });

    it('should convert valid time to different timezones', () => {
        const inputString = "12:34 PM EST";
        const result = getAllTimeConversions(inputString);

        // Dynamically generate expected date values for each timezone
        const now = new Date();
        const expectedDate = `${now.getMonth() + 1}/${now.getDate()}/${now.getFullYear()}`;

        // Update the expected values with the dynamically generated date
        const expectedResult = `PST: ${expectedDate} 9:34:00 PM,CT: ${expectedDate} 11:34:00 PM,IST: ${expectedDate} 11:04:00 AM,UTC: ${expectedDate} 5:34:00 AM,`;
       
        expect(result).to.include(expectedResult);
    });

    it('should handle time conversion with day of the week in the string', () => {
        const inputString = "Wednesday 12:34 PM EST";
        const result = getAllTimeConversions(inputString);
        expect(result).to.not.equal(null);
    });

    it('should default to local timezone if no timezone is specified', () => {
        const inputString = "12:34 PM";
        const result = getAllTimeConversions(inputString);
        expect(result).to.not.equal(null);
    });

    it('should return the correct converted timezones with a valid string with date, year, day, time, and timezone', () => {
        const inputString = "31st December, 2021 12:34:00 AM PST";
        const result = getAllTimeConversions(inputString);
        expect(result).to.not.equal(null);
        expect(result).to.include('EST: 12/31/2021 3:34:00 AM,CT: 12/31/2021 2:34:00 AM,IST: 12/31/2021 2:04:00 PM,UTC: 12/31/2021 8:34:00 AM,');
    });
});
