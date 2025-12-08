import React from "react";

export default function SummerCampRegistration() {
  function handleSubmit(e) {
    e.preventDefault();
    alert("Summer Camp Registration Successful!");
  }

  return (
    <div>
      <style>{`
        body {
          background-color: white;
        }

        .form-container {
          width: 380px;
          background-color: #d7a559ff;
          padding: 20px;
          margin: 40px auto;
          border-radius: 10px;
          font-family: Arial;
        }

        h2 {
          text-align: center;
          margin-bottom: 15px;
        }

        label {
          font-weight: bold;
        }

        input,
        select,
        textarea {
          width: 100%;
          padding: 8px;
          margin-top: 5px;
          margin-bottom: 12px;
          border-radius: 5px;
          border: 1px solid gray;
        }

        .radio-group label,
        .check-group label {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 8px;
          cursor: pointer;
          font-weight: normal;
        }

        .radio-group input,
        .check-group input {
          width: auto;
          margin: 0;
        }

        .submit-btn {
          background-color: #e35d6a;
          color: white;
          border: none;
          padding: 10px;
          width: 65%;
          margin: auto;
          display: block;
          border-radius: 6px;
          cursor: pointer;
          font-size: 16px;
        }

              `}</style>

      <form className="form-container" onSubmit={handleSubmit}>
        <h2>Summer Camp Registration</h2>

        {/* TEXT */}
        <input type="text" placeholder="Student Name" required />

        <input type="email" placeholder="Email Address" required />

        <input type="password" placeholder="Password" />

        <input type="number" placeholder="Age" required />

        <input type="text" placeholder="Parent Contact Number" required />

        {/* RADIO BUTTON */}
        <label>Gender:</label>
        <div className="radio-group">
          <label>
            <input type="radio" name="gender" /> Male
          </label>
          <label>
            <input type="radio" name="gender" /> Female
          </label>
          <label>
            <input type="radio" name="gender" /> Other
          </label>
        </div>

       

        {/* CHECKBOX */}
        <label>Activities Interested In:</label>
        <div className="check-group">
          <label>
            <input type="checkbox" /> Drawing
          </label>
          <label>
            <input type="checkbox" /> Dance
          </label>
          <label>
            <input type="checkbox" /> Swimming
          </label>
          <label>
            <input type="checkbox" /> Sports
          </label>
          <label>
            <input type="checkbox" /> Coding
          </label>
        </div>

        {/* DROPDOWN */}
        <label>Select Batch:</label>
        <select>
          <option>--Select Batch--</option>
          <option>Morning Batch</option>
          <option>Afternoon Batch</option>
          <option>Full Day Batch</option>
        </select>

        {/* FILE UPLOAD */}
        <label>Upload Birth Certificate:</label>
        <input type="file" />

        {/* TEXTAREA */}
        <textarea rows="4" placeholder="Any Medical Conditions?"></textarea>

        {/* SUBMIT */}
        <input type="submit" value="Register Now" className="submit-btn" />
      </form>
    </div>
  );
}

