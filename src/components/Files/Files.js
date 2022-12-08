import React from 'react';
import './Files.css'

const Files = () => {
  return (
    <div>
        <div>
            <div className="container">
                <h3>Files</h3>
                <div className="body">
                <div className="small_container">
                    <button>ADS_2021-2022</button>
                </div>
                <div className="small_container">
                    <button>Numerical Method 21-22</button>
                </div>
                <div className="small_container">
                    <button>Advanced Python 21-22</button>
                </div>
                <div className="small_container">
                    <button>Student list</button>
                </div>
                <div className="small_container">
                    <button>Algebraic Structure</button>
                </div>
                </div>
            </div>
            <div className="footer">
                <a href>Back</a>
                <a href>Delete</a>
                <a href>Upload</a>
            </div>
        </div>
    </div>
  )
}

export default Files;