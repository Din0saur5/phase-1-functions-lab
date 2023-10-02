// Code your solution in this file!
function distanceFromHqInBlocks(value){
    let blocks = Math.abs(value-42);
    return blocks
}
function distanceFromHqInFeet(value){
    let blocks = distanceFromHqInBlocks(value)
    let feet = blocks*264;
    return feet;
}
function distanceTravelledInFeet(value1, value2){
    let distance = value2-value1;
    let feet = distance*264;
    return Math.abs(feet);
}
function calculatesFarePrice(value1, value2){
    let distance = distanceTravelledInFeet(value1, value2);
    if(distance<=400){
        return 0;
    }
    if(distance>400 && distance<=2000){
        let fare = (distance-400)*0.02
        return fare;
    }
    if(distance>2000 && distance<2500){
        return 25;
    }
    else if( distance>2500){
        return 'cannot travel that far'
    }
}


