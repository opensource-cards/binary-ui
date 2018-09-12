import { BINARY_COLOR_SAND_MAIN_LIGHT } from 'binary-ui-styles';
import PropTypes from 'prop-types';
import React from 'react';
import { TouchableHighlight } from 'react-native';
import { withTheme } from 'styled-components';
import IconContainer from '../components-styled/IconContainer';
import Text from '../components-styled/Text';
import Wrapper from '../components-styled/Wrapper';

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
  renderIcon: () => null,
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
    underlayColor={!isDisabled ? BINARY_COLOR_SAND_MAIN_LIGHT : undefined}
    onLongPress={!isDisabled ? onLongPress : undefined}
    onPress={!isDisabled ? onPress : undefined}
    onPressIn={!isDisabled ? onPressIn : undefined}
    onPressOut={!isDisabled ? onPressOut : undefined}
  >
    <Wrapper
      {...props}
      isDisabled={isDisabled}
      isEdit={isEdit}
      isTypingHighlight={false}
      isValid={isValid}
    >
      <IconContainer>
        {renderIcon({
          opacity: isDisabled ? theme.opacityDisabled : 1,
          size: 16,
        })}
      </IconContainer>
      <Text
        isBold={isBold}
        isDisabled={isDisabled}
        style={labelStyle}
      >
        {label}
      </Text>
    </Wrapper>
  </TouchableHighlight>
);

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default withTheme(Button);
