import React, { useState } from 'react';

export default function CourseOffering() {
  const [offerings, setOfferings] = useState([]);
  const [courseName, setCourseName] = useState("");
  const [courseType, setCourseType] = useState("");

  const handleAddOffering = (e) => {
    e.preventDefault();
    if (courseName.trim() && courseType) {
      setOfferings([...offerings, { name: courseName.trim(), type: courseType }]);
      setCourseName("");
      setCourseType("");
    }
  };

  const handleUpdateName = (index, value) => {
    const updated = [...offerings];
    updated[index].name = value;
    setOfferings(updated);
  };

  const handleUpdateType = (index, value) => {
    const updated = [...offerings];
    updated[index].type = value;
    setOfferings(updated);
  };

  const handleDelete = (index) => {
    const updated = offerings.filter((_, i) => i !== index);
    setOfferings(updated);
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4 text-center">Course Offerings</h2>

      <div className="card mb-4">
        <div className="card-header bg-primary text-white">Create Course Offering</div>
        <div className="card-body">
          <form onSubmit={handleAddOffering}>
            <div className="row mb-3">
              <div className="col-md-6">
                <label className="form-label">Course Name</label>
                <input
                  type="text"
                  className="form-control"
                  value={courseName}
                  onChange={(e) => setCourseName(e.target.value)}
                  placeholder="Enter Course (e.g., English)"
                />
              </div>
              <div className="col-md-6">
                <label className="form-label">Course Type</label>
                <select
                  className="form-select"
                  value={courseType}
                  onChange={(e) => setCourseType(e.target.value)}
                >
                  <option value="">Select Type</option>
                  <option value="Individual">Individual</option>
                  <option value="Group">Group</option>
                  <option value="Special">Special</option>
                </select>
              </div>
            </div>
            <button type="submit" className="btn btn-success">Add Offering</button>
          </form>
        </div>
      </div>

      <div className="card">
        <div className="card-header bg-secondary text-white">Available Course Offerings</div>
        <div className="card-body">
          {offerings.length === 0 ? (
            <p className="text-muted">No offerings available.</p>
          ) : (
            <table className="table table-bordered">
              <thead className="table-light">
                <tr>
                  <th>s.no</th>
                  <th>Course Name</th>
                  <th>Course Type</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {offerings.map((offering, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>
                      <input
                        type="text"
                        className="form-control"
                        value={offering.name}
                        onChange={(e) => handleUpdateName(index, e.target.value)}
                      />
                    </td>
                    <td>
                      <select
                        className="form-select"
                        value={offering.type}
                        onChange={(e) => handleUpdateType(index, e.target.value)}
                      >
                        <option value="Individual">Individual</option>
                        <option value="Group">Group</option>
                        <option value="Special">Special</option>
                      </select>
                    </td>
                    <td>
                      <button className="btn btn-danger btn-sm" onClick={() => handleDelete(index)}>
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
}
