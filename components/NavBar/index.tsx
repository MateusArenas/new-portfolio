import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';

function NavBar() {
  return (
    <Navbar sticky={'top'} collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container >
        <Navbar.Brand href="/">Mateus Arenas Gioio</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            {/* <Nav.Link href="#projects">Projetos</Nav.Link>
            <Nav.Link href="#courses">Qualificações</Nav.Link>
            <NavDropdown menuVariant='dark' title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
          <Nav>
            <Nav.Link href="#projects">Projetos</Nav.Link>
            <Nav.Link href="#courses">Qualificações</Nav.Link>
            <Nav.Link eventKey={2} href="#contact">
              Contato
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
      <hr className="w-100 bg-secondary opacity-10 m-0 position-absolute bottom-0" />
      {/* <hr style={{ opacity: .05 }} className="w-100 bg-light m-0 position-absolute bottom-0"/> */}
    </Navbar>
  );
}

export default NavBar;