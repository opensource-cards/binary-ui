import { BINARY_COLOR_GRAY_40 } from 'binary-ui-styles';
import PropTypes from 'prop-types';
import React from 'react';
import { View } from 'react-native';
import ButtonText from '../components-styled/ButtonText';
import ButtonWrapper from '../components-styled/ButtonWrapper';
import IconStyled from '../../../components/IconStyled';
import { getActionColorExt, getHighlightEditStyle } from '../../../utils/styles-api';

const ICON_STYLE_OBJ = { marginRight: 8 };

const propTypes = {
  color: PropTypes.string.isRequired,
  isBold: PropTypes.bool.isRequired,
  isDisabled: PropTypes.bool.isRequired,
  isEdit: PropTypes.bool.isRequired,
  isValid: PropTypes.bool.isRequired,
  label: PropTypes.string.isRequired,
  renderIcon: PropTypes.func.isRequired,
};

const defaultProps = {};

const ButtonContent = ({ color, isBold, isEdit, isDisabled, isValid, label, renderIcon }) => (
  <ButtonWrapper style={getHighlightEditStyle(isEdit, isValid, false, undefined)} >
    <View style={ICON_STYLE_OBJ} >
      <IconStyled
        color={getActionColorExt(color, BINARY_COLOR_GRAY_40, isDisabled)}
        size={18}
        renderIcon={renderIcon}
      />
    </View>
    <ButtonText isBold={isBold} isDisabled={isDisabled} numberOfLines={1} styleColor={color} >
      {isBold ? label.toUpperCase() : label}
    </ButtonText>
  </ButtonWrapper>
);

ButtonContent.propTypes = propTypes;
ButtonContent.defaultProps = defaultProps;

export default ButtonContent;
