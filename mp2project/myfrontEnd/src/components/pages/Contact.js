import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';

const Contact = ()=> {

    return (
        <div className='Contact'>
          <img className="banner-img" src={require('../../images/about-ban.png')}/>
            <div className="banner">
              <Container fluid >
                <Row className="justify-content-md-center">
                    <Col md="auto"><h1>Contact Us</h1>  </Col>
                </Row>
              </Container>
            </div>
           
            <Container>
            <Row className="justify-content-md-center box3">
             
             <Col box3 md="auto"><h1>How can we help you?</h1></Col>
             
             
           </Row>
           <Row className="justify-content-md-center box3" >
                  
                  <Col  md="auto"><h4>Our lines are always open for your inquiries and thoughts. Please give us a call at <b>09810018341</b>. You can also complete the form below to send us your concerns.</h4>
                  </Col>
                </Row>


                </Container>
                <Container className='contactusbox'>
                <Row className="justify-content-md-center">
                <Col>
            <Form onSubmit="{handleRegsubmit}">
              <Row>
                <Col>
                  <Form.Group className="mb-1" controlId="exampleForm.ControlInput1">
                    <Form.Label><b>FULLNAME:</b>
                    </Form.Label><Form.Control  size="lg" type="text" placeholder="Enter fullname here" />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                  <Col>
                    <Form.Group className="mb-1" controlId="exampleForm.ControlInput1">
                      <Form.Label><b>ADDRESS:</b>
                      </Form.Label><Form.Control size="lg" type="text" placeholder="Enter address here" />
                    </Form.Group>
                  </Col>
              </Row>
              <Row>
                  <Col>
                    <Form.Group className="mb-1" controlId="exampleForm.ControlInput1">
                      <Form.Label><b>EMAIL ADDRESS:</b>
                      </Form.Label><Form.Control size="lg" type="email" placeholder="Enter email address here" />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group className="mb-1" controlId="exampleForm.ControlInput1">
                      <Form.Label><b>PHONE:</b>
                      </Form.Label><Form.Control size="lg" type="tel" placeholder="Enter phone here" />
                    </Form.Group>
                  </Col>
              </Row>
              <Row>
                <Col>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                  <Form.Label><b>QUESTION / COMMENT:</b></Form.Label>
                    <Form.Control  size="lg" as="textarea" rows={5} placeholder="Enter question / comment here" />
                    </Form.Group>
                </Col>
              </Row>
              <Row md={4}><Link className="text-decoration-none btn btn-success btncontactus"><h6>Submit</h6></Link></Row>
            </Form> 
          </Col>
                </Row>
              </Container>
      </div>
    )
  }


export default Contact