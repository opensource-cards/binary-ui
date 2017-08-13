import PropTypes from 'prop-types';
import React from 'react';
import InputIcon from '../components-styled/InputIcon';
import InputStyled from '../components-styled/InputStyled';
import InputWrapper from '../components-styled/InputWrapper';
import INPUT_FIELD_TYPES from '../constants/text-field-component-types';
import { getHighlightEditStyle } from '../../../utils/styles-api';

const propTypes = {
  isBold: PropTypes.bool,
  isValid: PropTypes.bool,
  styleBorderColor: PropTypes.string,
  type: PropTypes.any,
  value: PropTypes.string.isRequired,
  renderIcon: PropTypes.func,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  onIconClick: PropTypes.func,
};

const defaultProps = {
  isBold: false,
  isValid: true,
  styleBorderColor: undefined,
  type: INPUT_FIELD_TYPES.ANY,
  renderIcon: undefined,
  onBlur: undefined,
  onChange: undefined,
  onFocus: undefined,
  onIconClick: undefined,
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
    this.setCaretPosition = this.setCaretPosition.bind(this);
    this.onSetInputRef = this.onSetInputRef.bind(this);
  }

  componentDidUpdate() {
    this.setCaretPosition();
  }

  onSetInputRef(input) {
    this.input = input;
  }

  onBlur(e) {
    const { onBlur } = this.props;
    this.setFocus(false);
    if (onBlur) {
      onBlur(e);
    }
  }

  onChange(e) {
    const { onChange } = this.props;
    if (!onChange) {
      return;
    }
    onChange(e.target.value);
  }

  onFocus(e) {
    const { onFocus } = this.props;
    this.setFocus(true);
    if (onFocus) {
      onFocus(e);
    }
  }

  setCaretPosition() {
    const input = this.input;
    window.requestAnimationFrame(() => {
      if (input !== undefined && this.state.isActive) {
        if (input.selectionStart !== null && !input.selectionEnd) {
          input.selectionStart = input.selectionEnd = input.value.length;
        }
      }
    });
  }

  setFocus(isActive) {
    if (this.state.isActive === isActive) {
      return;
    }
    this.setState(() => ({
      isActive,
    }));
  }

  render() {
    /* eslint-disable no-unused-vars  */
    const {
      isBold,
      isValid,
      styleBorderColor,
      type,
      value,
      renderIcon,
      onBlur,
      onChange,
      onFocus,
      onIconClick,
      ...props,
    } = this.props;
    /* eslint-enable no-unused-vars  */
    const { isActive } = this.state;
    return (
      <InputWrapper style={getHighlightEditStyle(true, isValid, isActive, styleBorderColor)} >
        {renderIcon && (
          <InputIcon renderIcon={renderIcon} onClick={onIconClick} />
        )}
        <InputStyled
          isBold={isBold}
          type={type}
          innerRef={this.onSetInputRef}
          value={isBold ? value.toUpperCase() : value}
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
