import React from 'react';
import { Container, Row, Col } from 'reactstrap';

const Anything = () => (
  <Container fluid className="principal align-items-center justify-content-center">
    <Row className="contenedor align-items-center ">
      <Col xs="12" md="12"  lg="7">
      <div className="__anything-img">
            <img className="__anything-img-children" src={require('../assets/im4.png')} alt="Test"/>
      </div>
      </Col>
      <Col xs="12" md="12 align-item-center "  lg="5">
      <div className="__anything-first-box">
              <p className="title"><strong>Custom feeds</strong></p>
              <p className="second-title"><strong>Anything goes in,
              and out.</strong></p>
              <p className="text-1">You want to use a particular market data feeds
             handler, order entry session or a custom OMS,
             problem, we will make it happen. We will work with
             your broker or your OMS provider to certify our
             platform with their FIX connection. We provide
             input/output interface for some standard data types
             and our extendable platform makes it easy to
             integrate a custom data source or to publish logs or
             other data to a platform of your choice. You
             extend it yourself or we can help you do it.</p>

          </div>
      </Col>
    </Row>
  </Container>
)

export default Anything;