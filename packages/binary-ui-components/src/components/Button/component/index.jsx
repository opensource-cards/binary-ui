import ArrowRight from 'binary-ui-icons/binary/ArrowRight';
import { BINARY_COLOR_GRAY_40 } from 'binary-ui-styles';
import PropTypes from 'prop-types';
import React from 'react';
import IconStyled from '../../IconStyled';
import ButtonText from '../components-styled/ButtonText';
import ButtonWrapper from '../components-styled/ButtonWrapper';
import { getActionColorExt, getHighlightEditStyle } from '../../../utils/styles-api';
import { COLOR_BLACK, ICON_STYLE_OBJ } from '../../../utils/styles';

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
  color: COLOR_BLACK,
  isBold: false,
  isDisabled: false,
  isEdit: true,
  renderIcon: () => (<ArrowRight />),
};

const Button = ({ color, isBold, isDisabled, isEdit, label, renderIcon, onClick }) => (
  <ButtonWrapper
    isTapHighlight={!isDisabled}
    style={getHighlightEditStyle(isEdit, true, false, undefined)}
    onClick={!isDisabled && onClick}
  >
    <IconStyled
      color={getActionColorExt(
        color,
        BINARY_COLOR_GRAY_40,
        isDisabled
      )}
      size={18}
      style={ICON_STYLE_OBJ}
      renderIcon={renderIcon}
    />
    <ButtonText isBold={isBold} isDisabled={isDisabled} styleColor={color} >
      {isBold ? label.toUpperCase() : label}
    </ButtonText>
  </ButtonWrapper>
);

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default Button;
