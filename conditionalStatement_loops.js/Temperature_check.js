let temperature = 20; 
//Using if-else statement
if (temperature < 0) {
    console.log("It's freezing");
} 
else if (temperature >=0 && temperature <=15) {
    console.log("It's quite cold");
} 
else if (temperature >=16 && temperature <= 25) {
    console.log("It's mild");
} 
else if (temperature > 25) {
    console.log("It's warm");
}
//Using switch statement
switch(true){
    case (temperature < 0):
        console.log("It's freezing");
        break;
    case (temperature >=0 && temperature <=15):
        console.log("It's cold");
        break;
    case (temperature >=16 && temperature <= 25):
        console.log("It's mild");
        break;
    case (temperature > 25):
        console.log("It's warm");
}