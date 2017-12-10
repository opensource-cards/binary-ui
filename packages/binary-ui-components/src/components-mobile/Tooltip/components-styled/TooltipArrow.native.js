import { BINARY_COLOR_GRAY_30 } from 'binary-ui-styles';
import styled from 'styled-components/native';
import { TOOLTIP_ARROW_HEIGHT, TOOLTIP_ARROW_SHIFT, TOOLTIP_ARROW_WIDTH } from '../config';

export default styled.View`
  background-color: transparent;
  border-style: solid;
  ${props => {
    switch (props.placement) {
      case 'bottom-left':
      case 'bottom-right':
        return `
          border-top-width: 0px;
          border-right-width: 5px;
          border-bottom-width: 5px;
          border-left-width: 5px;
          border-top-color: transparent;
          border-right-color: transparent;
          border-bottom-color: ${BINARY_COLOR_GRAY_30};
          border-left-color: transparent;
        `;
      case 'top-left':
      case 'top-right':
        return `
          border-top-width: 5px;
          border-right-width: 5px;
          border-bottom-width: 0px;
          border-left-width: 5px;
          border-top-color: ${BINARY_COLOR_GRAY_30};
          border-right-color: transparent;
          border-bottom-color: transparent;
          border-left-color: transparent;
        `;
      default:
        return undefined;
    }
  }}
  height: ${TOOLTIP_ARROW_HEIGHT}px;
  width: ${TOOLTIP_ARROW_WIDTH}px;
  ${props => {
    switch (props.placement) {
      case 'bottom-left':
      case 'top-left':
        return `margin-right: ${TOOLTIP_ARROW_SHIFT};`;
      case 'bottom-right':
      case 'top-right':
        return `margin-left: ${TOOLTIP_ARROW_SHIFT};`;
      default:
        return undefined;
    }
  }}
`;
