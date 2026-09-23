// A type alias gives a name to a type.
// Instead of repeatedly writing:
// let id: string | number;
// let userID: string | number;
// let productID: string | number;

// you can create a type
// type ID = string | number;
// Then:
// let id: ID = 101;
// let userID: ID = "U101";

// 🧠 Trick
// type = give a name to a type

// Practice
// Q1. What does a type alias do?
// Q2. Create:
// ID = string OR number
// Q3. Create a Student type with:
// name → string
// age → number
// Q4. Create a Student object using your type.

// Q1
// it stores types which we want to implement on more than 1 variable then write it on variable.

// Q2
// type ID = string | number;

// Q3
// type Student = {
//   name: string;
//   age: number;
// };

// Q4
// let stu: Student = {
//   name: "Arman",
//   age: 18,
// };
