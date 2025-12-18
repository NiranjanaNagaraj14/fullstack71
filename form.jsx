import React, { useState } from "react";

export default function Form() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    age: "",
    password: "",
    confirmPass: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let formErrors = {};

    // Required Field Validation
    if (!form.name) formErrors.name = "Name is required";

    // Regular Expression Validation (Email)
    if (!form.email) {
      formErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      formErrors.email = "Invalid email format";
    }

    // Regular Expression Validation (Phone)
    if (!form.phone) {
      formErrors.phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(form.phone)) {
      formErrors.phone = "Phone number must be 10 digits";
    }

    // Range Validation (Age between 18 and 60)
    if (!form.age) {
      formErrors.age = "Age is required";
    } else if (form.age < 18 || form.age > 60) {
      formErrors.age = "Age must be between 18 and 60";
    }

    // Password Validation
    if (!form.password) {
      formErrors.password = "Password is required";
    } else if (form.password.length < 6) {
      formErrors.password = "Password must be at least 6 characters";
    }

    // Compare Validation (Password Match)
    if (!form.confirmPass) {
      formErrors.confirmPass = "Confirm Password is required";
    } else if (form.confirmPass !== form.password) {
      formErrors.confirmPass = "Passwords do not match";
    }

    setErrors(formErrors);

    if (Object.keys(formErrors).length === 0) {
      alert("Form Submitted Successfully ✔");
      console.log(form);
    }
  };

  return (
    <div className="page">
      <style>{`
        * { box-sizing: border-box; font-family: 'Segoe UI', sans-serif; }
        .page {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #667eea, #764ba2);
        }
        .card {
          background: #fff;
          padding: 25px 30px;
          width: 340px;
          border-radius: 15px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.25);
          animation: fadeIn 0.8s ease;
        }
        h2 {
          text-align: center;
          margin-bottom: 20px;
          color: #4a4a4a;
        }
        input {
          width: 100%;
          padding: 10px;
          margin-top: 10px;
          border-radius: 8px;
          border: 1px solid #ccc;
          outline: none;
          transition: 0.3s;
        }
        input:focus {
          border-color: #667eea;
          box-shadow: 0 0 5px rgba(102,126,234,0.6);
        }
        .error {
          color: #e63946;
          font-size: 12px;
          margin: 3px 0 0 5px;
        }
        button {
          width: 100%;
          margin-top: 20px;
          padding: 10px;
          background: linear-gradient(135deg, #667eea, #764ba2);
          color: white;
          border: none;
          border-radius: 8px;
          font-size: 16px;
          cursor: pointer;
          transition: transform 0.2s, box-shadow 0.2s;
        }
        button:hover {
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(0,0,0,0.3);
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }
      `}</style>

      <div className="card">
        <h2>Registration Form</h2>
        <form onSubmit={handleSubmit}>
          <input name="name" placeholder="Full Name" onChange={handleChange} />
          <p className="error">{errors.name}</p>

          <input name="email" placeholder="Email Address" onChange={handleChange} />
          <p className="error">{errors.email}</p>

          <input name="phone" placeholder="Phone Number" onChange={handleChange} />
          <p className="error">{errors.phone}</p>

          <input name="age" type="number" placeholder="Age" onChange={handleChange} />
          <p className="error">{errors.age}</p>

          <input type="password" name="password" placeholder="Password" onChange={handleChange} />
          <p className="error">{errors.password}</p>

          <input type="password" name="confirmPass" placeholder="Confirm Password" onChange={handleChange} />
          <p className="error">{errors.confirmPass}</p>

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}
   
