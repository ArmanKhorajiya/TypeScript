// Type narrowing means checking a value's type before using it.
// let value: string | number = "Arman";
// if (typeof value === "string") {
//     console.log(value.toUpperCase());
// }
// Before the if:
// value → string | number
// Inside the if:
// value → string
// So TypeScript safely allows:
// value.toUpperCase();
// Common narrowing
// typeof value === "string"
// typeof value === "number"
// typeof value === "boolean"
// 🧠 Remember:
// Union gives multiple possibilities → narrowing checks which one it is.

// Q1. What is type narrowing?
// Q2. What type does TypeScript know here?
// let value: string | number = 10;
// if (typeof value === "number") {
//     // here?
// }
// Q3. Why would narrowing be needed for:
// function print(value: string | number) {
//     // How can you safely call toUpperCase()?
// }

// Q1
// checking value's type

// Q2
// number

// Q3
// if (typeof value === string) {
//   console.log(value.toUpperCase);
// }
