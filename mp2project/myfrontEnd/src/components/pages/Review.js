import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const Review = ()=> {

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
            This is the Review
      </div>
    )
  }


export default Review