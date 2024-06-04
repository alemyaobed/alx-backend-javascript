function dictionaryStudent(id, firstName, location) {
  if (!((typeof id === 'number') && (typeof firstName === 'string') && (typeof location === 'string'))) {
    throw new Error('Make sure the types match what is needed');
  }
  const studentDictionary = {
    id,
    firstName,
    location,
  };
  return studentDictionary;
}

export default function getListStudents() {
  const results = [];
  const student1 = dictionaryStudent(1, 'Guillaume', 'San Francisco');
  const student2 = dictionaryStudent(2, 'James', 'Columbia');
  const student3 = dictionaryStudent(5, 'Serena', 'San Francisco');
  results.push(student1, student2, student3);
  return results;
}
