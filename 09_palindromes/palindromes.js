const palindromes = function (input) {

    //clean up input (remove punctuation and spaces)
    cleanPhrase = input.trim().toLowerCase().replace(/[^a-z0-9]/g, "");
    console.log(cleanPhrase);
    
    //trim and lowercase input and split it into an array
    let testPhrase = cleanPhrase.split("");

    let first = "";
    let last = "";

    do {
        // shift the first element and pop the last
        first = testPhrase.shift();
        last = testPhrase.pop();
        console.log("Testing: " + first + " and " + last);

        if (first !== last) {
            return false;

        } 
    } while (testPhrase.length > 1);
        
        return true;
    }
    

// Do not edit below this line
module.exports = palindromes;
