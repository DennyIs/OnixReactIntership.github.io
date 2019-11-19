import React from 'react';
import PropTypes from 'prop-types';


const Input = ({
  onInputChange, className, placeholder, id
}) => {
  return (
    <input type="text" id={id} onChange={onInputChange} className={className} placeholder={placeholder} />
  );
};
Input.propTypes = {
  placeholder: PropTypes.string,
  className: PropTypes.string,
  onInputChange: PropTypes.func,
  id: PropTypes.string
};
Input.defaultProps = {
  placeholder: '',
  className: '',
  onInputChange: undefined,
  id: '',
};
export default Input;
