import React from 'react';
import './Notification.css';
import { Link } from 'react-router-dom';

const Notification = () => {
  return (
    <div>
        <div class="container">
            <h3>Notification</h3>
        <div class="body">
            <div class="small_container">
                <p>You have updated your profile.</p>
            </div>
            <div class="small_container">
                <p>You will have class at 1 PM on 2/2/2022.</p>
            </div>
            <div class="small_container">
                <p>You have updated your profile.</p>
            </div>
            <div class="small_container">
                <p>You have updated your profile.</p>
            </div>
            <div class="small_container">
                <p>You have updated your profile.</p>
            </div>
            <div class="small_container">
                <p>You have updated your profile.</p>
            </div>
            <div class="small_container">
                <p>You have updated your profile.</p>
            </div>
            <div class="small_container">
                <p>You have updated your profile.</p>
            </div>
            <div class="small_container">
                <p>You have updated your profile.</p>
            </div>
            <div class="small_container">
                <p>You have updated your profile.</p>
            </div>
            <div class="small_container">
                <p>You have updated your profile.</p>
            </div>
        </div>
        <div class="footer">
            <button><Link to="/welcome">Back</Link></button>
        </div>
        </div>
    </div>
  )
}

export default Notification;