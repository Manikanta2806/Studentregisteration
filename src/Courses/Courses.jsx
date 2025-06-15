import React,{useState} from 'react'

export default function Courses() {
  const [courses, setCourse] = useState(["Hindi"]);
    const [newCourse, setNewCourse] = useState("");
    const [editingIndex, setEditingIndex] = useState(null);
    const [editedValue, setEditedValue] = useState("");
  
  
    const handleCreate = () => {
      if (newCourse.trim() !== "") {
        setCourse([...courses, newCourse.trim()]);
        setNewCourse("");
      }
    };
  
    const handleDelete = (index) => {
      const updated = courses.filter((_, i) => i !== index);
      setCourse(updated);
    };
  

    const startEditing = (index) => {
      setEditingIndex(index);
      setEditedValue(courses[index]);
    };
  

    const handleUpdate = () => {
      const updated = [...courses];
      updated[editingIndex] = editedValue;
      setCourse(updated);
      setEditingIndex(null);
    };
  
    return (
      <div className='container'>
        <h2 className='text-center mt-4 mb-5'>Courses</h2>
  
  
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="New course"
            value={newCourse}
            onChange={(e) => setNewCourse(e.target.value)}
          />
          <button className="btn btn-primary" onClick={handleCreate}>Add</button>
        </div>
  
        <ul className="list-group">
          {courses.map((type, index) => (
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
