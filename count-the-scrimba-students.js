/*
Alex from Scrimba wants to know how many new students have attended 
Scrimba's weekly Town Hall event this year. 

He has an array of first-time attendees for each month of the year. 
Help him find the total number of attendees! Your function should
take in an array and return a number representing the total number
of new attendees. 

Example input: [1,2,3]
Example output: 6
 */

const studentCount = [50,53,61,67,60,70,78,80,80,81,90,110];

// function sumArray(arr){
//     // let sum = 0
//     // for(let i = 0; i < arr.length; i++){
//     //     sum += arr[i]
//     // }
//     // return sum

//     // solve with reduce
//     // return arr.reduce((acc, c) => acc + c, 0)

//     // solve with forEach
// let sum = 0;
// arr.forEach(element => {sum += element});
// return sum
// }

// function sumArray(arr){
//     let sum = 0
//     for(let i = 0; i < arr.length; i++){
//         sum += arr[i]
//     }
//     return sum
// }

const sumArray = (arr) => arr.reduce((acc, c) => acc + c, 0)

console.log(sumArray(studentCount));