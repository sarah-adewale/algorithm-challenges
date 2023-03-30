/*
palindromes are words that are the same forward or backward. For example, the words 'noon' and 'kayak' are a palindrome

write a funtion to check if a lowercased sting of letters is a palindrome. if the word is a palindrome, return true. If it isnt, 
return false. 

example input: 'motorbike'
example output: false

example input: 'rotator'
example output: true
 */

function isPalindrome(str){
    return str === str.split('').reverse().join('')
    // return str === str.split('').reverse().join('') ? true : false
    
}

console.log(isPalindrome('abba'), true)
console.log(isPalindrome('civic'), true)
console.log(isPalindrome('octopus'), false)
console.log(isPalindrome('pumpkin'), false)
console.log(isPalindrome('madam'), true)
