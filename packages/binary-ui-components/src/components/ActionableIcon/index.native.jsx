import { BINARY_COLOR_GRAY_40 } from 'binary-ui-styles';
import PropTypes from 'prop-types';
import React from 'react';
import IconStyled from '../IconStyled';
import { getActionColorExt } from '../../utils/styles-api';

const propTypes = {
  color: PropTypes.string,
  isDisabled: PropTypes.bool.isRequired,
  size: PropTypes.number,
  style: PropTypes.object,
  renderIcon: PropTypes.func.isRequired,
};

const defaultProps = {
  color: '#000000',
  size: undefined,
  style: {},
};

const ActionableIcon = ({
  color,
  size,
  isDisabled,
  style,
  renderIcon,
  ...props,
}) => (
  <IconStyled
    color={getActionColorExt(
      color,
      BINARY_COLOR_GRAY_40,
      isDisabled
    )}
    size={size}
    style={style}
    renderIcon={renderIcon}
    {...props}
  />
);

ActionableIcon.propTypes = propTypes;
ActionableIcon.defaultProps = defaultProps;

export default ActionableIcon;
