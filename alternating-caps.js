/*
write a function that takes in a string of letters and returns a sentence in which  every 
other letter is capitalized.

example input: "I'm so happy it's Monday"
example output: "I'M So hApPy iT'S MoNdAy"
*/

function altCaps(str){
    //loop thru the str
    let newStr = ''
    for(let i = 0; i < str.length; i++){
        if(i % 2 === 0){
            newStr += str[i].toUpperCase()
        }else{
            newStr += str[i]
        }
         
    }
    //convert to uppercase letter in an even position
    //
    return newStr;
}

console.log(altCaps("I'm so happy it's Monday"))
