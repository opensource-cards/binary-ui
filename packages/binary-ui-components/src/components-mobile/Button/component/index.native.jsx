import ArrowRight from 'binary-ui-icons/binary/ArrowRight';
import { OPACITY_DISABLED } from 'binary-ui-styles';
import PropTypes from 'prop-types';
import React from 'react';
import { TouchableHighlight } from 'react-native';
import ButtonContentHighlight from '../components-styled/ButtonContentHighlight.native';
import ButtonText from '../components-styled/ButtonText';
import ButtonWrapper from '../components-styled/ButtonWrapper';
import IconStyledWrapper from '../components-styled/IconStyledWrapper';
import { TAP_HIGHLIGHT_COLOR } from '../utils/styles';

const propTypes = {
  color: PropTypes.string,
  isBold: PropTypes.bool,
  isDisabled: PropTypes.bool,
  isEdit: PropTypes.bool,
  isValid: PropTypes.bool,
  label: PropTypes.string.isRequired,
  renderIcon: PropTypes.func,
  onLongPress: PropTypes.func,
  onPress: PropTypes.func,
  onPressIn: PropTypes.func,
  onPressOut: PropTypes.func,
};

const defaultProps = {
  color: '#000000',
  isBold: false,
  isDisabled: false,
  isEdit: true,
  isValid: true,
  renderIcon: (props) => (<ArrowRight {...props} />),
  onLongPress: undefined,
  onPress: undefined,
  onPressIn: undefined,
  onPressOut: undefined,
};

const Button = ({
  color,
  isBold,
  isDisabled,
  isEdit,
  isValid,
  label,
  renderIcon,
  onLongPress,
  onPress,
  onPressIn,
  onPressOut,
  ...props,
}) => (
  <TouchableHighlight
    {...props}
    underlayColor={!isDisabled ? TAP_HIGHLIGHT_COLOR : undefined}
    onLongPress={!isDisabled ? onLongPress : undefined}
    onPress={!isDisabled ? onPress : undefined}
    onPressIn={!isDisabled ? onPressIn : undefined}
    onPressOut={!isDisabled ? onPressOut : undefined}
  >
    <ButtonContentHighlight>
      <ButtonWrapper
        isEdit={isEdit}
        isTapHighlight={!isDisabled}
        isTypingHighlight={false}
        isValid={isValid}
      >
        <IconStyledWrapper>
          {renderIcon({
            color,
            opacity: isDisabled ? OPACITY_DISABLED : 1,
            size: 18,
          })}
        </IconStyledWrapper>
        <ButtonText isBold={isBold} isDisabled={isDisabled} numberOfLines={1} styleColor={color} >
          {isBold ? label.toUpperCase() : label}
        </ButtonText>
      </ButtonWrapper>
    </ButtonContentHighlight>
  </TouchableHighlight>
);

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default Button;
