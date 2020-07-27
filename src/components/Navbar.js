import React from 'react'
import { Navbar, Nav, Button } from 'react-bootstrap'
import firebase from '../config/firebase'

const NavBar = () => {
    const handleSignout = () => {
        firebase.auth().signOut()
    }
    return (
        <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">Quiz App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Contact</Nav.Link>
            </Nav>
            <div inline>
                <Button onClick={handleSignout}>Logout</Button>
            </div>
        </Navbar.Collapse>
        </Navbar>
    )
}

export default NavBar
