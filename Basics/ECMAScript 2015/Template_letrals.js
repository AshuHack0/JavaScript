// 2 .Template Litralas (Template strings)
 // it will help to change the way of writting 

 // Q. Write a program to print the table of 12 and inplement the template letrals

 let tableof=12; 
 for (let i=1 ; 10>=i;i++)
 {
    // console.log( tableof + " * " + i + " = " + tableof * i );  // now in the place of this we can write as template litrals
    console.log(`${tableof} * ${i} = ${tableof*i}`);
 }