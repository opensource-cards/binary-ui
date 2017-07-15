import PropTypes from 'prop-types';
import React from 'react';
import TextareaInput from '../components-styled/TextareaInput';
import TextareaWrapperStyled from '../components-styled/TextareaWrapperStyled';
import ActionListItemIcon from '../../ActionListItemIcon';
import { getHighlightEditStyle } from '../../../utils/styles-api';

const propTypes = {
  isValid: PropTypes.bool,
  renderIcon: PropTypes.func,
  value: PropTypes.string.isRequired,
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
    this.onTextChange = this.onTextChange.bind(this);
    this.onSetFocus = this.onSetFocus.bind(this);
  }

  onTextChange(e) {
    const { onTextChange } = this.props;
    if (!onTextChange) {
      return;
    }
    onTextChange(e.target.value);
  }

  onSetFocus(isActive) {
    if (this.state.isActive === isActive) {
      return;
    }
    this.setState(() => ({
      isActive,
    }));
  }

  render() {
    const {
      isValid,
      renderIcon,
      onBlur,
      onFocus,
      onMoreClick,
      ...props,
    } = this.props;
    const { isActive } = this.state;
    return (
      <TextareaWrapperStyled style={getHighlightEditStyle(true, isValid, isActive, undefined)} >
        <TextareaInput
          onBlur={(e) => { this.onSetFocus(false); if (onBlur) { onBlur(e); } }}
          onChange={this.onTextChange}
          onFocus={(e) => { this.onSetFocus(true); if (onFocus) { onFocus(e); } }}
          {...props}
        />
        {renderIcon && (
          <ActionListItemIcon renderIcon={renderIcon} onClick={onMoreClick} />
        )}
      </TextareaWrapperStyled>
    );
  }
}

Textarea.propTypes = propTypes;
Textarea.defaultProps = defaultProps;
