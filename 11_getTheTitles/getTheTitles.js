const getTheTitles = function(books) {

    const newArray = books.map(getTitle);
    return newArray;
};

function getTitle(books){

   return books.title;

}

// Do not edit below this line
module.exports = getTheTitles;
