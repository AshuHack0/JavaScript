// in java script we can give any vallue either integer string or boolean in array; 
var myFriend  = ["ramesh" , "rohan" , "deepak" , 12 , true]; 
console.log(myFriend);
console.log(myFriend[1]);

//if want to check the length of the array
console.log(myFriend.length);
// there is another method to push the element in array is using push button i.e it will add at the last of the array 
myFriend.push("hello"); 

// if want to add the something in the begining of the arrays 
// we have to use unshift() metods to add one or more elements to the 
// beginning of an arrays and return the new length of the arrays

myFriend.unshift("at_begninng");

// if we want to remove the last elemnt of the arrays
// we have to use pop function to remove last elemnet of the arrays
myFriend.pop();

// if we want to remove the first elemenent of the arrays 
// then we have to use shift to remove the first element 
myFriend.shift(); 
    
// if we want to acces all the elemnt in the arrays

for(let i=0 ; myFriend.length>i;i++)
{
    console.log("your elent in the loop is " +myFriend[i]); 
}

// for in loop -> in this loop they show index of the element 
for (let element in myFriend)
{
    console.log(element); 
}
//for of loop -> in this loop they show index element 
for (let element of myFriend)
{
    console.log(element); 
}

 //for each loop -> is combination of the for_of and for_in loop 
  myFriend.forEach(function(element,index,array){
    console.log(element+ " index: "+index + " " +array);
  })
  /*we can write this in fat arrow method*/
  myFriend.forEach((element,index,array)=> 
  {
    console.log(element+ " index: "+index + " " +array);
  })


  // Q1. search the elemnet in the array; 
  for (let i=0  ; myFriend.length>i;i++)
  { 
    if(myFriend[i]=="deepak")
    {
        console.log("yes it is present at index " + i); 
        break; 
    }
  }

   // Q2. Filter or sort the array ? 
   let myAge = [10 , 30 , 5 , 8]; 
   for (let i= 0 ; myAge.length>i;i++)
   {
       if(myAge[i]<myAge[i+1])
       {
          let temp = myAge[i]; 
          myAge[i]=myAge[i+1]; 
          myAge[i+1]=temp;
       }
       else{
        continue;
       }
   }
   console.log(myAge);