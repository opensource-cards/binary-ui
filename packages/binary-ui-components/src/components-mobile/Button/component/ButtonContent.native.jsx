import PropTypes from 'prop-types';
import React from 'react';
import ButtonText from '../components-styled/ButtonText';
import ButtonWrapper from '../components-styled/ButtonWrapper';
import IconStyledWrapper from '../components-styled/IconStyledWrapper.native';
import IconStyled from '../../../components/IconStyled';
import { getActionOpacityExt, getHighlightEditStyle } from '../../../utils/styles-api';

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
    <IconStyledWrapper>
      <IconStyled
        color={color}
        size={18}
        styleOpacity={getActionOpacityExt(false, isDisabled)}
        renderIcon={renderIcon}
      />
    </IconStyledWrapper>
    <ButtonText isBold={isBold} isDisabled={isDisabled} numberOfLines={1} styleColor={color} >
      {isBold ? label.toUpperCase() : label}
    </ButtonText>
  </ButtonWrapper>
);

ButtonContent.propTypes = propTypes;
ButtonContent.defaultProps = defaultProps;

export default ButtonContent;
