import React from "react";
import { Navbar, Nav } from 'react-bootstrap';

export default function NavBar(){
    return (
    <>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand>Хагенти</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link>Каталог</Nav.Link>
                    <Nav.Link>Корзина</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </>
    )}