import React from 'react';
import AlertContent from '../components-styled/AlertContent';
import AlertWrapper from '../components-styled/AlertWrapper';
import { INFO } from '../constants/alert-types';

const propTypes = {
  text: React.PropTypes.string.isRequired,
  type: React.PropTypes.string,
};

const defaultProps = {
  type: INFO,
};

const Alert = ({ text, type, ...props }) => (
  <AlertWrapper type={type} {...props} >
    <AlertContent>
      {text}
    </AlertContent>
  </AlertWrapper>
);

Alert.propTypes = propTypes;
Alert.defaultProps = defaultProps;

export default Alert;
