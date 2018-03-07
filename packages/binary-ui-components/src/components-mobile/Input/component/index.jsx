import PropTypes from 'prop-types';
import React from 'react';
import InputStyled from '../components-styled/InputStyled';
import InputWrapper from '../components-styled/InputWrapper';
import INPUT_FIELD_TYPES from '../constants/text-field-component-types';
import ActionListItemIcon from '../../ActionListItemIcon';

const propTypes = {
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
  onIconClick: PropTypes.func,
};

const defaultProps = {
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

  setFocus(isActive) {
    if (this.state.isActive === isActive) {
      return;
    }
    this.setState(() => ({
      isActive,
    }));
  }

  render() {
    /* eslint-disable no-unused-vars */
    const {
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
      onIconClick,
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
          <ActionListItemIcon renderIcon={renderIcon} onClick={onIconClick} />
        ) : null}
        <InputStyled
          {...props}
          disabled={isDisabled}
          isBold={isBold}
          placeholder={isBold ? placeholder.toUpperCase() : placeholder}
          type={type}
          value={isBold ? value.toUpperCase() : value}
          onBlur={this.onBlur}
          onChange={this.onChange}
          onFocus={this.onFocus}
        />
      </InputWrapper>
    );
  }
}

Input.propTypes = propTypes;
Input.defaultProps = defaultProps;
