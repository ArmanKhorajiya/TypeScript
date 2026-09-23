// Intersection Uses: &
// & means AND

// Suppose we have :
// type Employee = {
//   name: string;
// };
// type Developer = {
//   language: string;
// };
// Now Combine Both:
// type EmployeeDeveloper = Employee & Developer;

// ex:
// let person: EmployeeDeveloper = {
//   name: "Arman",
//   language: "TypeScript",
// };

// 🧠 Easy comparison
// You already learned Union:
// string | number
// means:
// string OR number
// Intersection:
// Employee & Developer
// means:
// Employee AND Developer

// Remember
// |  → OR
// &  → AND

// Practice
// Q1. What does & mean?
// Q2. Will this require both properties?
// type User = {
//     name: string;
// } & {
//     age: number;
// };
// Q3. Create:
// type Employee = {
//     name: string;
// };
// type Developer = {
//     language: string;
// };
// Then combine them into one type called EmployeeDeveloper.
// Q4. Create one object using EmployeeDeveloper.

// Q1
// Intersection

// Q2
// No it will throw error because you didn't teach me anyhting like this

// Q3
// type Employee = {
//   name: string;
// };
// type Developer = {
//   language: string;
// };
// type EmployeeDeveloper = Employee & Developer;

// Q4
// let person: EmployeeDeveloper = {
//   name: "Arman",
//   language: "TypeScript",
// };
