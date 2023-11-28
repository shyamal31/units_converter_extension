
day = ["Monday", "Mon", "Tuesday", "Tue", "Wednesday", "Wed", "Thursday", "Thus", "Friday", "Fri", "Saturday", "Sat", "Sunday", "Sun"];
ignore = [","];
tz = null;
resultArray = [];
timezones = [
    {
        zone: "EST",
        tz_string: "America/New_York",
        offset: 'UTC-0500',
        aliases: ["ET", "Eastern Time", "Eastern Standard Time", "EST"]
    },
    {
        zone: "PST",
        tz_string: "America/Los_Angeles",
        offset: 'UTC-0800',
        aliases: ["Pacific Time", "Pacific Standard Time", "PT", "PST"]
    },
    {
        zone: "CT",
        tz_string: "America/Chicago",
        offset: 'UTC-0600',
        aliases: ["Central Standard Time", "CT", "Central Time", "CST"]
    },
    {
        zone: "IST",
        tz_string: "Asia/Kolkata",
        offset: 'UTC+0530',
        aliases: ["Indian Standard Time", "IST"]
    },
    {
        zone: "UTC",
        tz_string: "UTC",
        offset: 'UTC-0000',
        aliases: ["Coordinated Universal Time", "UTC"]
    }
];

function convertTime(inputTimeString, offset, toTimeZone) {
    const inputTime = new Date(inputTimeString + ` ${offset}`);
    const convertedTime = inputTime.toLocaleString('en-US', { timeZone: toTimeZone });
    return convertedTime;
}

function getTzString(tz) {
    const timeZoneInfo = this.timezones.find(zone => zone.aliases.includes(tz) || zone.zone === tz);
    return timeZoneInfo ? timeZoneInfo.tz_string : null;
}
function getTzOffset(tz) {
    let index = timezones.findIndex(tmz=>tmz.tz_string===tz)
    if(index > -1){
        let offset = timezones[index].offset
        return offset
    }
    
    const timeZoneInfo = this.timezones.find(zone => zone.aliases.includes(tz) || zone.zone === tz);
    return timeZoneInfo ? timeZoneInfo.offset : null;
}


function getDateIfNotExist(dateTimeString){
    
    const dateTimeParts = dateTimeString.split(' ');


    // Parse the time part (e.g., "12:34 PM")
    const timeParts = dateTimeParts[0].split(':');
    let hours = parseInt(timeParts[0], 10);
    const minutes = parseInt(timeParts[1], 10);


    if (/pm/i.test(dateTimeString)){
        hours += 12;
        hours%=24;  
    }


    const today = new Date();


    today.setHours(hours);
    today.setMinutes(minutes);
    today.setSeconds(0);


    return today
}

function getAllTimeConversions(inputString){
    
    inputString = [inputString];
    var res = "";
    const cleanedStrings = inputString.map(input => {
        // Remove parentheses without removing their contents
        input = input.replace(/[()]/g, '');
        // Remove "rd", "st", "th", "nd" only when they appear after a numeric day
        input = input.replace(/(\d+)(?:st|nd|rd|th)/g, '$1');
    
        // Remove other elements from Ignore list
        ignore.forEach(item => {
            input = input.replace(new RegExp(item, 'g'), '');
        });
    
        // Check if the string contains any element from the day list
        const containsDay = day.find(d => input.includes(d));
        timezones.forEach(timezone => {
            const aliasFound = timezone.aliases.find(alias => input.includes(alias));
            if (aliasFound) {
                tz = timezone.zone;
                input = input.replace(new RegExp(aliasFound, 'g'), ''); // Remove the found alias
            }
        });
        if (containsDay) {
            // Add the day at the beginning and remove it from its original position
            input = containsDay + " " + input.replace(containsDay, '').trim();
        }



        if(new Date(input) == "Invalid Date"){
    
            input = input.replace(containsDay,'').trim();
            input = getDateIfNotExist(input);
        }
     
        let fromTzString = getTzString(tz);
        let offset = "";
        
        if (!fromTzString){
            fromTzString = Intl.DateTimeFormat().resolvedOptions().timeZone;
            offset = getTzOffset(fromTzString);

        }
        else{
            offset = getTzOffset(tz);
        }
       
        
        if (fromTzString) {
      
            timezones.forEach((zone) => {
                if (zone.tz_string !== fromTzString) {
                    const convertedTime = convertTime(input, offset, zone.tz_string);

                    res+=`${zone.zone}: `+String(convertedTime).replace(",","") + ",";
                }
            });
        } else {
            console.log("Invalid Timezone")
        }
    });
    return res;
}

// inputString = "31st December, 2021 12:34:00 AM PST";
// console.log(getAllTimeConversions(inputString));

module.exports = {
    getAllTimeConversions
}
