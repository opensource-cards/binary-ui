import { CARDS_BLUE_COLOR, CARDS_DISABLED_COLOR } from 'binary-ui-styles';
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
  IconComponent: React.PropTypes.func,
};

const defaultProps = {
  isActive: false,
  isHover: false,
  isDisabled: false,
  style: {},
};

const ActionableIcon = ({
  color,
  size,
  isActive,
  isHover,
  isDisabled,
  style,
  IconComponent,
  ...props,
}) => {
  const actionColor = getActionColorExt(
    color,
    CARDS_BLUE_COLOR,
    CARDS_BLUE_COLOR,
    CARDS_DISABLED_COLOR,
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
      IconComponent={IconComponent}
      {...props}
    />
  );
};

ActionableIcon.propTypes = propTypes;
ActionableIcon.defaultProps = defaultProps;

export default ActionableIcon;
