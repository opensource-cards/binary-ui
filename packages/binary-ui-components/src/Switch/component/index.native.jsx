import PropTypes from 'prop-types';
import React from 'react';
import { Platform, StyleSheet, Switch as ReactNativeSwitch, ViewPropTypes } from 'react-native';
import SwitchLabel from '../components-styled/SwitchLabel';
import SwitchLabelEmpty from '../components-styled/SwitchLabelEmpty';
import SwitchWrapper from '../components-styled/SwitchWrapper';

const styles = StyleSheet.create({
  switch: {
    transform: [
      { scaleX: Platform.OS === 'ios' ? 0.8 : 1 },
      { scaleY: Platform.OS === 'ios' ? 0.8 : 1 },
    ],
  },
});

const propTypes = {
  isChecked: PropTypes.bool.isRequired,
  isDisabled: PropTypes.bool,
  label: PropTypes.string,
  style: ViewPropTypes.style,
  onChange: PropTypes.func,
};

const defaultProps = {
  isDisabled: false,
  label: undefined,
  style: {},
  onChange: () => {},
};

class Switch extends React.Component {
  constructor(props) {
    super(props);
    this.onValueChange = this.onValueChange.bind(this);
  }

  onValueChange() {
    const { isChecked, onChange } = this.props;
    onChange(!isChecked);
  }

  render() {
    const { isChecked, isDisabled, label, style } = this.props;
    return (
      <SwitchWrapper>
        {label ? (
          <SwitchLabel isBold isDisabled={isDisabled} >
            {label}
          </SwitchLabel>
        ) : (
          <SwitchLabelEmpty />
        )}
        <ReactNativeSwitch
          disabled={isDisabled}
          style={[styles.switch, style]}
          value={isChecked}
          onValueChange={this.onValueChange}
        />
      </SwitchWrapper>
    );
  }
}

Switch.defaultProps = defaultProps;
Switch.propTypes = propTypes;

export default Switch;
