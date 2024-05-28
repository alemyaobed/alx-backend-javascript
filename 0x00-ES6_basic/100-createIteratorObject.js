export default function createIteratorObject(report) {
  const { allEmployees } = report;

  function* employeeGenerator(employees) {
    for (const [, employeeList] of Object.entries(employees)) {
      for (const employee of employeeList) {
        yield employee;
      }
    }
  }

  return employeeGenerator(allEmployees);
}
