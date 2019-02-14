import React from 'react';
import { Container, Row, Col } from 'reactstrap';

const Setup = () => (
  <div>
    <Row>
      
      <Col xs="12" md="7">
        <div style={{border: '1px solid red', height: '500px'}}>
          <div className="Setup-first-box">
              <p className="title"><strong>Python integration</strong></p>
              <h1><strong><p>Setup in </p>
              Python, run in.</strong>
              </h1>
              <p className="text-1">All components of the FM ecosystem provide
          Python integration allowing for simple setup and
          configuration. This, for example, allows you to
          control instrument universe, sysbology and data
          sources from "Python". Your custom strategies or fill
          models can easily integrate with Python as well,
          allowing you to configure A/B testing or parameter
          search with ease. It is even possible to control
          execution of the platform from Python allowing for
          complex multiday simulations.</p>

          </div>
        </div>
 
      </Col>
      
      <Col xs="12" md="5">
        <div style={{border: '1px solid blue', height: '500px'}}>
        <div className="__Setup-img">
            <img src={require('../assets/im3.png')} alt="Test" width= {null} resizeMode= 'contain' height= {420}/>
          </div>
        </div>
      </Col>
      
    </Row>
  </div>
)

export default Setup;