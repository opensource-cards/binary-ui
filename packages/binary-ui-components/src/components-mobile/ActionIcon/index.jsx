import { OPACITY_ACTIVE, getOpacity } from 'binary-ui-styles';
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
      opacity: getOpacity(isDisabled),
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
      <div onClick={(e) => { e.preventDefault(); }} {...props} >
        {this.renderIcon({ color, isDisabled, size, renderIcon })}
      </div>
    ) : (
      <TouchableOpacity
        activeOpacity={OPACITY_ACTIVE}
        onClick={onClick}
        onMouseDown={onMouseDown}
        onTouchStart={onTouchStart}
        {...props}
      >
        {this.renderIcon({ color, isDisabled, size, renderIcon })}
      </TouchableOpacity>
    );
  }
}

ActionIcon.propTypes = propTypes;
ActionIcon.defaultProps = defaultProps;

export default ActionIcon;
