let i = 1;
do{
    console.log(i);
    i++;

}while(i <= 10);

//sum of all the numbers from 1 to 100
let sum = 0;
let k = 1;
do{
    sum += k;
    k++;
}while(k <= 100);
console.log(sum);

//prompt the user to enter 10.
let num;
do{
    num = parseInt(prompt("Enter the number 10:"));
}while(num !== 10);

//a guessing game
const secretNumber = 7;
let guess;  
do{
    guess = parseInt(prompt("Guess the secret number between 1 and 10:"));
    if(guess == secretNumber){
        console.log("Congratulations! You guessed the secret number.");
    }else{
        console.log("Wrong guess. Try again!");
    }   
}while(guess !== secretNumber);