import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Keyboard } from '../keyboard.js'
import { ROUTES } from '.'


export class PlayPage extends Component {
  render = () => (
    <>
      <Keyboard {...this.props} />
      <Link to={ROUTES.modeSelection}>
        Mode Selection
      </Link>
    </>
  )
}
