import React, { Component } from 'react'
import { Keyboard } from '../keyboard.js'
import { Navigation } from '../navigation.js'


export class PlayPage extends Component {
  render = () => (
    <>
      <Navigation history={this.props.history}/>
      <Keyboard {...this.props} />
    </>
  )
}
