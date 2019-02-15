import React from 'react';
import { Container, Row, Col } from 'reactstrap';

const Setup = () => (
  <div className="principal">
    <Row>
      
      <Col xs="12" md="6">
        
          <div className="setup-first-box">
              <p className="title"><strong>Python integration</strong></p>
              <p className="second-title"><strong>Setup in <br/> 
              Python, run in.</strong></p>
              
              <p className="text-1">All components of the FM ecosystem provide<br/>
          Python integration allowing for simple setup and<br/>
          configuration. This, for example, allows you to<br/>
          control instrument universe, sysbology and data<br/>
          sources from "Python". Your custom strategies or fill<br/>
          models can easily integrate with Python as well,<br/>
          allowing you to configure A/B testing or parameter<br/>
          search with ease. It is even possible to control<br/>
          execution of the platform from Python allowing for<br/>
          complex multiday simulations.</p>

          </div>
        
 
      </Col>
      
      <Col xs="12" md="6">
        
        <div className="__setup-img">
            <img className="__setup-img-children" src={require('../assets/im3.png')} alt="Test"/>
          </div>
        
      </Col>
      
    </Row>
  </div>
)

export default Setup;