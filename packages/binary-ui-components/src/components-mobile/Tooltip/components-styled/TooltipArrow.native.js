import { BINARY_COLOR_GRAY_30 } from 'binary-ui-styles';
import styled from 'styled-components/native';
import { TOOLTIP_ARROW_HEIGHT, TOOLTIP_ARROW_SHIFT, TOOLTIP_ARROW_WIDTH } from '../config';

export default styled.View`
  width: ${TOOLTIP_ARROW_WIDTH}px;
  height: ${TOOLTIP_ARROW_HEIGHT}px;
  background-color: transparent;
  border-style: solid;
  border-top-width: 0px;
  border-right-width: 5px;
  border-bottom-width: 5px;
  border-left-width: 5px;
  border-top-color: transparent;
  border-right-color: transparent;
  border-bottom-color: ${BINARY_COLOR_GRAY_30};
  border-left-color: transparent;
  ${props => (
    props.placement === 'bottom-right'
    ? `left: ${TOOLTIP_ARROW_SHIFT}`
    : `right: ${TOOLTIP_ARROW_SHIFT}`
  )};
  position: absolute;
  top: -${TOOLTIP_ARROW_HEIGHT};
`;
