import React, { useState } from 'react';

export default function Coursetypes() {
  const [courseTypes, setCourseTypes] = useState(["Individual", "Group"]);
  const [newCourseType, setNewCourseType] = useState("");
  const [editingIndex, setEditingIndex] = useState(null);
  const [editedValue, setEditedValue] = useState("");


  const handleCreate = () => {
    if (newCourseType.trim() !== "") {
      setCourseTypes([...courseTypes, newCourseType.trim()]);
      setNewCourseType("");
    }
  };

  // Delete course type
  const handleDelete = (index) => {
    const updated = courseTypes.filter((_, i) => i !== index);
    setCourseTypes(updated);
  };

  // Start editing
  const startEditing = (index) => {
    setEditingIndex(index);
    setEditedValue(courseTypes[index]);
  };

  // Update course type
  const handleUpdate = () => {
    const updated = [...courseTypes];
    updated[editingIndex] = editedValue;
    setCourseTypes(updated);
    setEditingIndex(null);
  };

  return (
    <div className='container'>
      <h2 className='text-center mt-4 mb-5'>Course Types</h2>


      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="New course type"
          value={newCourseType}
          onChange={(e) => setNewCourseType(e.target.value)}
        />
        <button className="btn btn-primary" onClick={handleCreate}>Add</button>
      </div>

      <ul className="list-group">
        {courseTypes.map((type, index) => (
          <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
            {editingIndex === index ? (
              <>
                <input
                  type="text"
                  className="form-control me-2"
                  value={editedValue}
                  onChange={(e) => setEditedValue(e.target.value)}
                />
                <button className="btn btn-success me-2 btn-sm" onClick={handleUpdate}>Save</button>
                <button className="btn btn-secondary btn-sm" onClick={() => setEditingIndex(null)}>Cancel</button>
              </>
            ) : (
              <>
                <span>{type}</span>
                <div>
                  <button className="btn btn-outline-info btn-sm me-2" onClick={() => startEditing(index)}>Edit</button>
                  <button className="btn btn-outline-danger btn-sm" onClick={() => handleDelete(index)}>Delete</button>
                </div>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
