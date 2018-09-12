import { getHighlightEditStyle, BINARY_COLOR_SAND_MAIN_LIGHT } from 'binary-ui-styles';
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
      ? `&:active { background-color: ${BINARY_COLOR_SAND_MAIN_LIGHT}; opacity: 0.85; }`
      : undefined
  )}
`;
