import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { HomePage, PlayPage, ModeSelectionPage, InstrumentTypeSelectionPage, InstrumentSelectionPage, ROUTES } from './pages'
import { Music, SYNTH_KINDS } from './music'
import './App.css'


class App extends Component {
	state = {
		isOn: false,
		ready: false,
	}

  triggerAttack = (note) => {
		if (!this.state.isOn) return
		this.musicPlayer.triggerAttack(note)
  }

  triggerRelease = () => {
		if (!this.state.isOn) return
    this.musicPlayer.triggerRelease()
  }

	start = () => new Promise(resolve => {
		this.setState({ isOn: true }, () => {
			this.musicPlayer.start().then(resolve('started'))
		})
	})

	onReady = () => {
		/* React anti-pattern, but some synth-kinds will call `onReady` without async,
		   so technically still in the constructor of `App` */
		this.state.ready = true
		this.setState({ ready: true })
	}

	musicPlayer = new Music({
		onReady: this.onReady,
		synthKind: SYNTH_KINDS.FM_SYNTH,
	})

  render = () => (
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
				<Route path={ROUTES.instrumentTypeSelection} component={InstrumentTypeSelectionPage} />
				<Route path={ROUTES.instrumentSelectionPage+"/:name"} component={InstrumentSelectionPage} />
				<Route path={ROUTES.play} render={props =>
						<PlayPage
							fixedScale={this.musicPlayer.fixedScale}
							base={36}
							scale={"minorHarmonic"}
							nScales={2}
							triggerAttack={this.triggerAttack}
							triggerRelease={this.triggerRelease}
							onMouseMove={this.musicPlayer.onMouseMove}
							{...props}
							/>
					} />
				</Switch>
      </div>
		</Router>
	)
}

export default App
