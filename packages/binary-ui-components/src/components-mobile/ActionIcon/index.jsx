import { OPACITY_ACTIVE, OPACITY_DISABLED } from 'binary-ui-styles';
import PropTypes from 'prop-types';
import React from 'react';
import TouchableOpacity from '../../components/TouchableOpacity';

const propTypes = {
  color: PropTypes.string,
  isDisabled: PropTypes.bool,
  size: PropTypes.number,
  renderIcon: PropTypes.func.isRequired,
  onClick: PropTypes.func,
  onMouseDown: PropTypes.func,
  onTouchStart: PropTypes.func,
};

const defaultProps = {
  color: undefined,
  isDisabled: false,
  size: undefined,
  onClick: undefined,
  onMouseDown: undefined,
  onTouchStart: undefined,
};

class ActionIcon extends React.Component {
  renderIcon({ color, isDisabled, size, renderIcon }) {
    return renderIcon({
      color: color || '#000000',
      opacity: isDisabled ? OPACITY_DISABLED : 1,
      size,
    });
  }

  render() {
    const {
      color,
      isDisabled,
      size,
      renderIcon,
      onClick,
      onMouseDown,
      onTouchStart,
      ...props,
    } = this.props;
    return isDisabled ? (
      <div {...props} onClick={(e) => { e.preventDefault(); }} >
        {this.renderIcon({ color, isDisabled, size, renderIcon })}
      </div>
    ) : (
      <TouchableOpacity
        {...props}
        activeOpacity={OPACITY_ACTIVE}
        onClick={onClick}
        onMouseDown={onMouseDown}
        onTouchStart={onTouchStart}
      >
        {this.renderIcon({ color, isDisabled, size, renderIcon })}
      </TouchableOpacity>
    );
  }
}

ActionIcon.propTypes = propTypes;
ActionIcon.defaultProps = defaultProps;

export default ActionIcon;
