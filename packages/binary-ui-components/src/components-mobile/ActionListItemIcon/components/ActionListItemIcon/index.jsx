import { BINARY_COLOR_GRAY_40, OPACITY_ACTIVE, OPACITY_DISABLED } from 'binary-ui-styles';
import PropTypes from 'prop-types';
import React from 'react';
import TouchableOpacity from '../../../../components/TouchableOpacity';

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

class ActionListItemIcon extends React.Component {
  renderIcon({ isDisabled, renderIcon }) {
    return renderIcon({
      color: BINARY_COLOR_GRAY_40,
      opacity: isDisabled ? OPACITY_DISABLED : 1,
      size: 18,
    });
  }

  render() {
    const {
      isDisabled,
      renderIcon,
      onClick,
      onMouseDown,
      onTouchStart,
      ...props,
    } = this.props;
    return isDisabled ? (
      <div onClick={(e) => { e.preventDefault(); }} {...props} >
        {this.renderIcon({ isDisabled, renderIcon })}
      </div>
    ) : (
      <TouchableOpacity
        activeOpacity={OPACITY_ACTIVE}
        onClick={onClick}
        onMouseDown={onMouseDown}
        onTouchStart={onTouchStart}
        {...props}
      >
        {this.renderIcon({ isDisabled, renderIcon })}
      </TouchableOpacity>
    );
  }
}

ActionListItemIcon.propTypes = propTypes;
ActionListItemIcon.defaultProps = defaultProps;

export default ActionListItemIcon;
