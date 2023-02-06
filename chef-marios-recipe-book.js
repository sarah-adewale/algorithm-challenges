/* Chef Mario's Recipe Book 
Chef Mario was in the middle of writing his cookbook masterpiece
when he spilled coffee on his keyboard! Now all his recipes have repeat
ingredients.

Help save Chef Mario's cookbook by writing a function that takes in an array 
and returns a new array with all the duplicates removed. 

Example input: ["🌈 rainbow", "🦄 unicorn", "🍭 lollipops", "🦄 unicorn", "🍭 lollipops"];
Example output: ["🌈 rainbow", "🦄 unicorn", "🍭 lollipops"];
*/ 

const eggScrambleRecipe = [
            "🥓 bacon",
            "🥓 bacon", 
            "🍳 eggs",
            "🫑 green peppers",
            "🧀 cheese",
            "🌶️ hot sauce",
            "🥓 bacon",
            "🥦 broccoli", 
            "🧀 cheese",
            "🥦 broccoli", 
            "🌶️ hot sauce"
        ]
// optimized solution

function removeDupesFromArray(arr){
    let cache = {}
    let newArr = []

    for(let i = 0; i < arr.length; i++){
        if(!cache[arr[i]]){
            newArr.push(arr[i])
            cache[arr[i]] = true
            console.log(cache[arr[i]])
        }
    }
    return newArr
 
}


// brute force solution
function removeDupesFromArray(arr){
    let uniqueItems = []
    arr.forEach(element => {
        if(!uniqueItems.includes(element)){
            uniqueItems.push(element)
        }
    });

    return uniqueItems
 
}

//optimized solution using objects

function removeDupesFromArray(arr){
    let uniquesVal = {}
    return arr.filter((item) => {
        if(!uniquesVal[item]){
            uniquesVal[item] = true
            return true
        }
        return false
    })
 
    
}

console.log(removeDupesFromArray(eggScrambleRecipe));

// set filters out duplicates in a list