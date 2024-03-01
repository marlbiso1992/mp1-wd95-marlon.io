import { useState, useEffect } from 'react';
import {Container, Row, Col, Card } from 'react-bootstrap';


const Review = ()=> {
  const [allTodo, setAllTodo] = useState([]);

  const handleReadData = async () => {
    const response = await fetch('http://localhost:5001/all-feedback');
    const data = await response.json();
    setAllTodo(data);
    console.log(data)
  }
      
  useEffect(()=>{
    handleReadData();
  }, [])

    return (
        <div className='Review'>
          <img className="banner-img" src={require('../../images/about-ban.png')}/>
            <div className="banner">
              <Container>
                <Row className="justify-content-md-center">
                    <Col md="auto"><h2>Reviews</h2>  </Col>
                </Row>
              </Container>
            </div>
            <Container>
            <Row>
        <Col className="workbox2">
        {  allTodo.map(
(item) => (
        <Card className='cardbox'>
      <Card.Body>
        <Card.Text>
        <h5><center><b>"{item.feedback}"</b></center></h5>
        </Card.Text>
        <Card.Text>
        <h6><i><b>{item.fullname}</b></i></h6>
        </Card.Text>
      </Card.Body>
    </Card>

)  ) }
        </Col>
      </Row>
              </Container>
      </div>
    )
  }


export default Review