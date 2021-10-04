import React from 'react';
import {
    Container, Nav,
    Navbar as Appbar,
    Stack
} from "react-bootstrap";
import { NavLink } from "react-router-dom";
const NavBars = () => {
    return (
        <Appbar bg="light" expand="lg">
            <Container fluid>
                <Appbar.Toggle aria-controls="navbarScroll" />
                <Appbar.Collapse id="navbarScroll">
                    <Nav
                        className="mx-auto my-2 my-lg-0"
                        style={{ maxHeight: "100px" }}
                        navbarScroll
                    >
                        <Stack direction="horizontal" gap={5}>
                            <NavLink
                                to="/home"
                                activeStyle={{
                                    fontWeight: "bold",
                                    color: "red",
                                }}
                            >
                                Home
                            </NavLink>
                            <NavLink
                                to="/about"
                                activeStyle={{
                                    fontWeight: "bold",
                                    color: "red",
                                }}
                            >
                                About
                            </NavLink>
                            <NavLink
                                to="/services"
                                activeStyle={{
                                    fontWeight: "bold",
                                    color: "red",
                                }}
                            >
                                Services
                            </NavLink>
                            <NavLink
                                to="/faq"
                                activeStyle={{
                                    fontWeight: "bold",
                                    color: "red",
                                }}
                            >
                                FAQ
                            </NavLink>
                        </Stack>
                    </Nav>

                </Appbar.Collapse>
            </Container>
        </Appbar>
    );
};

export default NavBars;