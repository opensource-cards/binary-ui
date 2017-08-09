import { BINARY_COLOR_RED_40, LIST_ITEM_HEIGHT } from 'binary-ui-styles';
import styled from 'styled-components';

const halfHeight = LIST_ITEM_HEIGHT / 2;

export default styled.div`
  background-color: #E6E6E6;
  height: 2px;
  width: 100%;
  position: absolute;
  top: ${halfHeight}px;
`;
