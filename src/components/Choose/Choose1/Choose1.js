import React from 'react';
import './Choose1.css'

const Choose1 = () => {
  return (
    <div>
        <div className="container">
            <div className="header">
                <h1>Choose Year and Major</h1>
            </div>
            <div className="bodyy">
                <p>Year: </p>
                <select>
                <option value="2020-2021">2020-2021</option>
                <option value="2021-2022">2021-2022</option>
                <option value="2022-2023">2022-2023</option>
                <option value="2023-2024">2023-2024</option>
                </select>
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
            <div className="footer">
                <button>Back</button>
                <button>Confirm</button>
            </div>
        </div>
    </div>
  )
}

export default Choose1;