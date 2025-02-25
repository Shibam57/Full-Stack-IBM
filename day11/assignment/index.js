// const student = { 
//     name: "Aryan Kumar", 
//     rollNumber: 101, 
//     marks: { 
//         Math: 80, 
//         Science: 65, 
//         English: 50, 
//         History: 70 
//     }, 
//     getAverageMarks: function() { 
//         const subjects = Object.values(this.marks);
//         const totalMarks = subjects.reduce((sum, mark) => sum + mark, 0);
//         return totalMarks / subjects.length;
//     }, 
//     checkPassOrFail: function() { 
//         const isPassed = Object.values(this.marks).every(mark => mark >= 40);
//         return isPassed ? "Passed" : "Failed";
//     } 
// }; 

// console.log(student.getAverageMarks());  
// console.log(student.checkPassOrFail());  


// ---------------------------------------------------------------------------------------


// function generateTable(num, limit) {
//     for (let i = 1; i <= limit; i++) {
//         console.log(`${num} x ${i} = ${num * i}`);
//     }
// }

// generateTable(5, 10);


// -----------------------------------------------------------------------------------------


// const library = { 
//     books: { 
//         "Atomic Habits": { author: "James Clear", availableCopies: 3 }, 
//         "The Alchemist": { author: "Paulo Coelho", availableCopies: 5 } 
//     }, 
//     borrowBook: function(bookName) { 
//         if (this.books[bookName] && this.books[bookName].availableCopies > 0) {
//             this.books[bookName].availableCopies--; 
//             console.log(`You have borrowed "${bookName}".`);
//         } else {
//             console.log(`Sorry, "${bookName}" is not available.`);
//         }
//     }, 
//     returnBook: function(bookName) { 
//         if (this.books[bookName]) {
//             this.books[bookName].availableCopies++; 
//             console.log(`You have returned "${bookName}".`);
//         } else {
//             console.log(`Sorry, "${bookName}" does not belong to this library.`);
//         }
//     } 
// }; 

// library.borrowBook("Atomic Habits"); 
// console.log(library.books["Atomic Habits"].availableCopies);

// library.returnBook("Atomic Habits"); 
// console.log(library.books["Atomic Habits"].availableCopies);


// ------------------------------------------------------------------------------------------


// function fizzBuzz(n) {
//     for (let i = 1; i <= n; i++) {
//         if (i % 3 === 0 && i % 5 === 0) {
//             console.log("FizzBuzz");
//         } else if (i % 3 === 0) {
//             console.log("Fizz");
//         } else if (i % 5 === 0) {
//             console.log("Buzz");
//         } else {
//             console.log(i);
//         }
//     }
// }

// fizzBuzz(15);


// -------------------------------------------------------------------------------


// function reverseString(str) {
//     let reversed = "";
//     for (let i = str.length - 1; i >= 0; i--) {
//         reversed += str[i];
//     }
//     return reversed;
// }

// console.log(reverseString("JavaScript"));


// ----------------------------------------------------------------------------------


function removeDuplicates(arr) {
    let uniqueArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (!uniqueArr.includes(arr[i])) {
            uniqueArr.push(arr[i]);
        }
    }
    return uniqueArr;
}

console.log(removeDuplicates([1, 2, 3, 2, 4, 5, 1, 6]));  


// ------------------------------------------------------------------------------------