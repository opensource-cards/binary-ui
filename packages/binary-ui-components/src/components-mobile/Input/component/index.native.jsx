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
  type: PropTypes.any,
  styleBorderColor: PropTypes.string,
  value: PropTypes.string.isRequired,
  renderIcon: PropTypes.func,
  onBlur: PropTypes.func,
  onFocus: PropTypes.func,
  onIconClick: PropTypes.func,
  onChange: PropTypes.func,
};

const defaultProps = {
  isBold: false,
  isValid: true,
  styleBorderColor: undefined,
  type: INPUT_FIELD_TYPES.ANY,
  renderIcon: undefined,
  onBlur: undefined,
  onFocus: undefined,
  onIconClick: undefined,
  onChange: undefined,
};

export default class Input extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isActive: false,
    };
    this.onBlur = this.onBlur.bind(this);
    this.onFocus = this.onFocus.bind(this);
  }

  onBlur(e) {
    const { onBlur } = this.props;
    this.setFocus(false);
    if (onBlur) {
      onBlur(e);
    }
  }

  onFocus(e) {
    const { onFocus } = this.props;
    this.setFocus(true);
    if (onFocus) {
      onFocus(e);
    }
  }

  setFocus(isActive) {
    if (this.state.isActive === isActive) {
      return;
    }
    this.setState(() => ({
      isActive,
    }));
  }

  getKeyboardType() {
    const { type } = this.props;
    switch (type) {
      case INPUT_FIELD_TYPES.EMAIL:
        return 'email-address';
      case INPUT_FIELD_TYPES.NUMBER:
        return 'numeric';
      case INPUT_FIELD_TYPES.TEL:
        return 'phone-pad';
      default:
        return 'default';
    }
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
          <InputIcon renderIcon={renderIcon} onPress={onIconClick} />
        )}
        <InputStyled
          isBold={isBold}
          keyboardType={this.getKeyboardType()}
          secureTextEntry={type === INPUT_FIELD_TYPES.PASSWORD}
          value={isBold ? value.toUpperCase() : value}
          underlineColorAndroid="rgba(0, 0, 0, 0)"
          onBlur={this.onBlur}
          onChangeText={onChange}
          onFocus={this.onFocus}
          {...props}
        />
      </InputWrapper>
    );
  }
}

Input.propTypes = propTypes;
Input.defaultProps = defaultProps;
