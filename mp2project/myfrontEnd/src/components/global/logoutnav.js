import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/esm/Container';
const Logout = ()=> {

  
    return (
      <header>
                  
<div className='Logout' >
  <Container>
<Navbar expand="lg" className="navbar navbar-dark">
          <Navbar.Brand>
          <img className ="logoimg" src={require('../../images/logo.png')}/>
          
          
          </Navbar.Brand>
          <Navbar.Toggle/>
          <Navbar.Collapse>
          <Nav className="ms-auto">
            <Nav.Link className="textcolor" href="/login">Logout</Nav.Link>
          </Nav>
          </Navbar.Collapse>
</Navbar>
</Container>
      </div>

      </header>
       
    )


}


export default Logout