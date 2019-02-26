import React from 'react';
import { Container, Row, Col } from 'reactstrap';

const Introspect = () => (
<Container fluid className="principal align-items-center justify-content-center">
<Row className="container align-items-center ">
  <Col xs="12 order-1" md="12 order-md-1"  lg="5 order-lg-0">
    <div className="introspect-first-box">
              <p className="title"><strong>Monitoring</strong></p>
              <p className="second-title"><strong>Introspect 
              everything.</strong></p>
           
              <p className="text-1">FEATUREMINE Ecosystem works with Graphite
          Monitoring tool straight out of the box. Just register
          a variable for monitoring and the platform will 
          seamlessly sample it and feed the value to Graphite.
          FM Ecosystem also provides simple API to measure
          real-time performance for a certain code scope or
          between two points in the code and automatically
          feed the value to Graphite. With the incredibly low.</p>

    </div>
  </Col>
  <Col xs="12" md="12 align-item-center "  lg="7">
    <div className="__introspect-img">
        <img className="__introspect-img-children" src={require('../assets/im7.png')} alt="Test"/>
    </div>
  </Col>
</Row>
</Container>
)

export default Introspect;