import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';   
import {
  FaBell, FaCog, FaSignOutAlt, FaUser,

} from "react-icons/fa";

function Topnavbar() {
  return (
    <>
    <Navbar bg="light">
    <Navbar.Brand href="#">
      <h3 className="pl-3">Alcon</h3>
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ml-auto justify-content-end">
        <Nav.Link href="#">
          <FaBell style={{ fontSize: '1.5rem' }} />
        </Nav.Link>
        <NavDropdown
          title={<FaUser style={{ fontSize: '1.5rem' }} />}
          
        >
          <NavDropdown.Item href="#">
            <FaUser /> My Profile
          </NavDropdown.Item>
          <NavDropdown.Item href="#">
            <FaCog /> Settings
          </NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#">
            <FaSignOutAlt /> Logout
          </NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
    </>
  )
}

export default Topnavbar