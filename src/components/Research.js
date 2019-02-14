import React from 'react';
import { Container, Row, Col } from 'reactstrap';

const Research = () => (
  <div className="principal">
    <Row>
      
      <Col xs="12" md="6">
        
          <div className="Research-first-box">
              <p className="title"><strong>Data analytic tools</strong></p>
              <p className="second-title"><strong>Reasearch or <br/>
              prod, same</strong></p>
             
              <p className="text-1">FM ecosystem includes library for time-series<br/>
          analysis. The library provides an easy to use Python<br/>
          interface, however, computations are implemented<br/>
          in C++ and are assembled prior to execution for <br/>
          optimal performance. You can have the same code<br/>
          compute price bars or alpha signals in research and<br/>
          production, eliminating duplicate code and helping<br/>
          you get from research to production faster. It is<br/>
          extendanble so you can easy add you own custom<br/>
          computations.  </p>

          </div>
        
 
      </Col>
      
      <Col xs="12" md="6">
        <div className="__Research-img">
            <img src={require('../assets/im5.png')} alt="Test"/>
          </div>
        
      </Col>
      
    </Row>
  </div>
)

export default Research;