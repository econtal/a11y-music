import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Navigation } from '../navigation.js'
import { percussions } from '../percussions.js'
import { percussionSimple } from '../percussionSimple.js'
import { claviers } from '../claviers.js'
import { ROUTES } from '.'



export class InstrumentSelectionPage extends Component{

  render = () => (
  	<>
  	  <Navigation history={this.props.history}/>
  	  <nav>
  	    <ul>
  	      todo
  	    </ul>
  	  </nav>
  	  <h1>Type d&apos;instrument</h1>
    </>
  )
}