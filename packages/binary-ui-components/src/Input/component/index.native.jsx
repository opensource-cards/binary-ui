import PropTypes from 'prop-types';
import React from 'react';
import InputStyled from '../components-styled/InputStyled';
import InputWrapper from '../components-styled/InputWrapper';
import INPUT_FIELD_TYPES from '../constants/text-field-component-types';
import ActionListItemIcon from '../../ActionListItemIcon';

const propTypes = {
  autoCapitalize: PropTypes.string,
  isBold: PropTypes.bool,
  isDisabled: PropTypes.bool,
  isValid: PropTypes.bool,
  placeholder: PropTypes.string,
  styleBorderColor: PropTypes.string,
  type: PropTypes.any,
  value: PropTypes.string.isRequired,
  renderIcon: PropTypes.func,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  onIconPress: PropTypes.func,
};

const defaultProps = {
  autoCapitalize: 'sentences',
  isBold: false,
  isDisabled: false,
  isValid: true,
  placeholder: '',
  styleBorderColor: undefined,
  type: INPUT_FIELD_TYPES.ANY,
  renderIcon: undefined,
  onBlur: undefined,
  onChange: undefined,
  onFocus: undefined,
  onIconPress: undefined,
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
    /* eslint-disable no-unused-vars */
    const {
      autoCapitalize,
      isBold,
      isDisabled,
      isValid,
      placeholder,
      styleBorderColor,
      type,
      value,
      renderIcon,
      onBlur,
      onChange,
      onFocus,
      onIconPress,
      ...props,
    } = this.props;
    /* eslint-enable no-unused-vars */
    const { isActive } = this.state;
    return (
      <InputWrapper
        isEdit
        isTypingHighlight={isActive}
        isValid={isValid}
        styleBorderColor={styleBorderColor}
      >
        {renderIcon ? (
          <ActionListItemIcon
            isDisabled={isDisabled}
            renderIcon={renderIcon}
            onPress={onIconPress}
          />
        ) : null}
        <InputStyled
          {...props}
          autoCapitalize={autoCapitalize}
          editable={!isDisabled}
          includeFontPadding
          isBold={isBold}
          isDisabled={isDisabled}
          keyboardType={this.getKeyboardType()}
          paddingBottom={0}
          paddingTop={0}
          placeholder={isBold ? placeholder.toUpperCase() : placeholder}
          secureTextEntry={type === INPUT_FIELD_TYPES.PASSWORD}
          textAlignVertical="center"
          value={isBold ? value.toUpperCase() : value}
          underlineColorAndroid="rgba(0, 0, 0, 0)"
          onBlur={this.onBlur}
          onChangeText={onChange}
          onFocus={this.onFocus}
        />
      </InputWrapper>
    );
  }
}

Input.propTypes = propTypes;
Input.defaultProps = defaultProps;
