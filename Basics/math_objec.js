/* Math object in Javascript */
// The JavaScript Math Object allows you to perform mathematical task on a numbers.

//1. for taking pi value; 
console.log(Math.PI); 

// 2. Round of the number
let Num=10.2565; 
console.log(Math.round(Num)); 

//3.Math.pow(x,y); 
console.log(Math.pow(2,5));

//4. Math.squrt()
console.log(Math.sqrt(25));

// 5.Math.abs() 
// Math.abs(x) return the absolute (positive) value of x 
 console.log(Math.abs(-55)); 
 console.log(Math.abs(-55.5)); 
 console.log(Math.abs(-955)); 

 // 6. Math.ceil()
 // It is same as round but in round it folow the rule but in ceil it alwz increase the the value; 
 console.log(Math.ceil(2.59));
 console.log(Math.ceil(2.19));

 // 7. Math.floor()
 // Math.floor(x) same as round but opposite to ceil it will not incvreament
console.log(Math.floor(2.59));
console.log(Math.floor(2.19));

// 8. Min and  Max number
console.log(Math.min(0,150,30,20,-8,-200)); 
console.log(Math.max(0,150,30,20,-8,-200)); 

//9. Math.rondom()
// it return the random number between 0 to 1
console.log(Math.random()); // it will give random numner in decimal
console.log(Math.random()*10) // converting it into integer deceimal 
console.log(Math.floor(Math.random()*10)); // now converting into floor value to get only integer // it will give  0 to 9

// 10 . Math.trunc()
// it will give interger part of the decimal number
// it will not flow any rule 
console.log(Math.trunc(4.6)); 
console.log(Math.trunc(-99.45)); 

