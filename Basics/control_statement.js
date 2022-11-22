/* 
 CONTROL STATEMENT AND LOOPS
 1. iF..ELSE
 2. switch Statement
 3. while loop 
 4. Do-while Loop
 5. For Loop
 6. for in Loop
 7. for of loop
 8. Conditional (ternary) operator
*/

// 1. if..else
// if given year is leap year or not
const prompt = require('prompt-sync')(); 
var year = prompt("enter your year" );
if(year%4===0 )
{ 
  if(year%100===0)
  {
           if(year%400===0)
           {
            console.log("yes it is leap year"+ year);
           }
  } 
  else 
  {
    console.log("yes it is leap year"+ year);
  }
} 
else
{
    console.log("no it is not leap year " +year);
}

// What is truthy and falsy Values in Javascript
// we have total 5 falsy values in Javasript i.e if we put in if..else statement it always go to else statement 
 // 0 , "" , undefined  , null  , NaN , false is falsy anyway
 var score;
 if(score=0)
 {
    console.log("you los the match "); 
 }
 else
{
    console.log("you wnt the match");
}

// 2.  Conditional (ternary) operator

// we can replace if else by this or we can say that shortcur of if else satement 
 
/*
   variable name = (condition) ? value1(iftrue) : value2(if false); 
*/
 var age = 20; 
 var ans = (age>=18)?"yeṇs it is eligible" : "no it is eligible" ; 
 console.log(ans);


 // 3. Switch Statement
    // it is nothing same as if else statement
    var area="rectangle"
    var PI=3.141 , l=5 , b=4 , r=3; 
    switch(area)
    {
        case 'circle':
        console.log("The area of circle is "+ PI*r*r);
        break; 
        
        case 'rectangle':
        console.log("the area of rectangle is "+ 2*(l+b));
        break; 

        case "triangle": 
        console.log("the are of triangle is " + (l*b)/2 );
        break; 

        default:
            console.log("please enter a Valid Data");
    }