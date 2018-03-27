import ArrowRight from 'binary-ui-icons/binary/ArrowRight';
import { OPACITY_DISABLED } from 'binary-ui-styles';
import PropTypes from 'prop-types';
import React from 'react';
import { TouchableHighlight } from 'react-native';
import ButtonText from '../components-styled/ButtonText';
import ButtonWrapper from '../components-styled/ButtonWrapper';
import IconStyledWrapper from '../components-styled/IconStyledWrapper';
import { TAP_HIGHLIGHT_COLOR } from '../utils/styles';

const propTypes = {
  isBold: PropTypes.bool,
  isDisabled: PropTypes.bool,
  isEdit: PropTypes.bool,
  isValid: PropTypes.bool,
  label: PropTypes.string.isRequired,
  labelStyle: PropTypes.object,
  renderIcon: PropTypes.func,
  onLongPress: PropTypes.func,
  onPress: PropTypes.func,
  onPressIn: PropTypes.func,
  onPressOut: PropTypes.func,
};

const defaultProps = {
  isBold: false,
  isDisabled: false,
  isEdit: true,
  isValid: true,
  labelStyle: undefined,
  renderIcon: (props) => (<ArrowRight {...props} />),
  onLongPress: undefined,
  onPress: undefined,
  onPressIn: undefined,
  onPressOut: undefined,
};

const Button = ({
  isBold,
  isDisabled,
  isEdit,
  isValid,
  label,
  labelStyle,
  renderIcon,
  onLongPress,
  onPress,
  onPressIn,
  onPressOut,
  ...props,
}) => (
  <TouchableHighlight
    underlayColor={!isDisabled ? TAP_HIGHLIGHT_COLOR : undefined}
    onLongPress={!isDisabled ? onLongPress : undefined}
    onPress={!isDisabled ? onPress : undefined}
    onPressIn={!isDisabled ? onPressIn : undefined}
    onPressOut={!isDisabled ? onPressOut : undefined}
  >
    <ButtonWrapper
      {...props}
      isEdit={isEdit}
      isTapHighlight={!isDisabled}
      isTypingHighlight={false}
      isValid={isValid}
    >
      <IconStyledWrapper>
        {renderIcon({
          opacity: isDisabled ? OPACITY_DISABLED : 1,
          size: 18,
        })}
      </IconStyledWrapper>
      <ButtonText
        isBold={isBold}
        isDisabled={isDisabled}
        style={labelStyle}
      >
        {isBold ? label.toUpperCase() : label}
      </ButtonText>
    </ButtonWrapper>
  </TouchableHighlight>
);

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default Button;
