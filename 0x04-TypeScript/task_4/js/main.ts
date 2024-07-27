// Create a new directory task_4 and copy the above tsconfig.json and put this package.json in there

// {
//   "name": "task_4",
//   "version": "1.0.0",
//   "description": "",
//   "main": "index.js",
//   "scripts": {
//     "build": "webpack",
//     "test": "echo \"Error: no test specified\" && exit 1"
//   },
//   "keywords": [],
//   "author": "",
//   "license": "ISC",
//   "devDependencies": {
//     "@typescript-eslint/eslint-plugin": "^2.4.0",
//     "@typescript-eslint/parser": "^2.4.0",
//     "clean-webpack-plugin": "^3.0.0",
//     "fork-ts-checker-webpack-plugin": "^1.5.1",
//     "html-webpack-plugin": "^3.2.0",
//     "ts-loader": "^6.2.0",
//     "typescript": "^3.6.4",
//     "webpack": "^4.41.2",
//     "webpack-cli": "^3.3.9",
//     "webpack-dev-server": "^3.8.2"
//   }
// }
// In task_4/js/subjects:

// Create a file Teacher.ts and write a Teacher interface in a namespace named Subjects.

// the interface requires firstName and lastName as string
// Create a file Subject.ts and write a Subject class in the same namespace named Subjects.

// the class has one attribute teacher that implements the Teacher interface
// the class has one setter method setTeacher that accepts a teacher in argument (and as setter, set the instance attribute teacher with it)
// Create a file Cpp.ts and make the following modifications in the same namespace.

// Using declaration merging, add a new optional attribute experienceTeachingC (number) to the Teacher interface
// Create a class Cpp extending from Subject
// Write a method named getRequirements that will return a string Here is the list of requirements for Cpp
// Write a method named getAvailableTeacher that will return a string Available Teacher: <first name of teacher>
// If the teacher doesn’t have any experience in teaching C, then the method should return a string No available teacher
// Create a file React.ts and write a React Class in the same namespace.

// Add a new attribute experienceTeachingReact? (number) to the Teacher interface
// In the class, write a method named getRequirements that will return a string Here is the list of requirements for React
// Write a method named getAvailableTeacher that will return a string Available Teacher: <first name of teacher>
// If the teacher doesn’t have any experience in teaching React, then the method should return a string No available teacher
// Create a file Java.ts and write a Java Class in the same namespace.

// Add a new attribute experienceTeachingJava? (number) to the Teacher interface
// In the class, write a method named getRequirements that will return a string Here is the list of requirements for Java
// Write a method named getAvailableTeacher that will return a string Available Teacher: <first name of teacher>
// If the teacher doesn’t have any experience in teaching Java, then the method should return a string No available teacher
// Repo:

// GitHub repository: alx-backend-javascript
// Directory: 0x04-TypeScript
// File: task_4/package.json, task_4/tsconfig.json, task_4/js/subjects/Cpp.ts, task_4/js/subjects/Java.ts, task_4/js/subjects/React.ts, task_4/js/subjects/Subject.ts, task_4/js/subjects/Teacher.ts

// task_4/js/main.ts

/// <reference path="./subjects/Cpp.ts" />
/// <reference path="./subjects/React.ts" />
/// <reference path="./subjects/Java.ts" />


import { Subjects } from './subjects/Subject';


const cpp = new Subjects.Cpp();
const react = new Subjects.React();
const java = new Subjects.Java();

const teacher: Subjects.Teacher = {
  firstName: 'John',
  lastName: 'Doe',
  experienceTeachingC: 10,
  experienceTeachingReact: 5,
  experienceTeachingJava: 8
};

cpp.setTeacher(teacher);
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());

react.setTeacher(teacher);
console.log(react.getRequirements());
console.log(react.getAvailableTeacher());

java.setTeacher(teacher);
console.log(java.getRequirements());
console.log(java.getAvailableTeacher());

