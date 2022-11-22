var myFriend  = ["ramesh" , "rohan" , "deepak" , 12 , true]; 
// if we wamt to acces all the elemnt in the arrays

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
  