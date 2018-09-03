import Check from 'binary-ui-icons/binary/Check';
import Uncheck from 'binary-ui-icons/binary/Uncheck';
import PropTypes from 'prop-types';
import React from 'react';
import { TouchableWithoutFeedback, View } from 'react-native';
import { withTheme } from 'styled-components';

const propTypes = {
  isChecked: PropTypes.bool.isRequired,
  theme: PropTypes.object.isRequired,
  onChange: PropTypes.func,
  onPress: PropTypes.func,
};

const defaultProps = {
  onChange: undefined,
  onPress: undefined,
};

class Checkbox extends React.Component {
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
    // Note: No need to pass 'onChange' handler.
    /* eslint-disable no-unused-vars */
    const { isChecked, theme, onChange, ...props } = this.props;
    /* eslint-enable no-unused-vars */
    return (
      <TouchableWithoutFeedback onPress={this.onPress}>
        <View {...props} activeOpacity={theme.opacityActive}>
          {isChecked ? (
            <Check color={theme.colorBlue40} size={30} />
          ) : (
            <Uncheck color={theme.colorGray80} size={30} />
          )}
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

Checkbox.propTypes = propTypes;
Checkbox.defaultProps = defaultProps;

export default withTheme(Checkbox);
