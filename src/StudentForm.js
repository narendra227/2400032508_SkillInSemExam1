// src/StudentForm.js
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function StudentForm() {
  const [formData, setFormData] = useState({ name: "", age: "", class: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Basic validation
    if (!formData.name.trim() || !formData.age || !formData.class.trim()) {
      alert("Please fill in all fields.");
      return;
    }
    // Example action: show the values (replace with API call if needed)
    alert(`Student submitted:\nName: ${formData.name}\nAge: ${formData.age}\nClass: ${formData.class}`);
    // Optional: clear form or navigate back home
    setFormData({ name: "", age: "", class: "" });
    // navigate("/"); // uncomment if you want to redirect after submit
  };

  return (
    <div style={{ maxWidth: 480, margin: "2rem auto", padding: 16, border: "1px solid #eee", borderRadius: 8 }}>
      <h2>Student Registration Form</h2>

      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: 12 }}>
          <label style={{ display: "block", marginBottom: 6 }}>Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter name"
            required
            style={{ width: "100%", padding: 8 }}
          />
        </div>

        <div style={{ marginBottom: 12 }}>
          <label style={{ display: "block", marginBottom: 6 }}>Age</label>
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            placeholder="Enter age"
            required
            min="1"
            style={{ width: "100%", padding: 8 }}
          />
        </div>

        <div style={{ marginBottom: 12 }}>
          <label style={{ display: "block", marginBottom: 6 }}>Class</label>
          <input
            type="text"
            name="class"
            value={formData.class}
            onChange={handleChange}
            placeholder="Enter class (e.g., 10A)"
            required
            style={{ width: "100%", padding: 8 }}
          />
        </div>

        <div style={{ display: "flex", gap: 8 }}>
          <button type="submit" style={{ padding: "8px 16px" }}>Submit</button>
          <Link to="/" style={{ alignSelf: "center" }}>Back to Home</Link>
        </div>
      </form>
    </div>
  );
}

export default StudentForm;
