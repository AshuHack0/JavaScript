// Splice method 
// it will work on add , dellete , update 
// let us take one example to understand the slice method 

 // splice has 3 part
 //i.start index
 //ii.deletion coount
 // iii. elemnet to be inserted

// Q. Do the folowing method using single or slice method 
// 1. Add Dec at the end of the array
// 2. What is return value of the Slice Method 
// 3. Update march with the March 
// 4. Delete June from the arrays 

const months =['june' , 'march' , 'April' , 'June' , 'july']; 

// 1 .Add Dec at the end of the array
//Sol 1.
 const NewMonth = months.splice(months.length,0,"Dec"); 
 console.log(months);

 // Sol 2
 // return value is what we have deleted 
 // till now nothing is deleted so empty come; 

 //Sol 3
  let IndexOfMonths = months.indexOf("march"); 
   if(IndexOfMonths!=-1)
   {
    const updatMonth = months.splice(IndexOfMonths,1,'March');
    console.log(months); 
   }

   // Sol 4
   const indexOfJune = months.indexOf("June"); 
   if(indexOfJune!=-1)
   {
    const updateJune=months.splice(indexOfJune,1);
    console.log(months);  
   }

   // we want to remove all elemnet from june to last
   if(indexOfJune!=-1)
   {
    const updateJune=months.splice(indexOfJune,Infinity);
    console.log(months);  
   }
  