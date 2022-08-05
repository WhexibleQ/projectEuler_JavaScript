let fib = [1, 2];
let sum = 0;

//Fibonacci series first 999 element
//If last element is greater than 4mil it stops
for (i = 2; i < 999; i++) {
    fib[i] = fib[i - 2] + fib[i - 1];
    console.log(fib[i]);
    if (fib[fib.length-1] > 4000000) {break}
}

console.log(fib)

//Fibonacci Even Numbers
evenFib = fib.filter(number => {
    return number % 2 === 0;
});
console.log(evenFib); 

//Fibonacci Even Numbers Sum
for (let i = 0; i < evenFib.length; i++) {
    sum += evenFib[i];
}
console.log(sum);