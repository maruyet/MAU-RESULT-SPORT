const students = [
  { id: '101', name: 'Alice', marks: 89 },
  { id: '102', name: 'Bob', marks: 76 },
  { id: '103', name: 'Charlie', marks: 92 }
];

function searchStudent() {
  const query = document.getElementById("searchInput").value.trim().toLowerCase();
  const resultDiv = document.getElementById("result");

  const student = students.find(
    s => s.id === query || s.name.toLowerCase() === query
  );

  if (student) {
    resultDiv.innerHTML = `
      <p><strong>Name:</strong> ${student.name}</p>
      <p><strong>ID:</strong> ${student.id}</p>
      <p><strong>Marks:</strong> ${student.marks}</p>
    `;
  } else {
    resultDiv.innerHTML = "<p style='color:red;'>Student not found.</p>";
  }
}
