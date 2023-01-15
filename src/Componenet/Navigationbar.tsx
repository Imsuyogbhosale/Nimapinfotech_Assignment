import React from 'react';
import { Navbar, Container, Nav, NavDropdown, Form, Button } from 'react-bootstrap';
const Navigationbar = () => {
  return (
    <div>
       <Navbar bg="secondary" variant="dark">
        <Container>
          <Navbar.Brand href="#home">MovieDb</Navbar.Brand>
          <Nav className="ms-auto">
            <Nav.Link href="/">Popular</Nav.Link>
            <Nav.Link href='/top_rated'>Top Rated</Nav.Link>
            <Nav.Link href='/upcoming_movie'>Upcoming</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button className='bg-dark'>Search</Button>
          </Form>
        </Container>
      </Navbar>
    </div>
  );
}

export default Navigationbar;
