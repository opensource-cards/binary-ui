import styled, { keyframes } from 'styled-components';
import { G } from 'svgs';

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export default styled(G)`
  animation: ${rotate360} 0.5s linear infinite;
  transform-origin: 256px 256px;
`;
