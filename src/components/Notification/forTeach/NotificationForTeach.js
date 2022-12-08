import React from 'react';
import './NotificationForTeach';
import { Link } from 'react-router-dom';

const NotificationForTeach = () => {
  return (
    <div>
        <div className="container">
            <h3>Notification</h3>
            <div className="body">
                <div className="small_container">
                <p>You have updated your profile.</p>
                </div>
                <div className="small_container">
                <p>You will have class at 1 PM on 2/2/2022.</p>
                </div>
                <div className="small_container">
                <p>You have updated your profile.</p>
                </div>
                <div className="small_container">
                <p>You have updated your profile.</p>
                </div>
                <div className="small_container">
                <p>You have updated your profile.</p>
                </div>
                <div className="small_container">
                <p>You have updated your profile.</p>
                </div>
                <div className="small_container">
                <p>You have updated your profile.</p>
                </div>
                <div className="small_container">
                <p>You have updated your profile.</p>
                </div>
                <div className="small_container">
                <p>You have updated your profile.</p>
                </div>
                <div className="small_container">
                <p>You have updated your profile.</p>
                </div>
                <div className="small_container">
                <p>You have updated your profile.</p>
                </div>
            </div>
            <div className="footer">
                <button><Link to="/welcomeforteach">Back</Link></button>
            </div>
        </div>
    </div>
  )
}

export default NotificationForTeach;