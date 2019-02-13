import React, { Component } from 'react';


class Covered extends Component {
	render() {
		return (
      <div className="principal">


        <div className="row">
          <img src={require('../assets/im6.png')} alt="Test" width= {null} resizeMode= 'contain' height= {420}/>
        </div>
      
        <div className="row2">
          <h3 className="title">
          <strong>Risk Controls</strong>
          </h3>
          <h1>
            <strong><p>We got you </p>
            <p>covered.</p></strong>
          </h1>
          <h4>
          <p>Safety is crucial. We have a large library of market</p>
          <p>access risk controls, such as open notional and total</p>
          <p>notional limits. We understand that you might have</p>
          <p>you own risk control requirements. Our extendable</p>
          <p>platform makes it easily to add custom market </p>
          <p>access controls and to fit the trading platform's risk</p>
          <p>validation to your needs, With FM's modular</p>
          <p>approach you can even run simulations with</p>
          <p>different risk validation controls, to see how changes</p>
          <p>to regulations might impact your trading.</p>  
          </h4>
        </div>

      </div>
				
		)
	}

}

export default Covered;