// Union Types:
// A union type means a beriable can have more than one allowed type.
// Syntax:
// let value: string | number;
// | means OR

// So this is valid
// let value: string | number;
// value = "Arman"; //✅
// value = 18; //✅
// But:
// value = true; // ❌

// ex:
// let id: string | number;
// id = 101;
// id = "A101";
// Both are allowed

// Array with Union:
// let data: (string | number)[] = ["Arman", 18, "Wankaner", 363621];
// The array can contain strings or numbers

// Practice
// Q1. What does | mean in TypeScript?
// Q2. Is this valid?
// let age: number | string = 18;
// Q3. Is this valid?
// let age: number | string = true;
// Q4. Create a variable id that can contain either a number or a string.
// Q5. Create an array that can contain both strings and numbers.

// Q1
// | means Or

// Q2
// No

// Q3
// NO

// Q4
// let id:[string|number]

// Q5
// let arr:(string|number)[]