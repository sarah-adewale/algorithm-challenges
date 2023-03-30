/*  
Grandpa's hand isn't as steady as it used to be. You finally convinced him
to start using a password manager, but he accidentally typed and saved his
password with a bunch of extra characters. Help him recover his password by 
removing all the duplicate characters. 

Your function should take in a string of characters and return a
string with the duplicate characters removed. Assume that your input
is lowercased with only letters and numbers.  

Example input: "aabbccb1212"
Example output: "abc12"
*/ 
const password = "9338dsabbbadjdjdj2sdfdfdf282ff8fdsd888ss8cfgfg332q23"; 
 
function removeDupeChars(chars){
    // brute force solution
    // //create an empty string to store and search for characters
    // let removedChars = ''
    // //loop thru the chars to check if its included in the created empty string
    // for(let i = 0; i <= chars.length; i++){
    //     if(!removedChars.includes(chars[i])){
    //         removedChars += chars[i]
    //     }
    // }
    // return removedChars

    // optimized solution
    let cache = {}
    let removedChars = ''

    
    for(let i = 0; i < chars.length; i++){
        if(!cache[chars[i]]){
            // console.log(cache[chars[i]])
            removedChars += chars[i]
           
            cache[chars[i]] = true
            // console.log(cache[chars[i]])
        }
    }

    // or
    
    for(let char of chars){
        if(!cache.hasOwnProperty(char)){
            removedChars += char
            cache[char] = true
        }
    }
    return removedChars
}

console.log(removeDupeChars(password));
