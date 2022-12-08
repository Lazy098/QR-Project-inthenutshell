import React from 'react';
import './Course1.css';

const Course1 = () => {
  return (
    <div>
        <div className="container">
            <h3>Course</h3>
        <div className="body">
            <div className="course">
                <a href>Advance Python</a><br />
                <a href>Algebraic Structure</a><br />
                <a href>ADS</a><br />
                <a href>Web Development</a><br />
                <a href>Mobile Wireless</a><br />
                <a href>Calculus I</a><br />
                <a href>Calculus II</a><br />
                <a href>Machine Learning</a><br />
                <a href>Linear Algebra</a><br />
                <a href>Signal & System</a><br />
                <a href>Probability</a><br />
                <a href>Operation System</a><br />
                <a href>Graph Theory</a><br />
            </div>
        </div>
            <div className="footer">
                <button><a id="back" href>Back</a></button>
                <button><a id="download" href>Download</a></button>
            </div>
        </div>
    </div>
  )
}

export default Course1;