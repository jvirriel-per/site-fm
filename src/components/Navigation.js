import React, { Component } from 'react';


class Navigation extends Component {
	render() {
		return (
	 		<div className ="navbar">
	 			<div className="row">
	 				<span> TU LOGO </span>
	 			</div>

	 			<div className="row2">
	 			<nav className="navbar navbar-light">
	 				
 					<a href="" className="text-dark">
                      ABOUT
                  	</a>
                  	<a href="" className="text-dark">
                      PRODUCT
                  	</a>
                  	<a href="" className="text-dark">
                      PRICING
                  	</a>
                  	<a href="" className="text-dark">
                      LOGIN
                  	</a>
                  	<a href="" className="account text-dark">
                      OPEN ACCOUNT
                  	</a>
                </nav> 
                </div> 	
	 		</div>			
		)
	}

}

export default Navigation;