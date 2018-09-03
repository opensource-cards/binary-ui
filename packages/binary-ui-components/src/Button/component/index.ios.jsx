import ArrowRight from 'binary-ui-icons/binary/ArrowRight';
import PropTypes from 'prop-types';
import React from 'react';
import { TouchableHighlight } from 'react-native';
import { withTheme } from 'styled-components';
import ButtonText from '../components-styled/ButtonText';
import ButtonWrapper from '../components-styled/ButtonWrapper';
import IconStyledWrapper from '../components-styled/IconStyledWrapper';

const propTypes = {
  isBold: PropTypes.bool,
  isDisabled: PropTypes.bool,
  isEdit: PropTypes.bool,
  isValid: PropTypes.bool,
  label: PropTypes.string,
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
  label: '',
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
  <TouchableHighlight
    underlayColor={!isDisabled ? 'rgba(0, 0, 0, 0.1)' : undefined}
    onLongPress={!isDisabled ? onLongPress : undefined}
    onPress={!isDisabled ? onPress : undefined}
    onPressIn={!isDisabled ? onPressIn : undefined}
    onPressOut={!isDisabled ? onPressOut : undefined}
  >
    <ButtonWrapper
      {...props}
      isDisabled={isDisabled}
      isEdit={isEdit}
      isTypingHighlight={false}
      isValid={isValid}
    >
      <IconStyledWrapper>
        {renderIcon({
          opacity: isDisabled ? theme.opacityDisabled : 1,
          size: 16,
        })}
      </IconStyledWrapper>
      <ButtonText
        isBold={isBold}
        isDisabled={isDisabled}
        style={labelStyle}
      >
        {label}
      </ButtonText>
    </ButtonWrapper>
  </TouchableHighlight>
);

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default withTheme(Button);
