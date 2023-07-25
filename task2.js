//Task 2 : Create a function that takes an array of numbers as input and returns the sum of all positive numbers in the array. 
// const task2=(arr)=>{
//     let sum=0;
//     for(let i=0; i<arr.length; i++){
//         sum=sum+arr[i]
//     }
//     return sum
// }
// const input=[2, -5, 10, -3, 7]
// const result=task2(input)
// console.log(result)

const task2=(arr)=>{
const total=arr.reduce((item, sum)=>item+sum)
return total
}
const input=[2, -5, 10, -3, 7]
const result=task2(input)
console.log(result)