import More from 'binary-ui-icons/binary/More';
import invariant from 'invariant';
import { addMask, removeMask } from 'mask-parser';
import React from 'react';
import TextFieldInput from '../TextFieldInput';
import TextFieldTypes from '../../constants/text-field-component-types';
import { getTypeHtml } from '../../utils/text-field-type';
import { isNumberMaskValid, validatePhone } from '../../utils/validation';
import ListItemContents from '../../../ListItemContents';
import ActionListItemIcon from '../../../ActionListItemIcon';

const propTypes = {
  borderColor: React.PropTypes.string,
  isMoreButton: React.PropTypes.bool.isRequired,
  isValid: React.PropTypes.bool,
  mask: React.PropTypes.string,
  type: React.PropTypes.any,
  value: React.PropTypes.string.isRequired,
  onBlur: React.PropTypes.func,
  onFocus: React.PropTypes.func,
  onMoreClick: React.PropTypes.func,
  onTextChange: React.PropTypes.func.isRequired,
};

const defaultProps = {
  borderColor: undefined,
  isMoreButton: false,
  isValid: true,
  mask: undefined,
  type: TextFieldTypes.ANY,
  onBlur: undefined,
  onFocus: undefined,
  onMoreClick: undefined,
};

export default class TextField extends React.Component {

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
      const finalValue = type === TextFieldTypes.PHONE_NUMBER
        ? validatePhone(unmaskedValue)
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
      case TextFieldTypes.NUMBER:
        if (!mask) {
          return value;
        }
        invariant(
          isNumberMaskValid(mask),
          'This mask is not valid for number.'
        );
        return addMask(value, mask);
      case TextFieldTypes.PHONE_NUMBER:
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
      isMoreButton,
      isValid,
      mask,
      type,
      value,
      onBlur,
      onFocus,
      ...props,
    } = this.props;
    const { isActive } = this.state;
    return (
      <ListItemContents
        borderColor={borderColor}
        isValid={isValid}
        isTypingHighlight={isActive}
      >
        {isMoreButton && (
          <ActionListItemIcon renderIcon={() => (<More />)} onClick={this.onMoreClick} />
        )}
        <TextFieldInput
          type={getTypeHtml(type)}
          value={this.getFormattedValue(type, mask, value)}
          onBlur={(e) => { this.onSetFocus(false); if (onBlur) { onBlur(e); } }}
          onChange={this.onChange}
          onFocus={(e) => { this.onSetFocus(true); if (onFocus) { onFocus(e); } }}
          {...props}
        />
      </ListItemContents>
    );
  }
}

TextField.propTypes = propTypes;
TextField.defaultProps = defaultProps;
