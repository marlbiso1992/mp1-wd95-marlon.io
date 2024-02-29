import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const Worker = ()=> {
  const [allTodo, setAllTodo] = useState([]);
  const [barangay, setBarangay] = useState('');
  const [town, setTown] = useState('');
  const [profession, setProfession] = useState('')

  const handleReadData = async () => {
    const response = await fetch('http://localhost:5001/all-profiles');
    const data = await response.json();
    setAllTodo(data);
    console.log(data);
    function removeDuplicates(){
      return [...new Set(allTodo.profession)]
    }
    console.log(removeDuplicates(allTodo.profession)) 
  }
  useEffect(()=>{
    handleReadData();
  }, [])

const handelSearch = (e)=>{
    setAllTodo(allTodo.filter(list =>list.profession.includes(profession)));
  }



    return (
        <div className='Worker'>


    <img className="banner-img" src={require('../../images/about-ban.png')}/>
            <div className="banner">
              <Container>
                <Row className="justify-content-md-center">
                    <Col md="auto"><h1>Talented Skilled Worker</h1>  </Col>
                </Row>
              </Container>
            </div>

<Container className='profilecontainer'>
<Row className="justify-content-md-center profilecontainer" >
        <Col md="auto"><Form.Control size="lg" type="text" placeholder="Profession" onChange={ (e)=>setProfession(e.target.value)}/></Col>
        <Col md="auto"><Form.Control size="lg"type="text" placeholder="Barangay" onChange={ (e)=>setBarangay(e.target.value)} /></Col>
        <Col md="auto"><Form.Control size="lg" type="text" placeholder="Town" onChange={ (e)=>setTown(e.target.value)}/></Col>
        <Col md="auto"><Button size="lg" variant="primary" onClick={ ()=> handelSearch()}>Search</Button></Col>

      </Row>
      <Row>
        <Col className="workbox2">
        {  allTodo.map(
(item) => (
        <Card className='cardbox'>
      <Card.Body className='textcenter'>
      <Col>
      <img className="profilecircle" src={require('../../images/image1.png')} />
      </Col>
        <Card.Title >
          <h3>{item.firstname} {item.lastname}</h3>
          </Card.Title>
        <Card.Text>
        <h4>{item.profession}</h4>
        </Card.Text>
        <Card.Text>
        <h5>{item.barangay}, {item.town}, {item.province}</h5>
        </Card.Text>
        <Button variant="primary">Contact Me</Button>
        
      </Card.Body>
    </Card>

)  ) }
        </Col>
      </Row>
    </Container>
      </div>
    )
  }


export default Worker