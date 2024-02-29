import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
const About = ()=> {

return (
  <div className='About'>
    <img className="banner-img" src={require('../../images/about-ban.png')}/>
      <div className="banner">
        <Container>
          <Row className="justify-content-md-center">
            <Col md="auto">
              <h1>About Us</h1>
            </Col>
          </Row>
        </Container>
      </div>
    <Container className="box3">
      <Row>
        <Col className='leftside'> 
          <Row>
            <Col className='leftside1R'>  
             <Row>
                <Col className='leftside1Rbox'>
                  <h2>Vision</h2>
                     <h5>At Skilled Worker Hub, we envision a future where geographic constraints no longer limit the potential for skilled workers and employers to find each other. We strive to create a global platform that empowers professionals and businesses alike, transcending boundaries and unlocking opportunities in every corner of the world.</h5>
                  </Col>       
              </Row>
            </Col>
          </Row> 
          <Row>
            <Col className='leftside2R'> 
              <Row className="justify-content-md-center">
                <Col className='leftside2Rcol1' >
                  <h2>Mission</h2>
                  <h5>Our mission is to bridge the gap between talent and opportunity, fostering a seamless and efficient network that benefits both employers and skilled professionals.</h5>
                </Col>       
            </Row>
            <h2>How We Make a Difference:</h2>
              <h5>Facilitating Connections: We break down the barriers that hinder effective communication between employers and skilled workers. Our platform serves as a meeting ground, facilitating connections that lead to meaningful collaborations and mutual growth.</h5>
              <h5>Promoting Economic Development: By streamlining the process of connecting employers with skilled workers, we contribute to regional economic development. Our efforts go beyond recruitment, fostering a positive impact on communities and industries.</h5>      
              <h5>Cultural Inclusivity: Recognizing the importance of cultural diversity, we prioritize inclusivity in our approach. We understand that successful connections go beyond skill sets, considering cultural and linguistic factors for a harmonious collaboration.
              </h5>
            </Col>
          </Row> 
        </Col>
        <Col className='rightside'>  
          <Row>
            <Col className='rightside1R'>  
                  <Row>
           
            
            </Row >
            <div className='rightside1Rin'>
            <img src={require('../../images/aboutimage.png')}/>
            </div >
            </Col>
          </Row>
          <Row>
            <Col className='rightside2R'>
              <h2>What Sets Us Apart:</h2>
              <h5>Geographic Precision: We specialize in understanding the unique challenges associated with connecting skilled workers to employers in specific locations. Our tailored solutions take into account regional nuances, ensuring a targeted and effective approach.</h5>
              <h5>Innovative Technology: Harnessing the power of cutting-edge technology, we provide state-of-the-art tools and platforms that simplify the process of identifying, connecting, and collaborating with skilled workers in your desired geographic areas.</h5>         
              <h5>Comprehensive Skills Mapping: Our commitment to accuracy and efficiency is reflected in our robust skills mapping system. We facilitate a detailed understanding of the skills available in specific regions, empowering employers to make informed decisions.</h5>
            </Col>
          </Row> 
        </Col>
      </Row>
    </Container>
  </div>
)
}


export default About