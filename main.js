// Start time
// Adult registrants run at 9:30am or 11:00am
// Early adults run at 9:30am
// Late adults run at 12:30am

// Early adults receive race number at or about 1000
// other below

function raceDay(age, time){
    let raceNumber = 0;
    if(age >= 18){
        if(time === "9:30am"){
            raceNumber = Math.floor(Math.random() * 49999) + 1001;
            return `You will race at 9:30 am and your race number is ${raceNumber}.`   
        }
        else if (time === "11:00am"){
            raceNumber = Math.floor(Math.random() * 1000);
            return `Your will race at 11:00am and your race number is ${raceNumber}.`
        }
        
    }
    else if (age < 18){
        raceNumber = Math.floor(Math.random() * 1000);
        return `Your will race at 12:30pm and your race number is ${raceNumber}.`
    }


}

console.log(raceDay(12, '11:00am'))
console.log(raceDay(18, '11:00am'))
console.log(raceDay(22, '9:30am'))