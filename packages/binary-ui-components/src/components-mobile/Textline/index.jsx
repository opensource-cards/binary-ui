import PropTypes from 'prop-types';
import React from 'react';
import Label from '../Label';
import Viewline from '../Viewline';

const propTypes = {
  children: PropTypes.string.isRequired,
  isBold: PropTypes.bool,
  isDisabled: PropTypes.bool,
};

const defaultProps = {
  isBold: false,
  isDisabled: false,
};

const Textline = ({ children, isBold, isDisabled, ...props }) => {
  if (process.env.NODE_ENV !== 'production') {
    /* eslint-disable max-len */
    console.warn('A Textline component will be removed in the next major release. Please, user a combination of a Viewline and a Label.');
    /* eslint-enable max-len */
  }
  return (
    <Viewline {...props} >
      <Label isBold={isBold} isDisabled={isDisabled} >
        {children}
      </Label>
    </Viewline>
  );
};

Textline.propTypes = propTypes;
Textline.defaultProps = defaultProps;

export default Textline;
