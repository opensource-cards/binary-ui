import { TRANSITION_VIEW_STATE_TRANSFORM } from 'binary-ui-styles';
import styled from 'styled-components';

export default styled.div.attrs({
  style: props => ({
    height: props.styleHeight,
    transform: `translate3d(${props.styleWidth * (props.index - 1)}px, 0, 0)`,
    width: props.styleWidth,
  }),
})`
  position: absolute;
  transition: ${TRANSITION_VIEW_STATE_TRANSFORM};
`;
