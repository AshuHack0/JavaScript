//1. LET vs CONST vs Var 
// var=function scope  means pura function mai use kar skte hai 
// let and const => Block Scope  means wo jo curley {} k ander hi use kar skte hai 

 
// UNDERSTANDIG THE VAR
/*function biodata()
{ 
    // ander bana hua ham var ham ander kahi bhi use kar skte hai 
    var MyFirstName= "Ashutosh"; 
    console.log(MyFirstName); 

    if(true)
    {
        var myLastName = "sehgal" ; 
         console.log(MyFirstName); 
         console.log(myLastName)
    }

    console.log(myLastName) ; 
}
 */
/*console.log(myLastName);*/ // deko yaha function k bahar ham use ni kar skte hai 

// UNDERSTANDING THE LET 
function biodata()
{
    let MyFirstName="Ashutosh"; 
    console.log(MyFirstName); 

    if(true)
    {
        let myLastName = "sehgal"; 
        console.log(myLastName); 
    }
    // dekho ya myLastName sirf ander means scope mai hi use kar skte hai;
   //  console.log(myLastName);
}

// UNDERSTANDING THE CONST 
// Same as let but it is constant means we can declear only once in given scope; 

biodata(); 
