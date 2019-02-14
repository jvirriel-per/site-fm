import React from 'react';
import { Container, Row, Col } from 'reactstrap';

const Ecosystem = () => (
  <div>
    <Row>
    <Col xs="12" md="5">
        <div style={{border: '1px solid blue', height: '500px'}}>
        <div className="__Ecosystem-img">
            <img src={require('../assets/im8.png')} alt="Test" width= {null} resizeMode= 'contain' height= {420}/>
          </div>
        </div>
      </Col>

      <Col xs="12" md="7">
        <div style={{border: '1px solid red', height: '500px'}}>
          <div className="Ecosystem-first-box">
              <p className="title"><strong>Feedback</strong></p>
              <h1><strong><p>Ecosystem </p>
              evolves with you</strong>
              </h1>
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
        </div>
 
      </Col>
      
    </Row>
  </div>
)

export default Ecosystem;