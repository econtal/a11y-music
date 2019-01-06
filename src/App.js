import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { HomePage, PlayPage, ModeSelectionPage, ROUTES } from './pages'
import { Synth } from './music/synth.js'
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

	start = () => new Promise(resolve => {
		this.setState({ isOn: true }, () => {
			this.synth.start().then(resolve('started'))
		})
	})

	onReady = () => {
		this.setState({ ready: true })
	}

	synth = new Synth(this.onReady)

  render() {
    return (
			<Router>
	      <div className="App">
					<Switch>
						<Route path={ROUTES.home} exact render={props =>
								<HomePage
									ready={this.state.ready}
									start={this.start}
								/>
						} />
					<Route path={ROUTES.modeSelection} component={ModeSelectionPage} />
					<Route path={ROUTES.play} render={props =>
							<PlayPage
								isDrum={false}
								base={36}
								scale={"minorHarmonic"}
								nScales={2}
								triggerAttack={this.triggerAttack}
								triggerRelease={this.triggerRelease}
								{...props}
								/>
						} />
					</Switch>
	      </div>
			</Router>
    )
  }
}

export default App
