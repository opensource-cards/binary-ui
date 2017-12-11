import { getOpacity } from 'binary-ui-styles';
import PropTypes from 'prop-types';
import React from 'react';
import TextStyled from '../component-styled/TextStyled';

const propTypes = {
  color: PropTypes.string,
  isDisabled: PropTypes.bool.isRequired,
  style: PropTypes.object,
  onClick: PropTypes.func,
};

const defaultProps = {
  color: '#000000',
  style: undefined,
  onClick: undefined,
};

const ActionableText = ({ color, isDisabled, style, onClick, ...props }) => (
  <TextStyled
    style={{
      ...style,
      color,
      opacity: getOpacity(isDisabled),
    }}
    onClick={!isDisabled && onClick}
    {...props}
  />
);

ActionableText.propTypes = propTypes;
ActionableText.defaultProps = defaultProps;

export default ActionableText;
