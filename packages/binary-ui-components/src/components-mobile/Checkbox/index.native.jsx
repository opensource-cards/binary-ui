import Check from 'binary-ui-icons/binary/Check';
import Uncheck from 'binary-ui-icons/binary/Uncheck';
import { BINARY_COLOR_BLUE_40, BINARY_COLOR_GRAY_80, OPACITY_ACTIVE } from 'binary-ui-styles';
import PropTypes from 'prop-types';
import React from 'react';
import { TouchableOpacity } from 'react-native';

const propTypes = {
  isChecked: PropTypes.bool.isRequired,
  onChange: PropTypes.func,
  onPress: PropTypes.func,
};

const defaultProps = {
  onChange: undefined,
  onPress: undefined,
};

export default class Checkbox extends React.Component {

  constructor(props) {
    super(props);
    this.onPress = this.onPress.bind(this);
  }

  onPress() {
    const { isChecked, onChange, onPress } = this.props;
    if (onPress) {
      onPress();
    }
    if (onChange) {
      onChange(!isChecked);
    }
  }

  render() {
    // Note: No need to pass 'onChange' and 'onPress' handlers.
    /* eslint-disable no-unused-vars */
    const { isChecked, onChange, onPress, ...props } = this.props;
    /* eslint-enable no-unused-vars */
    return (
      <TouchableOpacity activeOpacity={OPACITY_ACTIVE} onPress={this.onPress} {...props} >
        {isChecked ? (
          <Check color={BINARY_COLOR_BLUE_40} size={30} />
        ) : (
          <Uncheck color={BINARY_COLOR_GRAY_80} size={30} />
        )}
      </TouchableOpacity>
    );
  }
}

Checkbox.propTypes = propTypes;
Checkbox.defaultProps = defaultProps;
