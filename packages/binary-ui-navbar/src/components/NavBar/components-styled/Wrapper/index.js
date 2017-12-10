import styled from 'styled-components';
import { STACK_HEADER_HEIGHT } from '../../../../constants';

export default styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  font-size: 22px;
  height: ${STACK_HEADER_HEIGHT}px;
  z-index: 100;
`;
