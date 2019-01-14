import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, BrowserHistory } from 'react-router-dom';
import { ROUTES } from './pages';

export class Navigation extends Component {

	back = () => (
		this.props.history.goBack()
	)

    render = () => {
    	/*let backButton
    	if (this.location.pathname != ROUTES.home){
			backButton = 
		} else {}*/

    	return (
    	<header>
    		<nav>
  				<Link to={ROUTES.home}>Menu</Link>
				<button onClick={this.back}> Back </button>
			</nav>
		</header>
		)
    }
}