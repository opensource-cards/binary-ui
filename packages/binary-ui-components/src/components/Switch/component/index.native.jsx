import PropTypes from 'prop-types';
import React from 'react';
import { Switch as SwitchRN } from 'react-native';
import SwitchWrapper from '../components-styled/SwitchWrapper';
import SwitchLabel from '../components-styled/SwitchLabel';
import { BINARY_COLOR_BLUE_40, BINARY_COLOR_GRAY_80 } from 'binary-ui-styles';

const SWITCH_RN_STYLE_OBJ = {
  marginRight: 10,
};

const propTypes = {
  isChecked: PropTypes.bool.isRequired,
  label: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

const defaultProps = {
  label: undefined,
};

export default class Switch extends React.Component {

  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }

  onChange() {
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
          style={SWITCH_RN_STYLE_OBJ}
          tintColor={BINARY_COLOR_GRAY_80}
          value={isChecked}
          onTintColor={BINARY_COLOR_BLUE_40}
          onValueChange={this.onChange}
        />
      </SwitchWrapper>
    );
  }
}

Switch.defaultProps = defaultProps;
Switch.propTypes = propTypes;
