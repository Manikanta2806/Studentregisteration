import React from 'react';
import { Link } from 'react-router-dom'

export default function Home() {
    return (
        <div className="container mt-5">
            <h1 className="text-center mb-5">Welcome to Students Application</h1>

            <div className="d-flex justify-content-center mb-4">
                <div className="card w-75 cardbody">
                    <div className="card-body">
                        <h5 className="card-title">Courses</h5>
                        <p className="card-text"> Hindi, English, Urdu etc..</p>
                        <Link to="/courses" className="btn btn-primary but">Manage</Link>
                    </div>
                </div>
            </div>

            <div className="d-flex justify-content-center mb-4">
                <div className="card w-75 cardbody" >
                    <div className="card-body">
                        <h5 className="card-title">Course Types</h5>
                        <p className="card-text">Individual, Group, and Special classNamees</p>
                        <Link to="/coursetype" className="btn btn-primary but">Manage</Link>
                    </div>
                </div>
            </div>
            <div className="d-flex justify-content-center mb-4">
                <div className="card w-75 cardbody" >
                    <div className="card-body">
                        <h5 className="card-title">Course Offerings</h5>
                        <p className="card-text">combining courses with course types.</p>
                        <Link to="/courseoffering" className="btn btn-primary but">Manage</Link>
                    </div>
                </div>
            </div>
            <div className="d-flex justify-content-center mb-5">
                <div className="card w-75 cardbody" >
                    <div className="card-body">
                        <h5 className="card-title">Registrations</h5>
                        <p className="card-text">Register students and view existing registrations</p>
                        <Link to="/Registration" className="btn btn-primary but">Manage</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
