import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


const Header = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
    <Container>
      <Navbar.Brand href="#home">Agencia de viajes</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#home">Inicio</Nav.Link>
          <Nav.Link href="#link">Destinos</Nav.Link>
          <NavDropdown title="Paquetes de viajes" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Nuestros paquetes</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Separa tu paquete
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Personaliza tu paquete</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Reporta un problema
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default Header
