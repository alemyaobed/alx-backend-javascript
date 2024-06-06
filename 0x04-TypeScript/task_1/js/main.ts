// Define the Teacher interface
interface Teacher {
  firstName: string;
  lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any; // Allow for additional attributes
}

// Initialize a Teacher object
const initializeTeacher = (
  firstName: string,
  lastName: string,
  fullTimeEmployee: boolean,
  location: string,
  additionalAttributes: { [key: string]: any }
): Teacher => {
  return {
    firstName,
    lastName,
    fullTimeEmployee,
    location,
    ...additionalAttributes,
  };
};

// Example usage
const teacher3: Teacher = initializeTeacher(
  "John",
  "Doe",
  false,
  "London",
  { contract: false }
);

console.log(teacher3);


// Define the Directors interface that extends Teacher
interface Directors extends Teacher {
  numberOfReports: number;
}

// Example usage
const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  fullTimeEmployee: true,
  location: 'London',
  numberOfReports: 17,
};

console.log(director1);

// Define the interface for the printTeacher function
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

// Define the printTeacher function
const printTeacher: printTeacherFunction = (firstName, lastName) => {
  const firstInitial = firstName.charAt(0);
  return `${firstInitial}. ${lastName}`;
};

// Example usage
console.log(printTeacher("John", "Doe")); // Output: J. Doe

// The interface for the StudentClass constructor
interface StudentConstructor {
  new (firstName: string, lastName: string): StudentClass;
}

interface IstudentClass {
  workOnHomework(): string;
  displayName(): string;
}

// Implement the StudentClass
class StudentClass implements IstudentClass {
  constructor(public firstName: string,public lastName: string) {}
  workOnHomework(): string {
    return 'Currently working';
  }
  displayName(): string {
    return this.firstName;
  }

}

// Example usage
const student = new StudentClass("John", "Doe");
console.log(student.workOnHomework()); // Output: Currently working
console.log(student.displayName()); // Output: John
