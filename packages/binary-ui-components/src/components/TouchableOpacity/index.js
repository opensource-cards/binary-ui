import { OPACITY_ACTIVE, TRANSITION_FEEDBACK_OPACITY } from 'binary-ui-styles';
import styled from 'styled-components';

export default styled.div`
  opacity: 1;
  transition: ${TRANSITION_FEEDBACK_OPACITY};
  &:active {
    opacity: ${props => props.activeOpacity || OPACITY_ACTIVE};
  }
`;
