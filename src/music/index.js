import Tone from 'tone'
import { Drum, FMSynth, Instrument, SYNTH_KINDS } from './synths'
export { SYNTH_KINDS }


export class Music {
  constructor({ onReady, synthKind }) {
    this.onReady = onReady
    this.synthKind = synthKind
    const SynthClass = Music.synthKindToClass(synthKind)
    this.fixedScale = SynthClass.FIXED_SCALE // may be undefined

    // chain Tone.js objects
    const masterVolume = new Tone.Volume(-10).toMaster()
    const reverb = new Tone.JCReverb(0.2).connect(masterVolume)
    this.synth = SynthClass.load({ onLoad: this.onLoad }).connect(reverb)
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

  static synthKindToClass = (synthKind) => {
    switch(synthKind) {
      case SYNTH_KINDS.FM_SYNTH: return FMSynth
      case SYNTH_KINDS.DRUM: return Drum
      case SYNTH_KINDS.INSTRUMENT: return Instrument
      default: throw `unknown synth kind ${synthKind}`
    }
  }

  static midiToFreq = midi => Math.pow(2, (midi - 69) / 12) * 440
}
