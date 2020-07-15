import React from 'react'
import {Link} from 'react-router-dom'
import logo from './personal_logo_short_nobg.png';
import {Navbar, Nav} from 'react-bootstrap'

class Navigation extends React.Component {

  render() {

    return (<div>
      <Navbar expand="lg" className="navbar-dark links">
        <Navbar.Brand href="#home">
          <Link to="/"><img id='nav-logo' src={logo} alt=""/></Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="ml-auto"/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#home" className="ml-auto">
              <Link to="/" className="link">Home</Link>
            </Nav.Link>
            <Nav.Link href="#about" className="ml-auto">
              <Link to="/about" className="link">About</Link>
            </Nav.Link>
            <Nav.Link href="#projects" className="ml-auto">
              <Link to="/projects" className="link">Projects</Link>
            </Nav.Link>
            <Nav.Link href="#blog" className="ml-auto">
              <Link to="/blog" className="link">Blog</Link>
            </Nav.Link>
            <Nav.Link href="#contact" className="ml-auto">
              <Link to="/contact" className="link">Contact</Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <div className="white-line"></div>
    </div>)

  }
}

export default Navigation;
