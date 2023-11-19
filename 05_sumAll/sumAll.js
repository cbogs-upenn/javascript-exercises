const sumAll = function(startInt, endInt) {

    let sumTotal = 0;

    // test suite wants us to take the args in either order
    if (startInt > endInt){
        let tempInt = startInt;
        startInt = endInt;
        endInt = tempInt;
    }

    //test suite wants negative numbers to return 'ERROR'
    if ((startInt < 0)||(endInt < 0)){
        return "ERROR";
    }

    //test suite wants non-number parameters to return 'ERROR'
    if ((typeof startInt !== "number")||(typeof endInt !== "number")){
        return "ERROR";
    }

    for (let i = startInt; i <= endInt; i++){

        sumTotal += i;
    }

    return sumTotal;
};

// Do not edit below this line
module.exports = sumAll;
