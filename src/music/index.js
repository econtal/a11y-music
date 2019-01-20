import Tone from 'tone'
import { SYNTH_KIND_TO_CLASS } from './synths'
export { SYNTH_KINDS } from './synths'


export class Music {
  constructor({ onReady, synthKind }) {
    this.onReady = onReady
    this.synthKind = synthKind

    // chain Tone.js objects
    const masterVolume = new Tone.Volume(-10).toMaster()
    const reverb = new Tone.JCReverb(0.2).connect(masterVolume)
    this.synth = new SYNTH_KIND_TO_CLASS[synthKind]({ onLoad: this.onLoad })
    this.synth.outNode.connect(reverb)
    this.fixedScale = this.synth.fixedScale
    this.onMouseMove = this.synth.onMouseMove
  }

  onLoad = () => {
    console.log('music player is ready')
    this.onReady()
  }

  triggerAttack = midi => {
    const freq = Music.midiToFreq(midi)
    this.synth.triggerAttack(freq)
  }

  triggerRelease = () => this.synth.triggerRelease()

  start = () => new Promise(resolve => {
    this.synth.triggerAttack('C4', '+0')
    this.synth.triggerAttack('D4', '+0.25')
    this.synth.triggerAttack('E4', '+0.50')
    this.synth.triggerRelease('+1')
    resolve('started') // doesn't wait for anything yet
  })

  static midiToFreq = midi => Math.pow(2, (midi - 69) / 12) * 440
}
