import PropTypes from 'prop-types';
import React from 'react';
import SwitchToggle from '../components-styled/SwitchToggle';
import SwitchContainer from '../components-styled/SwitchContainer';
import SwitchBackground from '../components-styled/SwitchBackground';
import SwitchHandler from '../components-styled/SwitchHandler';
import SwitchLabel from '../components-styled/SwitchLabel';
import SwitchWrapper from '../components-styled/SwitchWrapper';

const propTypes = {
  isChecked: PropTypes.bool.isRequired,
  isDisabled: PropTypes.bool,
  label: PropTypes.string,
  onChange: PropTypes.func,
};

const defaultProps = {
  isDisabled: false,
  label: undefined,
  onChange: () => {},
};

class Switch extends React.Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    const { isChecked, isDisabled, onChange } = this.props;
    if (isDisabled) {
      return;
    }
    onChange(!isChecked);
  }

  render() {
    const { isChecked, isDisabled, label } = this.props;
    return (
      <SwitchWrapper isDisabled={isDisabled} >
        <SwitchLabel isBold isDisabled={isDisabled} >
          {label}
        </SwitchLabel>
        <SwitchToggle isDisabled={isDisabled} >
          <SwitchContainer onClick={this.onClick} >
            <SwitchBackground isChecked={isChecked} />
            <SwitchHandler isChecked={isChecked} />
          </SwitchContainer>
        </SwitchToggle>
      </SwitchWrapper>
    );
  }
}

Switch.defaultProps = defaultProps;
Switch.propTypes = propTypes;

export default Switch;
