import React from 'react'
import './ScanQR.css'
import { Link } from 'react-router-dom'

const ScanQR = () => {
  return (
    <div>
        <div>
            <div className="container">
                <h3>Scan QR</h3>
                <div className="body">
                <img src="ChainsawMan_GN01_C1_Catalog.0.jpg" />
            </div>
            </div>
            <div className="footer">
                <Link to="/welcome">Back</Link>
            </div>
        </div>
    </div>
  )
}

export default ScanQR;