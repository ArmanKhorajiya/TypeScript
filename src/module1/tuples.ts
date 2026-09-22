// Tuple:
// A tuple is an array where the number, order and types of elemets are fixed.
// ex:
// let student: [string, number] = ["Arman", 18];
// console.log(student);
// Here
// 1st -> string
// 2nd -> number
// So:
// let student: [string, number] = ["Arman", 18]; // ✅
// But:
// let student: [string, number] = [18, "Arman"]; // ❌
// because the order is wrong

// Array vs Tuple:
// Array -> flexible number/order of elements:-
// let arr: (string | number)[] = ["Arman", 18, "Wankaner"];
// Tuple -> fixed structure
// let student: [string, number] = ["Arman", 18];

// 🧠 Trick:
// Array = flexible
// Tuple = fixed

// Practice
// Q1. Is this valid?
// let student: [string, number] = ["Arman", 18];
// Q2. Is this valid?
// let student: [string, number] = [18, "Arman"];
// Q3. Create a tuple containing:
// "Arman", 18, true
// with types:
// string, number, boolean
// Q4. In one sentence, what is the difference between an array and a tuple?

// Q1
// Yes

// Q2
// No

// Q3
// let student: [string, number, boolean] = ["Arman", 18, true];

// Q4
// Array is Flexible with elements whether Tuple is not means everything should be in structured.
