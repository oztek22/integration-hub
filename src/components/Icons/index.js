import React from 'react';
import PropTypes from 'prop-types';
import Icons from './Icons';

const createStyle = (rotate, scale, style) => {
  const transform = [
    rotate === 0 ? '' : `rotate(${rotate}deg)`,
    scale === 1 ? '' : `scale(${scale})`,
  ]
    .join(' ')
    .trim();
  return transform.length ? { transform, ...style } : style;
};

const Icon = ({ type, rotate, scale, style, className, iconColor }) => {
  const IconComponent = Icons[type];

  return IconComponent ? (
    <IconComponent
      style={createStyle(rotate, scale, style)}
      className={className}
      iconColor={iconColor}
    />
  ) : null;
};

Icon.propTypes = {
  type: PropTypes.oneOf(Object.keys(Icons)).isRequired,
  rotate: PropTypes.number,
  scale: PropTypes.number,
  style: PropTypes.object,
  className: PropTypes.string,
};

Icon.defaultProps = {
  rotate: 0,
  scale: 1,
  className: '',
  style: {},
};

export default Icon;
