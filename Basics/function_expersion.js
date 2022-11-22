  // we can give expersion also in the funtion 

  // named fuction expersion
 var factorial= function fact (n)
{
    var ans=1; 
     for (let i=1 ; n>=i;i++)
     {
        ans=ans*i; 
     }
     return ans; 
} ; // var ans = 10 ; //last mai semicolon dalte hai usse trah issme bhi dalte hai  

// annonous function expersion 
var factorial2= function (n)
{
    var ans=1; 
     for (let i=1 ; n>=i;i++)
     {
        ans=ans*i; 
     }
     return ans; 
} ;
//console.log(fact(5));
console.log(factorial(4)); 
console.log(factorial2(5)); 