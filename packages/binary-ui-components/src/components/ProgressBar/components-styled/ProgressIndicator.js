import { BINARY_COLOR_RED_40, LIST_ITEM_HEIGHT } from 'binary-ui-styles';
import styled from 'styled-components';

export default styled.div`
  height: ${LIST_ITEM_HEIGHT}px;
  background: linear-gradient(
    to bottom,
    transparent 0%,
    transparent 48%,
    ${props => (props.progress >= 90 ? BINARY_COLOR_RED_40 : 'black')} 48%,
    ${props => (props.progress >= 90 ? BINARY_COLOR_RED_40 : 'black')} 52%,
    transparent 52%,
    transparent 100%
  );
  width: ${props => props.progress}%;
  box-sizing: border-box;
  position: absolute;
  left: 0;
  top: 0;
`;
