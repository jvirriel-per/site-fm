import React, { Component } from 'react';


class Introspect extends Component {
	render() {
		return (
      <div className="principal">
   
        <div className="row2">
          <h3 className="title">
          <strong>Monitoring</strong>
          </h3>
          <h1>
            <strong><p>Introspect</p>
            <p>everything.</p></strong>
          </h1>
          <h4>
          <p>FEATUREMINE Ecosystem works with Graphite</p>
          <p>Monitoring tool straight out of the box. Just register</p>
          <p>a variable for monitoring and the platform will </p>
          <p>seamlessly sample it and feed the value to Graphite.</p>
          <p>FM Ecosystem also provides simple API to measure</p>
          <p>real-time performance for a certain code scope or</p>
          <p>between two points in the code and automatically</p>
          <p>feed the value to Graphite. With the incredibly low.</p>

          </h4>
        </div>

        <div className="row">
          <img src={require('../assets/im7.png')} alt="Test" width= {null} resizeMode= 'contain' height= {500}/>
        </div>

      </div>
				
		)
	}

}

export default Introspect;