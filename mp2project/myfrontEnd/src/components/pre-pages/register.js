import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import apiRequest from '../../dataFetch/apiRequest';

const Register = ()=> {
  const navigate = useNavigate(); 
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [cpassword, setcPassword] = useState('');
  const [ErrMsg, setErrMsg] = useState('');
  
  const handleRegsubmit = async (e) => {
      e.preventDefault(); 
      
    const objprofileReq = {
              method: 'POST',
              headers: {
                'Content-Type':'application/x-www-form-urlencoded',
              },
              body:"firstname="+firstname+"&lastname="+lastname+"&email="+email+"&username="+username+"&password="+password+"&cpassword="+cpassword,
            }
      const profiledata = apiRequest('http://localhost:5001/registration', objprofileReq)
            .then(profiledata => {
              if (profiledata.code=='failed') {
                setErrMsg(profiledata.msg)
              
              }  
            if (profiledata.code=='success') {
                console.log('Success:', profiledata.saveStatus);
                navigate(`/login`);

              }    
             }
            )
            .catch(error => {
              console.log(error);
            }
            )
          }     
  return (
    <div className='Register'>
      <Container>
        <Row className="formbox">
          <Col md={4} className='formboxtight'>
            <Row className="justify-content-md-center ">
              <Col md="auto" >
                <h1>Welcome to our Family</h1>
              </Col>
            </Row>
          </Col>
          <Col md={8} className='regboxright'>
            <Form onSubmit={handleRegsubmit}>
              <Row>
                <Col>
                  <Form.Group className="mb-1" controlId="exampleForm.ControlInput1">
                    <Form.Label>Firstname:
                    </Form.Label><Form.Control type="text" placeholder={ErrMsg} onChange={ (e)=>setFirstname(e.target.value) }   />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group className="mb-1" controlId="exampleForm.ControlInput1">
                    <Form.Label>Lastname:</Form.Label>
                    <Form.Control type="text" placeholder={ErrMsg} onChange={ (e)=>setLastname(e.target.value) }   />
                  </Form.Group>  
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Group className="mb-1" controlId="exampleForm.ControlInput1">
                    <Form.Label>Enter Email:</Form.Label>
                    <Form.Control type="email" placeholder={ErrMsg} onChange={ (e)=>setEmail(e.target.value) }   />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Group className="mb-1" controlId="exampleForm.ControlInput1">
                    <Form.Label>Username:</Form.Label>
                    <Form.Control type="text" placeholder={ErrMsg} onChange={ (e)=>setUsername(e.target.value) }   />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Group className="mb-1" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Password:</Form.Label>
                    <Form.Control type="password" placeholder={ErrMsg} onChange={ (e)=>setPassword(e.target.value) }   />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group className="mb-1" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Confirm Password:</Form.Label>
                    <Form.Control type="password" placeholder="" onChange={ (e)=>setcPassword(e.target.value) }   />
                  </Form.Group>
                </Col>
              </Row> 
              <Button className= 'btnregright'variant="primary" type='submit'>Register</Button>
            </Form> 
          </Col>
        </Row> 
      </Container>
    </div>
  )
}

export default Register