import { FONT_FAMILY_MAIN_500, TRANSITION_FEEDBACK_OPACITY } from 'binary-ui-styles';
import styled from 'styled-components';

// Transition applies if title is clickable.
export default styled.div`
  font-family: ${FONT_FAMILY_MAIN_500};
  font-size: 16px;
  overflow: hidden;
  text-overflow: ellipsis;
  transition: ${TRANSITION_FEEDBACK_OPACITY};
  user-select: none;
  white-space: nowrap;
  width: 100%;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  -webkit-touch-callout: none;
`;
