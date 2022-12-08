import React from 'react';
import './Infor.css';

const Infor = () => {
  return (
    <div>
        <div className="container">
            <h3>Please enter your information</h3>
            <div className="body">
                <div className="name">
                <p>Full name:</p>
                <input type="text" />
                </div>
                <div className="date">
                <p>DoB:</p>
                <input type="text" />
                </div>
                <div className="major">
                <p>Major:</p>    
                <select>
                    <option value="AM">AM</option>
                    <option value="ATE">ATE</option>
                    <option value="AES">AES</option>
                    <option value="AMSN">AMSN</option>
                    <option value="CS">CS</option>
                    <option value="CHEM">CHEM</option>
                    <option value="DS">DS</option>
                    <option value="EER">EER</option>
                    <option value="EPE">EPE</option>
                    <option value="FST">FST</option>
                    <option value="ICT">ICT</option>
                    <option value="MST">MST</option>
                    <option value="MET">MET</option>
                    <option value="PAE">PAE</option>
                    <option value="PMAB">PMAB</option>
                    <option value="SSST">SSST</option>
                </select>
                </div>
                <div className="id">
                <p>Student ID:</p>
                <input type="text" />
                </div>
                <div className="gender">
                <p>Gender:</p>
                <select>
                    <option value="male">male</option>
                    <option value="female">female</option>
                </select>
                </div>  
            </div>
            <div className="footer">
                <button>Cancel</button>
                <button>Accept</button>
            </div>
        </div>
    </div>
  )
}

export default Infor;