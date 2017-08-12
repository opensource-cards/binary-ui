import PropTypes from 'prop-types';
import React from 'react';
import SwitchLabel from '../components-styled/SwitchLabel';
import SwitchStyled from '../components-styled/SwitchStyled.native';
import SwitchWrapper from '../components-styled/SwitchWrapper';
import { BINARY_COLOR_BLUE_40, BINARY_COLOR_GRAY_80 } from 'binary-ui-styles';

const propTypes = {
  isChecked: PropTypes.bool.isRequired,
  label: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

const defaultProps = {
  label: undefined,
};

export default class Switch extends React.PureComponent {

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
        <SwitchStyled
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
