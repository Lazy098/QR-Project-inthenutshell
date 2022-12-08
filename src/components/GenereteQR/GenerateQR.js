import React from 'react';
import './GenerateQR.css'

const GenerateQR = () => {
  return (
    <div>
        <div>
            <div className="container">
                <h3>Course's name</h3>
            <div className="body">
            <div className="small_container">
                <button>Generate QR</button>
            </div>
            <div className="small_container">
                <button>Your Files</button>
            </div>
        </div>
    </div>
        <div className="footer">
            <a href>Back</a>
        </div>
        </div>
    </div>
  )
}

export default GenerateQR