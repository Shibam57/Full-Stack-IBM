// let x = "5"; 
// let y = 5; 
// console.log(x == y);  
// console.log(x === y); 

// const words = ["JavaScript", "Programming", "Function", "Hoisting"];


// function testScope() { 
//     if (true) { 
//         var a = 1️0; 
//         let b = 2️0; 
//         const c = 3️0; 
//     } 
//     console.log(a); 
//     console.log(b); 
//     console.log(c); 
// } 
// testScope(); 


// var name = "John"; 
// function greet() { 
//     if (true) { 
//         var message = "Hello " + name; 
//     } 
//     console.log(message); 
// } 
// greet();


// function multiply(a, b) { 
//     return a * b; 
// } 
   

// const obj = { 
//     name: "Alice", 
//     sayHello: function() { 
//         setTimeout(() => { 
//             console.log("Hello, " + this.name); 
//         }, 1️000); 
//     } 
// }; 
// obj.sayHello();


// console.log(a); 
// var a = 1️0; 
// console.log(b); 
// let b = 2️0; 


// console.log(square(5)); 
// function square(n) { 
//     return n * n; 
// } 
// console.log(double(4️)); 
// var double = function(n) { 
//     return n * 2️; 
// };


// console.log(5 + "5");  
// console.log(5 - "3");  
// console.log(5 * "2");  
// console.log("10" / 2); 
// console.log(10 % "3");

// let x = 10; 
// x = x + 5; 
// x = x * 2; 
// x = x - 3; 
// x = x / 2;


console.log(5 > 3 && 10 < 20); 
console.log(5 > 3 || 10 > 20); 
console.log(!(5 > 3));


function sum(a, b, c = 5) { 
    return a + b + c; 
} 
console.log(sum(2, 3));  
console.log(sum(2, 3, 10));



function outer() { 
    let count = 0; 
    return function inner() { 
        count++; 
        console.log(count); 
    }; 
} 
const counter1= outer(); 
counter1(); 
counter1(); 
const counter2= outer(); 
counter2(); 
counter2(); 