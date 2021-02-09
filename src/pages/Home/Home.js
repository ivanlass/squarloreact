import React from 'react'
import BigInput from '../../components/home/BigInput'
import './Home.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import couple from '../../images/couple.jpg'
import dots from '../../images/dots.svg'
import PropertiesList from '../../components/home/PropertiesList'

function Home() {
  return (
    <>
  <div className="home">
    <Container>
      <Row>
        <Col sm={12} md={6}>
          <div className="input-wrapper">
            <h1>
              Discover a place you'll love to live|
            </h1>
            <BigInput />
          </div>
        </Col>
        <Col sm={12} md={6}>
          <div className="img-wrapper">
            <img className="img-hero " src={couple}/>
          </div>
          <img className="dots" style={{height:140}} src={dots}/>
        </Col>
      </Row>
    </Container>
  </div>
    <Container fluid>
      <PropertiesList />
    </Container>
    </>
  );
}

export default Home;
