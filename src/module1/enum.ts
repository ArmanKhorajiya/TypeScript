// An enum gives names to a fixed set of values.
// ex:
// enum Direction {
//   Up,
//   Down,
//   Left,
//   Right,
// }
// let move: Direction = Direction.Up;

// Instead of using:
// "up" | "down" | "left" | "right"
// you can use an enum.
// String enum
// For easier-to-understand values:

// enum Status {
//     Pending = "pending",
//     Success = "success",
//     Failed = "failed"
// }

// let status: Status = Status.Pending;

// 🧠 Remember
// enum → named fixed set of values

// Practice
// Q1. What is an enum used for?
// Q2. Create an enum:
// Role
// Admin
// User
// Guest
// Q3. Create a variable that stores Role.Admin.
// Q4. What is the simple difference between a literal union and an enum?

// Q1
// An enum gives names to a fixed set of values

// Q2
// enum Role{
//     Admin,
//     User,
//     Guest
// }

// Q3
// let a: Role = Role.Admin;

// Q4
// Union=fixed values
// Enum=named fixed values
