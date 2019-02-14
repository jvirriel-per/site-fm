import React from 'react';
import { Container, Row, Col } from 'reactstrap';

const Introspect = () => (
  <div className="principal">
    <Row>
    
      <Col xs="12" md="6">
        
          <div className="Introspect-first-box">
              <p className="title"><strong>Monitoring</strong></p>
              <p className="second-title"><strong>Introspect <br/>
              everything.</strong></p>
           
              <p className="text-1">FEATUREMINE Ecosystem works with Graphite<br/>
          Monitoring tool straight out of the box. Just register<br/>
          a variable for monitoring and the platform will <br/>
          seamlessly sample it and feed the value to Graphite.<br/>
          FM Ecosystem also provides simple API to measure<br/>
          real-time performance for a certain code scope or<br/>
          between two points in the code and automatically<br/>
          feed the value to Graphite. With the incredibly low.</p>

          </div>
        
 
      </Col>

      <Col xs="12" md="6">
        
        <div className="__Introspect-img">
            <img src={require('../assets/im7.png')} alt="Test"/>
          </div>
        
      </Col>

      
    </Row>
  </div>
)

export default Introspect;