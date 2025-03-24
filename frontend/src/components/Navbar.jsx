import React from 'react'
import logo from '../assets/logo.ForIT.png'


const Navbar=({brand}) =>{
  return (
   <nav className="navbar bg-dark border-bottom border-body" data-bs-theme="dark">
 <div className="container-fluid" style={ {textAlign:"center",display:"flex", flexWrap:"wrap",flexDirection:"row",justifyItems:"center", alignItems:"center",justifyContent:"space-around"}}>
    <a className="navbar-brand" href="#">
      <img src={logo}alt="Logo" width="150" height="100" className="d-inline-block align-text-top"/>
    {brand}
    </a>   
  </div>
  </nav>
  )
}

export default Navbar;