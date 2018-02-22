import { TRANSITION_FEEDBACK_OPACITY } from 'binary-ui-styles';
import styled from 'styled-components';

// Set the default "activeOpacity" to 0.2, same as it is in React Native.
export default styled.div`
  opacity: 1;
  transition: ${TRANSITION_FEEDBACK_OPACITY};
  &:active {
    opacity: ${props => props.activeOpacity || 0.2};
  }
`;
