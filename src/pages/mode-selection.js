import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { ROUTES } from '.'


export class ModeSelectionPage extends Component {
  render = () => (
    <>
      <h1>Select Mode</h1>
      <Link to={ROUTES.composition}>
        Composition
      </Link>
      <Link to={ROUTES.play}>
        Play
      </Link>
    </>
  )
}
