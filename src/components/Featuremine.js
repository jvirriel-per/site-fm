import React from 'react';
import { Container, Row, Col } from 'reactstrap';

const Featuremine = () => (
  <Container fluid className="p-t-10 principal align-items-center justify-content-center">
    <Row className="contenedor">
      <Col xs="12 order-1" md="12 order-md-1"  lg="5 order-lg-0" className="d-flex align-item-center">
      <div className="__featuremine-first-box">
              <p className="title"><strong>FEATUREMINE</strong></p>
              <p className="second-title"><strong>Power to get
              you there faster.</strong></p>
              
              <p className="text-1">FEATUREMINE Ecosystem is built to make your
              research and trading experience smoother, faster
              and more successful. Here are the features and
              components of the worlds most advanced quant
              ecosystem.</p>
              <div className="align-item-center justify-content-between mr-1 ml-1 call-t-action">
                
                  <button className="black-button"><strong>TRY IT NOW</strong></button>
                
                
                  <button className="white-button"><strong>LEARN MORE <i className="fas fa-arrow-right"></i></strong></button>
                
              </div>
            
          </div>
      </Col>
      <Col xs="12" md="12 align-item-center "  lg="7">
      <div className="__featuremine-img">
            <img className="__featuremine-img-children" src={require('../assets/im1.png')}/>
      </div>
      </Col>

    </Row>
  </Container>
  
)

export default Featuremine;