import React, { Component } from 'react'
import { Keyboard } from './keyboard.js'
import { Synth } from './synth.js'
import './App.css'


class App extends Component {
	state = {
		isOn: false,
		ready: false,
	}

  triggerAttack = (note) => {
		if (!this.state.isOn) return
		this.synth.triggerAttack(note)
  }

  triggerRelease = () => {
		if (!this.state.isOn) return
    this.synth.triggerRelease()
  }

	toggleOnOff = () => {
		this.setState(({ isOn }) => ({ isOn: !isOn }), () => this.synth.setOnOff(this.state.isOn))
	}

	onReady = () => {
		this.setState({ ready: true })
	}

	synth = new Synth(this.onReady)

  render() {
    return (
      <div className="App">
        <Keyboard
					isDrum={true}
          base={36}
          scale={"minorHarmonic"}
          nScales={2}
          triggerAttack={this.triggerAttack}
          triggerRelease={this.triggerRelease}
        />
				<button onClick={this.toggleOnOff} disabled={!this.state.ready} >
					{this.state.isOn ? "Stop" : "Start"}
				</button>
      </div>
    )
  }
}

export default App
