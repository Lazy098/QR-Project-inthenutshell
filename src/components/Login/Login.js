import React from 'react';
import './Login.css';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
        <div className="container">
            <h1>Login</h1>
            <p className="sign">Sign in to your account</p>
          <div>
            <p>Email:</p>
            <input type="text" placeholder="Enter your email" />
            <p>Password:</p>
            <input type="password" placeholder="Enter your password"/>
            <a className="forget">Forget password</a>
        </div>
            <button>Sign in</button>
          <div className="footer">
            <p>Don't have an Account? <Link to="/signup">Signup</Link></p>
          </div>
        </div>
  )
}

export default Login;