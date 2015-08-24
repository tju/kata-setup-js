'use strict';

function isMultipleOf3(input) {
    return input % 3 === 0;
}
function isMultipleOf5(input) {
    return input % 5 === 0;
}

module.exports  = function(input){

    if(isMultipleOf3(input) && isMultipleOf5(input)){
        return 'fizz buzz';
    }

    if(isMultipleOf3(input)){
        return 'fizz';
    }

    if(isMultipleOf5(input)){
        return 'buzz';
    }

    return input;
}