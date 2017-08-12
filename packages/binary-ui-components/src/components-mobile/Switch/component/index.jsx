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
  label: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

const defaultProps = {
  label: undefined,
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
        <SwitchLabel>
          {label ? label.toUpperCase() : undefined}
        </SwitchLabel>
        <SwitchToggle>
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
