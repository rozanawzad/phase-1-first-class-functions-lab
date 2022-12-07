const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

function returnFirstTwoDrivers(drivers){
    drivers = drivers.slice (0, 2)
    return drivers
    }
function returnLastTwoDrivers(drivers){
    drivers = drivers.slice(-2)
    return drivers
    }
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(multiplier) {
    return function(number) {
        return multiplier * number
        };
    }
    
    const fareDoubler = createFareMultiplier(2);    
    const fareTripler = createFareMultiplier(3);
    
function selectDifferentDrivers(arrayOfDrivers, action) {
    return action(arrayOfDrivers);
    }
