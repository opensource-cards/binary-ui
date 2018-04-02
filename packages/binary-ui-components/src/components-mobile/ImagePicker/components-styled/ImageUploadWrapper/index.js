import { TRANSITION_FEEDBACK_OPACITY } from 'binary-ui-styles';
import styled from 'styled-components';
import { PHOTO_SIZE } from '../../utils/styles.native-and-web';

// Do not show UI feedback if loading state.
export default styled.div`
  align-items: center;
  background-color: #ffffff;
  border: 1px solid ${props => props.theme.colorBackgroundMain};
  border-radius: ${PHOTO_SIZE / 2}px;
  display: flex;
  height: ${PHOTO_SIZE}px;
  justify-content: center;
  margin: 5px;
  transition: ${TRANSITION_FEEDBACK_OPACITY};
  width: ${PHOTO_SIZE}px;
  ${props => (
    !props.isLoading ? `&:active { opacity: ${props.theme.opacityActive}; }` : undefined
  )}
`;
