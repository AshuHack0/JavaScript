/* Section 8 Date and Time in Javascript */
// JavaScript date objects represent a single moment in time in a 
// platform-independent formnat . Date object coanain a number 
// that reepresents millisecond since 1 january 1970 UTC; 

// creatting a Date object 
// There are 4 ways to create a new date object :

//1. new Date() ; 
//2.  new Date(yeat , month , day , hours , minutes , seconds , millisecond) // it takes 7 argument 
// 3. new Date(millisecond); 
//4. new Date(date string); 


//Method 1. new date

let currDate= new Date(); 
console.log(currDate);
console.log(new Date); 
//console.log(new Date.toLocaleString());  // shi hai but not work here it will give pc time 
console.log(new Date().toString())  //Thu Nov 17 2022 20:01:17 GMT+0530 (India Standard Time)



// date.now()
// Return the numeric value correspoing to the current time-the number
// of millisecond elapsed since january 1 , 1970 00:00:00 UTC
console.log(Date.now()); 


// Method 2 : new Date(year , month , day , hours , minutes , seconds , millisecond) 
// it takes 7 argument 
// same order as we written
// Note: Javascript counts months from 0 to 11;
// janurary is 0 and december
// aur koi do na do lekin month hona hi chaiye

var d = new Date(2022 , 11 , 24 , 10 , 33 , 30 , 0); 
console.log(d); 
console.log(d.toLocaleString()); 


// Method 3 : new date(date.string())
// it creates a new date object from a date setting 

var de=new Date("October 13, 2022 11:30:00"); 
console.log(de.toLocaleString()); 

// new date(millsecond)
var det=new Date(0); 
console.log(det.toLocaleString());

//Date
const curDate = new Date(); 
console.log(curDate.toLocaleString()); 
console.log(curDate.getFullYear()); 
console.log(curDate.getMonth());
console.log(currDate.getDate());
console.log(currDate.getDay());

// how to set individual date
// console.log(curDate.toLocaleString(2022)); 
// console.log(curDate.setFullYear(2022 , 10 , 5)); 
// console.log(curDate.setMonth(10));
// console.log(currDate.setDate(5));
//console.log(currDate.setDay());


// Time method 
const currTimie= new Date(); 

console.log(currTimie.getTime());
// get time method return the number of milisecond 
// since january 1 1970
console.log(currTimie.getHours()); 
HTML/table.htmlconsole.log(currTimie.getMinutes()); 
console.log(currTimie.getSeconds()); 

console.log("now the time to set the individual time"); 
// how to set the individual time
//console.log(currTimie.setTime());
console.log(currTimie.setHours(5).toLocaleString()); 
console.log(currTimie.setMinutes(5)); 
console.log(currTimie.setSeconds(5)); 
console.log(currTimie.setMilliseconds(5));  

// practice time 
new Date().toLocaleTimeString() ; // when we want only time
new Date().toLocaleDateString() ; // when we want only date
new Date().toLocaleString() ; // when we want both time as well as date then we have to use this method 

