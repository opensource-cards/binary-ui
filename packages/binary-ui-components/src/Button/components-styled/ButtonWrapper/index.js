import { getHighlightEditStyle } from 'binary-ui-styles';
import styled from 'styled-components';
import { TAP_HIGHLIGHT_COLOR } from '../../utils/styles';

export default styled.div`
  align-items: center;
  background-color: #ffffff;
  box-sizing: border-box;
  cursor: ${props => (props.isDisabled ? 'default' : 'pointer')};
  display: flex;
  flex-direction: row-reverse;
  flex-grow: 0;
  flex-shrink: 0;
  height: ${props => props.theme.sizeListItemHeight}px;
  padding-left: 10px;
  width: 100%;
  ${props => (
    getHighlightEditStyle(
      props.isEdit,
      props.isValid,
      props.isTypingHighlight,
      props.styleBorderColor
    )
  )}
  ${props => (
    props.isTapHighlight ? `&:active { background-color: ${TAP_HIGHLIGHT_COLOR}; }` : undefined
  )}
`;
