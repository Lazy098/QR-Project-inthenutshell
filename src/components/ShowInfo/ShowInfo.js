import React from 'react';
import './ShowInfo.css';

const ShowInfo = () => {
  return (
    <div>
            <div className="container">
                <h1>Information</h1>
            <div className="body">
                <p>Name:</p>
                <p>DoB:</p>                  
                <p>Current Lecture:</p>
            <div className="footer">
                <button>Back</button>
                <button>Edit Profile</button>
            </div>
            </div>
        </div>
    </div>
  )
}

export default ShowInfo