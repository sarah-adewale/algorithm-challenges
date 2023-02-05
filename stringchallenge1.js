// have the function stringchallenge(str) take the str parameter and encode every letter into its corresponding numbered 
// position in the alphabet symbols and spaces will also be used in the output. example if str is "af5c a#" then the program 
// should return 1653 1#!

//string
//numbered string

const alphabetObj = {
    "a" : "1",
    "b" : "2",
    "c" : "3",
    "d" : "4",
    "e" : "5",
    "f" : "6",
    "g" : "7",
    "h" : "8",
    "i" : "9",
    "j" : "10",
    "k" : "11",
    "l" : "12",
    "m" : "13",
    "n" : "14",
    "o" : "15",
    "p" : "16",
    "q" : "17",
    "r" : "18",
    "s" : "19",
    "t" : "20",
    "u" : "21",
    "v" : "22",
    "w" : "23",
    "x" : "24",
    "y" : "26",
    "z" : "26",
}

console.log(stringChallenge("af5c a#"), "1653 1#")
console.log(stringChallenge("be5ut7c a#"), "255212073 1#")

//create a function stringChallenge
function stringChallenge(str){
    //create an empty string
    let encoded_string = ""
    //loop thru the length of the string
    for(let i = 0;  i < str.length; i++){
        //conditional to check if the string is in object
        let char = str[i].toLowerCase()
        if(alphabetObj[str[i]]){
            encoded_string += alphabetObj[char]
        }else{ //if it isn't return the string
            encoded_string += char
        }
    }
    return encoded_string
    
    

}

