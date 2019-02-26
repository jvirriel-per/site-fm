import React from 'react';
import { Container, Row, Col } from 'reactstrap';

const Modular = () => (
  <Container fluid className="principal align-items-center justify-content-center">
    <Row className="container align-items-center ">
      <Col xs="12" md="12"  lg="7">
      <div className="__modular-img">
          <img className="__modular-img-children" src={require('../assets/im2.png')} alt="Test"/>
      </div>
          </Col>
      <Col xs="12" md="12"  lg="5">
      <div className="modular-first-box">
              <p className="title"><strong>Modular and extendable</strong></p>
              <p className="second-title"><strong>Tools, libraries and
              components.</strong></p>

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
      </Col>
    </Row>
  </Container>
)

export default Modular;