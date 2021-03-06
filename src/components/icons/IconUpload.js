import React from 'react'
import PropTypes from 'proptypes'

export default function IconUpload({ className }) {
  const colorMain = '#324A5E'
  return (
    <svg viewBox="0 0 508 508" width={128} height={128} className={className}>
      <circle style={{ fill: '#1f86e8' }} cx="254" cy="254" r="254"/>
      <path
        style={{ fill: '#ffffff' }}
        d="M372,190c0-1.2,0.4-2.8,0.4-4.4c0-29.6-24-53.6-53.6-53.6c-12.8,0-24.4,4.4-33.6,
        12 c-13.6-26-40.8-44-72-44c-44.8,0-80.8,36-80.8,80.8c0,3.2,0,6,0.4,9.2c-33.2,3.2-59.2,
        31.2-59.2,65.2c0,36,29.2,65.6,65.6,65.6 h229.6c36,0,65.6-29.2,65.6-65.6C434.4,220,406.8,
        191.6,372,190z"
      />
      <g>
        <polygon style={{ fill: colorMain }} points="324,294 281.2,294 281.2,364.8 219.2,364.8 219.2,294 176.4,294 250.4,210.4"/>
        <rect x="219.2" y="376.4" style={{ fill: colorMain }} width="62" height="9.2"/>
        <rect x="219.2" y="398.8" style={{ fill: colorMain }} width="62" height="9.2"/>
      </g>
    </svg>
  )
}

IconUpload.defaultProps = {}

IconUpload.propTypes = {
  className: PropTypes.string
}
