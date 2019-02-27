import React from 'react';
import { Container, Row, Col } from 'reactstrap';

const Setup = () => (
  <Container fluid className="principal align-items-center justify-content-center">
  <Row className="contenedor">
    <Col xs="12 order-1" md="12 order-md-1"  lg="5 order-lg-0" className="d-flex align-item-center">
    <div>
              <p className="title"><strong>Python integration</strong></p>
              <p className="second-title"><strong>Setup in 
              Python, run in.</strong></p>
              
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
    </Col>
    <Col xs="12" md="12 align-item-center "  lg="7">
    <div className="__setup-img">
            <img className="__setup-img-children" src={require('../assets/im3.png')} alt="Test"/>
    </div>
    </Col>
  </Row>  
  </Container>
)

export default Setup;