import React from 'react';
import { Container, Row, Col } from 'reactstrap';

const Anything = () => (
  <div>
    <Row>
    <Col xs="12" md="5">
        <div style={{border: '1px solid blue', height: '500px'}}>
        <div className="__featuremine-img">
            <img src={require('../assets/im4.png')} alt="Test" width= {null} resizeMode= 'contain' height= {420}/>
          </div>
        </div>
      </Col>

      <Col xs="12" md="7">
        <div style={{border: '1px solid red', height: '500px'}}>
          <div className="__Anything-first-box">
              <p className="title"><strong>Custom feeds</strong></p>
              <h1><strong><p>Anything goes in, </p>
              and out.</strong>
              </h1>
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
        </div>
      </Col>

    </Row>
  </div>
)

export default Anything;