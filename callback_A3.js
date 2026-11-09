// ASSIGNMENT 3
// CALLBACK ARRAY
// TASK 1
function processArray(arr,callback){
    let result = [];
    for (let i=0; i<arr.length; i++){
        let value = callback(arr[i]);
        if (value !== undefined) {
            result.push(value);
        }
    }
    return result;
}

// TASK 2
let squared = processArray([1, 2, 3, 4], function(n) {
    return n * n;
});

console.log(squared);

// TASK 3
let even = processArray([1, 2, 3, 4], function(n) {
    if(n%2===0){
        return n;
    }
});
console.log(even);

// TASK 4
function processString(str,callback){
    return callback(str);
}

// TASK 5
let upper =processString("nitish sir",function(str) {
    return str.toUpperCase();
});
console.log(upper);

// TASK 6
let count= processString("nitish sir",function(str){
    return str.length;
});
console.log(count);

// TASK 7
function calculate(a,b, callback){
    return callback(a,b);
}

// TASK 8
console.log(calculate(10, 5, function(a, b) {
    return a + b;
}));

console.log(calculate(10, 5, function(a, b) {
    return a - b;
}));

console.log(calculate(10, 5, function(a, b) {
    return a * b;
}));

console.log(calculate(10, 5, function(a, b) {
    return a / b;
}));

// TASK 9
function findElement(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i])) {
            return arr[i];
        }
    }

    return undefined;
}

let result = findElement([1, 3, 5, 8, 10], function(n) {
    return n % 2 === 0;
});

console.log(result);


// BONUS TASK
// using calculate function from TASK 7
// using processArray function from TASK 1
function menu(choice){
    let a=10;
    let b=20;

    switch(choice){
        case 1:
            return calculate(a,b, (l,m) => l+m);
        case 2:
            return calculate(a, b, (l, m) => l - m);

        case 3:
            return calculate(a, b, (l, m) => l * m);

        case 4:
            return calculate(a, b, (l, m) => m !== 0 ? l / m : "Cannot divide by zero");

        case 5:
            return processArray([1, 2, 3, 4], n => n * n);

        case 6:
            return processArray([1, 2, 3, 4, 5, 6], n =>
                n % 2 === 0 ? n : undefined
            );

        default:
            return "Invalid choice";
    }
}

console.log("1. Addition");
console.log("2. Subtraction");
console.log("3. Multiplication");
console.log("4. Division");
console.log("5. Square Array");
console.log("6. Find Even Numbers");

console.log("Result:", menu(1));

