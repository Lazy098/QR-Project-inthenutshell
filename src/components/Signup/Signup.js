import React from 'react'
import './Signup.css';

const Signup = () => {
    const myFunction = () =>{
        var x = document.getElementById("myInput1");
        var y = document.getElementById("myInput2");
        if (x.type === "password" && y.type === "password") {
          x.type = "text";
          y.type = "text";
        } else {
          x.type = "password";
          y.type = "password";
        }
    }
    return (
        <div>
            <div className="container">
                <h1>Sign Up</h1>
            <div className="form">
                <input type="text" placeholder="Enter your name" />
                <input type="text" placeholder="Enter your email" />
                <input type="password" placeholder="Enter password..." id="myInput1" />
                <input type="password" placeholder="Re-enter password..." id="myInput2" />
                <input type="checkbox" onclick="myFunction()" className="check" />Show Password
            </div>
                <button>Register</button>
            </div>
        </div>
  )
}

export default Signup;