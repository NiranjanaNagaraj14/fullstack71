import React, { useState } from "react";

export default function Course(){
  const [course, setCourse] = useState("");
  const [enrolledCourses, setEnrolledCourses] = useState([]);

  const handleEnroll = (e) => {
    e.preventDefault();

    if (!course.trim()) return;

    setEnrolledCourses([...enrolledCourses, course]);
    setCourse("");
  };

  const handleRemove = (index) => {
    setEnrolledCourses(enrolledCourses.filter((_, i) => i !== index));
  };

  return (
    <div style={styles.container}>
      <h2>Course Enrollment</h2>

      <form onSubmit={handleEnroll} style={styles.form}>
        <input
          type="text"
          placeholder="Enter course name"
          value={course}
          onChange={(e) => setCourse(e.target.value)}
          style={styles.input}
        />
        <button type="submit" style={styles.button}>
          Enroll
        </button>
      </form>

      <h3>Enrolled Courses</h3>
      {enrolledCourses.length === 0 ? (
        <p>No courses enrolled yet.</p>
      ) : (
        <ul style={styles.list}>
          {enrolledCourses.map((c, index) => (
            <li key={index} style={styles.listItem}>
              {c}
              <button
                onClick={() => handleRemove(index)}
                style={styles.removeButton}
              >
                ✖
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "400px",
    margin: "40px auto",
    padding: "20px",
    fontFamily: "Arial, sans-serif",
    border: "1px solid #ddd",
    borderRadius: "8px",
  },
  form: {
    display: "flex",
    gap: "10px",
    marginBottom: "20px",
  },
  input: {
    flex: 1,
    padding: "8px",
    fontSize: "16px",
  },
  button: {
    padding: "8px 12px",
    fontSize: "16px",
    cursor: "pointer",
  },
  list: {
    padding: 0,
    listStyle: "none",
  },
  listItem: {
    display: "flex",
    justifyContent: "space-between",
    padding: "8px",
    borderBottom: "1px solid #eee",
  },
  removeButton: {
    background: "none",
    border: "none",
    color: "red",
    cursor: "pointer",
    fontSize: "16px",
  },
};
