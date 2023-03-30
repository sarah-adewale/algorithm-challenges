/* 
Scrimba mascot Pumpkin has won the grand prize at an international 
cat show. Below are Pumpkin's scores from the judges, as well as all the 
prizes he's won. In all the excitement of victory,
they've become a jumbled mess of nested arrays. Let's 
help Pumpkin by sorting it out. 

Write a function to flatten nested arrays of strings or
numbers into a single array. There's a method
for this, but pratice both doing it manually and using the method. 

Example input: [1, [4,5], [4,7,6,4], 3, 5]
Example output: [1, 4, 5, 4, 7, 6, 4, 3, 5]
*/

const kittyScores = [
    [39, 99, 76], 89, 98, [87, 56, 90], 
    [96, 95], 40, 78, 50, [63]
];

const kittyPrizes = [
    ["💰", "🐟", "🐟"], "🏆", "💐", "💵", ["💵", "🏆"],
    ["🐟","💐", "💐"], "💵", "💵", ["🐟"], "🐟"
];

function flatten(arr){
//  return arr.flat()

//create an empty arr for the new flattened array
let newArr = []
arr.forEach(element => {
    if(Array.isArray(element)){
        element.forEach((element) => newArr.push(element))
    }else{
        newArr.push(element)
    }
});
return newArr
//loop thru the array to check data type
    //if arr[i] is a string, push it to empty array
    //if its an array, loop thru the array and push it to the empty array
    //return new array
}

console.log(flatten(kittyPrizes));
console.log(flatten(kittyScores));
