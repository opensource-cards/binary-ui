import PropTypes from 'prop-types';
import React from 'react';
import { TouchableOpacity } from 'react-native';
import { OPACITY_ACTIVE, getOpacity } from '../../utils/styles-api';

const propTypes = {
  color: PropTypes.string,
  isDisabled: PropTypes.bool,
  size: PropTypes.number,
  renderIcon: PropTypes.func.isRequired,
  onLongPress: PropTypes.func,
  onPress: PropTypes.func,
  onPressIn: PropTypes.func,
  onPressOut: PropTypes.func,
};

const defaultProps = {
  color: undefined,
  isDisabled: false,
  size: undefined,
  onLongPress: undefined,
  onPress: undefined,
  onPressIn: undefined,
  onPressOut: undefined,
};

// NOTE: do not make functional component to be able to pass ref
export default class ActionIcon extends React.PureComponent {
  render() {
    const {
      color,
      isDisabled,
      size,
      renderIcon,
      onLongPress,
      onPress,
      onPressIn,
      onPressOut,
      ...props,
    } = this.props;
    return (
      <TouchableOpacity
        activeOpacity={!isDisabled ? OPACITY_ACTIVE : 1}
        onLongPress={!isDisabled ? onLongPress : undefined}
        onPress={!isDisabled ? onPress : undefined}
        onPressIn={!isDisabled ? onPressIn : undefined}
        onPressOut={!isDisabled ? onPressOut : undefined}
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
