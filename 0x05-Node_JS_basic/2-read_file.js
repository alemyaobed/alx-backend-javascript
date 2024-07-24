/*
Using the database database.csv (provided in project description), create a function countStudents in the file 2-read_file.js

Create a function named countStudents. It should accept a path in argument
The script should attempt to read the database file synchronously
If the database is not available, it should throw an error with the text Cannot load the database
If the database is available, it should log the following message to the console Number of students: NUMBER_OF_STUDENTS
It should log the number of students in each field, and the list with the following format: Number of students in FIELD: 6. List: LIST_OF_FIRSTNAMES
CSV file can contain empty lines (at the end) - and they are not a valid student!
*/
const fs = require('fs');

function countStudents (path) {
  try {
    // Read the file synchronously
    const data = fs.readFileSync(path, 'utf-8');

    // Split the file content into lines and filter out empty lines
    const lines = data.split('\n').filter((line) => line.trim() !== '');

    // Remove the header line
    lines.shift();

    // Create an object to store the students by field
    const studentsByField = {};

    // Process each line
    for (const line of lines) {
      const [firstname, , , field] = line.split(',');

      // Initialize the field array if not already done
      if (!studentsByField[field]) {
        studentsByField[field] = [];
      }

      // Add the student's firstname to the appropriate field
      studentsByField[field].push(firstname);
    }

    // Calculate the total number of students
    const totalStudents = lines.length;

    console.log(`Number of students: ${totalStudents}`);

    // Log the number of students in each field and their names
    for (const field in studentsByField) {
      const students = studentsByField[field];
      console.log(`Number of students in ${field}: ${students.length}. List: ${students.join(', ')}`);
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
