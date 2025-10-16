// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import StudentForm from "./StudentForm";

function Home() {
  return (
    <div style={{ padding: 20 }}>
      <h2>Welcome to the School App</h2>
      <p>
        Use the navigation to open the student form.
      </p>
      <Link to="/studentform">Go to Student Form</Link>
    </div>
  );
}

function App() {
  return (
    <Router>
      <div style={{ fontFamily: "Arial, sans-serif" }}>
        <header style={{ padding: 12, borderBottom: "1px solid #ddd" }}>
          <h1 style={{ margin: 0 }}>School App</h1>
        </header>

        <main style={{ padding: 20 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/studentform" element={<StudentForm />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
