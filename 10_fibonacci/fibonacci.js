const fibonacci = function(targetNum) {

    //ensure it's a number not a string
    if (typeof targetNum !== "number"){
        targetNum = Number(targetNum);
    }

    //handle special cases

    if (targetNum < 0){
        return "OOPS";
    }

    if (targetNum === 1){
        return 1;
    }
    
    // and then away we go

    let firstNumber = 0;
    let nextNumber = 1;
    let sum = 0;

    for (let i = 1; i < targetNum; i++){

        sum = firstNumber + nextNumber;
        firstNumber = nextNumber;
        nextNumber = sum;
                
    }

    return sum;

};

// Do not edit below this line
module.exports = fibonacci;
