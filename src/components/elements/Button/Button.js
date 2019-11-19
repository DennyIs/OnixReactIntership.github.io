import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ title, onButtonClick, className }) => {
  return (
    <button type="button" className={className} onClick={onButtonClick}>{title}</button>
  );
};
Button.propTypes = {
  title: PropTypes.string,
  className: PropTypes.string,
  onButtonClick: PropTypes.func
};
Button.defaultProps = {
  title: '',
  className: '',
  onButtonClick: undefined
};
export default Button;
