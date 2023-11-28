const {expect} = require('chai');
const sinon = require('sinon');

//import the functions from timezone.js for test
const {getAllTimeConversions} = require('../code/conversions/TimeZone');

describe("getAllTimeConversions", () => {
    let consoleSpy;

    beforeEach(() => {
        //spy for console.log before test
        consoleSpy = sinon.spy(console, 'log');
    });

    afterEach(()=>{
        //restore the original console.log funtion after test
        consoleSpy.restore();

    });
    it('should not log "Invalid Timezone" for valid Input',() => {
        const inputString = "12:34 PM Eastern Time";
        getAllTimeConversions(inputString);
        //ensure that the console.log was not called with "Invalid Timezone"
        expect(consoleSpy.notCalled).to.be.true;
    });

    it('should convert valid time to different timezones',() => {
        const inputString = "12:34 PM EST";
        const result = getAllTimeConversions(inputString);
        expect(result).to.include('PST: 11/26/2023 9:34:00 PM,CT: 11/26/2023 11:34:00 PM,IST: 11/27/2023 11:04:00 AM,UTC: 11/27/2023 5:34:00 AM,')
    });

    it('should handle time conversion with day of the week in the string', () =>{
        const inputString = "'Wednesday 12:34 PM EST'";
        const result = getAllTimeConversions(inputString);
        expect(result).to.not.equal(null);

    });

    it('should default to local timezone if no timezone is specified', () =>{
        const inputString = "12:34 PM";
        result = getAllTimeConversions(inputString);
        expect(result).to.not.equal(null);

    })

    it('should return the correct converted timezones with valid string with date, year, day, time and timezone',()=>{
        const inputString = "31st December, 2021 12:34:00 AM PST";
        result = getAllTimeConversions(inputString);
        expect(result).to.not.equal(null);
        expect(result).to.include('EST: 12/31/2021 3:34:00 AM,CT: 12/31/2021 2:34:00 AM,IST: 12/31/2021 2:04:00 PM,UTC: 12/31/2021 8:34:00 AM,');
    })
});