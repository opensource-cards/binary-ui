import { BINARY_COLOR_BLUE_40, BINARY_COLOR_BLUE_60, BINARY_COLOR_GRAY_40 } from 'binary-ui-styles';
import React from 'react';
import TextStyled from './TextStyled';
import { getActionColorExt } from '../../../utils/styles-api';

const propTypes = {
  color: React.PropTypes.string,
  isActive: React.PropTypes.bool,
  isDisabled: React.PropTypes.bool.isRequired,
  isHover: React.PropTypes.bool,
  style: React.PropTypes.object,
  onClick: React.PropTypes.func,
};

const defaultProps = {
  color: undefined,
  isActive: false,
  isHover: false,
  style: undefined,
  onClick: undefined,
};

const ActionableText = ({
  color,
  isActive,
  isDisabled,
  isHover,
  style,
  onClick,
  ...props,
}) => {
  const actionColor = getActionColorExt(
    color,
    BINARY_COLOR_BLUE_40,
    BINARY_COLOR_BLUE_40,
    BINARY_COLOR_GRAY_40,
    isActive,
    isHover,
    isDisabled
  );
  return (
    <TextStyled
      style={Object.assign({}, style, { color: actionColor })}
      onClick={!isDisabled && onClick}
      {...props}
    />
  );
};

ActionableText.propTypes = propTypes;
ActionableText.defaultProps = defaultProps;

export default ActionableText;
