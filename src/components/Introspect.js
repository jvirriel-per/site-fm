import React from 'react';
import { Container, Row, Col } from 'reactstrap';

const Introspect = () => (
  <div>
    <Row>
    
      <Col xs="12" md="7">
        <div style={{border: '1px solid red', height: '500px'}}>
          <div className="Introspect-first-box">
              <p className="title"><strong>Monitoring</strong></p>
              <h1><strong><p>Introspect </p>
              everything.</strong>
              </h1>
              <p className="text-1">FEATUREMINE Ecosystem works with Graphite
          Monitoring tool straight out of the box. Just register
          a variable for monitoring and the platform will 
          seamlessly sample it and feed the value to Graphite.
          FM Ecosystem also provides simple API to measure
          real-time performance for a certain code scope or
          between two points in the code and automatically
          feed the value to Graphite. With the incredibly low.</p>

          </div>
        </div>
 
      </Col>

      <Col xs="12" md="5">
        <div style={{border: '1px solid blue', height: '500px'}}>
        <div className="__Introspect-img">
            <img src={require('../assets/im7.png')} alt="Test" width= {null} resizeMode= 'contain' height= {420}/>
          </div>
        </div>
      </Col>

      
    </Row>
  </div>
)

export default Introspect;