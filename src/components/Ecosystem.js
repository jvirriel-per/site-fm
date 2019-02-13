import React, { Component } from 'react';


class Ecosystem extends Component {
	render() {
		return (
      <div className="principal">

          <div className="row">
          <img src={require('../assets/im8.png')} alt="Test" width= {null} resizeMode= 'contain' height= {420}/>
        </div>
      
        <div className="row2">
          <h3 className="title">
          <strong>Feedback</strong>
          </h3>
          <h1>
            <strong><p>Ecosystem </p>
            <p>evolves with you</p></strong>
          </h1>
          <h4>
          <p>We know, when you are trading, fast responde is</p>
          <p>crucial. We are always here for you by chat, phone or</p>
          <p>email. In the ever-changing world your needs change</p>
          <p>and grow. We work with you to make sure you have</p>
          <p>what you need to succeed. The strength of any</p>
          <p>ecosystem comes from diversity. By making the</p>
          <p>ecosystem better for one client we make is better</p>
          <p>for everybody. The whole is truly more than the sum</p>
          <p>of its parts.  </p>
          </h4>
          <button className="white-button"><strong>LEARN MORE -></strong></button>

        </div>

      </div>
				
		)
	}

}

export default Ecosystem;