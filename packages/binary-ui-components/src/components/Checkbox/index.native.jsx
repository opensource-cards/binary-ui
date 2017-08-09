import Check from 'binary-ui-icons/binary/Check';
import Uncheck from 'binary-ui-icons/binary/Uncheck';
import { BINARY_COLOR_BLUE_40, BINARY_COLOR_GRAY_80 } from 'binary-ui-styles';
import PropTypes from 'prop-types';
import React from 'react';
import { TouchableOpacity } from 'react-native';

const propTypes = {
  isChecked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  onClick: PropTypes.func,
};

const defaultProps = {
  onClick: undefined,
};

export default class Checkbox extends React.Component {

  constructor(props) {
    super(props);
    this.onPress = this.onPress.bind(this);
  }

  onPress() {
    const { isChecked, onChange, onClick } = this.props;
    if (onClick) {
      onClick();
    }
    onChange(!isChecked);
  }

  render() {
    // NOTE: no need to set 'onChange' and 'onClick' handlers
    /* eslint-disable no-unused-vars */
    const { isChecked, onChange, onClick, ...props } = this.props;
    /* eslint-enable no-unused-vars */
    return (
      <TouchableOpacity activeOpacity={0.5} onPress={this.onPress} {...props} >
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
