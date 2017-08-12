import PropTypes from 'prop-types';
import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import ActionIconContent from './ActionIconContent';

const propTypes = {
  color: PropTypes.string,
  isDisabled: PropTypes.bool,
  size: PropTypes.number,
  renderIcon: PropTypes.func.isRequired,
};

const defaultProps = {
  color: undefined,
  isDisabled: false,
  size: undefined,
};

// NOTE: do not make functional component to be able to pass ref
export default class ActionIcon extends React.PureComponent {
  render() {
    const { color, isDisabled, size, renderIcon, ...props } = this.props;
    return !isDisabled ? (
      <TouchableOpacity {...props} >
        <ActionIconContent
          color={color}
          isDisabled={isDisabled}
          size={size}
          renderIcon={renderIcon}
        />
      </TouchableOpacity>
    ) : (
      <View {...props} >
        <ActionIconContent
          color={color}
          isDisabled={isDisabled}
          size={size}
          renderIcon={renderIcon}
        />
      </View>
    );
  }
}

ActionIcon.propTypes = propTypes;
ActionIcon.defaultProps = defaultProps;

export default ActionIcon;
