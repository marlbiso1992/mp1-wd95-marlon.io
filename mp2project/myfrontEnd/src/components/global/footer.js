import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
const Footer = ()=> {

  
    return (
        <div className='Footer'  >
          <div className='fpadding' style={{ backgroundColor: '#473DC6', color:'white',}}>
  <Container>
      <Row>
        <Col md={8}>
              <Row><Col>
                  <h5>GET IN TOUCH</h5>
                  <h2>Contact Information</h2>
                  <p>Please don't hesitate to reach out to us using the information we provided.</p></Col>
              </Row>    
              <Row className="justify-content-md-center">
                <Col>
                  <h5>Address:</h5>
                  <p>Lamacan Argao Cebu Ph 6021</p>
                </Col>
                <Col>
                  <h5>Email Us:</h5>
                  <p>Email: marlbiso1992@gmail.com</p>
                </Col>
                <Col>
                  <h5>Call Us:</h5>
                  <p>Phone: 09810018341</p>
                </Col>
              </Row>
        </Col>
        <Col md="auto">
          <h2><img className ="logoimg" src={require('../../images/logo.png')}/></h2>
           &copy; {new Date().getFullYear()} Copyright:{' '}
           WD95P MP2</Col>
      </Row>
  </Container>
  </div>
  <div className="footernav">
  <Container>
  <Row className="justify-content-md-center">
      <Col md="auto">
        <Nav>
          <Nav.Link className="textcolor"href="/">Home</Nav.Link>
          <Nav.Link className="textcolor"href="/about">About</Nav.Link>
          <Nav.Link className="textcolor"href="/worker">Worker</Nav.Link>
          <Nav.Link className="textcolor"href="/review">Review</Nav.Link>
          <Nav.Link className="textcolor"href="/contactus">Contact us</Nav.Link>
          <Nav.Link className="textcolor"href="/login">Login</Nav.Link>
        </Nav>
      </Col>
    </Row>
    </Container>
        </div>
        </div>
    )


}


export default Footer