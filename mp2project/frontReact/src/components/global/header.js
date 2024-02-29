
import { Link } from "react-router-dom"

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Header = ()=> {

  
    return (
      <header>

<div className='Header'>
<Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
            <Nav.Link href="/todo">Todo</Nav.Link>
            <Nav.Link href="/product">Product</Nav.Link>
            <Nav.Link href="/login">Login</Nav.Link>
            
          </Nav>
        </Container>
  </Navbar>
        
      </div>
      

      </header>
       
    )


}


export default Header