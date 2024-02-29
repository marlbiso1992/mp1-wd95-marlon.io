import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/esm/Container';
const Header = ()=> {

  
    return (
      <header>
                  
<div className='Header' >
  <Container>
<Navbar expand="lg" sticky="top" className="navbar navbar-dark">
          <Navbar.Brand href="#home">Logo</Navbar.Brand>
          <Navbar.Toggle/>
          <Navbar.Collapse>
          <Nav className="ms-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/workers">Worker</Nav.Link>
            <Nav.Link href="/review">Review</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
            <Nav.Link href="/login">Login</Nav.Link>
          </Nav>
          </Navbar.Collapse>
</Navbar>
</Container>
      </div>

      </header>
       
    )


}


export default Header