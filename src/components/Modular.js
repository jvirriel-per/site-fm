import React from 'react';
import { Container, Row, Col } from 'reactstrap';

const Modular = () => (
  <div>
    <Row>
          <Col xs="12" md="5">
        <div style={{border: '1px solid blue', height: '500px'}}>
        <div className="__Modular-img">
            <img src={require('../assets/im2.png')} alt="Test" width= {null} resizeMode= 'contain' height= {420}/>
          </div>
        </div>
      </Col>
    
      <Col xs="12" md="7">
        <div style={{border: '1px solid red', height: '500px'}}>
          <div className="Modular-first-box">
              <p className="title"><strong>Modular and extendable</strong></p>
              <h1><strong><p>Tools, libraries and </p>
              components.</strong>
              </h1>
              <p className="text-1">Instead of a complex, buggy monolith that claims to
              do everything, we provide you with a library of
              components eith well defined API that can be 
              assembled exactly into what you need. For example:
              by adding and replacing a few components, a
              simulator can be turned into a production or a
              paper-trading application, or you can add a cstom
              fill model or a structured log. You dont just get
              preassembled solutions, we work with you to tailor
              them to your individual needs.</p>

          </div>
        </div>
 
      </Col>
      
    </Row>
  </div>
)

export default Modular;