import { TRANSITION_VIEW_STATE_TRANSFORM } from 'binary-ui-styles';
import styled from 'styled-components';

export default styled.div.attrs({
  style: props => ({
    height: props.styleHeight,
    transform: `translateX(${props.styleWidth * (props.index - 1)}px)`,
    width: props.styleWidth,
  }),
})`
  position: absolute;
  transition: ${TRANSITION_VIEW_STATE_TRANSFORM};
`;
