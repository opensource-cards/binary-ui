import ArrowRight from 'binary-ui-icons/binary/ArrowRight';
import { BINARY_COLOR_GRAY_40 } from 'binary-ui-styles';
import PropTypes from 'prop-types';
import React from 'react';
import { View } from 'react-native';
import IconStyled from '../../IconStyled';
import ButtonText from '../components-styled/ButtonText';
import ButtonWrapper from '../components-styled/ButtonWrapper';
import {
  getActionColorExt,
} from '../../../utils/styles-api';


const propTypes = {
  color: PropTypes.string,
  isBold: PropTypes.bool,
  isDisabled: PropTypes.bool,
  isEdit: PropTypes.bool,
  label: PropTypes.string.isRequired,
  renderIcon: PropTypes.func,
  onClick: PropTypes.func.isRequired,
};

const defaultProps = {
  color: '#000000',
  isBold: false,
  isDisabled: false,
  isEdit: true,
  renderIcon: () => (<ArrowRight />),
};

const Button = ({ color, isBold, isEdit, isDisabled, label, renderIcon, onClick }) => (
  <ButtonWrapper
    isEdit={isEdit}
    onClick={!isDisabled && onClick}
  >
    <View style={{ paddingRight: 10 }}>
      <IconStyled
        color={getActionColorExt(
          color,
          BINARY_COLOR_GRAY_40,
          isDisabled
        )}
        size={18}
        renderIcon={renderIcon}
      />
    </View>
    <ButtonText isBold={isBold} isDisabled={isDisabled} styleColor={color} numberOfLines={1} >
      {isBold ? label.toUpperCase() : label}
    </ButtonText>
  </ButtonWrapper>
);

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default Button;
