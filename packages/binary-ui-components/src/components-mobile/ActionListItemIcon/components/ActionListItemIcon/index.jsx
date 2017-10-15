import { BINARY_COLOR_GRAY_40 } from 'binary-ui-styles';
import PropTypes from 'prop-types';
import React from 'react';
import TouchableOpacity from '../../../../components/TouchableOpacity';
import { getActionOpacityExt } from '../../../../utils/styles-api';

const propTypes = {
  isDisabled: PropTypes.bool,
  renderIcon: PropTypes.func.isRequired,
  onClick: PropTypes.func,
  onMouseDown: PropTypes.func,
  onTouchStart: PropTypes.func,
};

const defaultProps = {
  isDisabled: false,
  onClick: undefined,
  onMouseDown: undefined,
  onTouchStart: undefined,
};

const ActionListItemIcon = ({
  isDisabled,
  renderIcon,
  onClick,
  onMouseDown,
  onTouchStart,
  ...props,
}) => (
  <TouchableOpacity
    activeOpacity={!isDisabled ? 0.2 : 1}
    onClick={!isDisabled ? onClick : (e) => { e.preventDefault(); }}
    onMouseDown={!isDisabled ? onMouseDown : undefined}
    onTouchStart={!isDisabled ? onTouchStart : undefined}
    {...props}
  >
    {renderIcon({
      color: BINARY_COLOR_GRAY_40,
      opacity: getActionOpacityExt(false, isDisabled),
      size: 18,
    })}
  </TouchableOpacity>
);

ActionListItemIcon.propTypes = propTypes;
ActionListItemIcon.defaultProps = defaultProps;

export default ActionListItemIcon;
