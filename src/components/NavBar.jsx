import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import { user } from "../App";
const navLinks = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Contact",
    path: "/contact",
  },
  {
    name: "Posts",
    path: "/posts",
  },
  {
    name: "Dashboard",
    path: "/dashboard",
  },
];
const NavBar = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#home">
          <img
            alt=""
            src="logo.png"
            width="50"
            height="50"
            className="d-inline-block align-center"
          />{" "}
          Zaroscript
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {navLinks.map((link, indx) => {
              if (link.name === "Dashboard" && !user) return null;
              return (
                <Nav.Link key={indx}>
                  <Nav.Link
                    as={NavLink}
                    to={link.path}
                    className="text-decoration-none text-dark fs-5 px-2"
                  >
                    {link.name}
                  </Nav.Link>
                </Nav.Link>
              );
            })}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
