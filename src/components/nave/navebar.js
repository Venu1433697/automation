import React, {Component} from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './navbar.css'
class NavScrollExample extends Component {
 render(){ return (

    <Navbar expand="lg" className="navbgcostom">
      <Container fluid>
        <Navbar.Brand className='imgNaveHeading' href="#">
           
            <img className='navIcon' src="https://res.cloudinary.com/muni/image/upload/v1712740960/Untitled_design__1_-removebg-preview_scxzns.png"></img>
           FOODY
       </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1"><button className="naveButton">Home</button></Nav.Link>
            <Nav.Link href="#action2">Link</Nav.Link>
            <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
            {/* <Nav.Link href="#" disabled>
              Link
            </Nav.Link> */}
          </Nav>
          <Nav.Link href="#action2">Login/</Nav.Link>
          <Nav.Link href="#action2">SingUp</Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}}

export default NavScrollExample;