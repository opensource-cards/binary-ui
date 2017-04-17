import Check from 'binary-ui-icons/binary/Check';
import Uncheck from 'binary-ui-icons/binary/Uncheck';
import { BINARY_COLOR_BLUE_40, BINARY_COLOR_GRAY_80 } from 'binary-ui-styles';
import React from 'react';

const propTypes = {
  isChecked: React.PropTypes.bool.isRequired,
  onChange: React.PropTypes.func.isRequired,
  onClick: React.PropTypes.func.isRequired,
};

const defaultProps = {};

export default class Checkbox extends React.Component {

  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick(e) {
    const { isChecked, onChange, onClick } = this.props;
    onClick(e);
    onChange(e, !isChecked);
  }

  render() {
    const { isChecked, onChange, onClick, ...props } = this.props;
    return isChecked ? (
      <Check color={BINARY_COLOR_BLUE_40} size={30} onClick={this.onClick} {...props} />
    ) : (
      <Uncheck color={BINARY_COLOR_GRAY_80} size={30} onClick={this.onClick} {...props} />
    );
  }
}

Checkbox.propTypes = propTypes;
Checkbox.defaultProps = defaultProps;
