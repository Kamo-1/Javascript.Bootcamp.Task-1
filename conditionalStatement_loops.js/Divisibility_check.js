let num = 150;
if(num % 2 === 0 && num % 3 ===0){
    console.log("Divisible by both");
}
else if ( num % 2 ===0){
    console.log("Divisible by 2.");
}
else if (num % 3 === 0){
    console.log("Divisible by 3.");
}
else {console.log("Not divisible by 2 or 3.");}
switch(true){
    case num % 2 === 0 && num % 3 ===0:
        console.log("Divisible by both");
        break;
    case num % 2 === 0:
        console.log("Divisible by 2");
        break;
    case num % 3 === 0:
        console.log("Divisible by 3");
        break;
    default:
       console.log("Not divisible by 2 or 3");
}