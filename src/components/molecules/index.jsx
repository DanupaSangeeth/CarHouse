
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from "react-router-dom";
import CarA123 from '../assets/CarA123.png';
import './Navbar.css';






const Navbar =()=>{
return(
  <div>
    
    <nav class= "navbar navbar-expand-lg"  style= {{backgroundColor:"white"}}>
    <a class="nav-link active" href="#"></a>
    

    
    
   
  <div class="container-fluid">
  
    <a style={{color:'black'}} class="navbar-brand" href="/home"><img src={CarA123} alt="CC" width={100} height={40}/> CaR_CRafT</a>

    


    <form class="d-flex"  role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    
   

    <ul id='hello' class="nav justify-content-end">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
    
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        
        <li class="nav-link active" >
          <NavLink id="Navhh"  className="nav-link" to="/" exact>
            <i style={{color:'blue'}} className="fas fa-tachometer-alt">Home</i>
          </NavLink>
        </li>
        <li class="nav-link active" >
          <NavLink  id="Navhh"className="nav-link" to="/about" target="_blank"exact>
            <i  style={{color:'blue'}}className="fas fa-tachometer-alt">About</i>
          </NavLink>
        </li>
        
        <li id="ddddq" className="Navhh1" style={{color:'white'}} class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" style={{color:'blue'}} role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Brand
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Lamboghini</a></li>
            <li><a class="dropdown-item" href="#">Ferrari</a></li>
            <li><a class="dropdown-item" href="#">Aston Martin</a></li>
            <li><a class="dropdown-item" href="#">Porsche</a></li>
            <li><a class="dropdown-item" href="#">Jaguar</a></li>
          </ul>
        </li>


        <li class="nav-item">
        <li class="nav-link active" >
          <NavLink   className="nav-link" to="/signup" exact  class="nav-link-mobile"  >
            <i style={{color:'blue'}} aria-current="page" className="fas fa-tachometer-alt"><button type="button" class="btn btn-outline-secondary">Sign Up</button></i>
          </NavLink>
        </li>
       
        </li>
      </ul>
      
    </div>
    </ul>
    
  </div>
  
  </nav>
  
 </div>
 

);
}
export default Navbar;
