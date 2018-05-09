import PropTypes from 'prop-types';
import React from 'react';
import TextareaInput from '../components-styled/TextareaInput';
import TextareaWrapperStyled from '../components-styled/TextareaWrapperStyled';
import ActionListItemIcon from '../../ActionListItemIcon';

const propTypes = {
  height: PropTypes.number,
  isAutoSize: PropTypes.bool,
  isDisabled: PropTypes.bool,
  isValid: PropTypes.bool,
  value: PropTypes.string.isRequired,
  renderIcon: PropTypes.func,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  onIconClick: PropTypes.func,
  onInput: PropTypes.func,
};

const defaultProps = {
  height: 120,
  isAutoSize: false,
  isDisabled: false,
  isValid: true,
  renderIcon: undefined,
  onBlur: undefined,
  onChange: undefined,
  onFocus: undefined,
  onIconClick: undefined,
  onInput: undefined,
};

export default class Textarea extends React.Component {
  constructor(props) {
    super(props);
    this.inputRef = undefined;
    this.state = {
      isActive: false,
    };
    this.onBlur = this.onBlur.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onFocus = this.onFocus.bind(this);
    this.onInput = this.onInput.bind(this);
    this.onInputRef = this.onInputRef.bind(this);
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

  onChange(e) {
    const { onChange } = this.props;
    if (!onChange) {
      return;
    }
    onChange(e.target.value);
  }

  onInput(e) {
    this.setInputHeight(e.target.scrollHeight);
    const { onInput } = this.props;
    if (!onInput) {
      return;
    }
    onInput(e);
  }

  onInputRef(inputRef) {
    this.inputRef = inputRef;
    this.setInputHeight(this.inputRef.scrollHeight);
  }

  setInputHeight(heightScroll) {
    if (!this.inputRef) {
      return;
    }
    const { height, isAutoSize } = this.props;
    // Set a 'heightScroll' prop if textarea should automatically grow.
    if (isAutoSize) {
      this.inputRef.style.height = 'auto';
      this.inputRef.style.height = `${heightScroll}px`;
      return;
    }
    // Otherwise just set the passed height value.
    this.inputRef.style.height = `${height}px`;
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
      height,
      isAutoSize,
      isDisabled,
      isValid,
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
      <TextareaWrapperStyled
        isEdit
        isTypingHighlight={isActive}
        isValid={isValid}
      >
        <TextareaInput
          {...props}
          isAutoSize={isAutoSize}
          disabled={isDisabled}
          innerRef={this.onInputRef}
          styleHeight={height}
          onBlur={this.onBlur}
          onChange={this.onChange}
          onFocus={this.onFocus}
          onInput={this.onInput}
        />
        {renderIcon ? (
          <ActionListItemIcon
            isDisabled={isDisabled}
            renderIcon={renderIcon}
            onClick={onIconClick}
          />
        ) : null}
      </TextareaWrapperStyled>
    );
  }
}

Textarea.propTypes = propTypes;
Textarea.defaultProps = defaultProps;
