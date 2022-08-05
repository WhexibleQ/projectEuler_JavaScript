let array = [];
let i = 0;
let sum = 0;


// Adding numbers less than a thousand divisible by 3 and 5 to the empty array and preventing the numbers divisible by 15 from being written twice.
for (; i < 1000; i++ ) {
    if (i % 3 === 0) {
        array.push(i)
    } else if (i % 5 === 0) {
        array.push(i)
    } else if (i % 15 === 0) {
        array.pop(i)
    }
}
console.log(array);

// The sum of the array.
for (let i = 0; i < array.length; i++) {
    sum += array[i];
}
console.log(sum);
