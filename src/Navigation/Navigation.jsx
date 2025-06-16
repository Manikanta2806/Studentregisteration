import React from 'react'
import { Link } from 'react-router-dom'

export default function Navigation() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3">
      <Link className="navbar-brand" to="/">StudentsApp</Link>
      
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/coursetype">Course Types</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/courses">Course</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/courseoffering">Course Offerings</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/Registration">Registrations</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}
