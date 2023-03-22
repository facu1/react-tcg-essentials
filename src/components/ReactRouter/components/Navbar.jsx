import {
  Button,
  Collapse,
  Nav,
  Navbar as NavbarRS,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  NavLink as NavLinkRS,
} from "reactstrap";
import { useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { auth } from "../auth";

const Navbar = () => {
  const navigate = useNavigate();
  const authHandler = () => {
    if (auth.isAuthenticated()) {
      auth.logout(() => {
        navigate("/");
      });
    } else {
      auth.login(() => {
        navigate("/about");
      });
    }
  };
  const authText = auth.isAuthenticated() ? "Logout" : "Login";

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <NavbarRS expand>
      <NavbarBrand href="#">reactstrap</NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="me-auto" navbar>
          <NavItem>
            <NavLinkRS tag={NavLink} to="/">
              Home
            </NavLinkRS>
          </NavItem>
          <NavItem>
            <NavLinkRS tag={NavLink} to="/about">
              About
            </NavLinkRS>
          </NavItem>
          <NavItem>
            <NavLinkRS tag={NavLink} to="/contact">
              Contact
            </NavLinkRS>
          </NavItem>
        </Nav>
        <Button onClick={authHandler}>{authText}</Button>
      </Collapse>
    </NavbarRS>
  );
};

export default Navbar;
