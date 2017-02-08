import styled from 'styled-components';
import { ANIMATION_DURATION } from '../../constants';

export default styled.div`
  background-color: #0087BD;
  left: 0;
  position: absolute;
  top: 0;
  transition: transform ${ANIMATION_DURATION}s;
`;
