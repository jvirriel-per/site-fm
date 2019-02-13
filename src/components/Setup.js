import React, { Component } from 'react';


class Setup extends Component {
	render() {
		return (
      <div className="principal">

        <div className="row2">
          <h3 className="title"><strong>Python integration</strong></h3>
          <h1>
          <strong><p>Setup in</p>
          <p>Python, run in.</p></strong>
          </h1>
          <h4>
          <p>All components of the FM ecosystem provide</p>
          <p>Python integration allowing for simple setup and</p>
          <p>configuration. This, for example, allows you to</p>
          <p>control instrument universe, sysbology and data</p>
          <p>sources from "Python". Your custom strategies or fill</p>
          <p>models can easily integrate with Python as well,</p>
          <p>allowing you to configure A/B testing or parameter</p>
          <p>search with ease. It is even possible to control</p>
          <p>execution of the platform from Python allowing for</p>
          <p>complex multiday simulations.</p>
          </h4>
        </div>

        <div className="row">
            <img src={require('../assets/im3.png')} alt="Test" width= {null} resizeMode= 'contain' height= {320}/>
        </div>

      </div>
				
		)
	}

}

export default Setup;