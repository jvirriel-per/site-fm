import React from 'react';
import { Container, Row, Col } from 'reactstrap';

const Ecosystem = () => (
  <Container fluid className="principal align-items-center justify-content-center">
  <Row className="contenedor align-items-center ">

    <Col xs="12" md="12"  lg="7">
      <div className="__ecosystem-img">
            <img className="__ecosystem-img-children" src={require('../assets/im8.png')} alt="Test"/>
      </div>
    </Col>
    <Col xs="12" md="12"  lg="5">
    <div className="ecosystem-first-box">
              <p className="title"><strong>Feedback</strong></p>
              <p className="second-title"><strong>Ecosystem 
              evolves with you.</strong></p>

              <p className="text-1">We know, when you are trading, fast responde is
          crucial. We are always here for you by chat, phone or
          email. In the ever-changing world your needs change
          and grow. We work with you to make sure you have
          what you need to succeed. The strength of any
          ecosystem comes from diversity. By making the
          ecosystem better for one client we make is better
          for everybody. The whole is truly more than the sum
          of its parts.  </p>

          <div className="__featuremine-container-buttons">
                <div className="two-buttons">
                  <button className="white-button"><strong>LEARN MORE <i className="fas fa-arrow-right" style={{fontSize: '20px'}}></i></strong></button>
                </div>
          </div>

          </div>
    </Col>
  </Row>
  </Container>
)

export default Ecosystem;