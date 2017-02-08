import styled from 'styled-components/native';
import { ANIMATION_DURATION } from '../../constants';

export default styled.View`
  background-color: #0087BD;
  left: 0;
  position: absolute;
  top: 0;
  transition: transform ${ANIMATION_DURATION}s;
`;
