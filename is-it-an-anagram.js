/*
Anagrams are groups of words that can be spelled with the same letters. For example, the letters in "pea" can be rearranged to 
spell ape, and  the letters in "allergy" can be rearranged to spell "gallery" 

write a function to check if two strings of lowercase of letters are anagrams. return true if the word is an anagram. return 
false if it isn't.

example input: "allergy" , "gallery"
example output: true

example input: "rainbow", "crossbow"
example output: false

*/

function anagram(str1, str2){
//compare two strings; if the both strings are of  same length and if str1.reverse() === str2
let  splitStr1 =  str1.split('').sort().join('')
let splitStr2 = str2.split('').sort().join('')
return splitStr1.length === splitStr2.length ? true : false


// return `${splitStr1}, ${splitStr2}`

}

console.log(anagram("allergy","gallery" ))
console.log(anagram("rainbow", "crossbow" ))
console.log(anagram("pea","ape" ))