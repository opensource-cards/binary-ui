import { addMask, removeMask } from 'mask-parser';
import PropTypes from 'prop-types';
import React from 'react';
import InputStyled from '../components-styled/InputStyled';
import InputWrapper from '../components-styled/InputWrapper';
import INPUT_FIELD_TYPES from '../constants/text-field-component-types';
import { getValidatedPhone } from '../utils/validation';
import ActionListItemIcon from '../../ActionListItemIcon';
import { getHighlightEditStyle } from '../../../utils/styles-api';

const propTypes = {
  borderColor: PropTypes.string,
  isValid: PropTypes.bool,
  mask: PropTypes.string,
  type: PropTypes.any,
  value: PropTypes.string.isRequired,
  renderIcon: PropTypes.func,
  onBlur: PropTypes.func,
  onFocus: PropTypes.func,
  onMoreClick: PropTypes.func,
  onTextChange: PropTypes.func,
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
  onTextChange: undefined,
};

export default class Input extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isActive: false,
    };
    this.onBlur = this.onBlur.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onFocus = this.onFocus.bind(this);
    this.onMoreClick = this.onMoreClick.bind(this);
    this.onSetInputRef = this.onSetInputRef.bind(this);
  }

  onBlur(e) {
    const { onBlur } = this.props;
    this.setFocus(false);
    if (onBlur) {
      onBlur(e);
    }
  }

  onChange(e) {
    const { onTextChange, mask, type } = this.props;
    if (!onTextChange) {
      return;
    }
    const unmaskedValue = removeMask(e.target.value, mask);
    if (type === INPUT_FIELD_TYPES.TEL) {
      onTextChange(getValidatedPhone(unmaskedValue));
      return;
    }
    onTextChange(unmaskedValue);
  }

  onFocus(e) {
    const { onFocus } = this.props;
    this.setFocus(true);
    if (onFocus) {
      onFocus(e);
    }
  }

  onMoreClick() {
    const { onMoreClick } = this.props;
    if (onMoreClick) {
      onMoreClick();
    }
  }

  onSetInputRef(input) {
    this.input = input;
  }

  setFocus(isActive) {
    if (this.state.isActive === isActive) {
      return;
    }
    this.setState(() => ({
      isActive,
    }));
  }

  getFormattedValue(type, mask, value) {
    switch (type) {
      case INPUT_FIELD_TYPES.NUMBER:
        if (process.env.NODE_ENV !== 'production') {
          if (mask) {
            console.warn('Mask is ignored for \'INPUT_FIELD_TYPES.NUMBER\'.');
          }
        }
        return value;
      case INPUT_FIELD_TYPES.TEL:
        return addMask(value, mask);
      default:
        if (mask) {
          return addMask(value, mask);
        }
        return value;
    }
  }

  render() {
    /* eslint-disable no-unused-vars  */
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
    /* eslint-enable no-unused-vars  */
    const { isActive } = this.state;
    return (
      <InputWrapper style={getHighlightEditStyle(true, isValid, isActive, borderColor)} >
        {renderIcon && (
          <ActionListItemIcon renderIcon={renderIcon} onClick={this.onMoreClick} />
        )}
        <InputStyled
          innerRef={this.onSetInputRef}
          type={type}
          value={this.getFormattedValue(type, mask, value)}
          onBlur={this.onBlur}
          onChange={this.onChange}
          onFocus={this.onFocus}
          {...props}
        />
      </InputWrapper>
    );
  }
}

Input.propTypes = propTypes;
Input.defaultProps = defaultProps;
