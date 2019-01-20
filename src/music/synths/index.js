import { Drum } from './drum.js'
import { FMSynth } from './fmsynth.js'
import { Instrument } from './instrument.js'

export const SYNTH_KINDS = Object.freeze({
  FM_SYNTH: 0,
  DRUM: 1,
  INSTRUMENT: 2,
})

export const SYNTH_KIND_TO_CLASS = Object.freeze({
  [SYNTH_KINDS.FM_SYNTH]: FMSynth,
  [SYNTH_KINDS.DRUM]: Drum,
  [SYNTH_KINDS.INSTRUMENT]: Instrument,
})
