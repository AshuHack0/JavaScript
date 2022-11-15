// data types in javasript
// there are six data types in javascript i.e
// 1. undefined
// 2. boolean 
// 3. number
// 4. string 
// 5. bigint
// 6.symbol

// types of operator  
// ** 1 string type
var Name = "Ashutosh Kumar"; 
console.log("your name is " ,Name);
console.log(typeof(Name));  // checking the type of data type

// **2 number type
var Age=18; 
console.log("your Age is " , Age);
console.log(typeof(Age));
// ** boolean type
var isAshutosh = true;
console.log(isAshutosh);
console.log(typeof(isAshutosh));

// now assignment
//var ans = 10+"20";  //ans=1020
// var ans = 9-"5";     //ans=4 // bug***
//var ans = "java " + "script";
//var ans = " "+" ";
//var ans = " "+ 0; //ans= 0
//var ans = "vinod " - "thapa"; // ans=NaN (i.e not a number)
// var ans = true+true; //ans =2; 
 // var ans = true +false //ans=1;
 //var ans = false +false ; // ans=0;
 //var ans = false-true; // ans=-1;   
 //console.log(ans);


 // interviw question 
 /* differnce between the null and undefined */
  var iAmUseless = null; 
  console.log(iAmUseless);  // null
  console.log(typeof(iAmUseless)); // 2nd Bug i.e its data type is object which is not any data type

  var standby; 
  console.log(standby); // undifined
  
  /* what is NaN */
  // NaN is a Property of the global object
  // int other word it is variable in global scope 
  // the intital value pf NaN is Not-A-Number

  var myPhoneNumber = 980140375; 
  var myName = "ashutosh Kumar"; 
  console.log(isNaN(myPhoneNumber)); 
  console.log(isNaN(myName));
  if(isNaN(myName))
  {
    console.log("please Enter correct Phone Number"); 
  }