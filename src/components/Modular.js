import React from 'react';
import { Container, Row, Col } from 'reactstrap';

const Modular = () => (
  <div className="principal">
    <Row>
          <Col xs="12" md="6">
        
        <div className="__modular-img">
            <img className="__modular-img-children" src={require('../assets/im2.png')} alt="Test"/>
          </div>
        
      </Col>
    
      <Col xs="12" md="6">
        
          <div className="modular-first-box">
              <p className="title"><strong>Modular and extendable</strong></p>
              <p className="second-title"><strong>Tools, libraries and <br/>
              components.</strong></p>

              <p className="text-1">Instead of a complex, buggy monolith that claims to<br/>
              do everything, we provide you with a library of<br/>
              components eith well defined API that can be <br/>
              assembled exactly into what you need. For example:<br/>
              by adding and replacing a few components, a<br/>
              simulator can be turned into a production or a<br/>
              paper-trading application, or you can add a cstom<br/>
              fill model or a structured log. You dont just get<br/>
              preassembled solutions, we work with you to tailor<br/>
              them to your individual needs.</p>

          </div>
        
 
      </Col>
      
    </Row>
  </div>
)

export default Modular;