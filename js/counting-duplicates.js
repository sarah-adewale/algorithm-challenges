// Count the number of Duplicates
// Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that 
// occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) 
// and numeric digits.

// Example
// "abcde" -> 0 # no characters repeats more than once
// "aabbcde" -> 2 # 'a' and 'b'
// "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
// "indivisibility" -> 1 # 'i' occurs six times
// "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
// "aA11" -> 2 # 'a' and '1'
// "ABBA" -> 2 # 'A' and 'B' each occur twice


//uppercase and lowercase nad numbers string 
//number (count of duplicate characters)



// function countDup(str){
//     const newStr = str.toLowerCase().split()
//     const cache = {}
    // let charArray = []
    // let valuesArray = []
//     let count = 0
//     for(let char of newStr){
//         if(!cache[char]){
//             cache[char] = 1
//             console.log(cache)
            
//         }else{
//             cache[char]++
//             // count++
            
            
//         }   
//     }

//     for(let char of cache){
//         if(cache[char] > 1){
//             count++
//         }
//      }

//     return count
// }

function countDup(str){
  
  let newStr = str.toLowerCase().split('');
  
  let cache = {}
  let count = 0;
  
  for( let char of newStr) {
  	
  	if(!cache[char] ){
  		
  		cache[ char ] = 1;
  		
  	} else{
  		cache[ char ]++;
  	}	
  }
  
  for( let char in cache) {
  	
    if(cache[char] > 1){
  	 count++;
    }
  }
  
  return count;
  
}




console.log(countDup("abcde"), 0)
console.log(countDup("aabbcde"), 2)
console.log(countDup("aabBcde"), 2)
console.log(countDup("indivisibility"), 1)
console.log(countDup("Indivisibilities"), 2)
console.log(countDup("aA11"), 2)
console.log(countDup("ABBA"), 2)
console.log(countDup("1122334"), 3)


