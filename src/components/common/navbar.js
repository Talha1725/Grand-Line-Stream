import { Container, Button, Nav, NavDropdown, Navbar } from "react-bootstrap";

import Logo from "../../resources/3.png";
function NavbarLocal() {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              src={Logo}
              width="180"
              height="140"
              className="d-inline-block align-top"
              alt="Grand Line Stream logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto">
              <Nav.Link href="#features">Anime </Nav.Link>
              <Nav.Link href="#pricing">Manga</Nav.Link>
              <Nav.Link href="#pricing">Comics</Nav.Link>
              <Nav.Link href="#pricing">Explore</Nav.Link>
              <Nav.Link href="#deets">Shop</Nav.Link>
            </Nav>
            <Nav>
              <Button
                variant="outline-dark"
                className="mx-3 button-goto-homepage"
              >
                Login | Signup
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavbarLocal;
