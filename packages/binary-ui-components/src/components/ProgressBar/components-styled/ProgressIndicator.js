import { LIST_ITEM_HEIGHT } from 'binary-ui-styles';
import styled from 'styled-components';

export default styled.div`
  height: ${LIST_ITEM_HEIGHT}px;
  background: linear-gradient(
    to bottom,
    transparent 0%,
    transparent 48%,
    black 48%,
    black 52%,
    transparent 52%,
    transparent 100%
  );
  width: 30%; /* CHANGE THIS TO INDICATE PROGRESS */
  box-sizing: border-box;
  position: absolute;
  left: 0;
  top: 0;
`;
