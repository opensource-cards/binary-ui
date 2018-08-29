import { TRANSITION_FEEDBACK_OPACITY } from 'binary-ui-styles';
import styled from 'styled-components';

// Transition applies if title is clickable.
export default styled.div`
  font-family: ${props => props.theme.fontFamily500};
  font-size: 16px;
  font-weight: ${props => props.theme.fontWeight500};
  overflow: hidden;
  text-overflow: ellipsis;
  transition: ${TRANSITION_FEEDBACK_OPACITY};
  white-space: nowrap;
  width: 100%;
`;
