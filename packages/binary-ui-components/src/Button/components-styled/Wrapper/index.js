import { getHighlightEditStyle } from 'binary-ui-styles';
import styled from 'styled-components';

// Highligh BINARY_COLOR_SAND_MAIN + opacity 0.8 over #ffffff background is #fdfdfd.
// A #ffffff + opacity 0.8 over BINARY_COLOR_SAND_MAIN background is #fdfdfd.
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
      ? '&:active { opacity: 0.8; }'
      : undefined
  )}
`;
