import React, { Component } from 'react'
import { Note } from './note.js'
import { flatten, range } from './utils.js'


const SCALES = {
  pentaMajor: [0, 2, 4, 7, 9],
  pentaMinor: [0, 3, 5, 7, 10],
  major: [0, 2, 4, 5, 7, 9, 11],
  minor: [0, 2, 3, 5, 7, 8, 10],
  minorHarmonic: [0, 2, 3, 5, 7, 8, 11],
}

/**
 * @param {int} base - lower note in midi
 * @param {string} scale - scale name from SCALES object
 * @param {int} nScales - number of octaves
 * @param {list-of-int} fixedScale - pre-defined scale in midi e.g. drums (ignore all other params)
 * @returns {array} - array of notes {midi:int, numInScale:int}
 */
const computeScale = ({ base, scale, nScales, fixedScale }) => (
  fixedScale ?
  fixedScale.map((midi, numInScale) => ({ midi, numInScale }))
  : flatten(range(nScales).map(scaleNum =>
    SCALES[scale].map((note, numInScale) => ({ // repeats octaves
      midi: note + base + 12 * scaleNum,
      numInScale,
    }))
  ).concat([[{ midi: base + 12 * nScales, numInScale:1 }]])) // add nScale-th octave
)


export class Keyboard extends Component {
  notes = computeScale(this.props)

  onMouseLeave = event => {
    this.props.triggerRelease()
  }

  render() {
    const diameter = 100 // SVG view box
    console.log(this.notes)
    return (
      <svg
        width="100%"
        height="100%"
        viewBox={`0 0 ${diameter} ${diameter/2}`}
      >
        <g
          onMouseLeave={this.onMouseLeave}
        >{
          this.notes.map( (note, i) =>
            <Note
              key={i}
              num={i}
              nNotes={this.notes.length}
              triggerAttack={this.props.triggerAttack}
              diameter={diameter}
              {...note}
            />
          )
        }</g>
      </svg>
    );
  }
}
