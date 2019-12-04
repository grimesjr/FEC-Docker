import React from 'react';
import { ICONS } from './icons.jsx';

const Icon = props => {
  const { icon, color, width, height } = props;
  return (
    <svg width={width} height={height} viewBox={ICONS[icon].viewBox}>
      <path d={ICONS[icon].path} fill={color ? color : "#0073bb"} />]}
    </svg>
  )
}

export default Icon;