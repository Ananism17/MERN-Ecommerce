import {
  Button,
  Navbar,
  Nav,
  Container,
  NavDropdown,
  Badge,
  Form,
  Dropdown,
  DropdownButton,
  InputGroup,
} from "react-bootstrap";

import { LinkContainer } from "react-router-bootstrap";
import { Link } from "react-router-dom";

import { BsSearch, BsCart } from "react-icons/bs";

const HeaderComponent = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand>Samsung</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          {/* ------ LEFT SIDE OF NAV -------- */}

          <Nav className="me-auto">
            <InputGroup>
              <DropdownButton id="dropdown-basic-button" title="All">
                <Dropdown.Item>High End</Dropdown.Item>
                <Dropdown.Item>Medium</Dropdown.Item>
                <Dropdown.Item>Low End</Dropdown.Item>
              </DropdownButton>
              <Form.Control
                size="sm"
                type="text"
                placeholder="Search Here. . ."
              />
              <Button variant="warning">
                <BsSearch />
              </Button>
            </InputGroup>
          </Nav>

          {/* ------ RIGHT SIDE OF NAV -------- */}

          <Nav>
            <LinkContainer to="/admin/orders">
              <Nav.Link>
                Admin
                <span
                  className="position-absolute top-1 start-10 
                translate-middle p-1 bg-danger border border-light 
                rounded-circle"
                ></span>
              </Nav.Link>
            </LinkContainer>
            <NavDropdown title="Anan" id="collasible-nav-dropdown">
              <NavDropdown.Item
                eventKey="/user/my-orders"
                as={Link}
                to="/user/my-orders"
              >
                My Orders
              </NavDropdown.Item>
              <NavDropdown.Item eventKey="/user" as={Link} to="/user">
                My Profile
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item>Logout</NavDropdown.Item>
            </NavDropdown>
            <LinkContainer to="/login">
              <Nav.Link>Login</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/register">
              <Nav.Link>Register</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/cart">
              <Nav.Link>
                <Badge pill bg="danger">
                  3
                </Badge>
                <BsCart />
                <span className="ms-1">Cart</span>
              </Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default HeaderComponent;
