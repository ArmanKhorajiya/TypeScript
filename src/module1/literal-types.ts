// A literal type allows only a specific value.
// let direction: "left" | "right";
// Allowed:
// direction = "left";  // ✅
// direction = "right"; // ✅
// Not allowed:
// direction = "up"; // ❌
// Another example:
// let role: "admin" | "user";
// role = "admin"; // ✅
// role = "user";  // ✅
// role = "guest"; // ❌

// 🧠 Trick
// Union = allowed types
// Literal = allowed exact values

// Unoin ex:
// string | number;
// any string or any number allowed

// Literal ex:
// "admin" | "user";
// only "admin" or "user";

// Practice
// Q1. What values are allowed?
// let color: "red" | "blue";
// Q2. Is this valid?
// let role: "admin" | "user" = "guest";
// Q3. Create a variable status that only allows:
// "pending"
// "success"
// "failed"
// Q4. What is the main difference between a union type and a literal type?

// Q1
// only red or blue

// Q2
// NO

// Q3
// let status:"pending"|"success"|"failed";

// Q4
// Union=type , Literal=value
