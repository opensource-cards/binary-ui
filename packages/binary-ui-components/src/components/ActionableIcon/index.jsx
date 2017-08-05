import { BINARY_COLOR_GRAY_40 } from 'binary-ui-styles';
import PropTypes from 'prop-types';
import React from 'react';
import IconStyled from '../IconStyled';
import { COLOR_BLACK } from '../../utils/styles';
import {
  OPACITY_TRANSITION,
  getActionColorExt,
  getActionOpacityExt,
} from '../../utils/styles-api';

const propTypes = {
  color: PropTypes.string,
  isActive: PropTypes.bool,
  isDisabled: PropTypes.bool.isRequired,
  size: PropTypes.number,
  style: PropTypes.object,
  renderIcon: PropTypes.func.isRequired,
};

const defaultProps = {
  color: COLOR_BLACK,
  isActive: false,
  size: undefined,
  style: {},
};

const ActionableIcon = ({
  color,
  size,
  isActive,
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
    style={{
      ...style,
      opacity: getActionOpacityExt(isActive, isDisabled),
      transition: OPACITY_TRANSITION,
    }}
    renderIcon={renderIcon}
    {...props}
  />
);

ActionableIcon.propTypes = propTypes;
ActionableIcon.defaultProps = defaultProps;

export default ActionableIcon;
