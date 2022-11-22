 
 // traditional funtion mai kahi function call kahi bhi kar skte hai 
/*
 sum();

function sum()
{
  let a=2; 
  let b=2; 
  console.log(a+b); 
}
*/
// fat arrow function 

const sum = () => 
{
    let a=4 , b=5; 
    return `the sum of the two number is ${a+b}`; 
}
let ans = sum(); 
console.log(ans);


 //////// or we can directly write as////////////////
   // a=5 b=6
   // no need to write return 
   // now need to write curly bracket
 const sum1 = () => `the sum of the two number is ${(a=5)+(b=6)}`;
 console.log(sum1()); 
