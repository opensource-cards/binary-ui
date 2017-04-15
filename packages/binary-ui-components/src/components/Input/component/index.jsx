import { addMask, removeMask } from 'mask-parser';
import React from 'react';
import InputStyled from '../components-styled/InputStyled';
import InputWrapper from '../components-styled/InputWrapper';
import INPUT_FIELD_TYPES from '../constants/text-field-component-types';
import { getTypeHtml } from '../utils/text-field-type';
import { getValidatedPhone } from '../utils/validation';
import ActionListItemIcon from '../../ActionListItemIcon';

const propTypes = {
  borderColor: React.PropTypes.string,
  isValid: React.PropTypes.bool,
  mask: React.PropTypes.string,
  type: React.PropTypes.any,
  value: React.PropTypes.string.isRequired,
  renderIcon: React.PropTypes.func,
  onBlur: React.PropTypes.func,
  onFocus: React.PropTypes.func,
  onMoreClick: React.PropTypes.func,
  onTextChange: React.PropTypes.func.isRequired,
};

const defaultProps = {
  borderColor: undefined,
  isValid: true,
  mask: undefined,
  type: INPUT_FIELD_TYPES.ANY,
  renderIcon: undefined,
  onBlur: undefined,
  onFocus: undefined,
  onMoreClick: undefined,
};

export default class Input extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isActive: false,
    };
    this.onChange = this.onChange.bind(this);
    this.onMoreClick = this.onMoreClick.bind(this);
    this.onSetFocus = this.onSetFocus.bind(this);
  }

  onChange(e) {
    const { onTextChange, mask, type } = this.props;
    if (onTextChange) {
      const unmaskedValue = removeMask(e.target.value, mask);
      const finalValue = type === INPUT_FIELD_TYPES.PHONE_NUMBER
        ? getValidatedPhone(unmaskedValue)
        : unmaskedValue;
      onTextChange(finalValue);
    }
  }

  onMoreClick() {
    const { onMoreClick } = this.props;
    if (onMoreClick) {
      onMoreClick();
    }
  }

  onSetFocus(isActive) {
    if (this.state.isActive === isActive) {
      return;
    }
    this.setState({
      isActive,
    });
  }

  getFormattedValue(type, mask, value) {
    switch (type) {
      case INPUT_FIELD_TYPES.NUMBER:
        if (mask) {
          console.warn('Mask is ignored for \'INPUT_FIELD_TYPES.NUMBER\'.');
        }
        return value;
      case INPUT_FIELD_TYPES.PHONE_NUMBER:
        return addMask(value, mask);
      default:
        if (mask) {
          return addMask(value, mask);
        }
        return value;
    }
  }

  render() {
    const {
      borderColor,
      isValid,
      mask,
      renderIcon,
      type,
      value,
      onBlur,
      onFocus,
      ...props,
    } = this.props;
    const { isActive } = this.state;
    return (
      <InputWrapper
        borderColor={borderColor}
        isValid={isValid}
        isTypingHighlight={isActive}
      >
        {renderIcon && (
          <ActionListItemIcon renderIcon={renderIcon} onClick={this.onMoreClick} />
        )}
        <InputStyled
          type={getTypeHtml(type)}
          value={this.getFormattedValue(type, mask, value)}
          onBlur={(e) => { this.onSetFocus(false); if (onBlur) { onBlur(e); } }}
          onChange={this.onChange}
          onFocus={(e) => { this.onSetFocus(true); if (onFocus) { onFocus(e); } }}
          {...props}
        />
      </InputWrapper>
    );
  }
}

Input.propTypes = propTypes;
Input.defaultProps = defaultProps;
