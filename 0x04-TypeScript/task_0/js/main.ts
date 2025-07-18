// Defining the Student Interface.
interface Student {
    firstName:string;
    lastName:string;
    age: number;
  location: string;
}

// Create two students
const student1: Student = {
    firstName: 'Kile',
    lastName: 'Muluvhu',
    age: 26,
    location: 'Johannesburg'
  };
  
  const student2: Student = {
    firstName: 'Alex',
    lastName: 'Smith',
    age: 28,
    location: 'Pretoria'
  };

  const studentsList: Student[]=[student1,student2];

  // Render a table using Vanilla JavaScript
function renderTable(students: Student[]): void {
    // Create table element
    const table = document.createElement('table');
    const tbody = document.createElement('tbody');
  
    // Create header row
    const headerRow = document.createElement('tr');
    const header1 = document.createElement('th');
    header1.textContent = 'First Name';
    const header2 = document.createElement('th');
    header2.textContent = 'Location';
    
    headerRow.appendChild(header1);
    headerRow.appendChild(header2);
    tbody.appendChild(headerRow);
  
    // Append a row for each student
    students.forEach(student => {
      const row = document.createElement('tr');
      
      const firstNameCell = document.createElement('td');
      firstNameCell.textContent = student.firstName;
      
      const locationCell = document.createElement('td');
      locationCell.textContent = student.location;
      
      row.appendChild(firstNameCell);
      row.appendChild(locationCell);
      tbody.appendChild(row);
    });
  
    table.appendChild(tbody);
    document.body.appendChild(table);
  }
  
  // Call the render function
  renderTable(studentsList);