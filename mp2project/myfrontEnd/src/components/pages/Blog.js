import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Blog = ()=> {

    return (
        <div className='Blog'>
          <img className="banner-img" src={require('../../images/about-ban.png')}/>
          <div className="banner">
            <Container>
              <Row className="justify-content-md-center">
                  <Col md="auto"><h2>Blog Page</h2></Col>
              </Row>
            </Container>
          </div>
        This is the Blog
      </div>
    )
  }


export default Blog