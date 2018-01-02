import {
  FONT_FAMILY_MAIN_500,
  NO_SELECT_CSS,
  TRANSITION_FEEDBACK_OPACITY,
} from 'binary-ui-styles';
import styled from 'styled-components';

// Transition applies if title is clickable.
export default styled.div`
  ${NO_SELECT_CSS}
  font-family: ${FONT_FAMILY_MAIN_500};
  font-size: 16px;
  overflow: hidden;
  text-overflow: ellipsis;
  transition: ${TRANSITION_FEEDBACK_OPACITY};
  white-space: nowrap;
  width: 100%;
`;
