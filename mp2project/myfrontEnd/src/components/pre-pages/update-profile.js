import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import apiRequest from '../../dataFetch/apiRequest';


const UpdateProfile = ()=> {
  const navigate = useNavigate(); 
  const [username, setUsername] = useState('');
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [gender, setGender] = useState('');
  const [nationality, setNationality] = useState('');
  const [barangay, setBarangay] = useState('');
  const [town, setTown] = useState('');
  const [province, setProvince] = useState('')
  const [profession, setProfession] = useState('')
  const { id }  = useParams();

 
const handleReadSingleData = async (e) => {
const response = await fetch('http://localhost:5001/one-profile/'+ id);
const data = await response.json();
console.log('check one todo', data);
setUsername(data.username);
setFirstname(data.firstname);
setLastname(data.lastname);
setPhone(data.phone);
setEmail(data.email);
setBirthdate(data.birthdate);
setGender(data.gender);
setNationality(data.nationality);
setBarangay(data.barangay);
setTown(data.town);
setProvince(data.province);
setProfession(data.profession);

}
useEffect(()=>{
const validateAccess = localStorage.getItem('loginUser');
  if(validateAccess == null){
    navigate('/login');
  }
else{
 handleReadSingleData();
}
}, [])


const handleRegsubmit = async (e) => {
const objReq = {
  method: 'PUT',
  headers: {
      'Content-Type':'application/x-www-form-urlencoded',
  },
  body:"firstname="+firstname+"&lastname="+lastname+"&phone="+phone+"&email="+email+"&birthdate="+birthdate+"&gender="+gender+"&nationality="+nationality+"&barangay="+barangay+"&town="+town+"&province="+province+"&profession="+profession+"&username="+username,
}
const data = apiRequest('http://localhost:5001/update-user/'+id, objReq);
const username_login = localStorage.getItem('loginUser');
const currentUser = username_login.replace(/"/g,'');
console.log(currentUser);
if ('admin' === currentUser){
          navigate(`/admin`);
         }
         else {navigate(`/user/${username}`);}

               } 
   



return (
      <div className='UpdateProfile'>
       <Container>
       <Row className="justify-content-md-center">

<Col fluid>
<Row>
<Col className='profilebox'sm={3}>
  <Row className="justify-content-md-center">
        <Col className='profilecircle' sm={8}></Col>
  </Row>
      <div className='textcenter'> 
        <h2>{firstname} {lastname}</h2>
        <h4>{profession}</h4>
      </div>
</Col>
<Col className='profilesidebox'sm={8}>
<Form onSubmit={handleRegsubmit}>
              <Row>
                <Col>
                  <Form.Group className="mb-1" controlId="exampleForm.ControlInput1">
                    <Form.Label>Firstname:
                    </Form.Label><Form.Control type="text" placeholder={firstname} onChange={ (e)=>setFirstname(e.target.value) }   />
                  </Form.Group>
                </Col>
                </Row>
              <Row>
                <Col>
                  <Form.Group className="mb-1" controlId="exampleForm.ControlInput1">
                    <Form.Label>Lastname:</Form.Label>
                    <Form.Control type="text" placeholder={lastname} onChange={ (e)=>setLastname(e.target.value) }   />
                  </Form.Group>  
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Group className="mb-1" controlId="exampleForm.ControlInput1">
                    <Form.Label>Phone:</Form.Label>
                    <Form.Control type="number" placeholder={phone} onChange={ (e)=>setPhone(e.target.value) }   />
                  </Form.Group>      
                </Col>
                </Row>
              <Row>
                <Col>
                  <Form.Group className="mb-1" controlId="exampleForm.ControlInput1">
                    <Form.Label>Enter Email:</Form.Label>
                    <Form.Control type="email" placeholder={email} onChange={ (e)=>setEmail(e.target.value) }   />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Group className="mb-1" controlId="exampleForm.ControlInput1">
                    <Form.Label>Birthdate:</Form.Label>
                    <Form.Control type="date" placeholder={birthdate} onChange={ (e)=>setBirthdate(e.target.value) }   />
                  </Form.Group>      
                </Col>
                </Row>
              <Row>
                <Col>
                  <Form.Group className="mb-1" controlId="exampleForm.ControlInput1">
                    <Form.Label>Gender:</Form.Label>
                    <Form.Control type="text" placeholder={gender} onChange={ (e)=>setGender(e.target.value) }   />
                  </Form.Group>
                </Col>
                </Row>
              <Row>
                <Col>
                <Form.Group className="mb-1" controlId="exampleForm.ControlInput1">
                    <Form.Label>Nationality:</Form.Label>
                    <Form.Control type="text" placeholder={nationality} onChange={ (e)=>setNationality(e.target.value) }   />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Group className="mb-1" controlId="exampleForm.ControlInput1">
                    <Form.Label>Barangay:</Form.Label>
                    <Form.Control type="text" placeholder={barangay} onChange={ (e)=>setBarangay(e.target.value) }   />
                  </Form.Group>      
                </Col>
                </Row>
              <Row>
                <Col>
                  <Form.Group className="mb-1" controlId="exampleForm.ControlInput1">
                    <Form.Label>Town/City:</Form.Label>
                    <Form.Control type="text" placeholder={town} onChange={ (e)=>setTown(e.target.value) }   />
                  </Form.Group>
                </Col>
                </Row>
              <Row>
                <Col>
                <Form.Group className="mb-1" controlId="exampleForm.ControlInput1">
                    <Form.Label>Province:</Form.Label>
                    <Form.Control type="text" placeholder={province} onChange={ (e)=>setProvince(e.target.value) }   />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col>
                <Form.Group className="mb-1" controlId="exampleForm.ControlInput1">
                    <Form.Label>Profession: <i>Choose only 1 profession/skills</i></Form.Label>
                    <Form.Control type="text" placeholder={profession} onChange={ (e)=>setProfession(e.target.value) }   />
                  </Form.Group>
                </Col>
              </Row>
              <Button className= 'btnregright'variant="primary" type='submit'>Save</Button>
            </Form> 


</Col>
</Row>
</Col>

</Row>
      
    </Container>
    </div>
  )
}


export default UpdateProfile