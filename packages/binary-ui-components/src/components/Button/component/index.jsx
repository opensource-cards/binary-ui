import React from 'react';
import ButtonWrapper from '../components-styled/ButtonWrapper';
import ListItemContents from '../../ListItemContents';
import ActionableListItemIcon from '../../ActionableListItemIcon';
import ButtonTypes from '../constants/button-component-types';
import { getArrowClass } from '../utils';

const propTypes = {
  text: React.PropTypes.string.isRequired,
  type: React.PropTypes.any,
  onClick: React.PropTypes.func.isRequired,
};

const defaultProps = {
  type: ButtonTypes.RIGHT,
};

// TODO: add numberOfLines={1} to Text
const Button = ({ text, type, onClick }) => (
  <ListItemContents isTapHighlight onClick={onClick} >
    <ActionableListItemIcon onClick={onClick} IconComponent={getArrowClass(type)} />
    <ButtonWrapper onClick={onClick}>
      {text}
    </ButtonWrapper>
  </ListItemContents>
);

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default Button;
