import React from 'react'
import './PreviewQR.css';

const ReviewQR = () => {
  return (
    <div>
        <div>
            <div className="container">
                <h3>Preview QR Code</h3>
            <div className="body">
                <img src="ChainsawMan_GN01_C1_Catalog.0.jpg" /><br />
                <a id="generate" href>Generate</a>
            </div>
        </div>
            <div className="footer">
                <a href>Back</a>
                <a id="confirm" href>Confirm</a>
            </div>
        </div>
    </div>
  )
}

export default ReviewQR;