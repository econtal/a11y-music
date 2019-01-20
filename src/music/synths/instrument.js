import { InstrumentsLibrary } from '../Tonejs-instruments.js'
import { BaseSynth } from './base.js'


export class Instrument extends BaseSynth {
  constructor({ onLoad }) {
    super()
    this.synth = InstrumentsLibrary.load({
      instruments: "harp",
      onload: onLoad,
    })
    this.outNode = this.synth
  }
}
