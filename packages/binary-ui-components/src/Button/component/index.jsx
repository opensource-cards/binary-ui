import PropTypes from 'prop-types';
import React from 'react';
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
  onClick: PropTypes.func.isRequired,
};

const defaultProps = {
  isBold: false,
  isDisabled: false,
  isEdit: true,
  isValid: true,
  label: '',
  labelStyle: undefined,
  renderIcon: () => null,
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
  <Wrapper
    {...props}
    isDisabled={isDisabled}
    isEdit={isEdit}
    isTypingHighlight={false}
    isValid={isValid}
    onClick={!isDisabled ? onClick : undefined}
  >
    <IconContainer>
      {renderIcon({
        opacity: isDisabled ? theme.opacityDisabled : 1,
        size: 16,
      })}
    </IconContainer>
    <Text isBold={isBold} isDisabled={isDisabled} style={labelStyle}>
      {label}
    </Text>
  </Wrapper>
);

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default withTheme(Button);
