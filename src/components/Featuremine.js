import React from 'react';
import { Container, Row, Col } from 'reactstrap';

const Featuremine = () => (
  <div>
    <Row>
      <Col xs="12" md="7">
        <div style={{border: '1px solid red', height: '500px'}}>
          <div className="__featuremine-first-box">
              <p className="title"><strong>FEATUREMINE</strong></p>
              <h1><strong><p>Power to get </p>
              you there faster.</strong>
              </h1>
              <p className="text-1">FEATUREMINE Ecosystem is built to make your
              research and trading experience smoother, faster
              and more successful. Here are the features and
              components of the worlds most advanced quant
              ecosystem.</p>
              <Row>
                <Col xs="6" md="6" center>
                  <button className="black-button"><strong>TRY IT NOW</strong></button>
                </Col>
                <Col xs="6" md="6" center>
                  <button className="black-button"><strong>TRY IT NOW</strong></button>
                </Col>
              </Row>
              <div className="__featuremine-container-buttons">
                <div className="two-buttons">
                  <button className="black-button"><strong>TRY IT NOW</strong></button>
                  <button className="white-button"><strong>LEARN MORE <i className="fas fa-arrow-right" style={{fontSize: '20px'}}></i></strong></button>
                </div>
              </div>
          </div>
        </div>
      </Col>
      <Col xs="12" md="5">
        <div style={{border: '1px solid blue', height: '500px'}}>
        <div className="__featuremine-img">
            <img src={require('../assets/im1.png')} alt="Test" width= {null} resizeMode= 'contain' height= {420}/>
          </div>
        </div>
      </Col>
    </Row>
  </div>
)

export default Featuremine;