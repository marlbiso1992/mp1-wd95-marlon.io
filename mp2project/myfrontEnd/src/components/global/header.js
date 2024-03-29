import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/esm/Container';
const Header = ()=> {

  
    return (
      <header>
                  
<div className='Header' >
  <Container>
<Navbar expand="lg" className="navbar navbar-dark">
          <Navbar.Brand href="/">
          <img className ="logoimg" src={require('../../images/logo.png')}/>
          
          
          </Navbar.Brand>
          <Navbar.Toggle/>
          <Navbar.Collapse>
          <Nav className="ms-auto">
            <Nav.Link className="textcolor"href="/">Home</Nav.Link>
            <Nav.Link className="textcolor"href="/about">About</Nav.Link>
            <Nav.Link className="textcolor" href="/workers">Worker</Nav.Link>
            <Nav.Link className="textcolor" href="/review">Review</Nav.Link>
            <Nav.Link className="textcolor" href="/contact">Contact</Nav.Link>
            <Nav.Link className="textcolor" href="/login">Login</Nav.Link>
          </Nav>
          </Navbar.Collapse>
</Navbar>
</Container>
      </div>

      </header>
       
    )


}


export default Header