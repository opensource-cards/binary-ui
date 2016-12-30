import { CARDS_BLUE_COLOR, CARDS_DISABLED_COLOR } from 'binary-ui-styles';
import React from 'react';
import ActionableTextWrapper from '../components-styled/ActionableTextWrapper';
import { CARDS_ICON_ACTIVE_STYLE } from '../../../utils/styles.universal';
import { getActionColorExt } from '../../../utils/styles-api';

const propTypes = {
  color: React.PropTypes.string,
  isActive: React.PropTypes.bool,
  isHover: React.PropTypes.bool,
  isDisabled: React.PropTypes.bool,
  style: React.PropTypes.object,
  onClick: React.PropTypes.func,
};

const defaultProps = {
  isActive: false,
  isHover: false,
  isDisabled: false,
};

const ActionableText = ({
  color,
  isActive,
  isHover,
  isDisabled,
  style,
  onClick,
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
    ? Object.assign({}, style, CARDS_ICON_ACTIVE_STYLE, { color: actionColor })
    : Object.assign({}, style, { color: actionColor });
  return (
    <ActionableTextWrapper
      style={styleAction}
      onClick={!isDisabled && onClick}
      {...props}
    />
  );
};

ActionableText.propTypes = propTypes;
ActionableText.defaultProps = defaultProps;

export default ActionableText;
