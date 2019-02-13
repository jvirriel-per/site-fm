import React, { Component } from 'react';


class Research extends Component {
	render() {
		return (
      <div className="principal">

        <div className="row2">
          <h3 className="title">
         <strong>Data analytic tools</strong>
          </h3>
          <h1>
            <strong><p>Reasearch or</p>
            <p>prod, same</p></strong>
          </h1>
          <h4>
          <p>FM ecosystem includes library for time-series</p>
          <p>analysis. The library provides an easy to use Python</p>
          <p>interface, however, computations are implemented</p>
          <p>in C++ and are assembled prior to execution for </p>
          <p>optimal performance. You can have the same code</p>
          <p>compute price bars or alpha signals in research and</p>
          <p>production, eliminating duplicate code and helping</p>
          <p>you get from research to production faster. It is</p>
          <p>extendanble so you can easy add you own custom</p>
          <p>computations.  </p>
          </h4>
        </div>

        <div className="row">
          <img src={require('../assets/im5.png')} alt="Test" width= {null} resizeMode= 'contain' height= {420}/>
        </div>

      </div>
				
		)
	}

}

export default Research;