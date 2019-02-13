import React, { Component } from 'react';

class Anything extends Component {
	render() {
		return (
      <div className="principal">

        <div className="row">
          <img src={require('../assets/im4.png')} alt="Test" width= {null} resizeMode= 'contain' height= {420}/>
        </div>

        <div className="row2">
          <h3 className="title">
          <strong>Custom feeds</strong>
          </h3>
          <h1>
          <strong><p>Anything goes in,</p>
          <p>and out.</p></strong>
          </h1>
          <h4>
          <p>You want to use a particular market data feed</p>
          <p>handler, order entry session or a custom OMS, </p>
          <p>problem, we will make it happen. We will work with</p>
          <p>your broker or your OMS provider to certify our</p>
          <p>platform with their FIX connection. We provide</p>
          <p>input/output interface for some standard data types</p>
          <p>and our extendable platform makes it easy to</p>
          <p>integrate a custom data source or to publish logs or</p>
          <p>other data to a platform of your choice. You </p>
          <p>extend it yourself or we can help you do it.</p>
          </h4>
        </div>

      </div>

		)
	}

}

export default Anything;