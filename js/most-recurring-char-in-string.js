/*
Given a string of text, find and return the most recurring character. e.g

maxRecurringChar('aabacada') // will return 'a'
*/

// function maxRecurringChar(text){
//     let charMap = {} //initialize an object to help quickly look up properties and values
//     let maxCharValue = 0 
//     let maxChar = ''

//     for(let char of text){
//         if(charMap.hasOwnProperty(char)){
//             // console.log(charMap)
//             charMap[char]++
            
//         }else{
//             charMap[char] = 1
//         }
//     }

//     for(let char in charMap){
//         if(charMap[char] > maxCharValue){
//             console.log(true)
//             maxCharValue = charMap[char]
//             console.log(maxCharValue)
//             maxChar = char
//             console.log(maxChar)
//         }
//     }

//     return maxChar

// }

function maxRecurringChar(text){
    let charMap = {} //holds the values and their occurences
    let charArray = []
    let valuesArray = []
    let maxCharValue = 0

    for(let char of text){
        if(charMap.hasOwnProperty(char)){
            charMap[char]++

        }else{
            charMap[char] = 1
        }
    }
    charArray = Object.keys(charMap) //characters
    console.log(charArray) //properties
    valuesArray = Object.values(charMap) //character occurences
    console.log(valuesArray) //values in an array
    maxCharValue = Math.max(...valuesArray) //spread of the array to fish out the max value
    console.log(maxCharValue)

    return charArray[valuesArray.indexOf(maxCharValue)]
}

console.log(maxRecurringChar('aabacada'))