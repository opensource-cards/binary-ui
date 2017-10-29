import PropTypes from 'prop-types';
import React from 'react';
import TouchableOpacity from '../../components/TouchableOpacity';
import { OPACITY_ACTIVE, getOpacity } from '../../utils/styles-api';

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

// NOTE: do not make functional component to be able to pass ref
export default class ActionIcon extends React.PureComponent {
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
    return (
      <TouchableOpacity
        activeOpacity={!isDisabled ? OPACITY_ACTIVE : 1}
        onClick={!isDisabled ? onClick : (e) => { e.preventDefault(); }}
        onMouseDown={!isDisabled ? onMouseDown : undefined}
        onTouchStart={!isDisabled ? onTouchStart : undefined}
        {...props}
      >
        {renderIcon({
          color: color || '#000000',
          opacity: getOpacity(isDisabled),
          size,
        })}
      </TouchableOpacity>
    );
  }
}

ActionIcon.propTypes = propTypes;
ActionIcon.defaultProps = defaultProps;
