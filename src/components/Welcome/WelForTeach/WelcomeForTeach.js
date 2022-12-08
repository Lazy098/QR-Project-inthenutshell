import React from 'react';
import './WelcomeForTeach.css';
import { Link } from 'react-router-dom';

const WelcomeForTeach = () => {
  return (
    <div>
        <div className="container">
            <h3>Welcome to the attendance checking system</h3>
            <div className="body">
                <div className="small_container">
                <button><Link to="/infor">Your account</Link></button>
                </div>
                <div className="small_container">
                <button><Link to="/notification">Notification</Link></button>
                </div>
                <div className="small_container">
                <button><Link to="/course2">Course</Link></button>
                </div>
                <div className="small_container">
                <button><Link to="/login">Log out</Link></button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default WelcomeForTeach;