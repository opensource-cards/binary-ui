import { LIST_ITEM_HEIGHT } from 'binary-ui-styles';
import styled from 'styled-components/native';
import { NO_EDIT_STYLE_NATIVE } from '../../../utils/styles';
import { getHighlightEditStyle } from '../../../utils/styles-api';
import React from 'react';

/*
const LIST_ITEM_IS_TAP_HIGHLIGHT = `
  &:active {
    ${HIGHTLIGHT_STYLE_EXT}
  }
`;
*/

const StyledView = styled.View`
  ${NO_EDIT_STYLE_NATIVE}
  ${props => getHighlightEditStyle(
    props.isEdit,
    props.isValid,
    props.isTypingHighlight,
    props.borderColor
  )}
  align-items: center;
  height: ${LIST_ITEM_HEIGHT};
  flex: 2;
  flex-direction: row-reverse;
  justify-content: space-between;
`;

const StyledTouchableOpacity = styled.TouchableOpacity`
  align-items: center;
  height: ${LIST_ITEM_HEIGHT};
  flex: 2;
  flex-direction: row-reverse;
  justify-content: space-between;
`;

const defaultProps = {};

const propTypes = {
  onClick: React.PropTypes.func,
};

const TouchableStyledView = ({ onClick, ...props }) => (
  <StyledTouchableOpacity activeOpacity={0.7} onPress={onClick}>
    <StyledView {...props} />
  </StyledTouchableOpacity>
);

TouchableStyledView.propTypes = propTypes;
TouchableStyledView.defaultProps = defaultProps;

export default TouchableStyledView;

/*
height: 100%;
justify-content: space-between;
padding-left: 10px;
width: 63%;
box-sizing: border-box;
${props => (props.isTapHighlight ? LIST_ITEM_IS_TAP_HIGHLIGHT : '')}
*/
