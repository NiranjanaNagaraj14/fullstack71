import React, { useState } from "react";

const initialStudents = [
  { id: 1, name: "Nisha", present: false },
  { id: 2, name: "Adhithya", present: false },
  { id: 3, name: "Inba", present: false },
  { id: 4, name: "Aaradhya", present: false },
  { id: 5, name: "Agan", present: false },
];

export default function Attendance() {
  const [students, setStudents] = useState(initialStudents);

  const toggleAttendance = (id) => {
    setStudents(
      students.map((student) =>
        student.id === id
          ? { ...student, present: !student.present }
          : student
      )
    );
  };

  const presentCount = students.filter((s) => s.present).length;
  const absentCount = students.length - presentCount;

  return (
    <div style={styles.container}>
      <h2>Attendance Tracker</h2>

      <div style={styles.summary}>
        <span>✅ Present: {presentCount}</span>
        <span>❌ Absent: {absentCount}</span>
      </div>

      <ul style={styles.list}>
        {students.map((student) => (
          <li key={student.id} style={styles.listItem}>
            <span>{student.name}</span>
            <button
              onClick={() => toggleAttendance(student.id)}
              style={{
                ...styles.button,
                backgroundColor: student.present ? "#076d0aff" : "#f44336",
              }}
            >
              {student.present ? "Present" : "Absent"}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

const styles = {
  container: {
    backgroundColor: "#e9ec0dff",
    color: "black",
    maxWidth: "400px",
    margin: "40px auto",
    padding: "20px",
    fontFamily: "Arial, sans-serif",
    border: "1px solid #ddd",
    borderRadius: "8px",
  },
  summary: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "15px",
    fontWeight: "bold",
  },
  list: {
    listStyle: "none",
    padding: 0,
  },
  listItem: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "8px",
    borderBottom: "1px solid #eee",
  },
  button: {
    padding: "6px 12px",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
};

              
