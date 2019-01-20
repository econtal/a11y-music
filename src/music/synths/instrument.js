import { InstrumentsLibrary } from '../Tonejs-instruments.js'


export class Instrument {
  static load = ({ onLoad }) => {
    const instrument = InstrumentsLibrary.load({
      instruments: "harp",
      onload: onLoad,
    })
    return instrument
  }
}
