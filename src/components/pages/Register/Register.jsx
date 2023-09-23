import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Register.css';


function Register() {
  return (
    <div className="container">
      <div className="design">
        <div className="pill-1 rotate-45"></div>
        <div className="pill-2 rotate-45"></div>
        <div className="pill-3 rotate-45"></div>
        <div className="pill-4 rotate-45"></div>
      </div>
      <div className="login">
      
        <h3 className="title">Register Here</h3>
        <div className="text-input">
          
          <input type="text" placeholder="Username or Email" />
        </div>
        <div className="text-input">
          
          <input type="password" placeholder="Create a Password" />
        </div>
        <div className="text-input">
          
          <input type="password" placeholder="Re-Enter Password" />
        </div>
        <button className="login-btn">SUBMIt</button>
        
       
      </div>
    </div>
  );
}

export default Register;