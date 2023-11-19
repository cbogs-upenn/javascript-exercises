
const removeFromArray = function(array, ...indices) {

    //indices will be an array, we need to iterate over array and check each indices against it
    //outer loop is array, inner loop is indices

    const newArray = [];


    for (let i = 0; i <= array.length-1; i++){
           
        let equalFlag = false;
        
        for (let j = 0; j <= indices.length-1; j++){
            
            //console.log("array item is " + array[i] + ", indices is " + indices[j]);

            if (array[i] === indices[j]) {
                equalFlag = true;
            }
         }
        if (!equalFlag){
            newArray.push(array[i]);
            //console.log("newArray is now [" + newArray + "]");
        }
    }
    return newArray;
    

};

//console.log(removeFromArray([1,2,3,4], 3, 4));

// Do not edit below this line
module.exports = removeFromArray;
