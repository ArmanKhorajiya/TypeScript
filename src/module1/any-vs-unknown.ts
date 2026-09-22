// any:
// any basically tells TypeScript: Don't check this value's type
// ex:
// let value: any = 10;
// value = "Arman";
// value = true;
// value = [1, 2, 3];
// ex:
// let data: any = "Arman";
// console.log(data);
// data = 18;
// console.log(data);
// data = true;
// console.log(data);

// Why any can be dangerous
// Consider:
// let value: any = "Arman";
// console.log(value.toUpperCase());
// Works because value is a string.
// But:
// let value: any = 18;
// console.log(value.toUpperCase());
// TypeScript doesn't stop you because value is any.
// But JavaScript will fail at runtime, because numbers don't have toUpperCase().

// unknown:
// unknown is also used when you don't know the type, but it is much safer than any.
// ex:
// let value:unknown="Arman";
// value=18;
// value=true;

// But TypeScript doesn't allow you to directly use it as a specific type.
// For example:
// let value: unknown = "Arman";
// console.log(value.toUpperCase());
// ❌ Error.
// Why?
// Because TypeScript says:
// "I don't know whether value is actually a string."

// Check the type first
// You can safely use unknown after checking its type.
// let value: unknown = "Arman";
// if (typeof value === "string") {
//     console.log(value.toUpperCase());
// }

// Remember:
// any = Anything allowed
// unknown = Unknown, so check first

// ex:
// any
// let data: any = "Arman";
// console.log(data.toUpperCase());
// ✅ Allowed.
// unknown
// let data: unknown = "Arman";
// console.log(data.toUpperCase());
// ❌ Not allowed.
// Correct:
// let data: unknown = "Arman";
// if (typeof data === "string") {
//     console.log(data.toUpperCase());
// }
// ✅ Allowed.

// Q1
// Is this allowed?
// let data: any = 10;
// data = "Arman";
// data = true;
// Q2
// Why can any be dangerous?
// Q3
// Is this allowed?
// let data: unknown = "Arman";
// console.log(data.toUpperCase());
// Why?
// Q4
// Fix this code:
// let data: unknown = "Arman";
// console.log(data.toUpperCase());
// Q5
// Which is safer when the type is genuinely unknown?
// any
// or
// unknown
// Q6 — Important
// What is the main difference between:
// any
// &
// unknown

// Q1
// Yes

// Q2
// it allows to changes in the value if the value matches measn string.uppercase

// Q3
// NO: becasue unknwon doesn't allow changes until it checks the value is string or not using condition

// Q4
// let data: unknown = "Arman";
// if (typeof data == "string") {
//   console.log(data.toUpperCase());
// }

// Q5
// unknown

// Q6
// any: it allows changes in value without checking it's type
// unknown: it doesn't allow changes in value without checking it's type

