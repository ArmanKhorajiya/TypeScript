// void
// void is mainly used for a function that does not return a value
// ex:
// function greet(): void {
//   console.log("Hello Arman");
// }
// greet();

// Compare
// function add(): number {
//     return 10 + 20;
// }
// This returns a number.
// But:
// function greet(): void {
//     console.log("Hello");
// }
// This doesn't return a value.

// never:
// never means: This function never successfully finishes normally
// ex:
// function throwError(): never {
//   throw new Error("Something went wrong");
// }

// infinite loop ex:
// function infiniteLoop(): never {
//   while (true) {
//     console.log("Running...");
//   }
// }

// 🧠 MCQ trick:
// void = finishes, but returns nothing
// never = never finishes normally

// Q1
// finishes a function but never returns 

// Q2
// Hello

// Q3
// never finshes a function

// Q4
// never

// Q5
// Both are Correct