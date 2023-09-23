import React from 'react';
import CarV2 from '../assets/CarV2.mp4';
import './Navbar.css';

const Main = () => {
  return (
    <div className='main'>
        <video src={CarV2} autoPlay loop muted />
        <div className="content">
        <h1>Welcome</h1>
        <p>to the CaR_CRafT</p>
        
        </div>
    </div>
  )
}

export default Main;