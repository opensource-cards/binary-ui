import PropTypes from 'prop-types';
import React from 'react';
import LabelText from '../components-styled/LabelText';

const propTypes = {
  children: PropTypes.string,
  isBold: PropTypes.bool,
  isDisabled: PropTypes.bool,
};

const defaultProps = {
  children: '',
  isBold: false,
  isDisabled: false,
};

const Label = ({ children, isBold, ...props }) => (
  <LabelText {...props} isBold={isBold} >
    {children}
  </LabelText>
);

Label.propTypes = propTypes;
Label.defaultProps = defaultProps;

export default Label;
