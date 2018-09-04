import { TRANSITION_FEEDBACK_OPACITY } from 'binary-ui-styles';
import styled from 'styled-components';

export default styled.a`
  color: ${props => props.theme.colorBlue40};
  opacity: 1;
  text-decoration: none;
  transition: ${TRANSITION_FEEDBACK_OPACITY};
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  -webkit-touch-callout: none;
  &:active {
    opacity: ${props => props.theme.opacityActive};
  }
  @media (pointer: fine) {
    &:hover {
      text-decoration: underline;
    }
  }
`;
