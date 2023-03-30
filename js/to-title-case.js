/*
write a function that will capitalize every word in a sentence. 

exmaple input: "everything everywhere all at once"
example ouput: "Everything Everywhere All At Once"

first write a function that takes  in  once  word and capitalize the first letter of that
word.
*/

// function  capitalize(str){
// //return newStr
//  str = str.split(' ')
//  return str.map((item) => `${item[0].toUpperCase()}${item.slice(1)}`).join(' ') //if you split
//  //with space, you have to join with space. 
// }




// function toTitleCase(str){
//    return capitalize(str)
// }

function capitalize(str){
return str[0].toUpperCase() + str.slice(1)
}

function toTitleCase(str){
    str = str.split(' ')
    const  newStr =  str.map((item) => capitalize(item)) //call capitalize function on each word
    return newStr.join(' ')
}
console.log(capitalize("everything"))
console.log(toTitleCase("everything everywhere all at once"))