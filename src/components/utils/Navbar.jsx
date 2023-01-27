import React from 'react'
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, NavLink } from 'react-router-dom';
import '../style/Navbar.css'





const Navbars = () => {

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/" >
            <h3 >My-Portafolio</h3>
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">

            <ul className="navbar-nav   ">
              <NavLink to="/inicio" className="nav-link active" >
                <span aria-current="page" >AboutMe</span>
              </NavLink>
              <Link to="/experiencia" className="nav-link active" >
                <span aria-current="page" >Experience</span>
              </Link>
              <Link to="/educacion" className="nav-link active" >
                <span aria-current="page" >Education</span>
              </Link>
              <Link to="/aptitudes" className="nav-link active" >
                <span aria-current="page" >Aptitudes</span>
              </Link>
              <Link to="/proyectos" className="nav-link active" >
                <span aria-current="page" >Projects</span>
              </Link>
            </ul>
            <div className='NavDrop'>

            <NavDropdown title="Contact" id="basic-nav-dropdown">
              <NavDropdown.Item href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox" target='_blank'>Gmail</NavDropdown.Item>
              <NavDropdown.Item href="https://www.linkedin.com/in/ruben-oros-02616121a/" target='_blank'>Linkedin</NavDropdown.Item>
              <NavDropdown.Item href="https://github.com/OrosRuben79" target='_blank'>GiHub</NavDropdown.Item>
              <NavDropdown.Item href="https://twitter.com/ruben_oros1" target='_blank'>Twiter</NavDropdown.Item>
                <NavDropdown.Divider />
                  <NavDropdown.Item href="https://wa.me/2615730454"  target='_blank'>
                    Whatsap
                  </NavDropdown.Item>
            </NavDropdown>
           
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbars;
