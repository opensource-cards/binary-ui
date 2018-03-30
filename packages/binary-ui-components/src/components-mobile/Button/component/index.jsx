import ArrowRight from 'binary-ui-icons/binary/ArrowRight';
import PropTypes from 'prop-types';
import React from 'react';
import { withTheme } from 'styled-components';
import ButtonText from '../components-styled/ButtonText';
import ButtonWrapper from '../components-styled/ButtonWrapper';
import IconStyledWrapper from '../components-styled/IconStyledWrapper';

const propTypes = {
  isBold: PropTypes.bool,
  isDisabled: PropTypes.bool,
  isEdit: PropTypes.bool,
  isValid: PropTypes.bool,
  label: PropTypes.string.isRequired,
  labelStyle: PropTypes.object,
  theme: PropTypes.object.isRequired,
  renderIcon: PropTypes.func,
  onClick: PropTypes.func.isRequired,
};

const defaultProps = {
  isBold: false,
  isDisabled: false,
  isEdit: true,
  isValid: true,
  labelStyle: undefined,
  renderIcon: (props) => (<ArrowRight {...props} />),
};

const Button = ({
  isBold,
  isDisabled,
  isEdit,
  isValid,
  label,
  labelStyle,
  theme,
  renderIcon,
  onClick,
  ...props,
}) => (
  <ButtonWrapper
    {...props}
    isEdit={isEdit}
    isTapHighlight={!isDisabled}
    isTypingHighlight={false}
    isValid={isValid}
    onClick={!isDisabled ? onClick : undefined}
  >
    <IconStyledWrapper>
      {renderIcon({
        opacity: isDisabled ? theme.opacityDisabled : 1,
        size: 18,
      })}
    </IconStyledWrapper>
    <ButtonText isBold={isBold} isDisabled={isDisabled} style={labelStyle}>
      {isBold ? label.toUpperCase() : label}
    </ButtonText>
  </ButtonWrapper>
);

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default withTheme(Button);
