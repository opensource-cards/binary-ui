import styled from 'styled-components';
import { INDICATOR_CONTAINER_HEIGHT } from '../../../../constants';

export default styled.View`
  height: ${INDICATOR_CONTAINER_HEIGHT};
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: ${props => props.styleWidth}px;
`;
