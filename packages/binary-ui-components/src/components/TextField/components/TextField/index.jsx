import autobind from 'autobind-decorator';
import { CardsIconMore } from 'binary-ui-icons';
import invariant from 'invariant';
import { addMask, removeMask } from 'mask-parser';
import React from 'react';
import TextFieldInput from '../TextFieldInput';
import TextFieldTypes from '../../constants/text-field-component-types';
import { isNumberMaskValid, validatePhone } from '../../utils/validation';
import ListItemContents from '../../../ListItemContents';
import ActionListItemIcon from '../../../ActionListItemIcon';
import { isEmpty } from '../../../../utils/string';

const propTypes = {
  borderColor: React.PropTypes.string,
  getIsValid: React.PropTypes.func,
  id: React.PropTypes.any,
  isMoreButton: React.PropTypes.bool.isRequired,
  isRequired: React.PropTypes.bool,
  isSubmitted: React.PropTypes.bool,
  mask: React.PropTypes.string,
  style: React.PropTypes.object,
  type: React.PropTypes.any,
  value: React.PropTypes.string,
  onMoreClick: React.PropTypes.func,
  onTextChange: React.PropTypes.func.isRequired,
};

const defaultProps = {
  isMoreButton: false,
  isSubmitted: false,
  type: TextFieldTypes.ANY,
  value: '',
};

export default class TextField extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isActive: false,
      isValid: true,
    };
  }

  componentWillReceiveProps(nextProps) {
    const { isSubmitted } = this.props;
    if (isSubmitted !== nextProps.isSubmitted && nextProps.isSubmitted === true) {
      this.onSubmit();
    }
  }

  @autobind
  onChange(e) {
    const { id, onTextChange, mask, type } = this.props;
    const { isValid } = this.state;
    // reset validity
    if (isValid === false) {
      this.setState({
        isValid: true,
      });
    }
    if (onTextChange) {
      const unmaskedValue = removeMask(e.target.value, mask);
      const finalValue = type === TextFieldTypes.PHONE_NUMBER
        ? validatePhone(unmaskedValue)
        : unmaskedValue;
      onTextChange(id, finalValue);
    }
  }

  @autobind
  onMoreClick() {
    const { id, onMoreClick } = this.props;
    if (onMoreClick) {
      onMoreClick(id);
    }
  }

  @autobind
  onSetActiveStatus(isActive) {
    if (this.state.isActive === isActive) {
      return;
    }
    this.setState({
      isActive,
    });
  }

  onSubmit() {
    this.setState({
      isValid: this.isValid(),
    });
  }

  getTypeHtml(type) {
    switch (type) {
      case TextFieldTypes.ANY:
      case TextFieldTypes.LINK:
        return 'text';
      case TextFieldTypes.EMAIL:
        return 'email';
      case TextFieldTypes.PASSWORD:
        return 'password';
      case TextFieldTypes.NUMBER:
        return 'number';
      case TextFieldTypes.PHONE_NUMBER:
        return 'tel';
      default:
        return 'text';
    }
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

  isRequiredValid() {
    const { isRequired, value } = this.props;
    return isRequired && isEmpty(value);
  }

  isValid() {
    if (!this.isRequiredValid()) {
      return false;
    }
    const { getIsValid } = this.props;
    if (getIsValid) {
      return getIsValid();
    }
    return true;
  }

  render() {
    const {
      borderColor,
      getIsValid,
      isMoreButton,
      isRequired,
      isSubmitted,
      mask,
      type,
      value,
      onMoreClick,
      onTextChange,
      ...props,
    } = this.props;
    const { isActive, isValid } = this.state;
    const inputType = this.getTypeHtml(type);
    const formattedValue = this.getFormattedValue(type, mask, value);
    return (
      <ListItemContents
        borderColor={borderColor}
        isValid={isValid}
        isTypingHighlight={isActive}
      >
        {isMoreButton && (
          <ActionListItemIcon onClick={this.onMoreClick} IconComponent={CardsIconMore} />
        )}
        <TextFieldInput
          {...props}
          type={inputType}
          value={formattedValue}
          onChange={this.onChange}
          onSetActiveStatus={this.onSetActiveStatus}
        />
      </ListItemContents>
    );
  }
}

TextField.propTypes = propTypes;
TextField.defaultProps = defaultProps;
