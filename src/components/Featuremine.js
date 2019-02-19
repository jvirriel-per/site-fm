import React from 'react';
import { Container, Row, Col } from 'reactstrap';

const Featuremine = () => (
  <Container fluid className="principal">
    <Row>
      <Col md="6" xs="12">
      <div className="__featuremine-first-box">
              <p className="title"><strong>FEATUREMINE</strong></p>
              <p className="second-title"><strong>Power to get<br/> 
              you there faster.</strong></p>
              
              <p className="text-1">FEATUREMINE Ecosystem is built to make your<br/>
              research and trading experience smoother, faster<br/>
              and more successful. Here are the features and<br/>
              components of the worlds most advanced quant<br/>
              ecosystem.</p>
              <Row>
                <Col xs="6" md="6">
                  <button className="black-button"><strong>TRY IT NOW</strong></button>
                </Col>
                <Col xs="6" md="6">
                  <button className="white-button"><strong>LEARN MORE <i className="fas fa-arrow-right"></i></strong></button>
                </Col>
              </Row>
            
          </div>
      </Col>
      <Col md="6" xs="12">
      <div className="__featuremine-img">
            <img className="__featuremine-img-children" src={require('../assets/im1.png')}/>
      </div>
      </Col>

    </Row>
  </Container>
  
)

export default Featuremine;