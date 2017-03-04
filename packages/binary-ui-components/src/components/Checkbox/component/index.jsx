import { CardsIconCheck, CardsIconUncheck } from 'binary-ui-icons';
import { BINARY_COLOR_BLUE_40, BINARY_COLOR_GRAY_80 } from 'binary-ui-styles';
import React from 'react';

const propTypes = {
  isChecked: React.PropTypes.bool.isRequired,
  onChange: React.PropTypes.func.isRequired,
  onClick: React.PropTypes.func,
};

const defaultProps = {
  isChecked: false,
};

export default class Checkbox extends React.Component {

  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick(e) {
    const { isChecked, onChange, onClick } = this.props;
    if (onClick) {
      onClick(e);
    }
    if (onChange) {
      const isCheckedNew = !isChecked;
      onChange(e, isCheckedNew);
    }
  }

  render() {
    const { isChecked, ...props } = this.props;
    return isChecked ? (
      <CardsIconCheck color={BINARY_COLOR_BLUE_40} size={30} onClick={this.onClick} {...props} />
    ) : (
      <CardsIconUncheck color={BINARY_COLOR_GRAY_80} size={30} onClick={this.onClick} {...props} />
    );
  }
}

Checkbox.propTypes = propTypes;
Checkbox.defaultProps = defaultProps;
