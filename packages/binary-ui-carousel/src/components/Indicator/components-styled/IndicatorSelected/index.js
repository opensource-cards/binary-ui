import { BINARY_COLOR_GRAY_10, TRANSITION_VIEW_STATE_TRANSFORM } from 'binary-ui-styles';
import styled from 'styled-components';

export default styled.div.attrs({
  style: props => ({
    transform: `translateX(${props.styleWidth * props.selectedIndex}px)`,
    width: props.styleWidth,
  }),
})`
  background: linear-gradient(
    to bottom, transparent 0%, transparent 47%, ${BINARY_COLOR_GRAY_10} 47%, ${BINARY_COLOR_GRAY_10} 50%, transparent 50%, transparent 100%
  );
  height: 100%;
  left: 0;
  top: 0;
  position: absolute;
  transition: ${TRANSITION_VIEW_STATE_TRANSFORM};
`;
