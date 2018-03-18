import { BINARY_COLOR_RED_40, LIST_ITEM_HEIGHT } from 'binary-ui-styles';
import styled from 'styled-components';

export default styled.div`
  ${props => (props.progress >= 90
    ? `background-color: ${BINARY_COLOR_RED_40};`
    : 'background-color: #000;'
  )}
  height: 2px;
  position: absolute;
  top: ${LIST_ITEM_HEIGHT / 2}px;
  width: ${props => props.progress}%;
`;
