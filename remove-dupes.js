// Have the function ArrayChallenge(arr) take the array of numbers stored in arr and determine the total number of duplicate 
// entires. For example, if the input is [1,2,2,3] then your program should output two because there are two duplicates of one 
// of the elements. 
// Examples 
// Input:[0,-2,-2,5,5,5]
// Output:3

// Input:[100,2,101,4]
// Output:0

//array
//number of duplicates

console.log(arrayChallenge([0,-2,-2,5,5,5]), 3)
console.log(arrayChallenge([100,2,101,4]), 0)
console.log(arrayChallenge([1,2,2,3]), 2)

//create a function
function arrayChallenge(arr){
    let cache = {}
    let count = 0
    for(num of arr){
        if(!cache[num]){
            cache[num] = true
            
            // console.log(count)
        }else{
            count++
        }
        console.log(cache)
        console.log(count)
    }
    return count
    
}

//initialize a count
//create a cache
//loop thru the array
    //if item is not in the map, it should be added and count should be incremented
    //else count should equal 0
//return count