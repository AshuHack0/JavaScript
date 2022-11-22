const array1=[1,4,9,25,16]; 
// map do not change the previous array it willl always make new array of desired array and return  it 
// suupose we want number greatter than 9;

// the first differnce map and foreach is the returning value .The forEach() method return undefined and map() return a new array with the transformed
// element .Even if they do the same job the returning value remains differnet

// the second difernce between these array method is the fact that map() is chainable. Thsi means that you can attach reduce() ,sort() , filter() 
// so on after the performing a map() method on an array 
// that's something you cant do with forEach() because as you might guess it returns undeifiend
// let newArr = array1.map((curElem , index ,arr)=> {
//     return  `index no ${index} and the value is ${curElem} belong to ${arr};`
// } ).reduce.sort...array1..
// let newArr = array1.map((curElem , index ,arr)=> {
//     return  curElem>9; 
// } )


let newArr = array1.map((curElem , index ,arr)=> {
    return  `index no ${index} and the value is ${curElem} belong to ${arr};`
} )
console.log(newArr);

// Q1. Find the square root of each element in an array?
// Q2. Multiply Each Element by 2 and return only those
// element which are greater than 10?

//Sol 1
let arr=[25,36,49,64,81]; 
let arrsqr=arr.map((curElem)=>{   // index bhi likh skte the aur arr bhi but hame need ni hai uska
return   Math.sqrt( curElem); 
})
console.log(arrsqr); 

// sol 2
//  let arrMul= arr.map((curElem)=>{
//     return curElem*2; 
//  })
// or we cant write as well in short form 
let arr1=[2,3,4,6,8]; 
 let arrMul= arr1.map((curElem)=> curElem*2) ; 

 console.log(arrMul); 
 

 // sol 3
 // i.e return only those which gretaer than 10 and its sum; 
// here we see channing way also how we can chain the our requirement which are best example of map 
// let arrMulGre = arr1.map((curElem)=>{
//     return curElem*2
// }).filter((curElem)=>{
//     return curElem>10;
// }).reduce((accumulator , curElem)=>{
//     return accumulator+=curElem;
// })
// or we can write in fat arrow method i.e remove curly bracket and return 
let arrMulGre = arr1.map((curElem)=>curElem*2).filter((curElem)=>curElem>10).reduce((accumulator,curElem)=>accumulator+=curElem)
console.log(arrMulGre); 


// Reduce Method
//flatten an array means to convert the 3d or 2d array into a 
// single dimesional array

// The reduce() method executes a reducer function (that you provide)
// on each element of the array , resulting in single output value.

// The reducer Function takes four argumnets
// Accumulator
// current Value
// Current index
// Source Array

let arrSum= [1,2,2]; 
let sum = arrSum.reduce((accumulator ,curElem , Index , arr )=>{  
    return  accumulator+=curElem; 
})
console.log(sum); 

// how to flatten array 
// coverting 2d and 3d array into one dimensional array

const Arr = [
    ["zone1" , "Zone2"] ,
    ["zone3" , "Zone4"] ,
    ["zone5" , "Zone6"] ,
    ["zone7" , "Zone8"] ,
]; 

let flatArr = Arr.reduce((accumulator , currvel)=>{
   return accumulator.concat(currvel); 
})
console.log(flatArr); 