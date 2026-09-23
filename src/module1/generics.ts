// Generica let us create reusable code that works with different types.
// ex:
// function identity<T>(value: T): T {
//   return value;
// }
// Now:
// let name = identity<string>("Arman");
// let age = identity<number>(18);
// T is a placeholder for a type
// So:
// T -> string
// in the first call, and:
// T -> number
// in the second

// Why use Generics?
// Without generics, you might use any:
// function identity(value: any): any {
//     return value;
// }
// But any loses type safety.
// Generics keep the type.
// 🧠 Remember
// Generic = reusable code + type safety

// Practice
// Q1. What is T in:
// function identity<T>(value: T): T
// Q2. What type is T here?
// identity<string>("Arman");
// Q3. What type is T here?
// identity<number>(18);
// Q4. Why are generics safer than using any?

// Q1
// T is a placeholder 

// Q2
// string

// Q3
// number

// Q4
// any loses type safety