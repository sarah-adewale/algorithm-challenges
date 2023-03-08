// Given a string s, write a method (function) that will return true if its a valid single integer or floating number or false if its not.

// Valid examples, should return true:

// isDigit("3")
// isDigit(" 3 ")
// isDigit("-3.23")
// should return false:

// isDigit("3-4")
// isDigit(" 3 5")
// isDigit("3 5")
// isDigit("zero")

function isNumber(value){
    let newValue = 0
    if(isFinite(value)){
        newValue = true
    }else{
        newValue = false
    }
    return newValue
}

console.log(isNumber('3'))
console.log(isNumber(' 3 '))
console.log(isNumber('-3.23'))
console.log(isNumber(' 3 5'))
console.log(isNumber('zero'))
