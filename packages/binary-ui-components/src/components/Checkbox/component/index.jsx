import autobind from 'autobind-decorator';
import { CardsIconDone } from 'binary-ui-icons';
import React from 'react';
import CheckboxWrapper from '../components-styled/CheckboxWrapper';

const propTypes = {
  isChecked: React.PropTypes.bool.isRequired,
  onChange: React.PropTypes.func.isRequired,
  onClick: React.PropTypes.func,
};

const defaultProps = {
  isChecked: false,
};

export default class Checkbox extends React.Component {

  @autobind
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
    return (
      <CheckboxWrapper isChecked={isChecked} onClick={this.onClick} {...props} >
        {isChecked && (
          <CardsIconDone style={{ display: 'flex' }} color="white" size={18} />
        )}
      </CheckboxWrapper>
    );
  }
}

Checkbox.propTypes = propTypes;
Checkbox.defaultProps = defaultProps;
