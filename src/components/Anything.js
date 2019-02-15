import React from 'react';
import { Container, Row, Col } from 'reactstrap';

const Anything = () => (
  <div className="principal">
    <Row>
    <Col xs="12" md="6">
        
        <div className="__anything-img">
            <img className="__anything-img-children" src={require('../assets/im4.png')} alt="Test"/>
          </div>
        
      </Col>

      <Col xs="12" md="6">
        
          <div className="__anything-first-box">
              <p className="title"><strong>Custom feeds</strong></p>
              <p className="second-title"><strong>Anything goes in,<br/>
              and out.</strong></p>
              <p className="text-1">You want to use a particular market data feeds<br/>
             handler, order entry session or a custom OMS,<br/> 
             problem, we will make it happen. We will work with<br/>
             your broker or your OMS provider to certify our<br/>
             platform with their FIX connection. We provide<br/>
             input/output interface for some standard data types<br/>
             and our extendable platform makes it easy to<br/>
             integrate a custom data source or to publish logs or<br/>
             other data to a platform of your choice. You<br/>
             extend it yourself or we can help you do it.</p>

          </div>
        
      </Col>

    </Row>
  </div>
)

export default Anything;