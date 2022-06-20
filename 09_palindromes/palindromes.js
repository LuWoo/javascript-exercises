const palindromes = function (inputString) {
    inputString = inputString.toLowerCase().replace(/[^a-zA-Z0-9]+/g, "");
    stringArray = inputString.split("");

    for (let i = 0; i <= inputString.length; i++) {
        
        if (stringArray[i] != stringArray.reverse()[i]) {
            return false;
        }
    }
    return true;
}

// Do not edit below this line
module.exports = palindromes;

