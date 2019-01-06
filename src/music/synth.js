import Tone from 'tone'
import { InstrumentsLibrary } from './Tonejs-instruments.js'
import { mapObject } from '../utils.js'


const midiToFreq = midi => Math.pow(2, (midi - 69) / 12) * 440


export class TestDrum {
  static BASE_URL = "https://raw.githubusercontent.com/Xangis/DrumPads/master/samples_v2/"
  static SAMPLES = mapObject({
    "36": "Kick-Drum-1.wav", // Bass Drum
    "37": "Kick-Drum-2.wav", // Bass Drum 2
    "38": "Snare-Drum-1.wav", // Snare
    "39": "Clap-1.wav", // Hand Clap
    "40": "Noise-Snare-1.wav", // Snare 2
    "41": "Floor-Tom-2.wav", // Low Floor Tom
    "42": "Closed-Hi-Hat-1.wav", // Closed Hi-Hat
    "43": "Floor-Tom-1.wav", // High Floor Tom
    "44": "Closed-Hi-Hat-2.wav", // Pedal Hi-Hat
    "45": "Low-Tom-1.wav", // Low Tom
    "46": "Open-Hi-Hat-1.wav", // Open Hi-Hat
    "47": "Mid-Tom-1.wav", // Low-Mid Tom
    "48": "Mid-Tom-2.wav", // Hi-Mid Tom
    "49": "Crash-Cymbal-1.wav", // Crash Cymbal
    "50": "Hi-Tom-1.wav", // High Tom
    "51": "Ride-Cymbal-1.wav", // Ride Cymbal
    "52": "Crash-Cymbal-2.wav", // Chinese Cymbal
    "53": "Woodblock.wav", // Bell
    "54": "Hand-Drum.wav", // Tambourine
    "55": "Crash-Cymbal-3.wav", // Splash Cymbal
  }, ([key, val]) => ([key, TestDrum.BASE_URL + val]))
  static NOTES = [
    36, 42, 38, 49, 41, 43, 45, 47, 48,
  ]

  static load = ({ onLoad }) => {
    const sampler = new Tone.Sampler(TestDrum.SAMPLES, onLoad, TestDrum.onError)
    return sampler
  }

  onError = (e) => {
    console.error('error', e)
  }
}

export class Synth {
  constructor(onReady) {
    this.onReady = onReady
  }

  onLoad = () => {
    this.onReady()
  }

  masterVolume = new Tone.Volume(-10).toMaster()

  reverb = new Tone.JCReverb(0.2).connect(this.masterVolume)

  synth = new Tone.FMSynth({
		"modulationIndex" : 12.22,
		"envelope" : {
			"attack" : 0.01,
			"decay" : 0.2
		},
		"modulation" : {
			"type" : "square"
		},
		"modulationEnvelope" : {
			"attack" : 0.2,
			"decay" : 0.01
		},
    "portamento": "0.1"
	}).connect(this.reverb)

  __synth = InstrumentsLibrary.load({
    instruments: "harp",
    onload: this.onLoad,
  })//.connect(this.reverb)

  _synth =  TestDrum.load({
    onLoad: this.onLoad,
  }).connect(this.reverb)

  triggerAttack = midi => {
    const freq = midiToFreq(midi)
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
}
