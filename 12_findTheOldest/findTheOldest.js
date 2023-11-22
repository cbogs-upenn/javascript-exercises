const findTheOldest = function(array) {

    const newArray = array.reduce(isOldest);
    console.log(newArray);
    return newArray;
        
        
};

function isOldest(oldest, currentPerson){

    const currentAge = getAge(currentPerson.yearOfDeath, currentPerson.yearOfBirth);
    const oldAge = getAge(oldest.yearOfDeath, oldest.yearOfBirth);
    
    if (currentAge > oldAge){
        return currentPerson;
    }
    else {
        return oldest;
    }

    
}

function getAge(death, birth){

    if (!death) {

        death = new Date().getFullYear();

    }
        return death-birth;
 
    }


// Do not edit below this line
module.exports = findTheOldest;
