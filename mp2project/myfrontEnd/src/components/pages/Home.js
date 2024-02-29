import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';

const Home = ()=> {

  return (
    <div className='Home'>
      <Container >
        <Row className="herosection">
          <Col>
          </Col>
        </Row>
      </Container>
      <Container >
        <Row>
          <Col className='homeservicesbox'>
            <Row>
              <img className="boxservicesimg" src={require('../../images/image1.png')} rounded  />     
            </Row>
              <div className='textcenter'> 
                <h2>firstname lastname</h2>
                <h4>Talent</h4>
              </div>
          </Col>
          <Col className='homeservicesbox'>
            <Row>
              <img className="boxservicesimg" src={require('../../images/image1.png')} rounded  />
            </Row>
                <div className='textcenter'> 
                  <h2>firstname lastname</h2>
                  <h4>Talent</h4>
                </div>
          </Col>
          <Col className='homeservicesbox'>
            <Row className="justify-content-md-center">
              <img className="boxservicesimg" src={require('../../images/image1.png')} rounded  />
            </Row>
                <div className='textcenter'> 
                  <h2>firstname lastname</h2>
                  <h4>Talent</h4>
                </div>
          </Col>
          <Col className='homeservicesbox'>
            <Row className="justify-content-md-center">
              <img className="boxservicesimg" src={require('../../images/image1.png')} rounded  />
            </Row>
                <div className='textcenter'> 
                  <h2>firstname lastname</h2>
                  <h4>Talent</h4>
                </div>
          </Col>
        </Row>
      </Container>

    <div className="box3about">
      <Container > 
        <Row >
          <Row className="justify-content-md-center">
            <Col className="boxwhoweare "md="auto"><h1>Who We Are</h1></Col>
          </Row>
          <Row>
            <Col> 
              <Row className="justify-content-md-center">
                <Col   md="auto">
                  <img  className="boxwhowearetextimg" src={require('../../images/about-side.png')} roundedCircle />
                </Col>
              </Row>
            </Col>
            <Col md={9}>
              <Row >
                <Col className="boxwhowearetext" md="auto"><h5> Welcome to<b> Skilled Worker Hub,</b> where we are committed to revolutionizing the way clients connect with skilled workers in specific       geographic locations. We aims to explore and address the barriers inhibiting the seamless connection between employers and skilled workers in specific geographic locations. By identifying and mitigating these challenges, we seek to enhance the efficiency of skilled workers available., promote regional economic development, and foster a more interconnected and responsive skilled workforce.</h5>
                  <Row md={4}><Link className="text-decoration-none btn btn-success btnabout" to={`/ about`}><h6>Learn More</h6></Link>
                   </Row>
                </Col>
              </Row>
            </Col>  
          </Row>
        </Row>  
      </Container>
    </div>
      <Container >
        <Row className="testimonialbox">
          <Col >
          <Row><h1>Client Satisfaction Survey</h1></Row>
          <Row className="surveycolumn">
            <h4><i>Your Feedback Is Valued</i></h4>
            <h5>We highly value your feedback and use it as a reference to continuously improve our services. To help us improve, we would like to ask you a few questions about your recent experience with us. Your feedback will help us make <b>Skilled Worker Hub</b> even better for you and other clients.</h5>
            </Row>
          </Col>
          <Col className="feedbackbox" md={5}>
            <Form onSubmit="{handleRegsubmit}">
                  <Row>
                    <Col>
                      <Form.Group className="mb-1" controlId="exampleForm.ControlInput1">
                        <Form.Label><b>FULLNAME:</b>
                        </Form.Label><Form.Control  size="lg" type="text" placeholder="Skilled Worker hired" />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                      <Form.Label><b>CLIENT'S FEEDBACK:</b></Form.Label>
                        <Form.Control  size="lg" as="textarea" rows={5} placeholder="TYPE YOUR REVIEW HERE" />
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


export default Home