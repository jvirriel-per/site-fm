import React from 'react';
import { Container, Row, Col } from 'reactstrap';

const Ecosystem = () => (
  <div className="principal">
    <Row>
    <Col xs="12" md="6">
        
        <div className="__Ecosystem-img">
            <img src={require('../assets/im8.png')} alt="Test"/>
          </div>
        
      </Col>

      <Col xs="12" md="6">
        
          <div className="Ecosystem-first-box">
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
  </div>
)

export default Ecosystem;