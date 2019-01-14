import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Keyboard } from '../keyboard.js'
import { ROUTES } from '.'
import { Navigation } from '../navigation.js'


export class PlayPage extends Component {
  render = () => (
    <>
      <Navigation history={this.props.history}/>
      <Keyboard {...this.props} />
      <Link to={ROUTES.modeSelection}>
        Mode Selection
      </Link>
    </>
  )
}
