import { LIST_ITEM_HEIGHT } from 'binary-ui-styles';
import styled from 'styled-components/native';
import React from 'react';
import { EDIT_CSS } from '../../../utils/styles';

const StyledTouchableOpacity = styled.TouchableOpacity`
  ${EDIT_CSS}
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
