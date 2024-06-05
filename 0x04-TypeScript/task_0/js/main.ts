interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: 'John',
  lastName: 'Doe',
  age: 32,
  location: 'Texas'
};

const student2: Student = {
  firstName: 'Jane',
  lastName: 'Doe',
  age: 27,
  location: 'Illinois'
};

const studentList: Student [] = [student1, student2];

const table = document.createElement('table');

studentList.forEach((student) => {
  const row = table.insertRow();
  const firstNameCell = row.insertCell();
  const locationCell = row.insertCell();
  firstNameCell.innerHTML = student.firstName;
  locationCell.innerHTML = student.location;
});

document.body.appendChild(table);
