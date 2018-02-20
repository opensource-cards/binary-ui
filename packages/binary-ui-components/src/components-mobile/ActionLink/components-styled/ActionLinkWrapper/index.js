import {
  BINARY_COLOR_BLUE_40,
  BINARY_COLOR_BLUE_80,
  TRANSITION_FEEDBACK_OPACITY,
} from 'binary-ui-styles';
import styled from 'styled-components';

export default styled.a`
  color: ${BINARY_COLOR_BLUE_40};
  opacity: 1;
  text-decoration: none;
  transition: ${TRANSITION_FEEDBACK_OPACITY};
  user-select: none;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  -webkit-touch-callout: none;
  @media (pointer: fine) {
    &:hover {
      text-decoration: underline;
      text-decoration-color: ${BINARY_COLOR_BLUE_80};
      text-underline-position: under;
    }
    &:active {
      opacity: 0.5;
    }
  }
`;
