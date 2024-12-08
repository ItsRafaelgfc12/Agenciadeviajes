import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand as={Link} to="/"> <img src="/Images/logopositivo.png" alt="Logo"
          style={{ width: '100px', height: '50px' }} />
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Inicio</Nav.Link>
            <Nav.Link as={Link} to="/destinos">Destinos</Nav.Link>
            <NavDropdown title="Paquetes de viajes" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/paquetes">Nuestros paquetes</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/separar">Separa tu paquete</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/personalizar">Personaliza tu paquete</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/crud">CRUD</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
