import React from 'react'
import {NavLink} from 'react-router-dom'
export default function Navbar(props) {
  // var isActive = this.context.router.route.location.pathname === this.props.to;
  // var className = isActive ? 'active' : '';
  return (
<nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
    <div className="container-fluid">
      <NavLink  className="navbar-brand" to="/">{props.title}</NavLink >
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse " id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb mb-lg-0">
          <li className="nav-item">
            <NavLink  className="nav-link"  activeClassName="active" aria-current="page" to="/">Home</NavLink >

          </li>
          <li className="nav-item">
            <NavLink  className="nav-link"  activeClassName="active" to="/about">{props.about}</NavLink >
          </li>
          
         
        </ul>
        <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
      { <div className="form-check form-switch" >
  <input className="form-check-input" type="checkbox"  onClick={() =>props.toggleMode(null)} role="switch" id="flexSwitchCheckDefault" />
  <label className={`form-check-label text-${props.btnText}`} htmlFor="flexSwitchCheckDefault">DarkMode</label>
    </div> }

      {/* <div className='d-flex' >
        <input className='bg-primary rounded mx-2' onClick={() =>props.toggleMode('primary')} style={{height:'30px',width:'30px',cursor:'pointer'}} />
        <input className='bg-secondary rounded mx-2' onClick={() =>props.toggleMode('secondary')} style={{height:'30px',width:'30px',cursor:'pointer'}} />
        <input className='bg-success rounded mx-2' onClick={() =>props.toggleMode('success')} style={{height:'30px',width:'30px',cursor:'pointer'}} />
        <input className='bg-danger rounded mx-2' onClick={() =>props.toggleMode('danger')} style={{height:'30px',width:'30px',cursor:'pointer'}} />
      
      </div> */}

  

    {/* <div className="form-check form-switch" id="Sa"> */}
  {/* <input className="form-check-input" type="checkbox"  onClick={handleChange} role="switch" id="flexSwitchCheckDefault" /> */}
  {/* <label className={`form-check-label text-${props.btnText}`} htmlFor="flexSwitchCheckDefault">Red DarkMode</label> */}
    {/* </div> */}
   
</div>
  </nav>
  )
}
