import Tone from 'tone'


export class Drum {
  static BASE_URL = "https://raw.githubusercontent.com/Xangis/DrumPads/master/samples_v2/"
  static SAMPLES = {
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
  }
  static FIXED_SCALE = [
    36, 42, 38, 49, 41, 43, 45, 47, 48,
  ]

  static load = ({ onLoad }) => {
    return new Tone.Sampler(Drum.SAMPLES, onLoad, Drum.BASE_URL)
  }

  static onError = (e) => {
    console.error('error while loading Drum', e)
  }
}
