import React from 'react';
import { Container, Row, Col } from 'reactstrap';

const Covered = () => (
  <div className="principal">
    <Row>
    <Col xs="12" md="6">
        
        <div className="__covered-img">
            <img className="__covered-img-children" src={require('../assets/im6.png')} alt="Test"/>
          </div>
        
      </Col>

      <Col xs="12" md="6">
        
          <div className="covered-first-box">
              <p className="title"><strong>Risk Controls</strong></p>
              <p className="second-title"><strong>We got you <br/>
              covered.</strong></p>
              <p className="text-1">Safety is crucial. We have a large library of market<br/>
              access risk controls, such as open notional and total<br/>
              notional limits. We understand that you might have<br/>
              you own risk control requirements. Our extendable<br/>
              platform makes it easily to add custom market <br/>
              access controls and to fit the trading platform's risk<br/>
              validation to your needs, With FM's modular<br/>
              approach you can even run simulations with<br/>
              different risk validation controls, to see how changes<br/>
              to regulations might impact your trading.</p>

          </div>
        
      </Col>
      
    </Row>
  </div>
)

export default Covered;