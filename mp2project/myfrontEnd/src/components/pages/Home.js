import { Link } from 'react-router-dom';
import { useState } from 'react';
import {Container, Row, Col, Form} from 'react-bootstrap';
import apiRequest from '../../dataFetch/apiRequest';

const Home = ()=> {
  const [fname, setFullname] = useState('');
  const [fdmsg, setFeedback] = useState('');
  const [ErrMsg, setErrMsg] = useState('');

  const handlefeedbacksubmit = async (e) => {
    e.preventDefault(); 
    
  const objprofileReq = {
            method: 'POST',
            headers: {
              'Content-Type':'application/x-www-form-urlencoded',
            },
            body:"fullname="+fname+"&feedback="+fdmsg,
          }

    const data = apiRequest('http://localhost:5001/sendfeedback', objprofileReq)
          .then(feedBackdata => {
           if (feedBackdata.code=='success') {
              alert(feedBackdata.msg);
              window.location = '/';
            }   
            else {
              setErrMsg(feedBackdata.msg);
            } 
           }
          )
          .catch(error => {
            console.log(error);
            alert(error);
          }
          )
        }   
  return (
    <div className='Home'>
       <div className='HeroSection'>
      <Container className="bordercheck" >
        <Row fluid> 
          <Col  className="herosectionleft">
             <h1>BRIDGING PLATFORM</h1> 
                <h2>FOR CLIENT AND SKILLED WORKER</h2>
                  <h4>Seeking top-tier talent or a skilled professional looking for the right opportunity, We are your partner in promoting seamless connection to client in need in a geographic-specific connections.</h4>
                  <Row md={4}><Link className="text-decoration-none btn btn-primary btnabout" to={`/registration`}><h6>Be one of Us</h6></Link>
                   </Row>
          </Col>
          <Col className="herosectionright">
               <img src={require('../../images/heroimg.png')}   />  
          </Col>
        </Row>
      </Container>
      </div>
      <Container className='homeservicesmainbox'>
        <Row>
          <Col className='homeservicesbox'>
            <Row>
              <img className="boxservicesimg" src={require('../../images/farmer.png')} rounded  />     
            </Row>
              <div className='textcenter'> 
                <h3>Farmers</h3>
                <p>You have some yard work to do. It's difficult to find a farmer nearby. </p>
                 <Link className="text-decoration-none btn btn-primary" to={`/workers `}><h6>Search Here</h6></Link>
              </div>
          </Col>
          <Col className='homeservicesbox'>
            <Row>
              <img className="boxservicesimg" src={require('../../images/mechanic.png')} rounded  />
            </Row>
                <div className='textcenter'> 
                  <h3>Mechanics</h3>
                  <p>Your having an automobile issue on the road. It's difficult to find mechanics nearby. </p>
                 <Link className="text-decoration-none btn btn-primary" to={`/workers `}><h6>Search Here</h6></Link>
                </div>
          </Col>
          <Col className='homeservicesbox'>
            <Row className="justify-content-md-center">
              <img className="boxservicesimg" src={require('../../images/electrician.png')} rounded  />
            </Row>
                <div className='textcenter'> 
                  <h3>Electrician</h3>
                  <p>Your house is experiencing an electrical outage. It's hard to find an electrician nearby. </p>
                 <Link className="text-decoration-none btn btn-primary" to={`/workers `}><h6>Search Here</h6></Link>
                </div>
          </Col>
          <Col className='homeservicesbox'>
            <Row className="justify-content-md-center">
              <img className="boxservicesimg" src={require('../../images/carpenter.png')} rounded  />
            </Row>
                <div className='textcenter'> 
                  <h3>Carpenter</h3>
                  <p>You have an issue with your home. It's challenging to locate a carpenter nearby. </p>
                 <Link className="text-decoration-none btn btn-primary" to={`/workers `}><h6>Search Here</h6></Link>
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
                  <Row md={4}><Link className="text-decoration-none btn btn-primary btnabout" to={`/about`}><h6>Learn More</h6></Link>
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
            <Form>
                  <Row>
                    <Col>
                      <Form.Group className="mb-1" controlId="exampleForm.ControlInput1">
                        <Form.Label><b>FULLNAME:</b>
                        </Form.Label><Form.Control  size="lg" type="text" placeholder= {ErrMsg} required onChange={ (e)=>setFullname(e.target.value) } />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                      <Form.Label><b>CLIENT'S FEEDBACK:</b></Form.Label>
                        <Form.Control  size="lg" as="textarea" rows={5} placeholder= {ErrMsg}  required onChange={ (e)=>setFeedback(e.target.value) }  />
                        </Form.Group>
                    </Col>
                  </Row>
                     <Row md={4}><Link onClick ={handlefeedbacksubmit} className="text-decoration-none btn btn-primary btncontactus"><h6>Submit</h6></Link></Row>
                </Form> 
          </Col>
        </Row>
   
      </Container>   
      </div>
    )
  }


export default Home