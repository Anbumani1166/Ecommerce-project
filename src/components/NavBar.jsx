import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useNavigate } from 'react-router-dom';
import { FaShoppingCart } from "react-icons/fa";


function NavBar() {
  let navicate = useNavigate()
  let handleLogout = ()=>{
    localStorage.setItem("suth","false")
    navicate("/login")
  }
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link as={Link} to="/home">Home</Nav.Link>
            <Nav.Link as={Link} to="/Product">Product</Nav.Link>
            <Nav.Link as={Link} to="/TodoApp">TodoApp</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Button variant='warning' onClick={()=>navicate("/whistList")} style={{"marginRight":"50px"}}><FaShoppingCart /></Button>
            <Button variant='danger' onClick={handleLogout}>LogOut</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;