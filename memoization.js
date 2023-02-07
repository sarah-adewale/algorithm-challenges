/*
task 1: write a function, times10, that takes an argument, n and multiplies n times 10
*/
const times10 = (n) => (n * 10)

// task 2: use an object to cache the results of your times10 function.
const cache = {}
const memoTime10 = (n) => {
    if(n in cache){
        return cache[n]
    }else{
        let result = times10(n)
        cache[n] = result
        return result
    }
}
// protip 1: create a function that checks if the value for n has been calculated before.
// protip 2: if the value for n has not been calculated, calculate and then save the result in the cache object.

console.log(times10(9))
console.log(memoTime10(9))