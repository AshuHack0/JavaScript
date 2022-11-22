/**** string in javasript ****/
// A javaScript string is zero or more charcter written Inside quotes 
// Javascript string is used for storing and manuplating text
// you can use single and double qotes also

// strings can be created as primatives 
// from string literals or as objects using the string() construtor

let myName="Ashutosh Kumar"; 
let muChannelName = 'ashu vines'

//let ytname = new string ("ashu vines"); 

console.log(myName); 
console.log(muChannelName); 
 
// how to find length of the string; 
console.log(myName.length); 

// Now what is differnce between and use of single and double quote 
//console.log("hello is iam ashutosh Kumar and also called me as "ashu" "); //we can not write inside double qurote double quote
console.log("hello is iam ashutosh Kumar and also called me as 'ashu' "); // if we change the double outside code or inside code to thier respective inverse than it will work
// or we have second method to print single or double or backslach is
console.log("hell my name is ashutosh Kumar and call me as \"Ashu\"")
console.log('hell my name is ashutosh Kumar and call me as \'Ashu\'')
console.log("hell my name is ashutosh Kumar and call me as \\Ashu ")


// finding stirng in  a string 

// indexof give the index of that word or charcterr
// Lastindexof give the  index of that word from the last
// if not present than it will give -1 
const MyBio = "i am Ashutosh Sehgal"; 
console.log(MyBio.indexOf("Sehgal")); 
console.log(MyBio.indexOf("Sehgal", 6));  // 6 se aggye dekho   ye start postion argumnet hai
console.log(MyBio.lastIndexOf("a"));  


// The search () method searches a string for a specified
// value and return the position of the match
 let ans = MyBio.search("Sehgal"); 
  console.log(ans);
// in search method we can not pass strt arrugment function 


/** Extracting String part**/ 
// There are 3 method for extracting string part
// 1. slice(start,end); 
//2. substring(start,end); 
// 3. substr(str,length); 

//Method 1 Slice Method
// The slice() method select the elemnt starting at the given start argument and end at but does not include the given end argument.
// Note:- Original array will not change similar to splice
const fruit ="Apple Banana kiwi"; 
let str = fruit.slice(0,5); 
console.log(str) ; 

// cracks point 
// if we give negative value in end than it will subtract that negative point form last;
let str2 = fruit.slice(0,-2); 
console.log(str2); 

//Challenge time
//Q. Display Only 280 charcter of a string 
let mystr="heloooooooooooooooooooooooooooo ooooooooooooooooooooooooogooooooooooooooooooooooooooooooooooooooosssssssssssssssssss llllllllllllllllllllllllllllllllllllllllllllllllssssssssssssssssssssssssssssssssssssssllllllllllllllllllllllllllllllll llllllllll"
let MyActual = mystr.slice(0,280); 
console.log(MyActual); 

/*second Method :- The Substring Method*/
// substring() is similar to slice 
// the differnce is that it can not accept negative value as like in slice
let ans3 = fruit.substring(0,5); 
console.log(ans3); 



/*Third Method i.e substr() method*/
// substr() is similar to slice()

// the differnce is second arrugumnet specify the length of the string 

let ans4 = fruit.substr(0,8); 
console.log(ans4);



/* Replacing String Content()*/
//string.prototype.replace(searchfor ,replacewith)
// The replace() method replaces a specified vaule with another valuen in a string

// Point To be Remember
// 1: The replace() method does not change the string 
// 2: it is called  on It returns a new stirng 
 // 3: By defoult the replace() method replaces onlt the first match

let re = 'tv blackboard racket' ; 
let replace = re.replace('tv','led tv'); 
console.log(replace); 

/* Extracting String Charcter */
// Ther are 3 method for extracting string characters;
//1. charAt(position)
//2. charCodeAt(position)
//3. Property access []; 


// Mehod 1:- charAt() method
// The charAt() method return the charcter at a specified index(postion) in string
let strc = "HELLO WORLD"; 
console.log(strc.charAt(2)); 


// Method 2:- charcodeAt method
// The CharCodeAt() method returns the unicode of the 
// scharcter at the spcified index in a string ; 
// The method return a UTF-16 code
// (an integer between 0 and 65535)

console.log(strc.charCodeAt(0)); 


// Method 3 :- Property Access

console.log(strc[1]); 

// some other useful method 

console.log(strc.toLowerCase()); 
console.log(strc.toUpperCase()); 


// The concat Method 
//concat join two or more string 
let fName = "Ashutosh"; 
let lName = "sehgal"; 
console.log(fName+lName); 
console.log(`${fName} ${lName}`);
console.log(fName.concat(lName)); 
console.log(fName.concat(" ",lName));


//string trim
// the trim method removes whitespaeces form both side of as string ; 
// not remove space method two woord
let data = "         hello  "; 
console.log(data); 
console.log(data.trim());; 


/* converting string to an Array */
// A string can be converted to an Array with the split() method

var text = " a , b, c,d"; // string ; 
console.log(text.split(",")) ; //split on commas
console.log(text.split(" ")) ; //split on white space
console.log(text.split("|")); // split on pipe


