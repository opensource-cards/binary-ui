import { BINARY_COLOR_RED_40, LIST_ITEM_HEIGHT } from 'binary-ui-styles';
import styled from 'styled-components';

const halfHeight = LIST_ITEM_HEIGHT / 2;

export default styled.div`
  ${props => (props.progress >= 90
    ? `background-color: ${BINARY_COLOR_RED_40};`
    : 'background-color: #000;'
  )}
  height: 2px;
  width: ${props => props.progress}%;
  position: absolute;
  top: ${halfHeight}px;
`;
