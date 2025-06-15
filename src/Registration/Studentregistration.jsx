import React, { useState } from 'react';

export default function Studentregistration() {
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [Mobile, setMobile] = useState("");
  const [CourseType, setCourseType] = useState("");
  const [FilterType, setFilterType] = useState("");
  const [students, setStudents] = useState([]);

  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?#&])[A-Za-z\d@$!%*?#&]{8,}$/;

  const handleRegister = () => {
    if (!passwordRegex.test(Password)) {
      alert("Password must be at least 8 characters and include uppercase, lowercase, number, and special character.");
      return;
    }

    const newStudent = {
      name: Name,
      email: Email,
      mobile: Mobile,
      courseType: CourseType,
    };

    setStudents([...students, newStudent]);
    alert("Student registered successfully!");

    setName("");
    setEmail("");
    setPassword("");
    setMobile("");
    setCourseType("");
  };

  const filteredStudents = FilterType
    ? students.filter((student) => student.courseType === FilterType)
    : students;

  return (
    <div className='container'>
      <h2 className='text-center mt-5'>Student Registration</h2>

      <div className='d-flex mt-5 align-items-center'>
        <button
          className='btn btn-primary w-50 me-3 p-3'
          data-bs-toggle="modal"
          data-bs-target="#modalpoint"
        >
          Register
        </button>

        <select
          className="form-select form-select-sm w-25"
          value={FilterType}
          onChange={(e) => setFilterType(e.target.value)}
        >
          <option value="">All Course Types</option>
          <option value="Individual">Individual</option>
          <option value="Group">Group</option>
        </select>
      </div>

      <div className="mt-4">
        <h5>Registered Students ({filteredStudents.length})</h5>
        {filteredStudents.length === 0 ? (
          <p>No students registered yet.</p>
        ) : (
          <ul className="list-group">
            {filteredStudents.map((student, index) => (
              <li key={index} className="list-group-item">
                <strong>{student.name}</strong> - {student.email} - {student.mobile} - <em>{student.courseType}</em>
              </li>
            ))}
          </ul>
        )}
      </div>

    
      <div className="modal fade" id="modalpoint" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="modalLabel" aria-hidden="true">
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="modalLabel">Register Student</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>

            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label className='form-label'>Username:</label>
                  <input type="text" className='form-control' value={Name} placeholder='Enter your name' onChange={(e) => setName(e.target.value)} />
                </div>

                <div className="mb-3">
                  <label className='form-label'>Email:</label>
                  <input type="email" className='form-control' value={Email} placeholder='Enter your email' onChange={(e) => setEmail(e.target.value)} />
                </div>

                <div className="mb-3">
                  <label className='form-label'>Password:</label>
                  <input type="password" className='form-control' value={Password} placeholder='Enter your password' onChange={(e) => setPassword(e.target.value)} />
                </div>

                <div className="mb-3">
                  <label className='form-label'>Mobile:</label>
                  <input type="tel" className='form-control' value={Mobile} placeholder='Enter your mobile number' onChange={(e) => setMobile(e.target.value)} />
                </div>

                <div className="mb-3">
                  <label className='form-label'>Course Type:</label>
                  <select
                    className="form-select"
                    value={CourseType}
                    onChange={(e) => setCourseType(e.target.value)}
                  >
                    <option value="">Select Course Type</option>
                    <option value="Individual">Individual</option>
                    <option value="Group">Group</option>
                  </select>
                </div>
              </form>
            </div>

            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
              <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={handleRegister}>Register</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
