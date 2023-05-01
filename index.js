// Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

const returnFirstTwoDrivers = function() {
    return [drivers[0], drivers[1]]
}

const returnLastTwoDrivers = function (){
    return [drivers[2], drivers[3]]
}

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(x){
    return function fareMulti(fare){
        return (x*fare)
    }
}

const fareDoubler = function (createFareMultiplier){
    return  createFareMultiplier * 2
}

const fareTripler = function (createFareMultiplier){
    return createFareMultiplier * 3
}

function selectDifferentDrivers(drivers, arrayOfDrivers) {
    return arrayOfDrivers(drivers)
}