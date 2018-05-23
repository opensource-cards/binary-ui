import { getHighlightEditStyle } from 'binary-ui-styles';
import styled from 'styled-components';

export default styled.div`
  align-items: center;
  box-sizing: border-box;
  cursor: default;
  display: flex;
  flex-direction: row-reverse;
  height: ${props => props.theme.sizeListItemHeight}px;
  padding-left: 10px;
  position: relative;
  width: 100%;
  ${props => (
    getHighlightEditStyle(
      true,
      props.isValid,
      false,
      undefined
    )
  )}
`;
