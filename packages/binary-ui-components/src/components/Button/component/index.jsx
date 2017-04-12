import ArrowRight from 'binary-ui-icons/binary/ArrowRight';
import React from 'react';
import ButtonWrapper from '../components-styled/ButtonWrapper';
import ListItemContents from '../../ListItemContents';
import ActionableListItemIcon from '../../ActionableListItemIcon';

const propTypes = {
  text: React.PropTypes.string.isRequired,
  renderIcon: React.PropTypes.func,
  onClick: React.PropTypes.func.isRequired,
};

const defaultProps = {
  renderIcon: () => (<ArrowRight />),
};

// TODO: add numberOfLines={1} to Text
const Button = ({ text, renderIcon, onClick }) => (
  <ListItemContents isTapHighlight onClick={onClick} >
    <ActionableListItemIcon
      isActive={false}
      isDisabled={false}
      isHover={false}
      onClick={onClick}
      renderIcon={renderIcon}
    />
    <ButtonWrapper onClick={onClick}>
      {text}
    </ButtonWrapper>
  </ListItemContents>
);

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default Button;
