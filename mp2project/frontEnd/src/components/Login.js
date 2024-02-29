

import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import apiRequest from '../dataFetch/apiRequest';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const Login = ()=> {

 const navigate = useNavigate(); 
 const backendlink = "http://localhost:5000/login-validation";

  const [usern, setUsername] = useState('');
  const [passw, setPassword] = useState('');

  const [bilang, setBilang] = useState(0);
  const [errMsg, setErrMsg] = useState('');
  
  const test = ()=> {
    setBilang( (bilang) => bilang + 1 )
  }
  
  useEffect(()=>{ 
    console.log('im monitoring login ')
    //setTimeout(test, 1000);
  }, []);

  const handleLoginFormSubmit = async (e)=>{
    e.preventDefault();
  
    const objReq = {
        method: 'POST',
        headers: {
            'Content-Type':'application/x-www-form-urlencoded',
        },
        body:"username="+usern+"&password="+passw,
    }

   const data = await apiRequest(backendlink, objReq);
  
     if(data.code === "success"){
        localStorage.setItem('loginUser', JSON.stringify(data.loginUser.username));
        navigate('/home');
     } else {
        setErrMsg(data.msg)
     }
  } 

 const fontStyleColor = {
    backgroundColor: 'white',
    color: 'red'
 } 

return(
<div className="Login">

<Container>
      <Row>
        <Col>
        <h3> This is the useffect with setTimeout {bilang}  </h3>
        <h4 style={fontStyleColor}> {errMsg}  </h4>
        
        <Form onSubmit={handleLoginFormSubmit}>
      
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Enter Username</Form.Label>
                <Form.Control type="text" placeholder="" onChange={ (e)=>setUsername(e.target.value) }   />
            </Form.Group>
            
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Enter Password</Form.Label>
                <Form.Control type="password" placeholder="" onChange={ (e)=>setPassword(e.target.value) }   />
            </Form.Group>

            <Button variant="primary" type='submit'>Login</Button>

         </Form> 
        
        
        </Col>
      </Row>
   
</Container>

       
</div>


   ) 
}

export default Login