import { BINARY_COLOR_BLUE_40, BINARY_COLOR_GRAY_40 } from 'binary-ui-styles';
import React from 'react';
import IconStyledWrapper from '../components-styled/ActionIconWrapper';
import { CARDS_ICON_ACTIVE_STYLE } from '../../../utils/styles.universal';
import { getActionColorExt } from '../../../utils/styles-api';

const propTypes = {
  color: React.PropTypes.string,
  isActive: React.PropTypes.bool,
  isHover: React.PropTypes.bool,
  isDisabled: React.PropTypes.bool,
  size: React.PropTypes.number,
  style: React.PropTypes.object,
  onClick: React.PropTypes.func,
  IconComponent: React.PropTypes.func,
};

const defaultProps = {
  isActive: false,
  isHover: false,
  isDisabled: false,
};

const ActionableIcon = ({
  color,
  size,
  isActive,
  isHover,
  isDisabled,
  style,
  onClick,
  IconComponent,
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
  const styleAction = isActive
    ? Object.assign({}, style, CARDS_ICON_ACTIVE_STYLE)
    : style;
  return (
    <IconStyledWrapper
      color={actionColor}
      size={size}
      style={styleAction}
      onClick={!isDisabled && onClick}
      IconComponent={IconComponent}
      {...props}
    />
  );
};

ActionableIcon.propTypes = propTypes;
ActionableIcon.defaultProps = defaultProps;

export default ActionableIcon;
