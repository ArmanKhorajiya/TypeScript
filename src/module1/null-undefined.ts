// Very short:

// let a: null = null;
// let b: undefined = undefined;
// null → intentionally no value
// undefined → value is not assigned/present

// With strict: true in your tsconfig.json, these are separate types.

// For example:

// let name: string = null;       // ❌
// let age: number = undefined;   // ❌

// If you explicitly want null:

// let name: string | null = null;

// That's the important part.

// Practice
// Q1. What is the difference between null and undefined?
// Q2. Is this valid?
// let name: string | null = null;
// Q3. Is this valid?
// let age: number = undefined;

// Q1
// null=value has not assigned
// undefined=value will be assigned but not yet

// Q2
// Yes

// Q3
// No
