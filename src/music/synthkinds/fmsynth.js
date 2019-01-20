import Tone from 'tone'


export class FMSynth {
  static load = ({ onLoad }) => {
    const fmsynth = new Tone.FMSynth({
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
   })
   onLoad()
   return fmsynth
 }
}
