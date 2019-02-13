import React, { Component } from 'react';


class Featuremine extends Component {
	render() {
		return (
      <div className="principal">


        <div className="row2">
          <p className="title"><strong>FEATUREMINE</strong></p>
          <h1><strong><p>Power to get </p>
          you there faster.</strong>
          </h1>
          <p className="text-1">FEATUREMINE Ecosystem is built to make your
          research and trading experience smoother, faster
          and more successful. Here are the features and 
          components of the worlds most advanced quant 
          ecosystem.</p>
          <div className="two-buttons">
          <button className="black-button"><strong>TRY IT NOW</strong></button>
          <button className="white-button"><strong>LEARN MORE -></strong></button>
          </div>
        </div>

        <div className="row">
            <img src={require('../assets/im1.png')} alt="Test" width= {null} resizeMode= 'contain' height= {420}/>
        </div>

      </div>
				
		)
	}

}

export default Featuremine;