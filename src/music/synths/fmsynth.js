import Tone from 'tone'
import { BaseSynth } from './base.js'


export class FMSynth extends BaseSynth {
  constructor({ onLoad }) {
    super()
    this.synth = new Tone.FMSynth({
      harmonicity: 3,
      modulationIndex : 15,
      envelope : {
        attack : 0.01,
        decay : 0.2,
        sustain: 1,
        release: 0.5,
      },
      modulation : {
        type : 'square'
      },
      modulationEnvelope : {
        attack : 0.2,
        decay : 0.01,
        sustain: 1,
        release: 0.5,
      },
      portamento: 0.1,
    })
    const vibrato = new Tone.Vibrato(5, 0.05)
    const distortion = new Tone.Distortion()
    const chorus = new Tone.Chorus(1, 3, 0.2)
    this.synth.chain(vibrato, distortion, chorus)
    this.outNode = chorus
    onLoad()
  }
}
