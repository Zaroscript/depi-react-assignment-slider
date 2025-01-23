import { useState } from "react";
import { Button, Col, Nav, Offcanvas, Row } from "react-bootstrap";
import { NavLink, Outlet } from "react-router-dom";
import NavBar from "../../../components/NavBar";

const DashboardLayout = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <NavBar />
      <header className="navbar sticky-top bg-dark flex-md-nowrap p-0 shadow">
        <NavLink
          to="/dashboard"
          className="navbar-brand col-md-3 col-lg-2 me-0 px-3 fs-6 text-white"
        >
          Company Name Dashboard
        </NavLink>
        <Button variant="secondary" className="d-lg-none text-white" onClick={handleShow}>
          <span className="navbar-toggler-icon"></span>
        </Button>
      </header>
      <main>
        <Row>
          <Col
            md={3}
            lg={2}
            className="sidebar border border-right col-md-3 col-lg-2 p-0 bg-body-tertiary"
          >
            <Offcanvas
              show={show}
              onHide={handleClose}
              responsive="lg"
              className="vh-100"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title>Company Name Dashboard Menu</Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav defaultActiveKey="/dashboard" className="flex-column">
                  <Nav.Link as={NavLink} to="/dashboard">
                    Dashboard
                  </Nav.Link>
                  <Nav.Link as={NavLink} to="/dashboard/users">
                    Users
                  </Nav.Link>
                  <Nav.Link as={NavLink} to="/dashboard/posts">
                    Posts
                  </Nav.Link>
                  <Nav.Link as={NavLink} to="/dashboard/products">
                    Products
                  </Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Offcanvas>
          </Col>
          <Col md={9} lg={10} className="ms-sm-auto col-lg-10 px-md-4">
            <Outlet />
          </Col>
        </Row>
      </main>
    </>
  );
};

export default DashboardLayout;
