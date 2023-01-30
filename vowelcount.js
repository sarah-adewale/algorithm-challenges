/*
Given a string of text containing 0 or more vowels, count the number of vowels that can be 
found within the text. For example:

vowelsCounter('anehizxcv') // will return 3
*/



function vowelCount(str){
    //initializ a  vowel array
    // const vowels = ['a','e','i','o','u']
    // let count = 0
    // for(letter of str.toLowerCase()){
    //     if(vowels.includes(letter)){
    //         count++
    //     }
        
    // }
    // return count
    let matchingInstances = str.match(/[aeiou]/gi)
    if(matchingInstances){
       return matchingInstances.length
    }else{
        return  0
    }


}

console.log(vowelCount('anehizxcv'))