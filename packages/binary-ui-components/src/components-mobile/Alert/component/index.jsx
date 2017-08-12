import PropTypes from 'prop-types';
import React from 'react';
import AlertContent from '../components-styled/AlertContent';
import AlertWrapper from '../components-styled/AlertWrapper';
import { INFO } from '../constants/alert-types';

const propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.string,
};

const defaultProps = {
  type: INFO,
};

const Alert = ({ text, type, ...props }) => (
  <AlertWrapper alertType={type} {...props} >
    <AlertContent alertType={type} >
      {text}
    </AlertContent>
  </AlertWrapper>
);

Alert.propTypes = propTypes;
Alert.defaultProps = defaultProps;

export default Alert;
