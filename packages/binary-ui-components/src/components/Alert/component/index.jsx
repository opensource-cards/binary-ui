import React from 'react';
import AlertContent from '../components-styled/AlertContent';
import AlertWrapper from '../components-styled/AlertWrapper';
import { INFO } from '../constants/alert-types';

const propTypes = {
  text: React.PropTypes.string.isRequired,
  type: React.PropTypes.number,
};

const defaultProps = {
  type: INFO,
};

const Alert = ({ text, type }) => (
  <AlertWrapper type={type} >
    <AlertContent>
      {text}
    </AlertContent>
  </AlertWrapper>
);

Alert.propTypes = propTypes;
Alert.defaultProps = defaultProps;

export default Alert;
