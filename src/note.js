import React, { Component } from 'react'
import styled from 'styled-components'

const colorFromNum = num => {
  const DARKEST = 0.2
  const LIGHTEST = 0.5
  const x = 255 * (DARKEST + (LIGHTEST - DARKEST) * (num + 1) / 13)
  return `rgb(${x}, ${x}, ${x})`
}

const arcOfCircle = (cx, cy, r, start, end) => {
  /* https://github.com/derhuerst/svg-partial-circle/ */
	const length = end - start
	if (length === 0) return []

	const fromX = r * Math.cos(start) + cx
	const fromY = r * Math.sin(start) + cy
	const toX = r * Math.cos(end) + cx
	const toY = r * Math.sin(end) + cy
	const large = Math.abs(length) <= Math.PI ? '0' : '1'
	const sweep = length < 0 ? '0' : '1'

	return ['M', fromX, fromY, 'A', r, r, 0, large, sweep, toX, toY]
}

const degreesToRadians = degrees => (degrees * Math.PI) / 180;

/**
 * @param {int} diameter - diameter of keyboard (in svg dimension)
 * @param {int} num - number of current note in keyboard [0-nNotes]
 * @param {int} nNotes - number of notes in keyboard
 * @returns {string} - svg path command
 * Draw a single arc, and use large stroke-width to fill the note
 */
 const getPath = (diameter, num, nNotes) => {
  const cx = diameter / 2
  const cy = diameter / 2
  const angle = 180. / nNotes
  const startAngle = 180. + num * angle

  return arcOfCircle(
    cx,
    cy,
    3*diameter/8, // r+strokeWidth/2=d/2 <=> r+d/8=d/2 <=> r=3d/8
    degreesToRadians(startAngle),
    degreesToRadians(startAngle + angle + 0.1)  // add 0.1 to remove pixel gap between notes
  ).join(' ');
};


const StyledPath = styled.path`
  &:hover {
    stroke: #ddd;
  }
`

export class Note extends Component {
  onMouseEnter = event => {
    this.props.triggerAttack(this.props.midi)
  }

  render() {
    const path = getPath(this.props.diameter, this.props.num, this.props.nNotes)
    const id = `keyboard-note-path-${this.props.num}`
    return (
      <StyledPath
        id={id}
        d={path}
        stroke={colorFromNum(this.props.numInScale)}
        strokeWidth={this.props.diameter / 4}
        fill="none"
        onMouseEnter={this.onMouseEnter}
        pointerEvents="all"
      />)
  }
}
