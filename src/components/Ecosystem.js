import React from 'react';
import { Container, Row, Col } from 'reactstrap';

const Ecosystem = () => (
  <Container fluid className="principal">
  <Row>

    <Col md="6" xs="12">
      <div className="__ecosystem-img">
            <img className="__ecosystem-img-children" src={require('../assets/im8.png')} alt="Test"/>
      </div>
    </Col>
    <Col md="6" xs="12">
    <div className="ecosystem-first-box">
              <p className="title"><strong>Feedback</strong></p>
              <p className="second-title"><strong>Ecosystem <br/>
              evolves with you</strong></p>

              <p className="text-1">We know, when you are trading, fast responde is<br/>
          crucial. We are always here for you by chat, phone or<br/>
          email. In the ever-changing world your needs change<br/>
          and grow. We work with you to make sure you have<br/>
          what you need to succeed. The strength of any<br/>
          ecosystem comes from diversity. By making the<br/>
          ecosystem better for one client we make is better<br/>
          for everybody. The whole is truly more than the sum<br/>
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