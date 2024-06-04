// Create a function updateStudentGradeByCity that returns an array
// of students for a specific city with their new grade

// It should accept a list of students (from getListStudents), a city (String), and
// newGrades (Array of “grade” objects) as parameters.

// newGrades is an array of objects with this format:

//   {
//     studentId: 31,
//     grade: 78,
//   }
// If a student doesn’t have grade in newGrades, the final grade should be N/A.

// You must use filter and map combined.

export default function updateStudentGradeByCity(studentList, city, newGrades) {
  if (Array.isArray(studentList) && typeof city === 'string' && Array.isArray(newGrades)) {
    const studentsInCity = studentList.filter((student) => student.location === city);
    // Update grades using map()
    return studentsInCity.map((student) => {
      // Find matching new grade object
      const matchingGrade = newGrades.find((grade) => grade.studentId === student.id);

      // Update grade or set to "N/A" if not found
      return {
        ...student, // Spread existing student properties
        grade: matchingGrade ? matchingGrade.grade : 'N/A',
      };
    });
  }
  return [];
}
