// reverse each words in a row

// const str='hi this is raza'

// const newstrmy=str.split(' ').map((strnw)=>(strnw.split('').reverse().join(''))).join(' ')
// console.log(newstrmy)

// check object is an array or not rovide some code

// const arr=[]
// const obj={}
// console.log(Array.isArray(arr))
// console.log(Array.isArray(obj))

// How to empty an array in javascript

// const arr=[3,4,5,10]
// arr.length=0
// console.log(arr)

// How to check the number is an integer
// const numb= 10.5;
// console.log(typeof numb)
// console.log(Number.isInteger(numb))

// do duplicate ana array
// const arr1=[1,2,3,4,5]
// console.log([...arr1,...arr1])

// javascript function that reverse a number
// const revnumber=1234;
//  const numb=revnumber.toString().split('').reverse().join('')
//  console.log(typeof +numb)

// palindrome or not

// const palin = "aliraza";

// const len = palin.length;
// for (let i = 0; i < len / 2; i++) {
//   if (palin[0] !== palin[palin.length - 1 - i]) {
//    console.log(  'It is not a palindrome')
//   }
// }
// console.log( 'It is a palindrome')

// count the number of occurance in an array
// const arr = ['apple','orange','mango','apple'];
// const arr='aliraza'
// const count = {};
// for (const element of arr) {
//     if (count[element]) {
//       count[element] += 1;
//     } else {
//       count[element] = 1;
//     }
//   }
// // console.log(count,"COUNT")
// var obj={a:1}
// console.log(obj.hasOwnProperty('a'))

// const arr=[3,4,10,1,2,10]
// const newarr={...arr}
// console.log(JSON.parse(JSON.stringify(newarr))
// )
// loop array and add all mmber of it
const arr=[1,2]
const addall=arr.reduce((pre,curr,i,arr)=>{
    return pre+curr
},0)
console.log(addall)