import React from 'react';
import { Container, Row, Col } from 'reactstrap';

const Covered = () => (
<Container fluid className="principal align-items-center justify-content-center">
<Row className="container align-items-center ">

<Col xs="12" md="12"  lg="7">
  <div className="__covered-img">
      <img className="__covered-img-children" src={require('../assets/im6.png')} alt="Test"/>
  </div>
</Col>

<Col xs="12" md="12 align-item-center "  lg="5">
  <div className="covered-first-box">
              <p className="title"><strong>Risk Controls</strong></p>
              <p className="second-title"><strong>We got you 
              covered.</strong></p>
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
</Col>

</Row>
</Container>
)

export default Covered;