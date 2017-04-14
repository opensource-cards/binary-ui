import ArrowRight from 'binary-ui-icons/binary/ArrowRight';
import React from 'react';
import ButtonText from '../components-styled/ButtonText';
import ButtonWrapper from '../components-styled/ButtonWrapper';
import ActionableListItemIcon from '../../ActionableListItemIcon';
import { getHighlightEditStyle } from '../../../utils/styles-api';

const propTypes = {
  isBold: React.PropTypes.bool.isRequired,
  isEdit: React.PropTypes.bool.isRequired,
  label: React.PropTypes.string.isRequired,
  renderIcon: React.PropTypes.func,
  onClick: React.PropTypes.func.isRequired,
};

const defaultProps = {
  isBold: false,
  isEdit: true,
  renderIcon: () => (<ArrowRight />),
};

// TODO: add numberOfLines={1} to Text
const Button = ({ isBold, isEdit, label, renderIcon, onClick }) => (
  <ButtonWrapper
    isTapHighlight
    style={getHighlightEditStyle(isEdit, true, false, undefined)}
    onClick={onClick}
  >
    <ActionableListItemIcon
      isActive={false}
      isDisabled={false}
      isHover={false}
      onClick={onClick}
      renderIcon={renderIcon}
    />
    <ButtonText isBold={isBold} onClick={onClick}>
      {label}
    </ButtonText>
  </ButtonWrapper>
);

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default Button;
