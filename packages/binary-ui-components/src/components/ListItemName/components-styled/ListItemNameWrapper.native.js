import { LIST_ITEM_HEIGHT } from 'binary-ui-styles';
import styled from 'styled-components/native';
import { EDIT_STYLE_NATIVE } from '../../../utils/styles';
import React from 'react';

/*
const LIST_ITEM_NAME_IS_EDIT = `
  ${EDIT_STYLE_NATIVE}
  &:active {
    ${HIGHTLIGHT_STYLE_EXT}
  }
`;
*/

const StyledTouchableOpacity = styled.TouchableOpacity`
  ${EDIT_STYLE_NATIVE}
  align-items: center;
  height: ${LIST_ITEM_HEIGHT};
  flex-direction: row;
  flex: 1;
  justify-content: space-between;
`;

const propTypes = {
  onClick: React.PropTypes.func,
  children: React.PropTypes.any,
  isEdit: React.PropTypes.bool,
};

const defaultProps = {};

const ListItemNameWrapper = ({ children, onClick, isEdit, ...props }) => (
  <StyledTouchableOpacity activeOpacity={0.7} disabled={!isEdit} onPress={onClick} {...props}>
    {children}
  </StyledTouchableOpacity>
);

ListItemNameWrapper.propTypes = propTypes;
ListItemNameWrapper.defaultProps = defaultProps;

export default ListItemNameWrapper;

/*
height: 100%;
width: 35%;
${props => (props.isFull ? 'width: 100%;' : '')}
${props => (props.isEdit ? LIST_ITEM_NAME_IS_EDIT : '')}
text-align: left;
*/
