/*
scrimba ceo per boogen wants you to write a program to grant special bonuses to all his 
employees based on their employee ID numbers!

scrimba has 100 employees and their employee ID numbers range from 1 - 100. if the 
employee's ID number is

divisible by 3 - Vacation!
divisible by 5 - $100,000 bonus!
divisible by both 3 and 5 - jackpot! 1 million and a yatch
not divisible by 3 and 3  or  5 :(

write a  program  to  loop through all the ID numbers and print their prixe.
your function's output should look something like this:

1 - :(
2 - :(
3 - Vacation!
4 - :(
5: $100,000 bonus!
*/

// function awardBonuses(num){
//     //loop thru the values in num
//     for(let i = 1; i <= num; i++){
//         if(i % 3 === 0 && i % 5 === 0){
//             console.log(`${i} - jackpot! 1 million and a yatch`) 
//         }else if(i % 3 !== 0 && i % 5 !== 0){
//             console.log(`${i} - :(`) 
//         }else if(i % 3 === 0){
//             console.log(`${i} - Vacation!`) 
//         }else if(i % 5 === 0){
//             console.log(`${i} - $100,000 bonus!`) 
//         }
//         // else{
//         //     console.log(`${i}`) 
//         // }
//     }
//     //a conditional to do validations; 
// }

function awardBonuses(num){
    for(let i = 1; i <= num; i++){
        if(i % 3 === 0 && i % 5 === 0){
            console.log('jackpot! 1 million and a yatch')
        }else if(i % 3 !== 0 && i % 5 !== 0){
            console.log(':(')
        }else if(i % 3 === 0){
            console.log('Vacation!')
        }else if(i % 5 === 0){
            console.log('$100,000 bonus!')
        }
    }
}

console.log(awardBonuses(100))
