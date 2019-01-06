import React, { Component } from 'react'
import { Redirect } from 'react-router'
import { ROUTES } from '.'


export class HomePage extends Component {
  /* because Chrome forces at least one user action before playing sound,
     we use a button which controls state which controls Redirect instead of a <Link/> */
  state = {
    started: false,
  }

  start = () => {
    this.props.start().then(
      this.setState({ started: true })
    )
  }

  render = () => (
    this.state.started ?
    <Redirect to={ROUTES.modeSelection} />
    : (
      <>
        <h1>Hello</h1>

        <button onClick={this.start} disabled={!this.props.ready} >
          Start
        </button>
      </>
    )
  )
}
