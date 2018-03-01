import PropTypes from 'prop-types';
import React from 'react';
import AlertContent from '../components-styled/AlertContent';
import AlertWrapper from '../components-styled/AlertWrapper';
import AlertIconWrapper from '../components-styled/AlertIconWrapper';
import { CONFIRM } from '../constants/alert-types';

const propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.string,
  renderIconLeft: PropTypes.func,
  renderIconRight: PropTypes.func,
};

const defaultProps = {
  type: CONFIRM,
  renderIconLeft: undefined,
  renderIconRight: undefined,
};

const Alert = ({ text, type, renderIconLeft, renderIconRight, ...props }) => (
  <AlertWrapper {...props} alertType={type}>
    {renderIconLeft ? (
      <AlertIconWrapper>{renderIconLeft()}</AlertIconWrapper>
    ) : null}
    <AlertContent>{text}</AlertContent>
    {renderIconRight ? (
      <AlertIconWrapper>{renderIconRight()}</AlertIconWrapper>
    ) : null}
  </AlertWrapper>
);

Alert.propTypes = propTypes;
Alert.defaultProps = defaultProps;

export default Alert;
