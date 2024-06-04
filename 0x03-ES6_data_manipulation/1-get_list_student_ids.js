// Create a function getListStudentIds that returns an array of ids from a list of object.
// This function is taking one argument which is an array of objects - and this array is the same
// format as getListStudents from the previous task.
// If the argument is not an array, the function is returning an empty array.
// You must use the map function on the array.
export default function getListStudentIds(studentList) {
  // const result = [];
  // if (Array.isArray(studentList)) {
  //   for (const object of studentList) {
  //     result.push(object.id);
  //   }
  // }
  // return result;

  // Check if the argument is an array using Array.isArray()
  if (!Array.isArray(studentList)) {
    return []; // Return an empty array if not an array
  }

  // Use map() to iterate over the students array and extract the 'id' property
  return studentList.map((student) => student.id);
}
