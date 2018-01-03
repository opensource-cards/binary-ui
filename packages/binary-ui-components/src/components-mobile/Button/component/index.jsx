import ArrowRight from 'binary-ui-icons/binary/ArrowRight';
import { getOpacity } from 'binary-ui-styles';
import PropTypes from 'prop-types';
import React from 'react';
import ButtonText from '../components-styled/ButtonText';
import ButtonWrapper from '../components-styled/ButtonWrapper';
import IconStyledWrapper from '../components-styled/IconStyledWrapper';

const propTypes = {
  color: PropTypes.string,
  isBold: PropTypes.bool,
  isDisabled: PropTypes.bool,
  isEdit: PropTypes.bool,
  isValid: PropTypes.bool,
  label: PropTypes.string.isRequired,
  renderIcon: PropTypes.func,
  onClick: PropTypes.func.isRequired,
};

const defaultProps = {
  color: '#000000',
  isBold: false,
  isDisabled: false,
  isEdit: true,
  isValid: true,
  renderIcon: (props) => (<ArrowRight {...props} />),
};

const Button = ({ color, isBold, isDisabled, isEdit, isValid, label, renderIcon, onClick }) => (
  <ButtonWrapper
    isEdit={isEdit}
    isTapHighlight={!isDisabled}
    isTypingHighlight={false}
    isValid={isValid}
    onClick={!isDisabled ? onClick : undefined}
  >
    <IconStyledWrapper>
      {renderIcon({ color, opacity: getOpacity(isDisabled), size: 18 })}
    </IconStyledWrapper>
    <ButtonText isBold={isBold} isDisabled={isDisabled} styleColor={color} >
      {isBold ? label.toUpperCase() : label}
    </ButtonText>
  </ButtonWrapper>
);

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default Button;
