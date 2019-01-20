export class BaseSynth {
  fixedScale = null
  triggerAttack = midi => this.synth.triggerAttack(midi)
  triggerRelease = () => this.synth.triggerRelease()
}
