import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Navigation } from '../navigation.js'
import { percussions } from '../percussions.js'
import { percussionSimple } from '../percussionSimple.js'
import { claviers } from '../claviers.js'
import { ROUTES } from './index.js'


export const instrumentTypes = [percussionSimple.title, percussions.title, claviers.title];

export const getInstrumentTypeMenu = () => (
	  instrumentTypes.map((name, i) => 
        <li key={i}><Link to={ROUTES.instrumentSelection + '/' + name}>{name}</Link></li>
	  	)
	)

export class InstrumentTypeSelectionPage extends Component{

  render = () => (
  	<>
  	  <Navigation history={this.props.history}/>
  	  <nav>
  	    <ul>
  	      {getInstrumentTypeMenu()}
  	    </ul>
  	  </nav>
  	  <h1>Type d&apos;instrument</h1>
    </>
  )
}