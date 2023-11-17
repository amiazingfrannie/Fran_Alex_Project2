import 'bootstrap/dist/css/bootstrap.min.css';
import '../commonStyle/common.css'; 
import './BasicNav.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function BasicNav() {
  return (
    <>
      <Navbar bg="light" data-bs-theme="light" className='navbar-custom'>
        <Container>
          <Navbar.Brand href="/" className='navbar-custom'>Wordle</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/rule">Rules</Nav.Link>
            <NavDropdown title="Play" id="basic-nav-dropdown">
              <NavDropdown.Item href="/game/normal">Play Normal</NavDropdown.Item>
              <NavDropdown.Item href="/game/hard">Play Hard</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default BasicNav;

