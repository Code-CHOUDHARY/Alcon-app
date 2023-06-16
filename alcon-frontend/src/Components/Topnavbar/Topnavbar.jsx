import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';   
import {
  FaBell, FaCog, FaSignOutAlt, FaUser,

} from "react-icons/fa";

function Topnavbar() {
  return (
    <>
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#">Alcon</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse>
        <Nav style={{marginLeft:"900px"}}>
          <Nav.Link href="#">
          <FaBell style={{ fontSize: '1.5rem' }}/>
      </Nav.Link>
          <NavDropdown
            title={
              <FaUser style={{ fontSize: '1.5rem' }}/>
            } >
            <NavDropdown.Item href="#"><FaUser/> My Profile</NavDropdown.Item>
            <NavDropdown.Item href="#"><FaCog /> Settings</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#"><FaSignOutAlt /> Logout</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    </>
  )
}

export default Topnavbar