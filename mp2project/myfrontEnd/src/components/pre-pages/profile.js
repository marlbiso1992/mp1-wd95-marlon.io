import { useParams, Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';

const Profile = ()=> {
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
  const [id, setId] = useState('');
  const { username }  = useParams();

  const navigate = useNavigate(); 
  const handleReadSingleData = async () => {
  
  const response = await fetch('http://localhost:5001/user-profile/'+ username);
  const data = await response.json();

console.log(data);
setId(data.id);
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

    return (
        <div className='Profile'>
<Container >
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
        <Form>
              <Row>
                <Col>
                  <Form.Group className="mb-1" controlId="exampleForm.ControlInput1">
                    <Form.Label>Firstname:
                    </Form.Label><Form.Control type="text" placeholder={firstname} readOnly  />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group className="mb-1" controlId="exampleForm.ControlInput1">
                    <Form.Label>Lastname:</Form.Label>
                    <Form.Control type="text" placeholder={lastname} readOnly  />
                  </Form.Group>  
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Group className="mb-1" controlId="exampleForm.ControlInput1">
                    <Form.Label>Phone:</Form.Label>
                    <Form.Control type="number" placeholder={phone} readOnly  />
                  </Form.Group>      
                </Col>
                <Col>
                  <Form.Group className="mb-1" controlId="exampleForm.ControlInput1">
                    <Form.Label>Enter Email:</Form.Label>
                    <Form.Control type="email" placeholder={email} readOnly  />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Group className="mb-1" controlId="exampleForm.ControlInput1">
                    <Form.Label>Birthdate:</Form.Label>
                    <Form.Control type="date" placeholder={birthdate} readOnly  />
                  </Form.Group>      
                </Col>
                <Col>
                  <Form.Group className="mb-1" controlId="exampleForm.ControlInput1">
                    <Form.Label>Gender:</Form.Label>
                    <Form.Control type="text" placeholder={gender} readOnly  />
                  </Form.Group>
                </Col>
                <Col>
                <Form.Group className="mb-1" controlId="exampleForm.ControlInput1">
                    <Form.Label>Nationality:</Form.Label>
                    <Form.Control type="text" placeholder={nationality} readOnly  />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Group className="mb-1" controlId="exampleForm.ControlInput1">
                    <Form.Label>Barangay:</Form.Label>
                    <Form.Control type="text" placeholder={barangay} readOnly  />
                  </Form.Group>      
                </Col>
                <Col>
                  <Form.Group className="mb-1" controlId="exampleForm.ControlInput1">
                    <Form.Label>Town/City:</Form.Label>
                    <Form.Control type="text" placeholder={town} readOnly  />
                  </Form.Group>
                </Col>
                <Col>
                <Form.Group className="mb-1" controlId="exampleForm.ControlInput1">
                    <Form.Label>Province:</Form.Label>
                    <Form.Control type="text" placeholder={province} readOnly />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col>
                <Form.Group className="mb-1" controlId="exampleForm.ControlInput1">
                    <Form.Label>Profession: <i>Choose only 1 profession/skills</i></Form.Label>
                    <Form.Control type="text" placeholder={profession} readOnly  />
                  </Form.Group>
                </Col>
              </Row>
            </Form> 
            <Link className="text-decoration-none btn btn-sm btn-success btnregright " to={`/update-profile/${id}`}>Update</Link>

        </Col>
      </Row>
        </Col>
        
      </Row>

</Container>

      </div>
    )
  }


export default Profile