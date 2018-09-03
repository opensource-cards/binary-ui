import { getHighlightEditStyle } from 'binary-ui-styles';
import styled from 'styled-components';

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
  opacity: 1;
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
    !props.isDisabled
      ? `&:active { opacity: ${props.theme.opacityActive}; }`
      : undefined
  )};
`;
