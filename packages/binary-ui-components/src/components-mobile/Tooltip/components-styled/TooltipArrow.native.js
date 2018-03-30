import styled from 'styled-components';
import { TOOLTIP_ARROW_HEIGHT, TOOLTIP_ARROW_SHIFT, TOOLTIP_ARROW_WIDTH } from '../config';

export default styled.View`
  background-color: transparent;
  border-style: solid;
  height: ${TOOLTIP_ARROW_HEIGHT}px;
  width: ${TOOLTIP_ARROW_WIDTH}px;
  ${props => {
    switch (props.placement) {
      case 'bottom-left':
      case 'bottom-right':
        return `
          border-bottom-width: 5px;
          border-bottom-color: ${props.theme.colorGray40};
          border-left-width: 5px;
          border-left-color: transparent;
          border-right-width: 5px;
          border-right-color: transparent;
          border-top-width: 0px;
          border-top-color: transparent;
        `;
      case 'top-left':
      case 'top-right':
        return `
          border-bottom-width: 0px;
          border-bottom-color: transparent;
          border-left-width: 5px;
          border-left-color: transparent;
          border-right-width: 5px;
          border-right-color: transparent;
          border-top-width: 5px;
          border-top-color: ${props.theme.colorGray40};
        `;
      default:
        return undefined;
    }
  }}
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
