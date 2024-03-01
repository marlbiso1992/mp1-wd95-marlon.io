import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { useNavigate, Link } from 'react-router-dom';
import { useState } from 'react';
import apiRequest from '../../dataFetch/apiRequest';


const Login = ()=> {
  const navigate = useNavigate(); 
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [ErrMsg, setErrMsg] = useState('');
  //handleLoginFormSubmit  Start here
  const handleLoginFormSubmit = async (e)=>{
    e.preventDefault();  
    const objReq = {
      method: 'POST',
      headers: {
        'Content-Type':'application/x-www-form-urlencoded',
      },
      body:"username="+username+"&password="+password,
    }
    const data = await apiRequest('http://localhost:5001/login-validation', objReq);
      if(data.code === "success"){
        localStorage.setItem('loginUser', JSON.stringify(data.loginUser.username));
        if (username === 'admin'){
          navigate(`/admin`);
        }
        else {
          navigate(`/user/${username}`);
        }
      } 
      else{
        setErrMsg(data.msg)
      }
  } 
  //handleLoginFormSubmit  End here
  return (
    <div className='Login'>
      <Container>
        <Row className="formbox ">
          <Col  md={5} className='formboxleft'>
            <Row className="justify-content-md-center">
              <Col md="auto">
                <h3>LOGO HERE!!!</h3>
              </Col>
            </Row>
            <Row className="justify-content-md-center">
              <Col md="auto">
                <h1><b>Skilled Worker Hub</b></h1>
              </Col>
            </Row>
            <Row className="justify-content-md-center"> 
              <Col md="auto">
                <h4><b><i>Welcome Aboard</i></b></h4>
              </Col>
            </Row>
            <Row className="justify-content-md-center">    
              <Col md="auto" className='ErrMsg'>
              {ErrMsg}
              </Col>
            </Row>
            <Row className="justify-content-md-center">
              <Col md={10}>
                <Form onSubmit={handleLoginFormSubmit}>
                  <Form.Control className='mb-3' type="text" placeholder="Username" onChange={ (e)=>setUsername(e.target.value) }   />
                  <Form.Control className='mb-3' type="password" placeholder="Password" onChange={ (e)=>setPassword(e.target.value) }   />
                  <Button className='btnright' variant="primary" type='submit'>Login</Button>
                </Form> 
              </Col>
            </Row>
            <Row className="justify-content-md-center">
              <Col  className="signuplink" md="auto">
                <i>or <Link to={`/registration`}>Sign-Up</Link> Here...</i>
              </Col>
            </Row>
          </Col>
          <Col className="formboxtight">
            <Row className="justify-content-md-center ">
             <Col md="auto" ><h1>Kodus BOARD</h1></Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  )
}


export default Login