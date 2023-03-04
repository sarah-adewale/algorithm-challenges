// When provided with a letter, return its position in the alphabet.

// Input :: "a"

// Ouput :: "Position of alphabet: 1"

//string
//string with the position of the alphabet

//create a function
function alphabetPosition(input){
    //create an object of all the letters and their corresponding position value
    const alphabet = {
        'a': '1',
        'b': '2',
        'c': '3',
        'd': '4',
        'e': '5',
        'f': '6',
        'g': '7',
        'h': '8',
        'i': '9',
        'j': '10',
        'k': '11',
        'l': '12',
        'm': '13',
        'n': '14',
        'o': '15',
        'p': '16',
        'q': '17',
        'r': '18',
        's': '19',
        't': '20',
        'u': '21',
        'v': '22',
        'w': '23',
        'x': '24',
        'y': '25',
        'z': '26',
    }
    let charValue = ''
    //loop thru the loop to check if the input is present, if it is return the input value
    for(let char in alphabet){
        // console.log(char)
        if(char === input){
            charValue += alphabet[char]
        }
        
    }
     return `Position of alphabet: ${charValue}`
    

}


//return string with input value

console.log(alphabetPosition('a'))
console.log(alphabetPosition('z'))
