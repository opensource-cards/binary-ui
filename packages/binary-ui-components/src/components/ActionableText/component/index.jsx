import { CARDS_BLUE_COLOR } from 'binary-ui-styles';
import React from 'react';
import ActionableTextWrapper from '../components-styled/ActionableTextWrapper';
import { CARDS_ICON_STYLE_ACTIVE_EXT_OBJ } from '../../../utils/styles';
import { getActionColorExt } from '../../../utils/styles-api';

const propTypes = {
  color: React.PropTypes.string,
  isActive: React.PropTypes.bool,
  isHover: React.PropTypes.bool,
  isDisabled: React.PropTypes.bool,
  style: React.PropTypes.object,
};

const defaultProps = {
  isActive: false,
  isHover: false,
  isDisabled: false,
  style: {},
};

const ActionableText = ({
  color,
  isActive,
  isHover,
  isDisabled,
  style,
  ...props,
}) => {
  const actionColor = getActionColorExt(
    color,
    CARDS_BLUE_COLOR,
    CARDS_BLUE_COLOR,
    '#808080',
    isActive,
    isHover,
    isDisabled
  );
  const styleAction = isActive
    ? Object.assign({}, style, CARDS_ICON_STYLE_ACTIVE_EXT_OBJ, { color: actionColor })
    : Object.assign({}, style, { color: actionColor });
  return (
    <ActionableTextWrapper style={styleAction} {...props} />
  );
};

ActionableText.propTypes = propTypes;
ActionableText.defaultProps = defaultProps;

export default ActionableText;
