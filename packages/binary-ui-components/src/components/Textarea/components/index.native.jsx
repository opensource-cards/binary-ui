import PropTypes from 'prop-types';
import React from 'react';
import TextareaIcon from '../components-styled/TextareaIcon';
import TextareaInput from '../components-styled/TextareaInput';
import TextareaWrapperStyled from '../components-styled/TextareaWrapperStyled';
import { getHighlightEditStyle } from '../../../utils/styles-api';

const propTypes = {
  isValid: PropTypes.bool,
  value: PropTypes.string.isRequired,
  renderIcon: PropTypes.func,
  onBlur: PropTypes.func,
  onFocus: PropTypes.func,
  onMoreClick: PropTypes.func,
  onTextChange: PropTypes.func,
};

const defaultProps = {
  isValid: true,
  renderIcon: undefined,
  onBlur: undefined,
  onFocus: undefined,
  onMoreClick: undefined,
  onTextChange: undefined,
};

export default class Textarea extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isActive: false,
    };
    this.onBlur = this.onBlur.bind(this);
    this.onFocus = this.onFocus.bind(this);
    this.onTextChange = this.onTextChange.bind(this);
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

  onTextChange(e) {
    const { onTextChange } = this.props;
    if (!onTextChange) {
      return;
    }
    onTextChange(e.target.value);
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
      isValid,
      renderIcon,
      onBlur,
      onFocus,
      onMoreClick,
      ...props,
    } = this.props;
    /* eslint-enable no-unused-vars  */
    const { isActive } = this.state;
    return (
      <TextareaWrapperStyled style={getHighlightEditStyle(true, isValid, isActive, undefined)} >
        <TextareaInput
          numberOfLines={3}
          onBlur={this.onBlur}
          onChange={this.onTextChange}
          onFocus={this.onFocus}
          {...props}
        />
        {renderIcon && (
          <TextareaIcon renderIcon={renderIcon} onClick={onMoreClick} />
        )}
      </TextareaWrapperStyled>
    );
  }
}

Textarea.propTypes = propTypes;
Textarea.defaultProps = defaultProps;
