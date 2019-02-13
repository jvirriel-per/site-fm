import React, { Component } from 'react';


class Modular extends Component {
	render() {
		return (
      <div className="principal">

        <div className="row">
            <img src={require('../assets/im2.png')} alt="Test" width= {null} resizeMode= 'contain' height= {420}/>
        </div>

        <div className="row2">
          <h3 className="title"><strong>Modular and extendable</strong></h3>
          <h1>
          <strong><p>Tools, libraries and</p>
          <p>components.</p>
          </strong>
          </h1>
          <h4><p>Instead of a complex, buggy monolith that claims to</p>
              <p>do everything, we provide you with a library of</p>
              <p>components eith well defined API that can be </p>
              <p>assembled exactly into what you need. For example:</p>
              <p>by adding and replacing a few components, a</p>
              <p>simulator can be turned into a production or a</p>
              <p>paper-trading application, or you can add a cstom</p>
              <p>fill model or a structured log. You dont just get</p>
              <p>preassembled solutions, we work with you to tailor</p>
              <p>them to your individual needs.</p>
          </h4>
        </div>

      </div>
				
		)
	}

}

export default Modular;