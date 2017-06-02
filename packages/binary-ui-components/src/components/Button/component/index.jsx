import ArrowRight from 'binary-ui-icons/binary/ArrowRight';
import PropTypes from 'prop-types';
import React from 'react';
import ButtonIcon from '../components-styled/ButtonIcon';
import ButtonText from '../components-styled/ButtonText';
import ButtonWrapper from '../components-styled/ButtonWrapper';
import { getHighlightEditStyle } from '../../../utils/styles-api';

const propTypes = {
  isBold: PropTypes.bool.isRequired,
  isEdit: PropTypes.bool.isRequired,
  label: PropTypes.string.isRequired,
  renderIcon: PropTypes.func,
  onClick: PropTypes.func.isRequired,
};

const defaultProps = {
  isBold: false,
  isEdit: true,
  renderIcon: () => (<ArrowRight />),
};

const Button = ({ isBold, isEdit, label, renderIcon, onClick }) => (
  <ButtonWrapper
    isTapHighlight
    style={getHighlightEditStyle(isEdit, true, false, undefined)}
    onClick={onClick}
  >
    <ButtonIcon
      size={18}
      renderIcon={renderIcon}
    />
    <ButtonText isBold={isBold}>
      {label}
    </ButtonText>
  </ButtonWrapper>
);

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default Button;
