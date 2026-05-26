for (let i = 0; i < 10; i++) {
    console.log(i);
}
for(let i =0; i <= 20; i++){
    if(i % 2 === 0){
        console.log(i);
    }
}
let sum = 0;
for(let i =1; i <= 100; i++){
    sum += i;
}console.log(sum);

const numbers = [1,2,3,4,5];
for(let i =0; i <numbers.length; i++){
    console.log(numbers[i]);
}
const numbers2 = [3,72,5,10,6];
let largest = numbers2[0];
for(let i = 1; i <= numbers2.length; i++){
    if(numbers2[i] > largest){
        largest = numbers2[i];
    }
}console.log(largest);