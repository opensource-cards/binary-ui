import ArrowRight from 'binary-ui-icons/binary/ArrowRight';
import PropTypes from 'prop-types';
import React from 'react';
import { TouchableNativeFeedback, TouchableWithoutFeedback } from 'react-native';
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
  theme,
  renderIcon,
  onLongPress,
  onPress,
  onPressIn,
  onPressOut,
  ...props,
}) => (
  isDisabled ? (
    <TouchableWithoutFeedback>
      <ButtonWrapper
        {...props}
        isEdit={isEdit}
        isTapHighlight={!isDisabled}
        isTypingHighlight={false}
        isValid={isValid}
      >
        <IconStyledWrapper>
          {renderIcon({
            opacity: isDisabled ? theme.opacityDisabled : 1,
            size: 18,
          })}
        </IconStyledWrapper>
        <ButtonText
          isBold={isBold}
          isDisabled={isDisabled}
          numberOfLines={1}
          style={labelStyle}
        >
          {isBold ? label.toUpperCase() : label}
        </ButtonText>
      </ButtonWrapper>
    </TouchableWithoutFeedback>
  ) : (
    <TouchableNativeFeedback
      onLongPress={onLongPress}
      onPress={onPress}
      onPressIn={onPressIn}
      onPressOut={onPressOut}
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
            opacity: isDisabled ? theme.opacityDisabled : 1,
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
    </TouchableNativeFeedback>
  )
);

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default withTheme(Button);
