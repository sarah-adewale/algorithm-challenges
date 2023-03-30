/*
how often do the letters in your name repeat?

write a function that counts how many times each letter of your name occurs. your function should take in your first and last name and
return an object where the keys are each character in your name, and the value is how many times that character appears in your name.

Example input: "Peggy Porth"
Example output: {p: 2, e: 1, g: 2, y: 1, o: 1, r: 1, t: 1, h: 1}

Your function should NOT count spaces and should not be case sensitive (a
lowercase t and a capital T should be considered the same character).

*/

function countChars(str){
    //cache to save the chars
    const newStr = str.toLowerCase().split(' ').join('')
    // console.log(newStr)
    let cache = {}
    

    // for(let i = 0; i < newStr.length; i++){
    //     if(!cache[newStr[i]]){
    //         cache[newStr[i]] = 1
           
    //     }else{
    //         cache[newStr[i]]++
    //     }
    // }

    for(let char of newStr){
        if(!cache[char]){
            cache[char] = 1
            
        }else{
            cache[char]++
        }
    }
return cache
    
    //count to save the count of the chars
    //loop thru the chars to check if chars in included in the cache if it it, increment count
    //return cache.count
   
}

console.log(countChars("Peggy Porth"));