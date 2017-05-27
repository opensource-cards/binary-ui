import PropTypes from 'prop-types';
import React from 'react';
import SwitchToggle from '../components-styled/SwitchToggle';
import SwitchContainer from '../components-styled/SwitchContainer';
import SwitchBackground from '../components-styled/SwitchBackground';
import SwitchHandler from '../components-styled/SwitchHandler';
import ListItemContents from '../../ListItemContents';

const propTypes = {
  label: PropTypes.node,
  isChecked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
};

const defaultProps = {};

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
    const { isChecked } = this.props;
    return (
      <ListItemContents isEdit={false} >
        <SwitchToggle>
          <SwitchContainer onClick={this.onClick} >
            <SwitchBackground isChecked={isChecked} />
            <SwitchHandler isChecked={isChecked} />
          </SwitchContainer>
        </SwitchToggle>
      </ListItemContents>
    );
  }
}

Switch.defaultProps = defaultProps;
Switch.propTypes = propTypes;
