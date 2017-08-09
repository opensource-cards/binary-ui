import PropTypes from 'prop-types';
import React from 'react';
import { Text, Switch as SwitchRN } from 'react-native';
import SwitchWrapper from '../components-styled/SwitchWrapper';
import SwitchLabel from '../components-styled/SwitchLabel';
import { BINARY_COLOR_BLUE_40, BINARY_COLOR_GRAY_80 } from 'binary-ui-styles';

const propTypes = {
  label: PropTypes.string,
  isChecked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
};

const defaultProps = {
  label: undefined,
  isChecked: false,
};

export default class Switch extends React.Component {

  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    const { isChecked, onChange } = this.props;
    onChange(!isChecked);
  }

  render() {
    const { isChecked, label } = this.props;
    return (
      <SwitchWrapper>
        <SwitchLabel numberOfLines={1} >
          {label ? label.toUpperCase() : label}
        </SwitchLabel>
        <SwitchRN
          onValueChange={this.onClick}
          onTintColor={BINARY_COLOR_BLUE_40}
          thumbTintColor="#FFF"
          tintColor={BINARY_COLOR_GRAY_80}
          value={isChecked}
          style={{
            marginRight: 10,
          }}
        />
      </SwitchWrapper>
    );
  }
}

Switch.defaultProps = defaultProps;
Switch.propTypes = propTypes;
