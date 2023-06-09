import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {useNavigate,Link} from "react-router-dom";


function NavScrollExample({logout}) {
  const navigate  = useNavigate();

  const deleteToken= ()=>{
    localStorage.removeItem("token");
    logout();
   
  }

 
  return (
    <Navbar bg="dark" className='navbar-dark' expand="lg" id="nav">
      <Container fluid>
        <Navbar.Brand ><Link to="/" style={{ color:"#bdc8c4"}}>SAB BECHO & KHAREEDO</Link> </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Link to="/" style={{ color:"#bdc8c9",padding:"10px"}}>Home</Link>
            <Link to="/cart" style={{ color:"#bdc8c9",padding:"10px"}}>My Cart</Link>
            <Link to="/order" style={{ color:"#bdc8c9",padding:"10px"}}>My Order</Link>

            
          </Nav>
          <Nav style={{paddingRight:"7.6rem"}}>
          <NavDropdown title={<i className="fa fa-user"></i>} id="navbarScrollingDropdown" className="dropdown-menu-right">
              <NavDropdown.Item as={Link} to="/changepass">ChangePassword</NavDropdown.Item>
              <NavDropdown.Item onClick={deleteToken} as={Link} to="/login">Logout</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
      
    </Navbar>
  );
}

export default NavScrollExample;