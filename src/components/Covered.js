import React from 'react';
import { Container, Row, Col } from 'reactstrap';

const Covered = () => (
  <div>
    <Row>
    <Col xs="12" md="5">
        <div style={{border: '1px solid blue', height: '500px'}}>
        <div className="__Covered-img">
            <img src={require('../assets/im6.png')} alt="Test" width= {null} resizeMode= 'contain' height= {420}/>
          </div>
        </div>
      </Col>

      <Col xs="12" md="7">
        <div style={{border: '1px solid red', height: '500px'}}>
          <div className="Covered-first-box">
              <p className="title"><strong>Risk Controls</strong></p>
              <h1><strong><p>We got you </p>
              covered.</strong>
              </h1>
              <p className="text-1">Safety is crucial. We have a large library of market
          access risk controls, such as open notional and total
          notional limits. We understand that you might have
          you own risk control requirements. Our extendable
          platform makes it easily to add custom market 
          access controls and to fit the trading platform's risk
          validation to your needs, With FM's modular
          approach you can even run simulations with
          different risk validation controls, to see how changes
          to regulations might impact your trading.</p>

          </div>
        </div>
      </Col>
      
    </Row>
  </div>
)

export default Covered;