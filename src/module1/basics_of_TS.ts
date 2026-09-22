// let name: string = "Arman";
// let age: number = 18;
// let isStudent: boolean = true;
// console.log(name);
// console.log(age);
// console.log(isStudent);


// Type Annotation:
// :string
// is called a type annotation

// General Syntax:
// let variable_name:type=value

// ex:
// let name:string="Arman";
// let age:number=18;
// let isStudent:boolean=true;

// Q1
// let name:string="Arman";
// let age:number=18;
// let isStudent:boolean=true;

// Q2
// type is different, declaration is number and reassigning is string

// Q3
// 30

// Q4
// Compile-Time: the time taken to compile or convert the code to JS
// Run-Time: the time taken to run or show the output of the compiled code

// Q1
// dynamically

// Q2
// statically

// Q3
// type error

// Q4
// No Browser executes the JS code 

// Q5
// To prevent type erroe means can't reaassign the same variable with different datatype


// Q1. What type does TypeScript infer?
// let age = 20;
// Q2. What type does TypeScript infer?
// let name = "Arman";
// Q3. Is this valid? Why?
// let marks = 90;
// marks = "90";
// **Q4. What is the difference between type annotation and type inference?
// **Q5. Write both versions of this variable:
// city = "Rajkot"

// Q1
// it directly assign number type

// Q2
// it assigns string type

// Q3
// I think it is not valid because first the type inference assigns number and then we reassign the variable with string so it's not valid

// Q4
// Type Annotation: in this we assign the type of the variable statically
// Type Inference: in this TS directly assign type of variable we don't have to

// Q5
// Annotataion: 
// let city:string="Wankaner";
// Inference:
// let city="Wankaner"


// Practice
// Q1. What type should you use for:
// Arman's name
// Q2. What type should you use for:
// Arman's age
// Q3. What type should you use for:
// Is Arman a student?
// Q4. Identify the type:
// let x = 25.5;
// Q5. Identify the type:
// let x = "25";
// Q6. Identify the type:
// let x = false;
// Q7. What is the difference between null and undefined in simple words?

// Q1
// string

//Q2
// number

// Q3
// boolean

// Q4
// number

// Q5
// string

// Q6
// boolean

// Q7
// null: intentionally assigned no value
// undefined: hasn't assign value till yet
