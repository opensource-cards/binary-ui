import { LIST_ITEM_HEIGHT } from 'binary-ui-styles';
import styled from 'styled-components';

export default styled.div`
background: linear-gradient(
    to bottom,
    transparent 0%,
    transparent 49%,
    #909090 49%,
    #909090 51%,
    transparent 51%,
    transparent 100%
  );
  position: relative;
  height: ${LIST_ITEM_HEIGHT}px;
  width: 100%;
`;
