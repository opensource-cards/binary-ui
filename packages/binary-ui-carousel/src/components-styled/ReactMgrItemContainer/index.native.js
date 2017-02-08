import styled from 'styled-components/native';
import { ANIMATION_DURATION } from '../../constants';

export default styled.View`
  position: absolute;
  transition: transform ${ANIMATION_DURATION}s;
`;
