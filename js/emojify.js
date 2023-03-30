/*
popular services like slack and github allow for emoji shorcodes, meaning they will detect when a word in a sentence begins 
and  ends with a colon (:) and automatically replace that word with an emoji.

These shortcodes allow users to add an emoji to  their messages  by  typing a code rather than searching for an emoji from a 
list.

for example, typing :smile: will replace that text with an emoji
*/

const  emojis = {
    "smile": "☺️",
    "angry": "😠",
    "party": "🎉",
    "heart": "💜",
    "cat": "🐱",
    "dog": "🐕",
}

/*
1. write a function that checks if a lowercase word starts and ends with a  colon. if it does, remove the colons and look up the
word in the emoji object. If the word is in the emojis object, return the corresponding emoji. if it isn't, return the original
word.

example input: ":party:"
example output: 🎉

example input: ":flower:"
example output: "flower"

example input: "elephant"
example output: "elephant"
*/

function  emojifyWord(word){
    //make word lowercase
    // word = word.toLowerCase()
    let wordWithoutColon = word.startsWith(":") && word.endsWith(":") ? word.slice(1, -1) : word
    // for(let i = 0; i < word.length; i++){
    //     return 
    // }
    // return wordWithoutColon
   
    if(emojis[wordWithoutColon]){
        return emojis[wordWithoutColon]
    }else{
        return wordWithoutColon
    }

    //check if word starts and ends with colon using startsWith() and endsWith()
    //if it does, check  if word is present in the  emojis object

}


/*
write a function to find any emoji shortcodes in a phrase. your function should map over each word in the phrase, emojify any 
word that begins and ends with a colon,  then return the emojified  phrase. feel free to use the emojify function from  the 
previous exercise.

example input: "I :heart: my :cat:"
example output: "I 💜 my 🐱"

example input: "I :heart: my elephant"
example output:  "I :heart: my elephant"
*/

function emojifyPhrase(phrase){
    //split the phrase to an array
    phrase = phrase.split(' ')
    return phrase.map((item)  => emojifyWord(item)).join(' ')
    //map with function
}

console.log(emojifyWord(":heart:"))
console.log(emojifyWord(":party:"))
console.log(emojifyWord(":flower:"))
console.log(emojifyWord("elephant"))

console.log(emojifyPhrase("I :heart: my :cat:"))
console.log(emojifyPhrase("I :heart: my elephant"))